import jsPDF from 'jspdf';
import html2canvas from 'html2canvas-pro';
import { Question, PDFCustomization } from '../types';
import { getTypeDefinition, isTypeStart, ALL_TYPE_DEFINITIONS } from './typeMapping';

export interface PDFGenerationProgress {
  status: 'idle' | 'rendering' | 'compiling' | 'success' | 'error';
  progress: number; // 0 to 100
  message: string;
}

export interface PDFGenerationOptions {
  fileName?: string;
  scale?: number; // 2.85 - 3.0 gives true 300 DPI high-definition
  quality?: number; // 0.98 gives max sharpness without mosquito noise
  onProgress?: (p: PDFGenerationProgress) => void;
}

/**
 * Downloads a direct high-definition PDF document by rendering discrete A4 sheets.
 * Uses 2.85x - 3.0x scale (300 DPI print resolution) with subpixel text smoothing
 * and per-sheet memory disposal for pristine clarity.
 */
export async function generateAndDownloadPDF(
  elementId: string,
  fileNameOrOptions: string | PDFGenerationOptions = 'Maths_Profit_and_Loss_Level_1_Abhishek_Sir.pdf',
  onProgressCallback?: (p: PDFGenerationProgress) => void
): Promise<{ pdf: jsPDF; blob: Blob }> {
  const options: PDFGenerationOptions =
    typeof fileNameOrOptions === 'string'
      ? { fileName: fileNameOrOptions, onProgress: onProgressCallback }
      : fileNameOrOptions;

  const fileName = options.fileName || 'Maths_Profit_and_Loss_Level_1_Abhishek_Sir.pdf';
  // 2.85x scale renders ~2263px x 3200px (High Definition 280-300 DPI print standard)
  const scale = options.scale ?? 2.85;
  const quality = options.quality ?? 0.98;
  const onProgress = options.onProgress || onProgressCallback;

  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error(`Element with id "${elementId}" not found.`);
  }

  onProgress?.({
    status: 'rendering',
    progress: 5,
    message: 'Initializing High-Definition 300 DPI layout engine...'
  });

  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
    compress: true
  });

  // Find all discrete A4 sheets (.pdf-a4-sheet)
  const sheets = Array.from(element.querySelectorAll<HTMLElement>('.pdf-a4-sheet'));

  try {
    if (sheets.length > 0) {
      // EXACT PAGE-BY-PAGE HIGH-DEFINITION RENDERING
      for (let i = 0; i < sheets.length; i++) {
        const sheet = sheets[i];
        const isCover = sheet.id === 'pdf-cover-page';
        const isAnswerKey = sheet.id === 'answer-key-section';

        const percent = Math.round(5 + ((i + 1) / sheets.length) * 88);
        const pageLabel = isCover
          ? 'Cover Page'
          : isAnswerKey
          ? 'Master Answer Key'
          : `Workbook Sheet ${i} of ${sheets.length - 2}`;

        onProgress?.({
          status: 'rendering',
          progress: percent,
          message: `Rendering High-Definition ${pageLabel} (${i + 1}/${sheets.length})...`
        });

        // Render this exact A4 sheet at 2.85x scale for razor-sharp 300 DPI resolution
        const sheetCanvas = await html2canvas(sheet, {
          scale: scale,
          useCORS: true,
          logging: false,
          imageTimeout: 0,
          backgroundColor: isCover ? '#0a1128' : '#ffffff',
          onclone: (_clonedDoc, clonedElement) => {
            clonedElement.style.setProperty('-webkit-font-smoothing', 'antialiased');
            clonedElement.style.setProperty('text-rendering', 'geometricPrecision');
            clonedElement.style.setProperty('image-rendering', '-webkit-optimize-contrast');
          }
        });

        if (i > 0) {
          pdf.addPage('a4', 'portrait');
        }

        // High-fidelity JPEG encoding at 0.98 quality (eliminates blurry compression artifacts)
        const imgData = sheetCanvas.toDataURL('image/jpeg', quality);
        pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297, undefined, 'FAST');

        // Immediate memory release so the browser efficiently handles 25+ HD sheets
        sheetCanvas.width = 1;
        sheetCanvas.height = 1;
      }
    } else {
      // Fallback for custom layouts
      const coverPage = element.querySelector('#pdf-cover-page') as HTMLElement;
      const sections = Array.from(element.querySelectorAll('section'));
      const answerKey = element.querySelector('#answer-key-section') as HTMLElement;

      let currentPage = 0;
      if (coverPage) {
        onProgress?.({
          status: 'rendering',
          progress: 20,
          message: 'Rendering Cover Page (HD)...'
        });
        const coverCanvas = await html2canvas(coverPage, {
          scale: scale,
          useCORS: true,
          logging: false,
          imageTimeout: 0,
          backgroundColor: '#0a1128'
        });
        pdf.addImage(coverCanvas.toDataURL('image/jpeg', quality), 'JPEG', 0, 0, 210, 297, undefined, 'FAST');
        coverCanvas.width = 1;
        coverCanvas.height = 1;
        currentPage++;
      }

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (currentPage > 0) pdf.addPage('a4', 'portrait');
        const sectionCanvas = await html2canvas(section, {
          scale: scale,
          useCORS: true,
          logging: false,
          imageTimeout: 0,
          backgroundColor: '#ffffff'
        });
        pdf.addImage(sectionCanvas.toDataURL('image/jpeg', quality), 'JPEG', 0, 0, 210, 297, undefined, 'FAST');
        sectionCanvas.width = 1;
        sectionCanvas.height = 1;
        currentPage++;
      }

      if (answerKey) {
        if (currentPage > 0) pdf.addPage('a4', 'portrait');
        const answerCanvas = await html2canvas(answerKey, {
          scale: scale,
          useCORS: true,
          logging: false,
          imageTimeout: 0,
          backgroundColor: '#ffffff'
        });
        pdf.addImage(answerCanvas.toDataURL('image/jpeg', quality), 'JPEG', 0, 0, 210, 297, undefined, 'FAST');
        answerCanvas.width = 1;
        answerCanvas.height = 1;
      }
    }

    onProgress?.({
      status: 'compiling',
      progress: 96,
      message: 'Compiling High-Definition PDF document...'
    });

    // Save PDF
    pdf.save(fileName);
    const blob = pdf.output('blob');

    onProgress?.({
      status: 'success',
      progress: 100,
      message: 'High-Definition PDF generated and downloaded!'
    });

    return { pdf, blob };
  } catch (err: any) {
    console.error('Failed to generate High-Definition PDF:', err);
    onProgress?.({
      status: 'error',
      progress: 0,
      message: err?.message || 'Error generating PDF'
    });
    throw err;
  }
}

/**
 * Generates the full HTML markup for the Standalone High-Definition Booklet
 * with vector fonts, discrete A4 sheets, and native print stylesheet.
 */
export function getStandaloneBookletHTML(
  questions: Question[],
  customization: PDFCustomization
): string {
  return `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <title>Maths By Abhishek Upadhyay Sir - Profit & Loss Level I (Q1-Q180)</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
    body {
      font-family: 'Outfit', 'Noto Sans Devanagari', sans-serif;
      margin: 0;
      padding: 20px;
      background: #f8fafc;
      color: #0f172a;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: geometricPrecision;
    }
    @page { size: A4 portrait; margin: 10mm 10mm 12mm 10mm; }
    @media print {
      body { background: #fff; padding: 0; font-size: 10.5pt; }
      .no-print { display: none !important; }
      .page-break { page-break-after: always; break-after: page; }
      .avoid-break { page-break-inside: avoid; break-inside: avoid; }
    }
    .cover-box {
      background-color: #091e3a !important;
      background-image: linear-gradient(135deg, #091e3a 0%, #1e3a8a 50%, #0f172a 100%) !important;
      color: #ffffff !important;
      padding: 40px;
      border-radius: 12px;
      margin-bottom: 30px;
      text-align: center;
      border: 3px double #f59e0b !important;
    }
    .cover-title { font-family: 'Playfair Display', serif; font-size: 38px; margin: 10px 0; color: #fbbf24 !important; }
    .cover-sub { font-size: 18px; text-transform: uppercase; letter-spacing: 2px; color: #ffffff !important; }
    .badge { display: inline-block; padding: 3px 8px; border-radius: 4px; font-size: 11px; font-weight: 600; margin-right: 6px; }
    .badge-q { background: #0f172a; color: #fde047; font-family: 'JetBrains Mono', monospace; }
    .badge-type { background: #e2e8f0; color: #334155; }
    .badge-exam { background: #e0f2fe; color: #0369a1; }
    .badge-year { background: #fef3c7; color: #92400e; font-family: 'JetBrains Mono', monospace; }
    
    .sheet-container {
      position: relative;
      margin: 0 auto 30px auto;
      background: #fff;
      padding: 10mm 12mm;
      box-sizing: border-box;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      page-break-after: always;
      break-after: page;
      display: block;
      overflow: hidden;
    }
    
    .watermark-layer {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-45deg);
      font-size: 46px;
      font-weight: 900;
      color: rgba(15, 23, 42, 0.04) !important;
      text-transform: uppercase;
      letter-spacing: 0.25em;
      white-space: nowrap;
      pointer-events: none;
      z-index: 0;
    }
    
    .sheet-header, .sheet-footer, .card {
      position: relative;
      z-index: 10;
    }
    
    .sheet-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-top: 10px;
    }
    
    .card {
      background: #fff;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      padding: 12px;
      page-break-inside: avoid;
      break-inside: avoid;
    }
    
    @media (max-width: 600px) {
      .sheet-grid { grid-template-columns: 1fr; }
      .sheet-container { padding: 15px; }
      .watermark-layer { font-size: 24px; }
    }
    
    @media print {
      .sheet-container {
        border: none !important;
        margin: 0 !important;
        padding: 0 !important;
        width: 100% !important;
        height: auto !important;
        page-break-after: always !important;
        break-after: page !important;
        display: block !important;
      }
      .sheet-grid {
        grid-template-columns: 1fr 1fr !important; /* Force 2 cols on print */
        gap: 10px !important;
      }
      .watermark-layer {
        color: rgba(15, 23, 42, 0.05) !important;
        font-size: 54px !important;
      }
      .card {
        padding: 10px !important;
      }
    }
    
    .options-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
      margin-top: 8px;
      font-size: 11px;
    }
    .opt-btn {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 4px;
      padding: 6px 10px;
    }
    .sheet-header {

      border-bottom: 2px solid #0f172a;
      padding-bottom: 6px;
      margin-bottom: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 11px;
    }
    .sheet-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      flex: 1;
    }
    .sheet-footer {
      border-top: 1px solid #cbd5e1;
      padding-top: 6px;
      margin-top: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 10px;
      color: #64748b;
    }
    .card {
      background: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 8px 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .options-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4px;
      margin-top: 6px;
      font-size: 10px;
    }
    .opt-btn {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 4px;
      padding: 3px 6px;
    }
    .answer-key-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
      font-size: 10px;
      font-family: 'JetBrains Mono', monospace;
    }
    .answer-key-table td {
      border: 1px solid #cbd5e1;
      padding: 4px;
      text-align: center;
      background: #f8fafc;
    }
    .answer-key-table td b { color: #b45309; }
    .print-bar {
      position: sticky;
      top: 0;
      z-index: 100;
      background: #0f172a;
      color: #fff;
      padding: 12px 20px;
      border-radius: 8px;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    .btn {
      background: #f59e0b;
      color: #0f172a;
      font-weight: bold;
      border: none;
      padding: 8px 18px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 13px;
    }
  </style>
</head>
<body>
  <div class="print-bar no-print">
    <div>
      <strong>Maths By Abhishek Upadhyay Sir</strong> - Profit & Loss Level I (180 Questions Discrete Sheets)
    </div>
    <div>
      <button class="btn" onclick="window.print()">Print / Save as PDF (Ctrl+P)</button>
    </div>
  </div>

  <!-- Cover Page -->
  <div class="sheet-container cover-box">
    <div style="text-align: center; margin: auto; max-width: 90%;">
      <div style="text-transform: uppercase; font-size: 13px; letter-spacing: 2px;">Exclusive Mathematics Series</div>
      <div class="cover-title">PROFIT & LOSS</div>
      <div class="cover-sub">LEVEL - I COMPLETE WORKBOOK (Q.1 TO Q.180)</div>
      <p style="font-size: 14px; margin-top: 12px; opacity: 0.9;">
        लाभ एवं हानि - सभी महत्वपूर्ण प्रकार के प्रश्नों का संपूर्ण द्विभाषी संकलन (180 प्रश्न)
      </p>
      
      <!-- 13 Types Index Matrix -->
      <div style="margin-top: 20px; padding: 14px; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.2); border-radius: 8px; text-align: left;">
        <div style="font-size: 11px; font-weight: bold; color: #fde047; text-transform: uppercase; margin-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.15); padding-bottom: 4px; display: flex; justify-content: space-between;">
          <span>📑 Complete 13 Types Classification Index (प्रकार-वार अनुक्रमणिका)</span>
          <span>180 MCQs</span>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px 14px; font-size: 10px;">
          ${ALL_TYPE_DEFINITIONS.map((t) => `
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08); padding: 2px 0;">
              <span><strong style="color: #fde047;">${t.badgeLabel}:</strong> ${t.nameHi}</span>
              <span style="opacity: 0.8; font-family: monospace;">${t.range}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div style="margin-top: 18px; padding: 10px; background: rgba(255,255,255,0.1); border-radius: 6px; display: inline-block; font-size: 11px;">
        <strong>Faculty:</strong> Abhishek Upadhyay Sir &nbsp;•&nbsp; <strong>Total Questions:</strong> 180 &nbsp;•&nbsp; <strong>Target Exams:</strong> SSC CGL, CHSL, CPO, GD, UPP, UPSI, RRB NTPC
      </div>
    </div>
    <div class="sheet-footer" style="color: rgba(255,255,255,0.7); border-color: rgba(255,255,255,0.2);">
      <span>Page 1 of ${Math.ceil(questions.length / 8) + 2}</span>
      <span>Maths By Abhishek Upadhyay Sir</span>
    </div>
  </div>

  <!-- Question Sheets (8 questions per sheet) -->
  ${Array.from({ length: Math.ceil(questions.length / 8) })
    .map((_, sheetIdx) => {
      const start = sheetIdx * 8;
      const sheetQuestions = questions.slice(start, start + 8);
      const sheetNum = sheetIdx + 1;
      const totalSheets = Math.ceil(questions.length / 8);
      const pageNum = sheetIdx + 2;
      const totalPages = totalSheets + 2;

      const firstTypeDef = getTypeDefinition(sheetQuestions[0].id);
      const lastTypeDef = getTypeDefinition(sheetQuestions[sheetQuestions.length - 1].id);
      const sheetTypeSummary =
        firstTypeDef.typeNum === lastTypeDef.typeNum
          ? `${firstTypeDef.badgeLabel}: ${firstTypeDef.shortName}`
          : `${firstTypeDef.badgeLabel} & ${lastTypeDef.badgeLabel}: ${firstTypeDef.shortName} / ${lastTypeDef.shortName}`;

      return `
  <div class="sheet-container">
    <div class="watermark-layer">${customization.watermarkText || 'Maths By Abhishek Upadhyay Sir'}</div>
    <div class="sheet-header">
      <div>
        <strong>Maths By Abhishek Upadhyay Sir</strong> | Profit & Loss Level-1
        <span style="margin-left: 8px; font-size: 10px; background: #fef3c7; color: #92400e; padding: 2px 6px; border-radius: 4px; border: 1px solid #fde68a; font-weight: bold;">
          ${sheetTypeSummary}
        </span>
      </div>
      <div>
        <strong>Sheet ${sheetNum} of ${totalSheets}</strong> (Q.${sheetQuestions[0].id} - Q.${sheetQuestions[sheetQuestions.length - 1].id})
      </div>
    </div>

    <div class="sheet-grid">
      ${sheetQuestions
        .map(
          (q) => {
            const t = getTypeDefinition(q.id);
            const isStart = isTypeStart(q.id);
            return `
      <div class="card">
        ${isStart ? `
        <div style="background: linear-gradient(90deg, #091e3a, #1e3a8a); color: #fff; padding: 3px 6px; border-radius: 4px; margin-bottom: 4px; font-size: 10px; font-weight: bold; border-left: 3px solid #f59e0b; display: flex; justify-content: space-between; align-items: center;">
          <span style="color: #fde047;">❖ ${t.typeLabel} : ${t.nameHi}</span>
          <span style="color: #cbd5e1; font-size: 8.5px; font-weight: normal;">(${t.nameEn}) [${t.range}]</span>
        </div>` : ''}
        <div style="margin-bottom: 4px; display: flex; gap: 4px; flex-wrap: wrap; align-items: center;">
          <span class="badge badge-q">Q.${q.id}</span>
          <span class="badge" style="background: #fef3c7; color: #78350f; border: 1px solid #fde68a; font-weight: bold; display: inline-flex; align-items: center; gap: 3px;">
            <span style="background: #0f172a; color: #fde047; padding: 1px 4px; border-radius: 3px; font-size: 8px; font-weight: 800;">${t.typeLabel}</span>
            <span style="font-size: 9px;">${t.shortName}</span>
          </span>
          ${q.year ? `<span class="badge badge-year">${q.year}</span>` : ''}
          <span class="badge badge-exam">${q.exam}</span>
        </div>
        <div style="font-size: 11px; line-height: 1.35; margin-bottom: 2px;">
          ${q.en}
        </div>
        <div style="font-size: 11.5px; line-height: 1.35; color: #334155; margin-bottom: 4px;">
          ${q.hi}
        </div>
        <div class="options-grid">
          ${q.options
            .map(
              (opt) => `
          <div class="opt-btn">
            <strong>(${opt.label})</strong> ${opt.text}
          </div>`
            )
            .join('')}
        </div>
      </div>`;
          }
        )
        .join('')}
    </div>

    <div class="sheet-footer">
      <span>SSC CGL, CHSL, CPO, GD, MTS • UPP Constable/SI • RRB NTPC</span>
      <strong>Page ${pageNum} of ${totalPages}</strong>
      <span>Abhishek Sir</span>
    </div>
  </div>`;
    })
    .join('')}

  <!-- Master Answer Key Sheet -->
  <div class="sheet-container">
    <div class="watermark-layer">${customization.watermarkText || 'Maths By Abhishek Upadhyay Sir'}</div>
    <div class="sheet-header">
      <div>
        <strong>Master Answer Key (Q.1 to Q.180)</strong>
      </div>
      <div>
        <strong>Final Sheet</strong>
      </div>
    </div>

    <table class="answer-key-table">
      <tbody>
        ${Array.from({ length: 18 })
          .map((_, rowIdx) => {
            const start = rowIdx * 10 + 1;
            const end = start + 9;
            const cells = questions.slice(start - 1, end).map(
              (q) => `<td>Q.${q.id}: <b>(${q.correctAnswer.toUpperCase()})</b></td>`
            );
            return `<tr>${cells.join('')}</tr>`;
          })
          .join('')}
      </tbody>
    </table>

    <div style="margin-top: 15px; padding: 10px; background: #fffbeb; border: 1px solid #fde68a; border-radius: 6px; font-size: 10px;">
      <strong>Exam Tips:</strong> Profit % = (Profit/CP) × 100 | Dishonest Shopkeeper % = [Error/(True - Error)] × 100 | Cross-check CP carefully.
    </div>

    <div class="sheet-footer">
      <span>Verified Bilingual Content • All 180 Answers Checked</span>
      <strong>Page ${Math.ceil(questions.length / 8) + 2} of ${Math.ceil(questions.length / 8) + 2}</strong>
      <span>Maths By Abhishek Upadhyay Sir</span>
    </div>
  </div>
</body>
</html>`;
}

/**
 * Generates an instant offline Standalone HTML Booklet with full fonts, styles,
 * vector Devanagari text, and instant print capability.
 */
export function downloadStandaloneBooklet(
  questions: Question[],
  customization: PDFCustomization,
  fileName: string = 'Maths_Profit_and_Loss_Level_1_Abhishek_Sir.html'
): void {
  const content = getStandaloneBookletHTML(questions, customization);
  const blob = new Blob([content], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Opens a dedicated vector printing window with 100% crisp typography
 * and launches the browser's native Print to PDF engine.
 */
export function openVectorPrintBooklet(
  questions: Question[],
  customization: PDFCustomization
): void {
  const content = getStandaloneBookletHTML(questions, customization);
  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.open();
    printWindow.document.write(content);
    printWindow.document.close();
    printWindow.onload = () => {
      setTimeout(() => {
        try {
          printWindow.focus();
          printWindow.print();
        } catch (err) {
          console.warn('Native vector print trigger error:', err);
        }
      }, 500);
    };
  } else {
    // If popups are blocked in the iframe, trigger download of the standalone booklet
    downloadStandaloneBooklet(questions, customization);
  }
}

/**
 * Downloads full questions as formatted Text/Word file (.doc)
 */
export function downloadWordDocument(
  questions: Question[],
  fileName: string = 'Maths_Profit_and_Loss_Level_1_Abhishek_Sir.doc'
): void {
  let docContent = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
  <head><meta charset='utf-8'><title>Profit & Loss Level I</title></head>
  <body style="font-family: Arial, sans-serif;">
  <h1 style="color: #1e3a8a; text-align: center;">Maths By Abhishek Upadhyay Sir</h1>
  <h2 style="text-align: center;">PROFIT & LOSS LEVEL - I (Q.1 TO Q.180)</h2>
  <hr/>
  ${questions
    .map(
      (q) => {
        const t = getTypeDefinition(q.id);
        const isStart = isTypeStart(q.id);
        return `
    ${isStart ? `<h3 style="background:#1e3a8a;color:#fff;padding:8px 12px;margin-top:24px;border-left:5px solid #f59e0b;">❖ ${t.typeLabel} : ${t.nameHi} (${t.nameEn}) [${t.range}]</h3>` : ''}
    <p><b>Q.${q.id} [${t.typeLabel}: ${t.nameHi}] (${q.exam} - ${q.year || ''})</b><br/>
    <b>English:</b> ${q.en}<br/>
    <b>Hindi:</b> ${q.hi}<br/>
    <b>Options:</b> ${q.options.map((o) => `(${o.label}) ${o.text}`).join(' &nbsp; | &nbsp; ')}<br/>
    <b style="color: green;">Correct Answer: (${q.correctAnswer})</b><br/>
    ${q.solutionHint ? `<i>Solution: ${q.solutionHint}</i><br/>` : ''}
    </p><hr/>`;
      }
    )
    .join('')}
  <br/>
  <h3>Master Answer Key (1-180)</h3>
  <p>${questions.map((q) => `Q.${q.id}: (${q.correctAnswer})`).join(' &nbsp; ')}</p>
  </body></html>`;

  const blob = new Blob(['\ufeff' + docContent], { type: 'application/msword' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
