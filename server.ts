import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

let aiClient: GoogleGenAI | null = null;
function getAIClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is required");
    }
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // AI Hint generation proxy
  app.post("/api/ai-hint", async (req, res) => {
    try {
      const { id, type, category, en, hi } = req.body;
      const ai = getAIClient();

      const prompt = `You are Abhishek Upadhyay Sir's AI Maths Teaching Assistant for competitive exams (Profit & Loss / लाभ एवं हानि).
The student is trying to solve this math question:
Question ID: Q.${id}
Type: ${type || 'Profit & Loss'} - ${category || 'General'}
English Problem: "${en}"
Hindi Problem: "${hi}"

Provide a structured, step-by-step hint to guide the student towards solving it themselves.
STRICT INSTRUCTION: DO NOT reveal the final numerical answer or option letter (a, b, c, or d).

Return a clean JSON object with this exact structure:
{
  "typeBadge": "${type || 'TYPE - 1'}",
  "topicTitle": "${category || 'Profit & Loss'}",
  "step1": {
    "title": "Step 1: Identify Given Quantities (दिए गए मान पहचानें)",
    "contentEn": "English explanation of given CP, SP, MP, %, etc.",
    "contentHi": "Hindi explanation of given values"
  },
  "step2": {
    "title": "Step 2: Core Formula & Concept (मुख्य सूत्र)",
    "formula": "The mathematical formula to use (e.g. Profit% = (SP-CP)/CP * 100)",
    "contentEn": "English explanation of the formula",
    "contentHi": "Hindi explanation of the formula"
  },
  "step3": {
    "title": "Step 3: Solving Guidance (हल करने का तरीका)",
    "contentEn": "How to substitute and solve without stating the final number",
    "contentHi": "Hindi solving instructions"
  },
  "examTip": {
    "contentEn": "One fast shortcut or exam tip",
    "contentHi": "Hindi shortcut"
  }
}`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          temperature: 0.2,
        },
      });

      const text = response.text;
      if (text) {
        try {
          const parsed = JSON.parse(text);
          return res.json({ hint: parsed });
        } catch {
          // If parse fails, return 500 to allow graceful fallback
        }
      }
      res.status(500).json({ error: "Failed to generate hint" });
    } catch (err: any) {
      console.error("Gemini hint error:", err);
      res.status(500).json({ error: err?.message || "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
