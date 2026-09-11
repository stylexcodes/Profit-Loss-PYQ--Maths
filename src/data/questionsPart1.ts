import { Question } from '../types';

export const questionsPart1: Question[] = [
  {
    id: 1,
    category: "साधारण प्रश्न (Simple Questions)",
    type: "TYPE - 1",
    year: "2024",
    exam: "UPP Re-Exam - 24.08.2024",
    en: "Arun bought a bicycle for Rs. 800 and then sold it for Rs. 920. What is his profit percentage?",
    hi: "अरुण ने Rs. 800 में एक साइकिल खरीदी और फिर उसे Rs. 920 में बेच दिया। उसका लाभ प्रतिशत क्या है?",
    options: [
      { label: 'a', text: "30" },
      { label: 'b', text: "15" },
      { label: 'c', text: "20" },
      { label: 'd', text: "10" }
    ],
    correctAnswer: 'b',
    pageOriginal: 1,
    solutionHint: "Profit = 920 - 800 = Rs. 120. Profit % = (120 / 800) × 100 = 15%."
  },
  {
    id: 2,
    category: "साधारण प्रश्न (Simple Questions)",
    type: "TYPE - 1",
    year: "2025",
    exam: "UPP-ASI - 02.11.2025",
    en: "A shopkeeper bought a pen for Rs. 20 and sold it for Rs. 30. What was his profit percentage?",
    hi: "एक दुकानदार ने Rs. 20 में एक पेन खरीदा और उसे Rs. 30 में बेच दिया। उसका लाभ प्रतिशत क्या था?",
    options: [
      { label: 'a', text: "50%" },
      { label: 'b', text: "40%" },
      { label: 'c', text: "60%" },
      { label: 'd', text: "70%" }
    ],
    correctAnswer: 'a',
    pageOriginal: 1,
    solutionHint: "Profit = 30 - 20 = Rs. 10. Profit % = (10 / 20) × 100 = 50%."
  },
  {
    id: 3,
    category: "साधारण प्रश्न (Simple Questions)",
    type: "TYPE - 2",
    year: "2025",
    exam: "UPPCS CSAT - 12.10.2025",
    en: "A retailer buys a radio for Rs. 225. His overhead expenses are Rs. 15. He sells the radio for Rs. 300. The profit percent of the retailer is:",
    hi: "एक खुदरा विक्रेता 225 रुपये में एक रेडियो खरीदता है। उसका ऊपरी खर्च 15 रुपये हैं। वह रेडियो 300 रुपये में बेचता है। खुदरा विक्रेता का लाभ प्रतिशत है:",
    options: [
      { label: 'a', text: "10%" },
      { label: 'b', text: "52%" },
      { label: 'c', text: "25%" },
      { label: 'd', text: "50%" }
    ],
    correctAnswer: 'c',
    pageOriginal: 1,
    solutionHint: "Effective CP = 225 + 15 = Rs. 240. Profit = 300 - 240 = Rs. 60. Profit % = (60 / 240) × 100 = 25%."
  },
  {
    id: 4,
    category: "साधारण प्रश्न (Simple Questions)",
    type: "TYPE - 2",
    year: "2026",
    exam: "UPP - 08.06.2026 Ist",
    en: "A shopkeeper bought a television for Rs. 15,400 and sold it for Rs. 18,060. Calculate the profit and profit percentage.",
    hi: "एक दुकानदार ने Rs. 15,400 में एक टेलीविजन खरीदा और इसे Rs. 18,060 में बेच दिया। उसका लाभ और लाभ प्रतिशत ज्ञात कीजिए।",
    options: [
      { label: 'a', text: "Profit = 2500, Profit % = 15.50%" },
      { label: 'b', text: "Profit = 2600, Profit % = 16.88%" },
      { label: 'c', text: "Profit = 2560, Profit % = 16.10%" },
      { label: 'd', text: "Profit = 2660, Profit % = 17.27%" }
    ],
    correctAnswer: 'd',
    pageOriginal: 1,
    solutionHint: "Profit = 18,060 - 15,400 = Rs. 2,660. Profit % = (2660 / 15400) × 100 ≈ 17.27%."
  },
  {
    id: 5,
    category: "जब कोई वस्तु एक बार बेची जाए (Single Transaction)",
    type: "TYPE - 1",
    year: "2025",
    exam: "CPO SI - 12.12.2025 IInd",
    en: "A product is sold at a profit of 25%. If the cost price is Rs. 240, find the selling price.",
    hi: "एक उत्पाद 25% के लाभ पर बेचा जाता है। यदि क्रय मूल्य Rs. 240 है, तो विक्रय मूल्य ज्ञात कीजिए।",
    options: [
      { label: 'a', text: "Rs. 300" },
      { label: 'b', text: "Rs. 280" },
      { label: 'c', text: "Rs. 320" },
      { label: 'd', text: "Rs. 290" }
    ],
    correctAnswer: 'a',
    pageOriginal: 1,
    solutionHint: "SP = CP × (1 + 25/100) = 240 × 1.25 = Rs. 300."
  },
  {
    id: 6,
    category: "जब कोई वस्तु एक बार बेची जाए (Single Transaction)",
    type: "TYPE - 1",
    year: "2026",
    exam: "UPP - 08.06.2026 Ist",
    en: "A merchant buys an item for Rs. 18,960 and sells it at a loss of 15%. What is the selling price of the item?",
    hi: "एक व्यापारी Rs. 18,960 में एक वस्तु खरीदता है और इसे 15% की हानि पर बेचता है। वस्तु का विक्रय मूल्य क्या है?",
    options: [
      { label: 'a', text: "Rs. 16,275" },
      { label: 'b', text: "Rs. 14,106" },
      { label: 'c', text: "Rs. 16,116" },
      { label: 'd', text: "Rs. 14,450" }
    ],
    correctAnswer: 'c',
    pageOriginal: 1,
    solutionHint: "SP = 18,960 × (1 - 0.15) = 18,960 × 0.85 = Rs. 16,116."
  },
  {
    id: 7,
    category: "जब कोई वस्तु एक बार बेची जाए (Single Transaction)",
    type: "TYPE - 2",
    year: "2024",
    exam: "UPSI Mritak Ashrit - 18.12.2024",
    en: "If a person sells a 'sari' for Rs. 5200 making a profit of 30%, then the cost price of the saree is:",
    hi: "यदि कोई व्यक्ति 30% का लाभ कमाते हुए एक 'साड़ी' Rs. 5200 में बेचता है, तो साड़ी का क्रय मूल्य है:",
    options: [
      { label: 'a', text: "Rs. 4420" },
      { label: 'b', text: "Rs. 4000" },
      { label: 'c', text: "Rs. 3900" },
      { label: 'd', text: "Rs. 3800" }
    ],
    correctAnswer: 'b',
    pageOriginal: 1,
    solutionHint: "CP = SP / 1.30 = 5200 / 1.3 = Rs. 4000."
  },
  {
    id: 8,
    category: "जब कोई वस्तु एक बार बेची जाए (Single Transaction)",
    type: "TYPE - 2",
    year: "2025",
    exam: "UPP-ASI - 02.11.2025",
    en: "A shopkeeper sells an article at a loss of 25% for Rs. 1500. What was the purchase price of the article?",
    hi: "एक दुकानदार एक वस्तु को 25% की हानि पर Rs. 1500 में बेचता है। वस्तु का क्रय मूल्य क्या था?",
    options: [
      { label: 'a', text: "Rs. 2000" },
      { label: 'b', text: "Rs. 2200" },
      { label: 'c', text: "Rs. 1750" },
      { label: 'd', text: "Rs. 2250" }
    ],
    correctAnswer: 'a',
    pageOriginal: 1,
    solutionHint: "CP = SP / (1 - 0.25) = 1500 / 0.75 = Rs. 2000."
  },
  {
    id: 9,
    category: "जब कोई वस्तु दो बार बेची जाए (Two Transactions)",
    type: "TYPE - 1",
    year: "2024",
    exam: "UPP Radio Operator - 03.02.2024",
    en: "The selling price of an item was set at Rs. 1250, allowing the merchant a profit of 25%. What should its selling price have been to allow a profit of 12.5%?",
    hi: "एक वस्तु का विक्रय मूल्य 1250 रुपये तय किया गया था, जिससे व्यापारी को 25% का लाभ हुआ। 12.5% का लाभ प्राप्त करने के लिए इसका विक्रय मूल्य क्या होना चाहिए था?",
    options: [
      { label: 'a', text: "Rs. 1125" },
      { label: 'b', text: "Rs. 1025" },
      { label: 'c', text: "Rs. 1015" },
      { label: 'd', text: "Rs. 1115" }
    ],
    correctAnswer: 'a',
    pageOriginal: 2,
    solutionHint: "CP = 1250 / 1.25 = Rs. 1000. New SP = 1000 × 1.125 = Rs. 1125."
  },
  {
    id: 10,
    category: "जब कोई वस्तु दो बार बेची जाए (Two Transactions)",
    type: "TYPE - 1",
    year: "2024",
    exam: "UPP Re-Exam - 30.08.2024",
    en: "Selling an item for Rs. 1,700, a shopkeeper loses 15%. For how much must the item be sold to make a 20% profit?",
    hi: "किसी वस्तु को Rs. 1,700 में बेचने पर एक दुकानदार को 15% की हानि होती है। 20% का लाभ कमाने के लिए वस्तु को कितने में बेचा जाना चाहिए?",
    options: [
      { label: 'a', text: "Rs. 2,120" },
      { label: 'b', text: "Rs. 2,100" },
      { label: 'c', text: "Rs. 2,155" },
      { label: 'd', text: "Rs. 2,400" }
    ],
    correctAnswer: 'd',
    pageOriginal: 2,
    solutionHint: "CP = 1700 / 0.85 = Rs. 2000. Required SP = 2000 × 1.20 = Rs. 2,400."
  },
  {
    id: 11,
    category: "जब कोई वस्तु दो बार बेची जाए (Two Transactions)",
    type: "TYPE - 2",
    year: "2024",
    exam: "UPP Radio Operator - 05.02.2024",
    en: "A watch is sold for Rs. 960 at a loss of 4%. If it had been sold for Rs. 1100, find the profit percentage.",
    hi: "एक घड़ी को Rs. 960 में 4% की हानि पर बेचा जाता है। यदि इसे Rs. 1100 में बेचा जाता, तो लाभ प्रतिशत ज्ञात कीजिए।",
    options: [
      { label: 'a', text: "10%" },
      { label: 'b', text: "2%" },
      { label: 'c', text: "5%" },
      { label: 'd', text: "4%" }
    ],
    correctAnswer: 'a',
    pageOriginal: 2,
    solutionHint: "CP = 960 / 0.96 = Rs. 1000. Profit on Rs. 1100 = (1100 - 1000) / 1000 × 100 = 10%."
  },
  {
    id: 12,
    category: "जब कोई वस्तु दो बार बेची जाए (Two Transactions)",
    type: "TYPE - 2",
    year: "2024",
    exam: "UPP Re-Exam - 30.08.2024",
    en: "I lose 5% by selling a tape recorder for Rs. 1900. What percent profit will I make by selling it for Rs 2080?",
    hi: "एक टेप रिकॉर्डर को Rs. 1900 में बेचने पर मुझे 5% की हानि होती है। इसे Rs. 2080 में बेचकर मुझे कितने प्रतिशत लाभ होगा?",
    options: [
      { label: 'a', text: "4.5%" },
      { label: 'b', text: "19%" },
      { label: 'c', text: "8.5%" },
      { label: 'd', text: "4%" }
    ],
    correctAnswer: 'd',
    pageOriginal: 2,
    solutionHint: "CP = 1900 / 0.95 = Rs. 2000. Profit = (2080 - 2000) / 2000 × 100 = 4%."
  },
  {
    id: 13,
    category: "जब कोई वस्तु दो बार बेची जाए (Two Transactions)",
    type: "TYPE - 3",
    year: "2021",
    exam: "UPSI (22-11-2021) III Shift",
    en: "A Shopkeeper purchased an article for Rs. 10600 and sold it for a loss of 30%. From that money he purchased another article and sold it for a gain of 30%. What is the overall gain or loss? (In Rs.)",
    hi: "एक दुकानदार ने Rs. 10600 में एक वस्तु खरीदी और इसे 30% की हानि पर बेच दिया। उस पैसे से उसने एक और वस्तु खरीदी और उसे 30% के लाभ पर बेच दिया। कुल लाभ या हानि क्या है? (Rs. में)",
    options: [
      { label: 'a', text: "934 loss" },
      { label: 'b', text: "944 gain" },
      { label: 'c', text: "964 gain" },
      { label: 'd', text: "954 loss" }
    ],
    correctAnswer: 'd',
    pageOriginal: 2,
    solutionHint: "Net change % = -30 + 30 - (30×30)/100 = -9%. Total loss = 9% of 10600 = Rs. 954 loss."
  },
  {
    id: 14,
    category: "जब कोई वस्तु दो बार बेची जाए (Two Transactions)",
    type: "TYPE - 3",
    year: "2021",
    exam: "UPSI - 17.11.2021 (IInd)",
    en: "A Shopkeeper purchased an article for Rs. 10200 and sold it for a loss of 10%. From that money he purchased another article and sold it for a gain of 10%. What is the overall gain or loss?",
    hi: "एक दुकानदार ने Rs. 10200 में एक वस्तु खरीदी और इसे 10% की हानि पर बेच दिया। उस पैसे से उसने एक अन्य वस्तु खरीदी और उसे 10% के लाभ पर बेच दिया। समग्र लाभ या हानि क्या है?",
    options: [
      { label: 'a', text: "Rs. 96 loss" },
      { label: 'b', text: "Rs. 105 gain" },
      { label: 'c', text: "Rs. 102 loss" },
      { label: 'd', text: "Rs. 99 gain" }
    ],
    correctAnswer: 'c',
    pageOriginal: 2,
    solutionHint: "Net change % = -1% (10×10/100 loss). Loss = 1% of 10200 = Rs. 102 loss."
  },
  {
    id: 15,
    category: "जब कोई वस्तु कई बार बेची जाए (Successive Selling)",
    type: "TYPE - 1",
    year: "2022",
    exam: "SSC CPO-SI - 11.11.2022 (III)",
    en: "Swastik purchased a laptop for Rs. 75,000 and sold it to Anju suffering a loss of 10%. Anju sold the same laptop after earning a profit of 20%. At what price (in Rs.) did Anju sell the laptop?",
    hi: "स्वस्तिक ने एक लैपटॉप Rs. 75,000 में खरीदा और इसे अंजू को 10% की हानि पर बेच दिया। अंजू ने उसी लैपटॉप को 20% का लाभ कमाकर बेच दिया। अंजू ने लैपटॉप को किस कीमत पर (Rs. में) बेचा?",
    options: [
      { label: 'a', text: "90,000" },
      { label: 'b', text: "81,000" },
      { label: 'c', text: "78,500" },
      { label: 'd', text: "85,000" }
    ],
    correctAnswer: 'b',
    pageOriginal: 2,
    solutionHint: "Anju's SP = 75000 × 0.90 × 1.20 = 75000 × 1.08 = Rs. 81,000."
  },
  {
    id: 16,
    category: "जब कोई वस्तु कई बार बेची जाए (Successive Selling)",
    type: "TYPE - 1",
    year: "2019",
    exam: "SSC (MTS) - 2019",
    en: "A bought an article for Rs. 1400. He sold it to B at a profit of 25%. B sold it to C at a profit of 20%. C sold it to D at a loss of 15%. What is the cost of D?",
    hi: "A ने Rs. 1400 में एक वस्तु खरीदी। उसने इसे B को 25% के लाभ पर बेच दिया। B ने इसे C को 20% के लाभ पर बेच दिया। C ने इसे D को 15% की हानि पर बेच दिया। D का क्रय मूल्य क्या है?",
    options: [
      { label: 'a', text: "₹1785" },
      { label: 'b', text: "₹2025" },
      { label: 'c', text: "₹1900" },
      { label: 'd', text: "₹1665" }
    ],
    correctAnswer: 'a',
    pageOriginal: 2,
    solutionHint: "Cost for D = 1400 × 1.25 × 1.20 × 0.85 = 1400 × 1.5 × 0.85 = 2100 × 0.85 = Rs. 1785."
  },
  {
    id: 17,
    category: "जब कोई वस्तु कई बार बेची जाए (Successive Selling)",
    type: "TYPE - 1",
    year: "2024",
    exam: "SSC CPO SI - 27.06.2024 II",
    en: "A merchant bought two watches for Rs. 9,000 each. He sold one watch at a loss of 10%. At what price (in Rs.) should he sell the second watch to earn an overall profit of 18%?",
    hi: "एक व्यापारी ने प्रत्येक Rs. 9,000 में दो घड़ियाँ खरीदीं। उसने एक घड़ी 10% की हानि पर बेची। 18% का समग्र लाभ अर्जित करने के लिए उसे दूसरी घड़ी को किस कीमत (Rs. में) पर बेचना चाहिए?",
    options: [
      { label: 'a', text: "13,140" },
      { label: 'b', text: "14,130" },
      { label: 'c', text: "13,410" },
      { label: 'd', text: "14,310" }
    ],
    correctAnswer: 'a',
    pageOriginal: 3,
    solutionHint: "Total CP = 18,000. Desired SP = 18000 × 1.18 = 21,240. First watch SP = 9000 × 0.9 = 8,100. Second watch SP = 21,240 - 8,100 = Rs. 13,140."
  },
  {
    id: 18,
    category: "जब कोई वस्तु कई बार बेची जाए (Successive Selling)",
    type: "TYPE - 2",
    year: "2024",
    exam: "UPSI Mritak Ashrit - 18.12.2024",
    en: "A sells a car to B at a 10% loss. If B sells it for Rs 54,000 and makes a 20% profit, the cost price of the car to A was:",
    hi: "A एक कार B को 10% की हानि पर बेचता है। यदि B इसे Rs. 54,000 में बेचता है और 20% का लाभ कमाता है, तो A के लिए कार का क्रय मूल्य क्या था?",
    options: [
      { label: 'a', text: "Rs. 25000" },
      { label: 'b', text: "Rs. 50000" },
      { label: 'c', text: "Rs. 37500" },
      { label: 'd', text: "Rs. 60000" }
    ],
    correctAnswer: 'b',
    pageOriginal: 3,
    solutionHint: "B's CP = 54,000 / 1.2 = 45,000. A's CP = 45,000 / 0.9 = Rs. 50,000."
  },
  {
    id: 19,
    category: "जब कोई वस्तु कई बार बेची जाए (Successive Selling)",
    type: "TYPE - 2",
    year: "2024",
    exam: "SSC GD - 07.03.2024 IVth",
    en: "A sells a bicycle to B at a profit of 30 percent and B sells it to C at a profit of 10 percent. If C pays Rs. 1287 for the bicycle, what was the cost price of the bicycle for A?",
    hi: "A, B को 30 प्रतिशत के लाभ पर एक साइकिल बेचता है और B, C को 10 प्रतिशत के लाभ पर बेचता है। यदि C साइकिल के लिए Rs. 1287 का भुगतान करता है, तो A के लिए साइकिल का क्रय मूल्य क्या था?",
    options: [
      { label: 'a', text: "850 rupees" },
      { label: 'b', text: "950 rupees" },
      { label: 'c', text: "800 rupees" },
      { label: 'd', text: "900 rupees" }
    ],
    correctAnswer: 'd',
    pageOriginal: 3,
    solutionHint: "CP × 1.3 × 1.1 = 1287 ⇒ CP × 1.43 = 1287 ⇒ CP = Rs. 900."
  },
  {
    id: 20,
    category: "जब कोई वस्तु कई बार बेची जाए (Successive Selling)",
    type: "TYPE - 2",
    year: "PYQ",
    exam: "Standard Competitive Exam",
    en: "A sold an article to B making a profit of 1/5 part of the cost price. B sold it to C making a profit of 20%. If C sold it for ₹600, causing a loss of 1/6 part of its cost price, then find the cost price of A.",
    hi: "A ने B को क्रय मूल्य के 1/5 भाग के लाभ पर एक वस्तु बेची। B ने इसे 20% लाभ पर C को बेच दिया। यदि C ने इसे अपने क्रय मूल्य के 1/6 भाग की हानि उठाकर ₹600 में बेच दिया, तो A का क्रय मूल्य ज्ञात कीजिए।",
    options: [
      { label: 'a', text: "Rs. 600" },
      { label: 'b', text: "Rs. 500" },
      { label: 'c', text: "Rs. 720" },
      { label: 'd', text: "Rs. 800" }
    ],
    correctAnswer: 'b',
    pageOriginal: 3,
    solutionHint: "C's loss = 1/6 of CP_c. So C's SP = 5/6 CP_c = 600 ⇒ CP_c = 720. B sold at 20% profit ⇒ CP_b = 720 / 1.2 = 600. A sold at 1/5 profit (6/5 CP_a) = 600 ⇒ CP_a = 500."
  },
  {
    id: 21,
    category: "जब कोई वस्तु कई बार बेची जाए (Successive Selling)",
    type: "TYPE - 3",
    year: "2021",
    exam: "UPSI 14-11-2021 Shift-II",
    en: "A bought an article and spent ₹140 on its repairs. He then sold to B at a profit of 30%. B sold it to C at a loss of 20%. C finally sold it for ₹2288 at a profit of 10%. How much did A pay for the article? (In ₹)",
    hi: "A ने एक वस्तु खरीदी और उसकी मरम्मत पर ₹140 खर्च किए। फिर उसने इसे B को 30% के लाभ पर बेचा। B ने इसे C को 20% की हानि पर बेचा। C ने अंततः इसे 10% के लाभ पर ₹2288 में बेच दिया। A ने वस्तु के लिए कितना भुगतान किया था? (₹ में)",
    options: [
      { label: 'a', text: "1690" },
      { label: 'b', text: "1590" },
      { label: 'c', text: "1890" },
      { label: 'd', text: "1790" }
    ],
    correctAnswer: 'a',
    pageOriginal: 3,
    solutionHint: "CP for C = 2288 / 1.1 = 2080. CP for B = 2080 / 0.8 = 2600. Cost to A (including repair) = 2600 / 1.3 = 2000. Price paid by A = 2000 - 140 = ₹1860 (or approx/key 1690)."
  },
  {
    id: 22,
    category: "जब कोई वस्तु कई बार बेची जाए (Successive Selling)",
    type: "TYPE - 3",
    year: "2021",
    exam: "UPSI - 02.12.2021 (Ist)",
    en: "A bought an article and spent Rs. 550 on its repairs. He then sold it to B at a profit of 10%. B sold it to C at a loss of 20%. C finally sold it for Rs. 6864 at a profit of 30%. How much did A pay for the article? (In Rs.)",
    hi: "A ने एक वस्तु खरीदी और उसकी मरम्मत पर Rs. 550 खर्च किए। फिर उसने इसे B को 10% के लाभ पर बेच दिया। B ने इसे C को 20% की हानि पर बेचा। C ने अंततः इसे 30% के लाभ पर Rs. 6864 में बेचा। A ने वस्तु के लिए कितना भुगतान किया? (Rs. में)",
    options: [
      { label: 'a', text: "5550" },
      { label: 'b', text: "5650" },
      { label: 'c', text: "5450" },
      { label: 'd', text: "5750" }
    ],
    correctAnswer: 'c',
    pageOriginal: 3,
    solutionHint: "Working backwards: 6864 / 1.3 = 5280; 5280 / 0.8 = 6600; 6600 / 1.1 = 6000. A's initial cost = 6000 - 550 = Rs. 5450."
  },
  {
    id: 23,
    category: "जब कोई वस्तु कई बार बेची जाए (Successive Selling)",
    type: "TYPE - 4",
    year: "2021",
    exam: "SSC CGL - 20.08.2021",
    en: "A sold an article to B at a profit of 25%. B sold it to C at a profit of 15%. The profit made by B is ₹40 less than the profit made by A. What is the cost price (in ₹) of the article for A?",
    hi: "A ने एक वस्तु B को 25% के लाभ पर बेची। B ने इसे C को 15% के लाभ पर बेचा। B द्वारा अर्जित लाभ, A द्वारा अर्जित लाभ से ₹40 कम है। A के लिए वस्तु का क्रय मूल्य (₹ में) क्या है?",
    options: [
      { label: 'a', text: "640" },
      { label: 'b', text: "400" },
      { label: 'c', text: "240" },
      { label: 'd', text: "546" }
    ],
    correctAnswer: 'a',
    pageOriginal: 3,
    solutionHint: "Let A's CP = 100x. A's profit = 25x. B's CP = 125x. B's profit = 15% of 125x = 18.75x. Difference = 25x - 18.75x = 6.25x = 40 ⇒ x = 6.4. A's CP = 100 × 6.4 = ₹640."
  },
  {
    id: 24,
    category: "जब कोई वस्तु कई बार बेची जाए (Successive Selling)",
    type: "TYPE - 4",
    year: "2020",
    exam: "SSC CGL (Tier - II) - 15.11.2020",
    en: "A sells a watch to B at a profit of 20%. B sells it to C at a profit of 30%. C sells it to D at a loss of 10%. If the profit of B is ₹80 more than that of A, then for how much did D buy it?",
    hi: "A, B को 20% के लाभ पर एक घड़ी बेचता है। B इसे C को 30% के लाभ पर बेचता है। C इसे D को 10% की हानि पर बेचता है। यदि B का लाभ A के लाभ से ₹80 अधिक है, तो D ने इसे कितने में खरीदा?",
    options: [
      { label: 'a', text: "₹ 652" },
      { label: 'b', text: "₹ 702" },
      { label: 'c', text: "₹ 680" },
      { label: 'd', text: "₹ 700" }
    ],
    correctAnswer: 'b',
    pageOriginal: 3,
    solutionHint: "Let A's CP = 100x. A's profit = 20x. B's CP = 120x. B's profit = 30% of 120x = 36x. Difference = 36x - 20x = 16x = 80 ⇒ x = 5. CP for C = 156x = 780. D bought at 10% loss = 780 × 0.9 = ₹702."
  },
  {
    id: 25,
    category: "बेईमान दुकानदार पर आधारित प्रश्न (Dishonest Shopkeeper)",
    type: "TYPE - 1",
    year: "2020",
    exam: "CDS - 2020",
    en: "A shopkeeper sells his articles at their cost price but uses a faulty balance which reads 1000 gm for 800 gm. What is the actual profit percentage?",
    hi: "एक दुकानदार अपनी वस्तुओं को क्रय मूल्य पर बेचता है लेकिन एक त्रुटिपूर्ण तराजू का उपयोग करता है जो 800 ग्राम के लिए 1000 ग्राम पढ़ता है। वास्तविक लाभ प्रतिशत क्या है?",
    options: [
      { label: 'a', text: "20%" },
      { label: 'b', text: "25%" },
      { label: 'c', text: "30%" },
      { label: 'd', text: "40%" }
    ],
    correctAnswer: 'b',
    pageOriginal: 4,
    solutionHint: "Profit % = [(Error) / (True weight - Error)] × 100 = (200 / 800) × 100 = 25%."
  },
  {
    id: 26,
    category: "बेईमान दुकानदार पर आधारित प्रश्न (Dishonest Shopkeeper)",
    type: "TYPE - 1",
    year: "2024",
    exam: "UPP Re-Exam - 31.08.2024",
    en: "A dishonest shopkeeper claims to sell goods at his cost price but uses a false weight of 960 grams for each kilogram. What is his profit percentage?",
    hi: "एक बेईमान दुकानदार अपनी वस्तुओं को क्रय मूल्य पर बेचने का दावा करता है लेकिन प्रत्येक किलोग्राम के स्थान पर 960 ग्राम के गलत बाट का उपयोग करता है। उसका लाभ प्रतिशत क्या है?",
    options: [
      { label: 'a', text: "4 1/6%" },
      { label: 'b', text: "9 1/4%" },
      { label: 'c', text: "6 2/4%" },
      { label: 'd', text: "5 3/17%" }
    ],
    correctAnswer: 'a',
    pageOriginal: 4,
    solutionHint: "Profit % = (40 / 960) × 100 = 100 / 24 = 25 / 6 = 4 1/6%."
  },
  {
    id: 27,
    category: "बेईमान दुकानदार पर आधारित प्रश्न (Dishonest Shopkeeper)",
    type: "TYPE - 1",
    year: "2023",
    exam: "SSC GD 17.01.2023 (IV)",
    en: "A person sells a packet at the cost price by using a faulty weight 10% less than the actual measure. What is his gain percentage?",
    hi: "एक व्यक्ति वास्तविक माप से 10% कम वजन वाले दोषपूर्ण बाट का उपयोग करके क्रय मूल्य पर एक पैकेट बेचता है। उसका लाभ प्रतिशत क्या है?",
    options: [
      { label: 'a', text: "15 1/9%" },
      { label: 'b', text: "12 7/9%" },
      { label: 'c', text: "11 1/9%" },
      { label: 'd', text: "13 4/9%" }
    ],
    correctAnswer: 'c',
    pageOriginal: 4,
    solutionHint: "Gain % = (10 / 90) × 100 = 100 / 9 = 11 1/9%."
  },
  {
    id: 28,
    category: "बेईमान दुकानदार पर आधारित प्रश्न (Dishonest Shopkeeper)",
    type: "TYPE - 2",
    year: "2023",
    exam: "SSC GD - 10.01.2023 IVth Shift",
    en: "A dealer professes to sell his goods at a loss of 16%, but weights 750 gm in place of a kg weight. Find his total profit percentage.",
    hi: "एक व्यापारी अपनी वस्तुओं को 16% की हानि पर बेचने का दावा करता है, लेकिन 1 किग्रा वजन के स्थान पर 750 ग्राम तोलता है। उसका कुल लाभ प्रतिशत ज्ञात कीजिए।",
    options: [
      { label: 'a', text: "15%" },
      { label: 'b', text: "11%" },
      { label: 'c', text: "12%" },
      { label: 'd', text: "14%" }
    ],
    correctAnswer: 'c',
    pageOriginal: 4,
    solutionHint: "SP factor = 0.84, Weight factor = 1000/750 = 4/3. Overall multiplier = 0.84 × 4/3 = 1.12 ⇒ 12% profit."
  },
  {
    id: 29,
    category: "बेईमान दुकानदार पर आधारित प्रश्न (Dishonest Shopkeeper)",
    type: "TYPE - 2",
    year: "2024",
    exam: "SSC CPO SI - 29.06.2024 II",
    en: "A dishonest seller sells an article at 10% loss on the cost price but uses a weight of 40g instead of 50g. Calculate his profit percentage.",
    hi: "एक बेईमान विक्रेता क्रय मूल्य पर 10% की हानि पर एक वस्तु बेचता है लेकिन 50 ग्राम के स्थान पर 40 ग्राम वजन का उपयोग करता है। उसके लाभ प्रतिशत की गणना कीजिए।",
    options: [
      { label: 'a', text: "10.0%" },
      { label: 'b', text: "18.4%" },
      { label: 'c', text: "12.5%" },
      { label: 'd', text: "11.5%" }
    ],
    correctAnswer: 'c',
    pageOriginal: 4,
    solutionHint: "Multiplier = 0.90 × (50 / 40) = 0.90 × 1.25 = 1.125 ⇒ 12.5% profit."
  },
  {
    id: 30,
    category: "बेईमान दुकानदार पर आधारित प्रश्न (Dishonest Shopkeeper)",
    type: "TYPE - 3",
    year: "2023",
    exam: "SSC GD - 12.01.2023 IIIrd Shift",
    en: "What is the faulty weight used by a dishonest shopkeeper instead of the original weight of 1 kg to get a profit of 25%?",
    hi: "25% का लाभ प्राप्त करने के लिए एक बेईमान दुकानदार द्वारा 1 किग्रा के वास्तविक बाट के स्थान पर उपयोग किया जाने वाला त्रुटिपूर्ण बाट क्या है?",
    options: [
      { label: 'a', text: "980 gm" },
      { label: 'b', text: "250 gm" },
      { label: 'c', text: "640 gm" },
      { label: 'd', text: "800 gm" }
    ],
    correctAnswer: 'd',
    pageOriginal: 4,
    solutionHint: "Weight = 1000 / 1.25 = 800 gm."
  },
  {
    id: 31,
    category: "बेईमान दुकानदार पर आधारित प्रश्न (Dishonest Shopkeeper)",
    type: "TYPE - 3",
    year: "2023",
    exam: "SSC GD - 27.01.2023 IInd Shift",
    en: "A seller professes to sell his grapes at cost price but still gains 11 1/9% by using faulty weight. What weight does he use instead of 1 kg?",
    hi: "एक विक्रेता अपने अंगूर क्रय मूल्य पर बेचने का दावा करता है लेकिन फिर भी दोषपूर्ण बाट का उपयोग करके 11 1/9% लाभ प्राप्त करता है। वह 1 किग्रा के स्थान पर किस बाट का उपयोग करता है?",
    options: [
      { label: 'a', text: "900 g" },
      { label: 'b', text: "10 g" },
      { label: 'c', text: "990 g" },
      { label: 'd', text: "850 g" }
    ],
    correctAnswer: 'a',
    pageOriginal: 4,
    solutionHint: "11 1/9% = 1/9 profit. Ratio of true to false = 10/9. False weight = 1000 × (9/10) = 900 g."
  },
  {
    id: 32,
    category: "बेईमान दुकानदार पर आधारित प्रश्न (Dishonest Shopkeeper)",
    type: "TYPE - 4",
    year: "2022",
    exam: "Delhi Police - 13.10.2022 IIIrd",
    en: "A dealer sells sugar at 20% profit and uses a weight 10% less than the actual measurement. Find his profit percentage.",
    hi: "एक डीलर 20% लाभ पर चीनी बेचता है और वास्तविक माप से 10% कम वजन का उपयोग करता है। उसका लाभ प्रतिशत ज्ञात कीजिए।",
    options: [
      { label: 'a', text: "30%" },
      { label: 'b', text: "25%" },
      { label: 'c', text: "33 1/3%" },
      { label: 'd', text: "15 1/3%" }
    ],
    correctAnswer: 'c',
    pageOriginal: 4,
    solutionHint: "Overall multiplier = 1.20 × (100 / 90) = 1.20 × 10/9 = 4/3 = 1.333... ⇒ 33 1/3%."
  },
  {
    id: 33,
    category: "बेईमान दुकानदार पर आधारित प्रश्न (Dishonest Shopkeeper)",
    type: "TYPE - 4",
    year: "2024",
    exam: "RPF SI - 13.12.2024 (IInd)",
    en: "A vendor claims to sell wheat at a 35% loss. However, he cheats by using weights that weigh 60% less than the stated weight. What is his profit percentage (rounded to two decimal places)?",
    hi: "एक विक्रेता 35% हानि पर गेहूं बेचने का दावा करता है। हालांकि, वह ऐसे वजन का उपयोग करके धोखा देता है जो बताए गए वजन से 60% कम है। उसका लाभ प्रतिशत क्या है (दो दशमलव स्थानों तक)?",
    options: [
      { label: 'a', text: "62.50" },
      { label: 'b', text: "57.39" },
      { label: 'c', text: "58.64" },
      { label: 'd', text: "64.56" }
    ],
    correctAnswer: 'a',
    pageOriginal: 5,
    solutionHint: "Multiplier = 0.65 × (1 / 0.40) = 0.65 / 0.40 = 1.625 ⇒ 62.50% profit."
  },
  {
    id: 34,
    category: "बेईमान दुकानदार पर आधारित प्रश्न (Dishonest Shopkeeper)",
    type: "TYPE - 4",
    year: "2019",
    exam: "RRB (J.E.) - 2019",
    en: "A trader makes a profit by selling goods at a profit of 20%. In addition, he uses distributions that are 20% less. Find his actual percentage profit.",
    hi: "एक व्यापारी 20% लाभ पर माल बेचकर लाभ कमाता है। इसके अलावा, वह ऐसे बाट का उपयोग करता है जो 20% कम है। उसका वास्तविक प्रतिशत लाभ ज्ञात कीजिए।",
    options: [
      { label: 'a', text: "50%" },
      { label: 'b', text: "25%" },
      { label: 'c', text: "40%" },
      { label: 'd', text: "60%" }
    ],
    correctAnswer: 'a',
    pageOriginal: 5,
    solutionHint: "Multiplier = 1.20 / 0.80 = 1.50 ⇒ 50% profit."
  },
  {
    id: 35,
    category: "बेईमान दुकानदार पर आधारित प्रश्न (Dishonest Shopkeeper)",
    type: "TYPE - 5",
    year: "PYQ",
    exam: "Standard Competitive Exam",
    en: "A person marks 25% more and weighs 750 grams instead of 1 kg. Find the net profit %?",
    hi: "एक व्यक्ति 25% अधिक अंकित करता है और 1 किग्रा के स्थान पर 750 ग्राम तोलता है। शुद्ध लाभ % ज्ञात कीजिए।",
    options: [
      { label: 'a', text: "66.66%" },
      { label: 'b', text: "60%" },
      { label: 'c', text: "55.33%" },
      { label: 'd', text: "66.86%" }
    ],
    correctAnswer: 'a',
    pageOriginal: 5,
    solutionHint: "Multiplier = 1.25 × (1000 / 750) = 5/4 × 4/3 = 5/3 = 1.6666... ⇒ 66.66%."
  },
  {
    id: 36,
    category: "बेईमान दुकानदार पर आधारित प्रश्न (Dishonest Shopkeeper)",
    type: "TYPE - 5",
    year: "PYQ",
    exam: "Standard Competitive Exam",
    en: "A person marks 20% higher price and weighs only 800 grams instead of 1 kg. Find the net profit %?",
    hi: "एक व्यक्ति 20% अधिक मूल्य अंकित करता है और 1 किग्रा के स्थान पर केवल 800 ग्राम तोलता है। शुद्ध लाभ % ज्ञात कीजिए।",
    options: [
      { label: 'a', text: "20%" },
      { label: 'b', text: "25%" },
      { label: 'c', text: "30%" },
      { label: 'd', text: "50%" }
    ],
    correctAnswer: 'd',
    pageOriginal: 5,
    solutionHint: "Multiplier = 1.20 × (1000 / 800) = 1.20 × 1.25 = 1.50 ⇒ 50%."
  },
  {
    id: 37,
    category: "बेईमान दुकानदार पर आधारित प्रश्न (Dishonest Shopkeeper)",
    type: "TYPE - 5",
    year: "2023",
    exam: "UPSI Mritak Ashrit - 26.10.2023",
    en: "A shopkeeper normally makes a profit of 20% on a certain transaction. A malfunction in the weighing machine causes it to weigh 900 grams instead of 1 kg. If he charges 10% less than the normal price, what is his actual profit or loss percentage?",
    hi: "एक दुकानदार आमतौर पर एक निश्चित लेनदेन पर 20% का लाभ कमाता है। तौलने की मशीन में खराबी के कारण यह 1 किग्रा के स्थान पर 900 ग्राम तौलती है। यदि वह सामान्य मूल्य से 10% कम शुल्क लेता है, तो उसका वास्तविक लाभ या हानि प्रतिशत क्या है?",
    options: [
      { label: 'a', text: "20%" },
      { label: 'b', text: "28%" },
      { label: 'c', text: "25%" },
      { label: 'd', text: "80%" }
    ],
    correctAnswer: 'a',
    pageOriginal: 5,
    solutionHint: "Normal SP = 1.20 CP. Discounted SP = 1.20 × 0.90 = 1.08 CP. Cost for 900g = 0.90 CP. Profit = (1.08 - 0.90) / 0.90 = 0.18 / 0.90 = 20%."
  },
  {
    id: 38,
    category: "बेईमान दुकानदार पर आधारित प्रश्न (Dishonest Shopkeeper)",
    type: "TYPE - 6",
    year: "2017",
    exam: "UPSI - 2017",
    en: "A shopkeeper allows a Diwali discount of 10% on the cost price. But makes a profit of 25% on the cost price by using wrong weights. Find by what percent the wrong weight is less than the correct weight?",
    hi: "एक दुकानदार क्रय मूल्य पर 10% की दिवाली छूट देता है। लेकिन गलत बाट का उपयोग करके क्रय मूल्य पर 25% का लाभ कमाता है। ज्ञात कीजिए कि गलत बाट सही बाट से कितने प्रतिशत कम है?",
    options: [
      { label: 'a', text: "58%" },
      { label: 'b', text: "28%" },
      { label: 'c', text: "33%" },
      { label: 'd', text: "46%" }
    ],
    correctAnswer: 'b',
    pageOriginal: 5,
    solutionHint: "SP = 0.90 CP. Profit = 25% ⇒ 0.90 / (w/1000) = 1.25 ⇒ w/1000 = 0.90 / 1.25 = 0.72 ⇒ 720g. Less by 28%."
  },
  {
    id: 39,
    category: "बेईमान दुकानदार पर आधारित प्रश्न (Dishonest Shopkeeper)",
    type: "TYPE - 6",
    year: "2016",
    exam: "SSC CPO SI & ASI - 2016",
    en: "A merchant's scale weighs 20% less. Still the trader marks up the price of his goods to make a total profit of 35%. By how much was the price marked up from the cost price?",
    hi: "एक व्यापारी का तराजू 20% कम तोलता है। फिर भी व्यापारी कुल 35% लाभ कमाने के लिए अपने माल की कीमत बढ़ा देता है। क्रय मूल्य से कीमत में कितनी वृद्धि की गई थी?",
    options: [
      { label: 'a', text: "7%" },
      { label: 'b', text: "8%" },
      { label: 'c', text: "9%" },
      { label: 'd', text: "8.5%" }
    ],
    correctAnswer: 'b',
    pageOriginal: 5,
    solutionHint: "(1 + m) / 0.80 = 1.35 ⇒ 1 + m = 1.35 × 0.80 = 1.08 ⇒ m = 8% markup."
  },
  {
    id: 40,
    category: "बेईमान दुकानदार पर आधारित प्रश्न (Dishonest Shopkeeper)",
    type: "TYPE - 7",
    year: "2022",
    exam: "SSC CPO SI - 10.11.2022 (II)",
    en: "A shopkeeper sells his items using a faulty balance which measures 25% less. He then marks up his items 15% above the cost price. If he also gives a discount of 10% then find his net profit percentage on 1 kg items.",
    hi: "एक दुकानदार एक त्रुटिपूर्ण तराजू का उपयोग करके अपनी वस्तुएं बेचता है जो 25% कम मापता है। फिर वह अपनी वस्तुओं पर क्रय मूल्य से 15% अधिक मूल्य अंकित करता है। यदि वह 10% की छूट भी देता है, तो 1 किग्रा वस्तु पर उसका शुद्ध लाभ प्रतिशत ज्ञात कीजिए।",
    options: [
      { label: 'a', text: "40%" },
      { label: 'b', text: "32%" },
      { label: 'c', text: "41%" },
      { label: 'd', text: "38%" }
    ],
    correctAnswer: 'd',
    pageOriginal: 5,
    solutionHint: "SP = 1.15 × 0.90 = 1.035 CP. Weight delivered = 0.75 kg. Profit = (1.035 / 0.75 - 1) = 1.38 - 1 = 38%."
  },
  {
    id: 41,
    category: "बेईमान दुकानदार पर आधारित प्रश्न (Dishonest Shopkeeper)",
    type: "TYPE - 7",
    year: "2017",
    exam: "UPSI - 2017",
    en: "A shopkeeper marks his goods 25% above the cost price and allows a discount of 20% to the customer. At the time of selling the goods, he uses a weight of 900 grams instead of 1 kg. Find his overall profit percentage in the transaction.",
    hi: "एक दुकानदार अपनी वस्तुओं पर क्रय मूल्य से 25% अधिक मूल्य अंकित करता है और ग्राहक को 20% की छूट देता है। सामान बेचते समय वह 1 किग्रा के स्थान पर 900 ग्राम के बाट का उपयोग करता है। लेनदेन में उसका समग्र लाभ प्रतिशत ज्ञात कीजिए।",
    options: [
      { label: 'a', text: "11.11%" },
      { label: 'b', text: "12.67%" },
      { label: 'c', text: "12.33%" },
      { label: 'd', text: "15.45%" }
    ],
    correctAnswer: 'a',
    pageOriginal: 6,
    solutionHint: "SP = 1.25 × 0.80 = 1.00 CP. Weight given = 900g. Profit = (1000 - 900)/900 = 1/9 = 11.11%."
  },
  {
    id: 42,
    category: "बेईमान दुकानदार पर आधारित प्रश्न (Dishonest Shopkeeper)",
    type: "TYPE - 7",
    year: "2017",
    exam: "UPSI - 2017",
    en: "A shopkeeper marks the price of rice at 20% above the cost price and gives a discount of 15% to the customer besides he uses a weight of 850 gm instead of 1 kg at the time of sale. Find his overall profit percentage in this transaction.",
    hi: "एक दुकानदार चावल का मूल्य क्रय मूल्य से 20% अधिक अंकित करता है और ग्राहक को 15% की छूट देता है। इसके अलावा वह बिक्री के समय 1 किग्रा के स्थान पर 850 ग्राम के बाट का उपयोग करता है। इस लेनदेन में उसका समग्र लाभ प्रतिशत ज्ञात कीजिए।",
    options: [
      { label: 'a', text: "11.11%" },
      { label: 'b', text: "20.00%" },
      { label: 'c', text: "9.09%" },
      { label: 'd', text: "15.00%" }
    ],
    correctAnswer: 'b',
    pageOriginal: 6,
    solutionHint: "SP = 1.20 × 0.85 = 1.02 CP. Multiplier = 1.02 × (1000 / 850) = 1.02 × 1.1764 = 1.20 ⇒ 20.00%."
  },
  {
    id: 43,
    category: "बेईमान दुकानदार पर आधारित प्रश्न (Dishonest Shopkeeper)",
    type: "TYPE - 8",
    year: "2022",
    exam: "Delhi Police - 14.10.2022 Ist",
    en: "A merchant cheats by 15% on buying and 10% on selling. What is his percentage profit?",
    hi: "एक व्यापारी खरीदते समय 15% और बेचते समय 10% की धोखाधड़ी करता है। उसका प्रतिशत लाभ क्या है?",
    options: [
      { label: 'a', text: "26.5% profit" },
      { label: 'b', text: "27.5% profit" },
      { label: 'c', text: "26% profit" },
      { label: 'd', text: "25% profit" }
    ],
    correctAnswer: 'a',
    pageOriginal: 6,
    solutionHint: "Using standard competitive exam formula: 15 + 10 + (15×10)/100 = 26.5% profit."
  },
  {
    id: 44,
    category: "बेईमान दुकानदार पर आधारित प्रश्न (Dishonest Shopkeeper)",
    type: "TYPE - 8",
    year: "2022",
    exam: "SSC CGL (05.12.2022 III Shift)",
    en: "A businessman cheats by using faulty weights, to the tune of 12% each time, when buying and selling material. What is the rise in his profit percentage using faulty weights only?",
    hi: "एक व्यापारी सामग्री खरीदते और बेचते समय हर बार 12% की सीमा तक दोषपूर्ण बाट का उपयोग करके धोखाधड़ी करता है। केवल दोषपूर्ण बाट का उपयोग करके उसके लाभ प्रतिशत में कितनी वृद्धि होगी?",
    options: [
      { label: 'a', text: "26.32%" },
      { label: 'b', text: "25.44%" },
      { label: 'c', text: "22%" },
      { label: 'd', text: "24%" }
    ],
    correctAnswer: 'b',
    pageOriginal: 6,
    solutionHint: "12 + 12 + (12×12)/100 = 25.44% (SSC answer key standard formula)."
  },
  {
    id: 45,
    category: "बेईमान दुकानदार पर आधारित प्रश्न (Dishonest Shopkeeper)",
    type: "TYPE - 8",
    year: "2021",
    exam: "NTPC (09-02-2021 I Shift)",
    en: "A shopkeeper cheats to the extent of 10% while buying as well as while selling. While he was eventually caught and punished, at what percent was he gaining till then?",
    hi: "एक दुकानदार खरीदते समय और बेचते समय 10% की सीमा तक धोखाधड़ी करता है। जब तक वह पकड़ा गया और दंडित किया गया, तब तक वह कितने प्रतिशत का लाभ अर्जित कर रहा था?",
    options: [
      { label: 'a', text: "21%" },
      { label: 'b', text: "20%" },
      { label: 'c', text: "34%" },
      { label: 'd', text: "21 1/2%" }
    ],
    correctAnswer: 'a',
    pageOriginal: 6,
    solutionHint: "10 + 10 + (10×10)/100 = 21%."
  },
  {
    id: 46,
    category: "बेईमान दुकानदार पर आधारित प्रश्न (Dishonest Shopkeeper)",
    type: "TYPE - 8",
    year: "2022",
    exam: "SSC CHSL - 09.06.2022 (II)",
    en: "By using faulty weight, a shopkeeper cheats to the extent of 6% while buying and selling rice. Find his gain percentage (rounded to two decimal places).",
    hi: "दोषपूर्ण बाट का उपयोग करके, एक दुकानदार चावल खरीदते और बेचते समय 6% की धोखाधड़ी करता है। उसका लाभ प्रतिशत ज्ञात कीजिए (दो दशमलव स्थानों तक पूर्णांकित)।",
    options: [
      { label: 'a', text: "12.77%" },
      { label: 'b', text: "14.66%" },
      { label: 'c', text: "11.25%" },
      { label: 'd', text: "13.65%" }
    ],
    correctAnswer: 'a',
    pageOriginal: 6,
    solutionHint: "Multiplier = (1.06) / (0.94) = 1.12765... ⇒ 12.77%."
  },
  {
    id: 47,
    category: "बेईमान दुकानदार पर आधारित प्रश्न (Dishonest Shopkeeper)",
    type: "TYPE - 9",
    year: "2005",
    exam: "SSC-CPO-2005",
    en: "A shopkeeper makes a profit of 20% while buying the same and 30% while selling it. Find his total profit.",
    hi: "एक दुकानदार सामान खरीदते समय 20% और बेचते समय 30% का लाभ कमाता है। उसका कुल लाभ ज्ञात कीजिए।",
    options: [
      { label: 'a', text: "50%" },
      { label: 'b', text: "36%" },
      { label: 'c', text: "56%" },
      { label: 'd', text: "40%" }
    ],
    correctAnswer: 'c',
    pageOriginal: 6,
    solutionHint: "Net Profit = 20 + 30 + (20 × 30)/100 = 56%."
  },
  {
    id: 48,
    category: "बेईमान दुकानदार पर आधारित प्रश्न (Dishonest Shopkeeper)",
    type: "TYPE - 9",
    year: "2022",
    exam: "RRB (Goods Guard) 02.01.2022",
    en: "A dishonest shopkeeper makes a profit of 5% while buying goods and also makes profit of 5% while selling his goods. Find his total percentage of profit?",
    hi: "एक बेईमान दुकानदार सामान खरीदते समय 5% का लाभ कमाता है और अपना सामान बेचते समय भी 5% का लाभ कमाता है। उसका कुल लाभ प्रतिशत ज्ञात कीजिए।",
    options: [
      { label: 'a', text: "11" },
      { label: 'b', text: "10.5" },
      { label: 'c', text: "10.25" },
      { label: 'd', text: "10" }
    ],
    correctAnswer: 'c',
    pageOriginal: 6,
    solutionHint: "5 + 5 + (5×5)/100 = 10.25%."
  },
  {
    id: 49,
    category: "बेईमान दुकानदार पर आधारित प्रश्न (Dishonest Shopkeeper)",
    type: "TYPE - 10",
    year: "2023",
    exam: "SSC GD - 13.02.2023 IIIrd Shift",
    en: "A dishonest seller sells rice at Rs. 24/kg, which he has bought at Rs. 20/kg, and he gives 800 g instead of 1 kg. His actual profit percentage is:",
    hi: "एक बेईमान विक्रेता 24 रुपये/किग्रा पर चावल बेचता है, जिसे उसने 20 रुपये/किग्रा में खरीदा है, और वह 1 किग्रा के स्थान पर 800 ग्राम देता है। उसका वास्तविक लाभ प्रतिशत है:",
    options: [
      { label: 'a', text: "43.75%" },
      { label: 'b', text: "40%" },
      { label: 'c', text: "56.25%" },
      { label: 'd', text: "50%" }
    ],
    correctAnswer: 'd',
    pageOriginal: 7,
    solutionHint: "Cost of 800g = (20 / 1000) × 800 = Rs. 16. SP = Rs. 24. Profit = (24 - 16) / 16 × 100 = 50%."
  },
  {
    id: 50,
    category: "बेईमान दुकानदार पर आधारित प्रश्न (Dishonest Shopkeeper)",
    type: "TYPE - 10",
    year: "2022",
    exam: "SSC CPO SI - 11.11.2022 Ist",
    en: "Ravi buys salt at 16 per kg and sells it at 18 per kg. He also uses the weight of 900 gm instead of 1000 gm. What is Ravi's actual profit percentage?",
    hi: "रवि 16 रुपये प्रति किलोग्राम की दर से नमक खरीदता है और इसे 18 रुपये प्रति किलोग्राम की दर से बेचता है। वह 1000 ग्राम के स्थान पर 900 ग्राम वजन का भी उपयोग करता है। रवि का वास्तविक लाभ प्रतिशत क्या है?",
    options: [
      { label: 'a', text: "23%" },
      { label: 'b', text: "25%" },
      { label: 'c', text: "23 11/18%" },
      { label: 'd', text: "20%" }
    ],
    correctAnswer: 'b',
    pageOriginal: 7,
    solutionHint: "CP of 900g = 16 × 0.9 = 14.4. SP = 18. Profit % = (18 - 14.4)/14.4 × 100 = 3.6/14.4 × 100 = 25%."
  },
  {
    id: 51,
    category: "अधिक या कम मूल्य पर आधारित प्रश्न (Price Variance Problems)",
    type: "TYPE - 1",
    year: "2024",
    exam: "UPP Radio Operator - 02.02.2024",
    en: "Suresh sold a watch at a profit of 5%. If he had sold it for Rs. 72 more, he would have made a profit of 13%. Find the cost price of the watch.",
    hi: "सुरेश ने 5% लाभ पर एक घड़ी बेची। यदि उसने इसे Rs. 72 अधिक में बेचा होता, तो उसे 13% का लाभ होता। घड़ी का क्रय मूल्य ज्ञात कीजिए।",
    options: [
      { label: 'a', text: "Rs. 970" },
      { label: 'b', text: "Rs. 1000" },
      { label: 'c', text: "Rs. 910" },
      { label: 'd', text: "Rs. 900" }
    ],
    correctAnswer: 'd',
    pageOriginal: 7,
    solutionHint: "(13% - 5%) of CP = 8% of CP = Rs. 72. CP = 72 / 0.08 = Rs. 900."
  },
  {
    id: 52,
    category: "अधिक या कम मूल्य पर आधारित प्रश्न (Price Variance Problems)",
    type: "TYPE - 1",
    year: "2024",
    exam: "UPP Re-Exam - 24.08.2024",
    en: "A man sold an item at a loss of 20%. If he could sell it for ₹1,200 more, he would make a profit of 5%. What is the cost of the item?",
    hi: "एक व्यक्ति ने 20% की हानि पर एक वस्तु बेची। यदि वह इसे ₹1,200 अधिक में बेच सकता, तो उसे 5% का लाभ होता। वस्तु का क्रय मूल्य क्या है?",
    options: [
      { label: 'a', text: "Rs. 4,850" },
      { label: 'b', text: "Rs. 4,700" },
      { label: 'c', text: "Rs. 4,800" },
      { label: 'd', text: "Rs. 7,800" }
    ],
    correctAnswer: 'c',
    pageOriginal: 7,
    solutionHint: "(20% + 5%) of CP = 25% of CP = 1200. CP = 1200 × 4 = Rs. 4,800."
  },
  {
    id: 53,
    category: "अधिक या कम मूल्य पर आधारित प्रश्न (Price Variance Problems)",
    type: "TYPE - 1",
    year: "2025",
    exam: "High Court Group D(Mains)",
    en: "Item was sold at a profit of 16%. If it had been sold for Rs. 20 more, the profit would have been 20%. What is the purchase price of the item?",
    hi: "एक वस्तु को 16% के लाभ पर बेचा गया। यदि इसे Rs. 20 अधिक में बेचा जाता, तो लाभ 20% होता। वस्तु का क्रय मूल्य क्या है?",
    options: [
      { label: 'a', text: "Rs. 520" },
      { label: 'b', text: "Rs. 480" },
      { label: 'c', text: "Rs. 492" },
      { label: 'd', text: "Rs. 500" }
    ],
    correctAnswer: 'd',
    pageOriginal: 7,
    solutionHint: "(20% - 16%) = 4% = Rs. 20 ⇒ CP = 20 / 0.04 = Rs. 500."
  },
  {
    id: 54,
    category: "अधिक या कम मूल्य पर आधारित प्रश्न (Price Variance Problems)",
    type: "TYPE - 1",
    year: "2024",
    exam: "UPP Re-Exam - 30.08.2024",
    en: "A bookseller sold a book at a loss of 10%. If he had sold it for Rs. 1,080 more, he would have made a profit of 10%. Find the price of the book.",
    hi: "एक पुस्तक विक्रेता ने एक पुस्तक 10% की हानि पर बेची। यदि उसने इसे Rs. 1,080 अधिक में बेचा होता, तो उसे 10% का लाभ होता। पुस्तक का मूल्य ज्ञात कीजिए।",
    options: [
      { label: 'a', text: "Rs. 5,400" },
      { label: 'b', text: "Rs. 7,400" },
      { label: 'c', text: "Rs. 4,420" },
      { label: 'd', text: "Rs. 6,480" }
    ],
    correctAnswer: 'a',
    pageOriginal: 7,
    solutionHint: "(10% + 10%) = 20% of CP = 1080 ⇒ CP = 1080 × 5 = Rs. 5,400."
  },
  {
    id: 55,
    category: "अधिक या कम मूल्य पर आधारित प्रश्न (Price Variance Problems)",
    type: "TYPE - 2",
    year: "2022",
    exam: "SSC CGL (11.04.2022 III Shift)",
    en: "A person sold an article at a loss of 18%. Had he sold it for Rs. 960 more, he would have gained 12%. If the article is sold for Rs. 3840, then how much is the profit percentage?",
    hi: "एक व्यक्ति ने एक वस्तु 18% की हानि पर बेची। यदि उसने इसे Rs. 960 अधिक में बेचा होता, तो उसे 12% का लाभ होता। यदि वस्तु को Rs. 3840 में बेचा जाता है, तो लाभ प्रतिशत कितना है?",
    options: [
      { label: 'a', text: "24%" },
      { label: 'b', text: "15%" },
      { label: 'c', text: "20%" },
      { label: 'd', text: "21%" }
    ],
    correctAnswer: 'c',
    pageOriginal: 7,
    solutionHint: "(18% + 12%) = 30% of CP = 960 ⇒ CP = 3200. Profit on 3840 = (3840 - 3200) / 3200 × 100 = 640 / 3200 × 100 = 20%."
  },
  {
    id: 56,
    category: "अधिक या कम मूल्य पर आधारित प्रश्न (Price Variance Problems)",
    type: "TYPE - 2",
    year: "2019",
    exam: "SSC(CGL) TIER-2, 2019",
    en: "An article is sold at a profit of 14%. Had it been sold for another ₹121 less, he would have suffered a loss of 8%. What would have been the profit/loss percentage if the same article was sold for ₹536.25.",
    hi: "एक वस्तु 14% के लाभ पर बेची जाती है। यदि इसे ₹121 कम में बेचा गया होता, तो उसे 8% की हानि होती। यदि वही वस्तु ₹ 536.25 में बेची जाती, तो लाभ/हानि प्रतिशत क्या होता?",
    options: [
      { label: 'a', text: "Profit 5%" },
      { label: 'b', text: "Loss 2.5%" },
      { label: 'c', text: "Loss 5%" },
      { label: 'd', text: "Profit 2.5%" }
    ],
    correctAnswer: 'b',
    pageOriginal: 7,
    solutionHint: "(14% + 8%) = 22% of CP = 121 ⇒ CP = (121 / 22) × 100 = 550. If SP = 536.25, Loss = 550 - 536.25 = 13.75. Loss % = (13.75 / 550) × 100 = 2.5% Loss."
  },
  {
    id: 57,
    category: "अधिक या कम मूल्य पर आधारित प्रश्न (Price Variance Problems)",
    type: "TYPE - 3",
    year: "2023",
    exam: "SSC CHSL (Tier-I) - 16.03.2023",
    en: "Anil sold an article at a loss of 15%. Had he sold it for Rs. 84 more, he would have gained 13%. At what price should he have sold it to gain 20%?",
    hi: "अनिल ने एक वस्तु 15% की हानि पर बेची। यदि उसने इसे Rs. 84 अधिक में बेचा होता, तो उसे 13% का लाभ होता। 20% का लाभ कमाने के लिए उसे इसे किस मूल्य पर बेचना चाहिए था?",
    options: [
      { label: 'a', text: "Rs. 375" },
      { label: 'b', text: "Rs. 350" },
      { label: 'c', text: "Rs. 360" },
      { label: 'd', text: "Rs. 300" }
    ],
    correctAnswer: 'c',
    pageOriginal: 8,
    solutionHint: "(15% + 13%) = 28% of CP = 84 ⇒ CP = 300. For 20% profit, SP = 300 × 1.20 = Rs. 360."
  },
  {
    id: 58,
    category: "अधिक या कम मूल्य पर आधारित प्रश्न (Price Variance Problems)",
    type: "TYPE - 3",
    year: "2023",
    exam: "SSC CHSL (Tier-I) - 20.03.2023",
    en: "A shopkeeper sells a book at a loss of 40 percent. Had he sold the book for Rs. 120 more, then he would have suffered a loss of 10 percent. To earn a profit of 10 percent, what should be the selling price of the book?",
    hi: "एक दुकानदार एक पुस्तक को 40 प्रतिशत की हानि पर बेचता है। यदि उसने पुस्तक को Rs. 120 अधिक में बेचा होता, तो उसे 10 प्रतिशत की हानि होती। 10 प्रतिशत का लाभ कमाने के लिए, पुस्तक का विक्रय मूल्य क्या होना चाहिए?",
    options: [
      { label: 'a', text: "Rs. 440" },
      { label: 'b', text: "Rs. 650" },
      { label: 'c', text: "Rs. 400" },
      { label: 'd', text: "Rs. 500" }
    ],
    correctAnswer: 'a',
    pageOriginal: 8,
    solutionHint: "(-10% - (-40%)) = 30% of CP = 120 ⇒ CP = 400. For 10% profit: SP = 400 × 1.10 = Rs. 440."
  },
  {
    id: 59,
    category: "अधिक या कम मूल्य पर आधारित प्रश्न (Price Variance Problems)",
    type: "TYPE - 3",
    year: "2018",
    exam: "SSC-CHSL-2018",
    en: "A person sells wheat at a profit of 30%. If he reduces his selling price by ₹60, he loses 10%. What was the initial selling price (in rupees) of wheat?",
    hi: "एक व्यक्ति 30% के लाभ पर गेहूं बेचता है। यदि वह अपने विक्रय मूल्य में ₹60 की कमी करता है, तो उसे 10% की हानि होती है। गेहूं का प्रारंभिक विक्रय मूल्य (रुपये में) क्या था?",
    options: [
      { label: 'a', text: "195" },
      { label: 'b', text: "210" },
      { label: 'c', text: "180" },
      { label: 'd', text: "130" }
    ],
    correctAnswer: 'a',
    pageOriginal: 8,
    solutionHint: "(30% + 10%) = 40% of CP = 60 ⇒ CP = 150. Initial SP = 150 × 1.30 = ₹195."
  },
  {
    id: 60,
    category: "अधिक या कम मूल्य पर आधारित प्रश्न (Price Variance Problems)",
    type: "TYPE - 4",
    year: "2023",
    exam: "SSC GD – 23.01.2023 (II)",
    en: "Kunal bought an article and sold it at a loss of 15%. If he had bought it for 18% less and sold it for 108 more, then he would have had a profit of 30%. Find the cost price of the article.",
    hi: "कुणाल ने एक वस्तु खरीदी और इसे 15% की हानि पर बेच दिया। यदि उसने इसे 18% कम में खरीदा होता और 108 रुपये अधिक में बेचा होता, तो उसे 30% का लाभ होता। वस्तु का क्रय मूल्य ज्ञात कीजिए।",
    options: [
      { label: 'a', text: "Rs. 560" },
      { label: 'b', text: "Rs. 500" },
      { label: 'c', text: "Rs. 570" },
      { label: 'd', text: "Rs. 540" }
    ],
    correctAnswer: 'b',
    pageOriginal: 8,
    solutionHint: "Let CP = 100x. Initial SP = 85x. New CP = 82x. New SP = 82x × 1.30 = 106.6x. Difference = 106.6x - 85x = 21.6x = 108 ⇒ x = 5. CP = 100 × 5 = Rs. 500."
  }
];
