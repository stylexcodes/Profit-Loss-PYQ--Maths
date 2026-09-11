import { Question } from '../types';

export interface AIHintData {
  questionId: number;
  typeBadge: string;
  topicTitle: string;
  step1: {
    title: string;
    formula?: string;
    contentEn: string;
    contentHi: string;
  };
  step2: {
    title: string;
    formula?: string;
    contentEn: string;
    contentHi: string;
  };
  step3: {
    title: string;
    formula?: string;
    contentEn: string;
    contentHi: string;
  };
  examTip: {
    contentEn: string;
    contentHi: string;
  };
  source: 'gemini' | 'pedagogical';
}

/**
 * Extracts numbers from text to provide intelligent context-aware clues
 */
function extractNumbers(text: string): number[] {
  const matches = text.match(/\b\d+(?:\.\d+)?\b/g);
  if (!matches) return [];
  return matches.map(Number);
}

/**
 * High-quality pedagogical AI Hint generator
 * Formulates detailed step-by-step clues WITHOUT revealing the final answer or option.
 */
export function generatePedagogicalHint(question: Question): AIHintData {
  const qId = question.id;
  const en = question.en;
  const hi = question.hi;
  const typeStr = question.type || 'TYPE - 1';
  const typeNum = question.typeNum || 1;
  const nums = extractNumbers(en);

  // Type 1: Simple Questions (साधारण प्रश्न - लाभ % / हानि % / CP / SP)
  if (typeNum === 1 || qId <= 4) {
    const cp = nums[0] || 'CP';
    const sp = nums[1] || 'SP';
    return {
      questionId: qId,
      typeBadge: typeStr,
      topicTitle: question.category || 'साधारण प्रश्न (Simple Questions)',
      step1: {
        title: 'Step 1: Identify Key Given Values (दिए गए मान पहचानें)',
        contentEn: `Locate the Cost Price (CP) and Selling Price (SP) from the problem. Here, CP = ₹${cp} and SP = ₹${sp}.`,
        contentHi: `प्रश्न से क्रय मूल्य (CP) और विक्रय मूल्य (SP) पहचानें। यहाँ CP = ₹${cp} और SP = ₹${sp} है।`,
      },
      step2: {
        title: 'Step 2: Apply the Core Formula (मुख्य सूत्र लागू करें)',
        formula: 'Profit = SP - CP  |  Profit % = (Profit / CP) × 100%',
        contentEn: 'Check whether SP > CP (Profit) or CP > SP (Loss). The percentage is ALWAYS calculated with respect to Cost Price (CP).',
        contentHi: 'जांचें कि SP > CP (लाभ) है या CP > SP (हानि)। लाभ या हानि प्रतिशत की गणना हमेशा क्रय मूल्य (CP) के आधार पर की जाती है।',
      },
      step3: {
        title: 'Step 3: Solving Pathway (हल करने का तरीका)',
        contentEn: `Subtract the smaller value from the larger value to find the absolute gain/loss. Then divide that result by ₹${cp} and multiply by 100 to find your percentage.`,
        contentHi: `बड़ी संख्या में से छोटी संख्या घटाकर वास्तविक लाभ/हानि निकालें। फिर प्राप्त संख्या को ₹${cp} से भाग देकर 100 से गुणा करें।`,
      },
      examTip: {
        contentEn: 'Examination Shortcut: 120/800 = 12/80 = 3/20. Since 1/20 = 5%, 3/20 = 15%. Memorizing basic fractional percentages speeds up calculations!',
        contentHi: 'शॉर्टकट: 1/20 = 5% होता है, इसलिए 3/20 = 15% होगा। प्रतिशत भिन्न याद रखने से समय बचता है।',
      },
      source: 'pedagogical',
    };
  }

  // Type 2: Single Transaction (जब कोई वस्तु एक बार बेची जाए - CP from SP & %)
  if (typeNum === 2 || (qId >= 5 && qId <= 8)) {
    return {
      questionId: qId,
      typeBadge: typeStr,
      topicTitle: question.category || 'एक बार बेची जाए (Single Transaction)',
      step1: {
        title: 'Step 1: Base Assumption (आधार मूल्य मानें)',
        contentEn: 'In percentage arithmetic, always consider Cost Price (CP) as the 100% baseline.',
        contentHi: 'प्रतिशत गणित में, क्रय मूल्य (CP) को हमेशा 100% का आधार मानें।',
      },
      step2: {
        title: 'Step 2: Express SP in terms of Percentage (SP को प्रतिशत में लिखें)',
        formula: 'CP = (SP × 100) / (100 ± Profit% / Loss%)',
        contentEn: 'If there is an x% profit, Selling Price corresponds to (100 + x)%. If there is an x% loss, SP corresponds to (100 - x)%.',
        contentHi: 'यदि x% लाभ है, तो विक्रय मूल्य (100 + x)% के बराबर होगा। यदि x% हानि है, तो SP = (100 - x)% होगा।',
      },
      step3: {
        title: 'Step 3: Unitary Method / Ratio (ऐकिक नियम लागू करें)',
        contentEn: 'Equate the given Selling Price to its corresponding percentage. To find CP (100%), divide SP by the percentage value and multiply by 100.',
        contentHi: 'दिए गए विक्रय मूल्य को उसके संगत प्रतिशत के बराबर रखें। फिर 1% का मान निकालकर 100% (क्रय मूल्य) ज्ञात करें।',
      },
      examTip: {
        contentEn: 'Fraction Trick: Convert the profit/loss percentage into a fraction (e.g., 20% = 1/5 -> CP = 5 units, SP = 6 units). Solve using units for instant answer.',
        contentHi: 'भिन्न विधि: प्रतिशत को भिन्न में बदलें (जैसे 20% = 1/5 -> CP = 5 इकाई, SP = 6 इकाई)। इकाइयों में हल करने पर तुरंत उत्तर मिलता है।',
      },
      source: 'pedagogical',
    };
  }

  // Type 3: Two Transactions (जब कोई वस्तु दो बार बेची जाए - SP1 to SP2)
  if (typeNum === 3 || (qId >= 9 && qId <= 14)) {
    return {
      questionId: qId,
      typeBadge: typeStr,
      topicTitle: question.category || 'दो बार बेची जाए (Two Transactions)',
      step1: {
        title: 'Step 1: Avoid Calculating CP Separately (CP निकालने में समय न गंवाएं)',
        contentEn: 'Notice that the same article is sold under two different conditions. You do NOT need to calculate CP as an intermediate step!',
        contentHi: 'ध्यान दें कि एक ही वस्तु दो अलग-अलग शर्तों पर बेची जा रही है। अलग से CP निकालने की कोई आवश्यकता नहीं है!',
      },
      step2: {
        title: 'Step 2: Direct Proportion Formula (सीधा समानुपात सूत्र)',
        formula: 'SP₁ / (100 ± R₁) = SP₂ / (100 ± R₂)',
        contentEn: 'First condition gives SP₁ at (100 ± R₁)%. Desired condition requires SP₂ at (100 ± R₂)%.',
        contentHi: 'पहली शर्त में SP₁ = (100 ± R₁)%, और दूसरी शर्त में SP₂ = (100 ± R₂)% होगा।',
      },
      step3: {
        title: 'Step 3: Cross-Multiply Directly (सीधा तिर्यक गुणा करें)',
        contentEn: 'Set up the equation: SP₂ = SP₁ × [(100 ± R₂) / (100 ± R₁)]. Simplify the numbers to arrive directly at the target selling price.',
        contentHi: 'समीकरण बनाएं: SP₂ = SP₁ × [(100 ± R₂) / (100 ± R₁)]। इसे सरल करके सीधे नया विक्रय मूल्य ज्ञात करें।',
      },
      examTip: {
        contentEn: 'Exam Rule: If selling at a loss of 10% gives ₹900, 90% = ₹900 -> 1% = ₹10. To earn 20% profit, calculate 120% = 120 × ₹10.',
        contentHi: 'परीक्षा ट्रिक: 10% हानि का मतलब 90% = ₹900 -> 1% = ₹10। अब 20% लाभ के लिए सीधे 120% का मान निकालें।',
      },
      source: 'pedagogical',
    };
  }

  // Type 4: More or Less Difference (जब वस्तु कम या अधिक में बेची जाए)
  if (typeNum === 4 || (qId >= 15 && qId <= 22)) {
    return {
      questionId: qId,
      typeBadge: typeStr,
      topicTitle: question.category || 'कम या अधिक में बेची जाए (Price Difference)',
      step1: {
        title: 'Step 1: Connect the Percentage Gap to Rupee Gap (प्रतिशत और रुपयों का अंतर जोड़ें)',
        contentEn: 'Identify the difference between the two profit/loss situations. The change in percentage corresponds exactly to the extra/less money mentioned in the question.',
        contentHi: 'दोनों स्थितियों के प्रतिशत अंतर की तुलना प्रश्न में दिए गए रुपयों के अंतर से करें।',
      },
      step2: {
        title: 'Step 2: Direction Rule (दिशा का नियम)',
        formula: 'Profit + Loss = Total % Gap  |  Profit - Profit = Difference % Gap',
        contentEn: 'If shifting from Loss to Profit, ADD the two percentages to find total change. If both are Profit or both are Loss, SUBTRACT the two percentages.',
        contentHi: 'यदि हानि से लाभ की ओर बढ़ रहे हैं तो दोनों प्रतिशत जोड़ें। यदि दोनों लाभ या दोनों हानि हैं तो उनका अंतर लें।',
      },
      step3: {
        title: 'Step 3: Solve for 100% (100% का मान ज्ञात करें)',
        contentEn: 'Let Total % Gap = Extra Amount in ₹. Then 1% = (Extra Amount) / (Total % Gap), and Cost Price (100%) = 1% × 100.',
        contentHi: 'कुल प्रतिशत अंतर = रुपयों में अंतर। 1% का मान निकालें और 100 से गुणा करके क्रय मूल्य (CP) प्राप्त करें।',
      },
      examTip: {
        contentEn: 'Golden Rule: Opposite signs (Loss to Profit) always ADD! e.g., from -5% to +10% is a 15% jump.',
        contentHi: 'स्वर्ण नियम: विपरीत स्थितियां (हानि और लाभ) हमेशा जुड़ती हैं! जैसे -5% से +10% में 15% का अंतर होता है।',
      },
      source: 'pedagogical',
    };
  }

  // Type 5: CP of X items = SP of Y items (X वस्तुओं का CP = Y वस्तुओं का SP)
  if (typeNum === 5 || (qId >= 23 && qId <= 30)) {
    return {
      questionId: qId,
      typeBadge: typeStr,
      topicTitle: question.category || 'CP of X = SP of Y Articles',
      step1: {
        title: 'Step 1: Form the Basic Equation (समीकरण बनाएं)',
        contentEn: 'Write down: X × CP = Y × SP, where X is the number of articles purchased and Y is the number sold.',
        contentHi: 'समीकरण लिखें: X × CP = Y × SP, जहाँ X खरीदी गई वस्तुएं और Y बेची गई वस्तुएं हैं।',
      },
      step2: {
        title: 'Step 2: Invert the Ratio (अनुपात को पलटें)',
        formula: 'SP / CP = X / Y  ==>  CP = Y units, SP = X units',
        contentEn: 'Notice that CP corresponds to Y, and SP corresponds to X! This inversion is the key step where students make mistakes.',
        contentHi: 'क्रय मूल्य (CP) का अनुपात Y होगा और विक्रय मूल्य (SP) का अनुपात X होगा। यहीं अक्सर छात्र गलती करते हैं।',
      },
      step3: {
        title: 'Step 3: Calculate Profit or Loss % (प्रतिशत निकालें)',
        formula: 'Profit/Loss % = (|X - Y| / Y) × 100%',
        contentEn: 'The denominator MUST be Y (the number of articles sold / effective CP). Calculate the difference between X and Y, divide by Y, and multiply by 100.',
        contentHi: 'हर (Denominator) में हमेशा Y (बेची गई वस्तुओं की संख्या) रहेगा। दोनों का अंतर लेकर Y से भाग दें और 100 से गुणा करें।',
      },
      examTip: {
        contentEn: 'Memory Trick: Goods sold (Y) is your actual investment. So Y is always the base denominator.',
        contentHi: 'याद रखने की ट्रिक: बेची गई वस्तुएं (Y) आपकी जेब से जाने वाली वास्तविक लागत हैं, अतः बटे में हमेशा Y आएगा।',
      },
      source: 'pedagogical',
    };
  }

  // Type 6: Dishonest Dealer & False Weight (बेईमान दुकानदार / गलत बाट)
  if (typeNum === 6 || (qId >= 31 && qId <= 38)) {
    return {
      questionId: qId,
      typeBadge: typeStr,
      topicTitle: question.category || 'बेईमान दुकानदार (Dishonest Dealer)',
      step1: {
        title: 'Step 1: Understand the Cheating Mechanism (धोखाधड़ी का तंत्र समझें)',
        contentEn: 'The dealer promises to sell at Cost Price, but uses a false weight. He sells less quantity than what he charges for.',
        contentHi: 'दुकानदार क्रय मूल्य पर बेचने का दावा करता है, परंतु कम वजन तोलता है।',
      },
      step2: {
        title: 'Step 2: Formula for False Weight (गलत बाट का सूत्र)',
        formula: 'Profit % = [Error / (True Weight - Error)] × 100% = [त्रुटि / प्रयुक्त गलत माप] × 100%',
        contentEn: 'True Weight is usually 1000g (1 kg). Error = (1000g - False Weight given).',
        contentHi: 'सच्चा माप 1000 ग्राम (1 किग्रा) होता है। त्रुटि = (1000 ग्राम - दिया गया वजन)।',
      },
      step3: {
        title: 'Step 3: Solve Using the Formula (मान रखकर हल करें)',
        contentEn: 'Put the weight saved in the numerator, and the actual weight handed to the customer in the denominator. Multiply by 100%.',
        contentHi: 'अंश में बचाई गई मात्रा और हर में ग्राहक को दिया गया वास्तविक वजन रखें। फिर 100 से गुणा करें।',
      },
      examTip: {
        contentEn: 'If he gives 900g instead of 1000g, he saves 100g on a cost of 900g -> Profit = (100/900) × 100 = 11.11%.',
        contentHi: 'यदि 1000g की जगह 900g दिया, तो 100g की बचत 900g की लागत पर हुई -> (100/900) × 100 = 11.11% लाभ।',
      },
      source: 'pedagogical',
    };
  }

  // Type 7: Successive Discounts (क्रमिक छूट / समतुल्य बट्टा)
  if (typeNum === 7 || (qId >= 39 && qId <= 48)) {
    return {
      questionId: qId,
      typeBadge: typeStr,
      topicTitle: question.category || 'क्रमिक बट्टा (Successive Discounts)',
      step1: {
        title: 'Step 1: Identify Given Discount Rates (छूट दरें पहचानें)',
        contentEn: 'Note down the successive discount percentages (d₁, d₂, etc.). Remember: two 20% discounts DO NOT equal 40%!',
        contentHi: 'क्रमिक छूट की दरें नोट करें। ध्यान रखें कि 20% और 20% की दो क्रमिक छूट कभी 40% के बराबर नहीं होतीं!',
      },
      step2: {
        title: 'Step 2: Equivalent Discount Formula (समतुल्य बट्टा सूत्र)',
        formula: 'Single Equivalent Discount = (d₁ + d₂) - (d₁ × d₂ / 100) %',
        contentEn: 'For two discounts, add them together and subtract their product divided by 100.',
        contentHi: 'दो क्रमिक छूटों के लिए दोनों को जोड़ें और उनके गुणनफल को 100 से भाग देकर घटाएं।',
      },
      step3: {
        title: 'Step 3: Net Multiplier Method (गुणांक विधि)',
        contentEn: 'Or assume original price = 100. Apply each discount successively: 100 × [(100 - d₁)/100] × [(100 - d₂)/100]. Subtract from 100 to get total discount.',
        contentHi: 'या प्रारंभिक मूल्य 100 मानें और क्रमशः छूट घटाते जाएं। अंत में 100 में से घटाकर कुल छूट ज्ञात करें।',
      },
      examTip: {
        contentEn: 'Quick Mental Math: For 20% and 10%: (20 + 10) - (200 / 100) = 30 - 2 = 28%. Takes just 3 seconds!',
        contentHi: 'मौखिक हल: 20% और 10% के लिए: (20 + 10) - 2 = 28%। मात्र 3 सेकंड में उत्तर निकालें।',
      },
      source: 'pedagogical',
    };
  }

  // Type 8: Marked Price, CP, Discount & Profit (अंकित मूल्य एवं क्रय मूल्य)
  if (typeNum === 8 || (qId >= 49 && qId <= 60)) {
    return {
      questionId: qId,
      typeBadge: typeStr,
      topicTitle: question.category || 'अंकित मूल्य व क्रय मूल्य का संबंध',
      step1: {
        title: 'Step 1: Recognize the MP-CP Bridge (MP और CP का संबंध समझें)',
        contentEn: 'Discount is always given on Marked Price (MP), and Profit/Loss is always calculated on Cost Price (CP). Selling Price (SP) connects both.',
        contentHi: 'छूट हमेशा अंकित मूल्य (MP) पर दी जाती है और लाभ/हानि हमेशा क्रय मूल्य (CP) पर होती है। विक्रय मूल्य (SP) दोनों को जोड़ता है।',
      },
      step2: {
        title: 'Step 2: Master Golden Ratio Formula (मास्टर अनुपात सूत्र)',
        formula: 'MP / CP = (100 + Profit %) / (100 - Discount %)',
        contentEn: 'Use this direct ratio formula! It completely eliminates the need to calculate intermediate Selling Price.',
        contentHi: 'इस सीधे सूत्र का प्रयोग करें! इससे बीच में विक्रय मूल्य (SP) निकालने की जरूरत नहीं पड़ती।',
      },
      step3: {
        title: 'Step 3: Substitute and Solve (मान रखकर हल करें)',
        contentEn: 'Substitute the given values into the ratio. If CP is given, solve for MP; if MP is given, solve for CP.',
        contentHi: 'सूत्र में दिए गए मान रखें। यदि CP दिया है तो MP ज्ञात करें, और यदि MP दिया है तो CP निकालें।',
      },
      examTip: {
        contentEn: 'Always write MP/CP = (100 + P%)/(100 - D%). If Profit = 20% and Discount = 10%, MP/CP = 120/90 = 4/3.',
        contentHi: 'सदा याद रखें: MP/CP = (100 + लाभ%)/(100 - छूट%)। यदि लाभ 20% और छूट 10% है तो MP/CP = 120/90 = 4/3।',
      },
      source: 'pedagogical',
    };
  }

  // Type 9: Items at rates (e.g. bought 5 for ₹4, sold 4 for ₹5) (भाव पर आधारित)
  if (typeNum === 9 || (qId >= 61 && qId <= 75)) {
    return {
      questionId: qId,
      typeBadge: typeStr,
      topicTitle: question.category || 'भाव पर आधारित प्रश्न (Rate of Articles)',
      step1: {
        title: 'Step 1: Equalize the Number of Articles (वस्तुओं की संख्या बराबर करें)',
        contentEn: 'Identify the quantity bought and quantity sold. Take the LCM (ल.स.) of both quantities to assume a common total number of items.',
        contentHi: 'खरीदी गई और बेची गई वस्तुओं की संख्या का ल.स. (LCM) लेकर कुल वस्तुओं की एक समान संख्या मानें।',
      },
      step2: {
        title: 'Step 2: Calculate Total CP and Total SP (कुल CP और SP निकालें)',
        formula: 'Cross Multiplication: (Items₁ × Price₂) - (Items₂ × Price₁) / (Items₂ × Price₁)',
        contentEn: 'Find the total cost to buy the LCM quantity, and the total revenue from selling that same LCM quantity.',
        contentHi: 'LCM जितनी वस्तुओं का कुल क्रय मूल्य और उन्हीं वस्तुओं का कुल विक्रय मूल्य ज्ञात करें।',
      },
      step3: {
        title: 'Step 3: Calculate Percentage (प्रतिशत की गणना करें)',
        contentEn: 'Now you have simple CP and SP values! Use: Profit/Loss % = [(SP - CP) / CP] × 100%.',
        contentHi: 'अब आपके पास साधारण CP और SP है। सूत्र: [(SP - CP) / CP] × 100% का प्रयोग करें।',
      },
      examTip: {
        contentEn: 'Cross-multiplication trick: Bought N₁ for ₹P₁, Sold N₂ for ₹P₂. CP ∝ N₂ × P₁, SP ∝ N₁ × P₂.',
        contentHi: 'क्रॉस गुणा विधि: N₁ वस्तुएं ₹P₁ में खरीदी, N₂ वस्तुएं ₹P₂ में बेचीं -> CP = N₂ × P₁, SP = N₁ × P₂।',
      },
      source: 'pedagogical',
    };
  }

  // Default / Advanced Types (Type 10 to 13)
  return {
    questionId: qId,
    typeBadge: typeStr,
    topicTitle: question.category || 'लाभ एवं हानि (Profit & Loss)',
    step1: {
      title: 'Step 1: Extract Given Data (दिए गए मान पहचानें)',
      contentEn: 'Read the question carefully and separate the known variables (Cost Price, Selling Price, Marked Price, Ratios, or Percentages).',
      contentHi: 'प्रश्न को ध्यान से पढ़ें और ज्ञात मानों (क्रय मूल्य, विक्रय मूल्य, अंकित मूल्य, अनुपात या प्रतिशत) को अलग-अलग लिखें।',
    },
    step2: {
      title: 'Step 2: Core Concept to Apply (लागू होने वाला मुख्य नियम)',
      formula: 'Profit % = [(SP - CP) / CP] × 100%  |  MP × (1 - D%) = CP × (1 + P%)',
      contentEn: 'Determine the underlying relationship: Is this based on equal selling prices, successive changes, or ratio unitary methods?',
      contentHi: 'मूल अवधारणा पहचानें: क्या यह समान विक्रय मूल्य पर आधारित है, क्रमिक परिवर्तन पर या अनुपातिक विधि पर?',
    },
    step3: {
      title: 'Step 3: Computational Setup (गणना की व्यवस्था)',
      contentEn: 'Set up your equation using ratio fractions or 100-base units. Carry out the arithmetic to see which of the 4 options aligns with your result.',
      contentHi: '100 को आधार मानकर या भिन्नों के अनुपात में समीकरण व्यवस्थित करें। अंतिम गणना करके चारों विकल्पों में से सही विकल्प चुनें।',
    },
    examTip: {
      contentEn: 'Exam Strategy: If two items are sold at the SAME selling price (SP) with x% profit and x% loss, there is ALWAYS an overall loss of (x²/100)%.',
      contentHi: 'परीक्षा रणनीति: यदि दो वस्तुएं समान SP पर बेची जाएं (एक पर x% लाभ और दूसरी पर x% हानि), तो हमेशा (x²/100)% की समग्र हानि होती है।',
    },
    source: 'pedagogical',
  };
}

/**
 * Fetches AI Hint from backend Gemini API (/api/ai-hint)
 * with graceful immediate fallback to the mathematical pedagogical generator.
 */
export async function fetchAIHint(question: Question): Promise<AIHintData> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000); // 6s timeout

    const res = await fetch('/api/ai-hint', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: question.id,
        type: question.type,
        category: question.category,
        en: question.en,
        hi: question.hi,
        options: question.options,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data && data.hint) {
        return {
          ...data.hint,
          questionId: question.id,
          source: 'gemini',
        };
      }
    }
  } catch (err) {
    // Network or server error - fallback smoothly
    console.debug('Using local pedagogical AI hint generator:', err);
  }

  // Graceful fallback to rich mathematical hint
  return generatePedagogicalHint(question);
}
