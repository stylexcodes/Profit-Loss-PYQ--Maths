import { Question } from '../types';

export const questionsPart2: Question[] = [
  {
    id: 61,
    category: "अधिक या कम मूल्य पर आधारित प्रश्न (Price Variance Problems)",
    type: "TYPE - 4",
    year: "2024",
    exam: "UPP Re-Exam - 23.08.2024",
    en: "A man sold a horse at a 25% profit. If he had bought it for 35% less and sold it for ₹ 732 less, he would have made a profit of 36%. What was the purchase price of the horse?",
    hi: "एक व्यक्ति ने एक घोड़ा 25% लाभ पर बेचा। यदि उसने इसे 35% कम पर खरीदा होता और ₹ 732 कम पर बेचा होता, तो उसे 36% का लाभ होता। घोड़े का क्रय मूल्य क्या था?",
    options: [
      { label: 'a', text: "Rs. 1500" },
      { label: 'b', text: "Rs. 2500" },
      { label: 'c', text: "Rs. 2000" },
      { label: 'd', text: "Rs. 1800" }
    ],
    correctAnswer: 'c',
    pageOriginal: 8,
    solutionHint: "Let CP = 100x. SP1 = 125x. CP2 = 65x. SP2 = 65x × 1.36 = 88.4x. Difference = 125x - 88.4x = 36.6x = 732 ⇒ x = 20. CP = 100 × 20 = Rs. 2000."
  },
  {
    id: 62,
    category: "अधिक या कम मूल्य पर आधारित प्रश्न (Price Variance Problems)",
    type: "TYPE - 4",
    year: "2024",
    exam: "UPP - 18.02.2024 Ist",
    en: "A man sells an item at a profit of 25%. If he had bought it for 20% less and sold it for Rs. 12.60 less, he would have made a profit of 30%. Find the cost price of the item.",
    hi: "एक व्यक्ति 25% के लाभ पर एक वस्तु बेचता है। यदि उसने इसे 20% कम में खरीदा होता और इसे Rs. 12.60 कम में बेचा होता, तो उसे 30% का लाभ होता। वस्तु का क्रय मूल्य ज्ञात कीजिए।",
    options: [
      { label: 'a', text: "Rs. 60" },
      { label: 'b', text: "Rs. 50" },
      { label: 'c', text: "Rs. 55" },
      { label: 'd', text: "Rs. 45" }
    ],
    correctAnswer: 'a',
    pageOriginal: 8,
    solutionHint: "125x - (80x × 1.30) = 125x - 104x = 21x = 12.60 ⇒ x = 0.60. CP = 100 × 0.60 = Rs. 60."
  },
  {
    id: 63,
    category: "अधिक या कम मूल्य पर आधारित प्रश्न (Price Variance Problems)",
    type: "TYPE - 4",
    year: "2017",
    exam: "UPSI - 2017",
    en: "A watch is sold at a profit of 16%. If the watch were bought at a price 10% lower and sold at a price of Rs. 14 lower, a profit of 25% would be made. Find the cost price of the watch?",
    hi: "एक घड़ी 16% के लाभ पर बेची जाती है। यदि घड़ी 10% कम कीमत पर खरीदी गई होती और 14 रुपये कम कीमत पर बेची गई होती, तो 25% का लाभ होता। घड़ी का क्रय मूल्य ज्ञात कीजिए।",
    options: [
      { label: 'a', text: "Rs. 420" },
      { label: 'b', text: "Rs. 400" },
      { label: 'c', text: "Rs. 360" },
      { label: 'd', text: "Rs. 380" }
    ],
    correctAnswer: 'b',
    pageOriginal: 8,
    solutionHint: "116x - (90x × 1.25) = 116x - 112.5x = 3.5x = 14 ⇒ x = 4. CP = Rs. 400."
  },
  {
    id: 64,
    category: "अधिक या कम मूल्य पर आधारित प्रश्न (Price Variance Problems)",
    type: "TYPE - 4",
    year: "2025",
    exam: "RRB NTPC Graduate - 24.01.2025",
    en: "Akash sold an item at a loss of 17%. If he had bought the item for 5% less and sold it for Rs. 310 more, he would have made a profit of 20%. Find the purchase price (in Rs.) of the item.",
    hi: "आकाश ने एक वस्तु 17% की हानि पर बेची। यदि उसने वस्तु को 5% कम पर खरीदा होता और Rs. 310 अधिक में बेचा होता, तो उसे 20% का लाभ होता। वस्तु का क्रय मूल्य (Rs. में) ज्ञात कीजिए।",
    options: [
      { label: 'a', text: "1000" },
      { label: 'b', text: "674" },
      { label: 'c', text: "785" },
      { label: 'd', text: "1215" }
    ],
    correctAnswer: 'a',
    pageOriginal: 8,
    solutionHint: "New SP = 95x × 1.20 = 114x. Old SP = 83x. Difference = 114x - 83x = 31x = 310 ⇒ x = 10. CP = 1000."
  },
  {
    id: 65,
    category: "संयुक्त क्रय मूल्य पर आधारित प्रश्न (Combined Cost Price)",
    type: "TYPE - 1",
    year: "2023",
    exam: "SSC GD - 02.02.2023 (IInd)",
    en: "Lata bought two fans for 2,160. By selling one fan at a profit of 15% and the other at a loss of 9%, he neither gains nor loses in the whole transaction. Find the cost price of each fan.",
    hi: "लता ने 2,160 रुपये में दो पंखे खरीदे। एक पंखे को 15% लाभ पर और दूसरे को 9% हानि पर बेचने पर पूरे सौदे में उसे न तो कोई लाभ होता है और न ही कोई हानि। प्रत्येक पंखे का क्रय मूल्य ज्ञात कीजिए।",
    options: [
      { label: 'a', text: "Rs. 640, Rs. 1,520" },
      { label: 'b', text: "Rs. 1,000, Rs. 1,160" },
      { label: 'c', text: "Rs. 960, Rs. 1,200" },
      { label: 'd', text: "Rs. 810, Rs. 1,350" }
    ],
    correctAnswer: 'd',
    pageOriginal: 9,
    solutionHint: "15% of CP1 = 9% of CP2 ⇒ CP1/CP2 = 9/15 = 3/5. Total ratio = 8 units = 2160 ⇒ 1 unit = 270. CP1 = 810, CP2 = 1350."
  },
  {
    id: 66,
    category: "संयुक्त क्रय मूल्य पर आधारित प्रश्न (Combined Cost Price)",
    type: "TYPE - 1",
    year: "2021",
    exam: "NTPC (27-01-2021-III)",
    en: "A man buys two tables for Rs 1,350. He sells one with a loss of 6% and sells the other to gain 7 1/2%. Overall, he neither loses nor gains. What is the difference between the cost price of the two tables?",
    hi: "एक व्यक्ति 1,350 रुपये में दो मेज खरीदता है। वह एक को 6% की हानि पर और दूसरे को 7 1/2% के लाभ पर बेचता है। कुल मिलाकर उसे न तो कोई हानि होती है और न ही लाभ। दोनों मेजों के क्रय मूल्य के बीच का अंतर क्या है?",
    options: [
      { label: 'a', text: "Rs. 125" },
      { label: 'b', text: "Rs. 50" },
      { label: 'c', text: "Rs. 150" },
      { label: 'd', text: "Rs. 100" }
    ],
    correctAnswer: 'c',
    pageOriginal: 9,
    solutionHint: "6 × T1 = 7.5 × T2 ⇒ T1/T2 = 7.5 / 6 = 5 / 4. Total = 9 units = 1350 ⇒ 1 unit = 150. Difference = 5 - 4 = 1 unit = Rs. 150."
  },
  {
    id: 67,
    category: "संयुक्त क्रय मूल्य पर आधारित प्रश्न (Combined Cost Price)",
    type: "TYPE - 2",
    year: "2020",
    exam: "SSC- CGL(Tier-II) - 18.11.2020",
    en: "Anil bought two articles A and B for the price of total of Rs. 10,000. He sold article A at 15% profit and article B at 10% loss. He did not make any profit or loss in the whole transaction. Find the selling price of article A.",
    hi: "अनिल ने कुल 10,000 रुपये की कीमत पर दो वस्तुएं A और B खरीदीं। उसने वस्तु A को 15% लाभ पर और वस्तु B को 10% हानि पर बेचा। पूरे सौदे में उसे कोई लाभ या हानि नहीं हुई। वस्तु A का विक्रय मूल्य ज्ञात कीजिए।",
    options: [
      { label: 'a', text: "Rs. 4,500" },
      { label: 'b', text: "Rs. 4,600" },
      { label: 'c', text: "Rs. 5,400" },
      { label: 'd', text: "Rs. 4,200" }
    ],
    correctAnswer: 'b',
    pageOriginal: 9,
    solutionHint: "15% A = 10% B ⇒ A/B = 2/3. Total 5 units = 10,000 ⇒ A's CP = 4000. SP of A = 4000 × 1.15 = Rs. 4,600."
  },
  {
    id: 68,
    category: "संयुक्त क्रय मूल्य पर आधारित प्रश्न (Combined Cost Price)",
    type: "TYPE - 2",
    year: "2020",
    exam: "SSC - CGL - 2020",
    en: "A shopkeeper buys two books for ₹ 300, he sells the first book at a profit of 20% and the second book at a loss of 10%. What is the selling price of the first book? If there is no profit or loss in the whole transaction?",
    hi: "एक दुकानदार ₹ 300 में दो पुस्तकें खरीदता है, वह पहली पुस्तक को 20% लाभ पर और दूसरी पुस्तक को 10% हानि पर बेचता है। यदि पूरे सौदे में न तो लाभ होता है और न ही हानि, तो पहली पुस्तक का विक्रय मूल्य क्या है?",
    options: [
      { label: 'a', text: "₹115" },
      { label: 'b', text: "₹125" },
      { label: 'c', text: "₹110" },
      { label: 'd', text: "₹120" }
    ],
    correctAnswer: 'd',
    pageOriginal: 9,
    solutionHint: "20% B1 = 10% B2 ⇒ B1/B2 = 1/2. B1's CP = 100. SP of B1 = 100 × 1.20 = ₹120."
  },
  {
    id: 69,
    category: "संयुक्त क्रय मूल्य पर आधारित प्रश्न (Combined Cost Price)",
    type: "TYPE - 3",
    year: "2025",
    exam: "Uttarakhand (S.I.) - 12.01.2025",
    en: "A man bought a horse and a cow for Rs. 3,000. He sold the horse at a 20% profit and the cow at a 10% loss. This resulted in a 2% profit on the total transaction. The purchase price of the horse is:",
    hi: "एक व्यक्ति ने 3,000 रुपये में एक घोड़ा और एक गाय खरीदी। उसने घोड़े को 20% लाभ पर और गाय को 10% हानि पर बेचा। इससे कुल लेनदेन पर 2% का लाभ हुआ। घोड़े का क्रय मूल्य है:",
    options: [
      { label: 'a', text: "Rs. 1800" },
      { label: 'b', text: "Rs. 1200" },
      { label: 'c', text: "Rs. 2000" },
      { label: 'd', text: "Rs. 1600" }
    ],
    correctAnswer: 'b',
    pageOriginal: 9,
    solutionHint: "By alligation: Horse (+20), Cow (-10), Mean (+2). Ratio = (2 - (-10)) : (20 - 2) = 12 : 18 = 2 : 3. Horse CP = 3000 × (2/5) = Rs. 1200."
  },
  {
    id: 70,
    category: "संयुक्त क्रय मूल्य पर आधारित प्रश्न (Combined Cost Price)",
    type: "TYPE - 3",
    year: "2024",
    exam: "SSC CGL - 24.09.2024 IInd",
    en: "A man bought a table and a sofa for Rs. 28,000. He sold the sofa at a profit of 10% and the table at a profit of 15.25%. If his overall profit was 13%, find the difference (in Rs.) between the cost price of the sofa and the table.",
    hi: "एक व्यक्ति ने 28,000 रुपये में एक मेज और एक सोफा खरीदा। उसने सोफे को 10% लाभ पर और मेज को 15.25% लाभ पर बेचा। यदि उसका कुल लाभ 13% था, तो सोफे और मेज के क्रय मूल्य के बीच का अंतर (रुपये में) ज्ञात कीजिए।",
    options: [
      { label: 'a', text: "1500" },
      { label: 'b', text: "4000" },
      { label: 'c', text: "2500" },
      { label: 'd', text: "5000" }
    ],
    correctAnswer: 'b',
    pageOriginal: 9,
    solutionHint: "Alligation: Sofa (10%), Table (15.25%), Overall (13%). Ratio = (15.25 - 13) : (13 - 10) = 2.25 : 3 = 3 : 4. Total = 7 units = 28000 ⇒ 1 unit = 4000. Difference = 4000."
  },
  {
    id: 71,
    category: "संयुक्त क्रय मूल्य पर आधारित प्रश्न (Combined Cost Price)",
    type: "TYPE - 3",
    year: "2024",
    exam: "UPP Re-Exam - 25.08.2024",
    en: "A man bought a horse and a cart for Rs 80,000. He sold the horse at a profit of 10% and the cart at a loss of 5%. He made a profit of 1% on the entire transaction, so what was the cost price of the horse?",
    hi: "एक व्यक्ति ने 80,000 रुपये में एक घोड़ा और एक गाड़ी खरीदी। उसने घोड़े को 10% लाभ पर और गाड़ी को 5% हानि पर बेचा। उसने पूरे सौदे पर 1% का लाभ कमाया, तो घोड़े का क्रय मूल्य क्या था?",
    options: [
      { label: 'a', text: "30000" },
      { label: 'b', text: "32000" },
      { label: 'c', text: "18000" },
      { label: 'd', text: "20000" }
    ],
    correctAnswer: 'b',
    pageOriginal: 9,
    solutionHint: "Alligation: Horse (+10), Cart (-5), Mean (+1). Ratio = (1 - (-5)) : (10 - 1) = 6 : 9 = 2 : 3. Horse CP = 80000 × (2/5) = Rs. 32,000."
  },
  {
    id: 72,
    category: "संयुक्त क्रय मूल्य पर आधारित प्रश्न (Combined Cost Price)",
    type: "TYPE - 3",
    year: "2025",
    exam: "EMRS - 13.12.2025",
    en: "The cost price of item A is Rs. 400 more than the cost price of item B. Item A is sold at a 10% loss and item B at a 60% profit. If the total transaction yields a profit of 20%, what is the selling price of item A?",
    hi: "वस्तु A का क्रय मूल्य वस्तु B के क्रय मूल्य से 400 रुपये अधिक है। वस्तु A को 10% हानि पर और वस्तु B को 60% लाभ पर बेचा जाता है। यदि कुल सौदे पर 20% का लाभ होता है, तो वस्तु A का विक्रय मूल्य क्या है?",
    options: [
      { label: 'a', text: "Rs. 1360" },
      { label: 'b', text: "Rs. 1500" },
      { label: 'c', text: "Rs. 1440" },
      { label: 'd', text: "Rs. 1600" }
    ],
    correctAnswer: 'c',
    pageOriginal: 9,
    solutionHint: "Alligation: A (-10), B (+60), Mean (+20). Ratio = (60 - 20) : (20 - (-10)) = 40 : 30 = 4 : 3. Difference = 1 unit = 400 ⇒ CP_A = 1600. SP of A = 1600 × 0.90 = Rs. 1440."
  },
  {
    id: 73,
    category: "संयुक्त क्रय मूल्य पर आधारित प्रश्न (Combined Cost Price)",
    type: "TYPE - 3",
    year: "2025",
    exam: "CDS - 13.04.2025",
    en: "A person sells item X for Rs. 34,500 and makes a profit of 15%. He sells item Y at a loss of 10%. The person makes neither a loss nor a profit from these two transactions combined. What is the selling price of item Y?",
    hi: "एक व्यक्ति वस्तु X को 34,500 रुपये में बेचता है और 15% का लाभ कमाता है। वह वस्तु Y को 10% की हानि पर बेचता है। इन दोनों लेन-देनों को मिलाकर व्यक्ति को न तो हानि होती है और न ही लाभ। वस्तु Y का विक्रय मूल्य क्या है?",
    options: [
      { label: 'a', text: "Rs. 40,000" },
      { label: 'b', text: "Rs. 40,500" },
      { label: 'c', text: "Rs. 41,000" },
      { label: 'd', text: "Rs. 51,500" }
    ],
    correctAnswer: 'b',
    pageOriginal: 10,
    solutionHint: "CP of X = 34500 / 1.15 = 30,000. Profit on X = 4500. Loss on Y = 10% of CP_Y = 4500 ⇒ CP_Y = 45,000. SP of Y = 45000 - 4500 = Rs. 40,500."
  },
  {
    id: 74,
    category: "संयुक्त क्रय मूल्य पर आधारित प्रश्न (Combined Cost Price)",
    type: "TYPE - 4",
    year: "2022",
    exam: "UPPCS (CSAT) - 12.06.2022",
    en: "A person buys 4 horses and 9 cows for ₹ 13,400. If he sells the horses at 10% profit and cows at 20% profit, then he earns a total profit of ₹ 1,880. What is the cost of a cow?",
    hi: "एक व्यक्ति ₹ 13,400 में 4 घोड़े और 9 गायें खरीदता है। यदि वह घोड़ों को 10% लाभ पर और गायों को 20% लाभ पर बेचता है, तो वह कुल ₹ 1,880 का लाभ कमाता है। एक गाय की लागत क्या है?",
    options: [
      { label: 'a', text: "₹ 400" },
      { label: 'b', text: "₹ 900" },
      { label: 'c', text: "₹ 600" },
      { label: 'd', text: "None of the above" }
    ],
    correctAnswer: 'c',
    pageOriginal: 10,
    solutionHint: "0.10H + 0.20C = 1880, H + C = 13400. Multiply 2nd by 0.10: 0.10H + 0.10C = 1340. 0.10C = 540 ⇒ Total Cow cost = 5400. Cost of 1 cow = 5400 / 9 = ₹ 600."
  },
  {
    id: 75,
    category: "संयुक्त क्रय मूल्य पर आधारित प्रश्न (Combined Cost Price)",
    type: "TYPE - 4",
    year: "2019",
    exam: "SSC - CGL - 2019",
    en: "Sushma bought 6 tables and 12 chairs for 12,000. He sold the table at a profit of 15% and the chairs at a loss of 10%. If he gets a total profit of Rs. 300, the total cost of the tables was:",
    hi: "सुषमा ने 12,000 रुपये में 6 मेजें और 12 कुर्सियाँ खरीदीं। उसने मेज को 15% लाभ पर और कुर्सियों को 10% हानि पर बेचा। यदि उसे कुल 300 रुपये का लाभ प्राप्त होता है, तो मेजों की कुल लागत क्या थी?",
    options: [
      { label: 'a', text: "Rs. 5,400" },
      { label: 'b', text: "Rs. 6,000" },
      { label: 'c', text: "Rs. 5,000" },
      { label: 'd', text: "Rs. 4,800" }
    ],
    correctAnswer: 'b',
    pageOriginal: 10,
    solutionHint: "0.15T - 0.10C = 300, T + C = 12000. 0.15T - 0.10(12000 - T) = 300 ⇒ 0.25T = 1500 ⇒ T = Rs. 6,000."
  },
  {
    id: 76,
    category: "संयुक्त क्रय मूल्य पर आधारित प्रश्न (Combined Cost Price)",
    type: "TYPE - 4",
    year: "2019",
    exam: "RRB (J.E.) - 2019",
    en: "A person buys two tables for ₹ 2000. Later he sells one of them at a loss of 5% and the other at a gain of 5%, thereby making a loss of ₹ 20. Find the cost price of both the tables.",
    hi: "एक व्यक्ति ₹ 2000 में दो मेजें खरीदता है। बाद में वह उनमें से एक को 5% की हानि पर और दूसरे को 5% के लाभ पर बेचता है, जिससे ₹ 20 की हानि होती है। दोनों मेजों का क्रय मूल्य ज्ञात कीजिए।",
    options: [
      { label: 'a', text: "₹ 1200, ₹ 800" },
      { label: 'b', text: "₹ 1400, ₹ 600" },
      { label: 'c', text: "₹ 1050, ₹ 950" },
      { label: 'd', text: "₹ 1300, ₹ 700" }
    ],
    correctAnswer: 'a',
    pageOriginal: 10,
    solutionHint: "-0.05T1 + 0.05T2 = -20 ⇒ T1 - T2 = 400. T1 + T2 = 2000. T1 = 1200, T2 = 800."
  },
  {
    id: 77,
    category: "समान विक्रय मूल्य पर आधारित प्रश्न (Equal Selling Price)",
    type: "TYPE - 1",
    year: "2023",
    exam: "CRPF (Head Constable) 23.02.2023",
    en: "The sum of the cost prices of two articles is Rs. 2,310. One of them is sold at a 50% profit, while the other at a 25% profit. What is the cost price of the one which is sold at 50% profit if the selling prices of both are the same?",
    hi: "दो वस्तुओं के क्रय मूल्यों का योग 2,310 रुपये है। उनमें से एक को 50% लाभ पर, जबकि दूसरी को 25% लाभ पर बेचा जाता है। यदि दोनों का विक्रय मूल्य समान है, तो 50% लाभ पर बेची गई वस्तु का क्रय मूल्य क्या है?",
    options: [
      { label: 'a', text: "Rs. 1050" },
      { label: 'b', text: "Rs. 1150" },
      { label: 'c', text: "Rs. 1320" },
      { label: 'd', text: "Rs. 1400" }
    ],
    correctAnswer: 'a',
    pageOriginal: 10,
    solutionHint: "1.50 CP1 = 1.25 CP2 ⇒ CP1 / CP2 = 1.25 / 1.50 = 5 / 6. CP1 = 2310 × (5/11) = Rs. 1050."
  },
  {
    id: 78,
    category: "समान विक्रय मूल्य पर आधारित प्रश्न (Equal Selling Price)",
    type: "TYPE - 1",
    year: "2024",
    exam: "SSC CPO SI - 29.06.2024 II",
    en: "A person bought two buffaloes for Rs 11,520. Sold one buffalo at a loss of 15% and sold the other buffalo at a profit of 19%. If the selling price of both the buffaloes is equal, then find the purchasing price of the first buffalo.",
    hi: "एक व्यक्ति ने 11,520 रुपये में दो भैंसें खरीदीं। एक भैंस को 15% की हानि पर और दूसरी भैंस को 19% के लाभ पर बेचा। यदि दोनों भैंसों का विक्रय मूल्य बराबर है, तो पहली भैंस का क्रय मूल्य ज्ञात कीजिए।",
    options: [
      { label: 'a', text: "Rs. 6,710" },
      { label: 'b', text: "Rs. 6,720" },
      { label: 'c', text: "Rs. 6,715" },
      { label: 'd', text: "Rs. 6,700" }
    ],
    correctAnswer: 'b',
    pageOriginal: 10,
    solutionHint: "0.85 CP1 = 1.19 CP2 ⇒ CP1/CP2 = 1.19 / 0.85 = 7 / 5. CP1 = 11520 × (7/12) = 960 × 7 = Rs. 6,720."
  },
  {
    id: 79,
    category: "समान विक्रय मूल्य पर आधारित प्रश्न (Equal Selling Price)",
    type: "TYPE - 1",
    year: "2024",
    exam: "UPP Re-Exam - 24.08.2024",
    en: "At a village trade fair, a man buys a horse and a camel for a total of Rs. 5,125. He sells the horse at a profit of 25% and the camel at a loss of 20%. If he sells both animals at the same price, what was the cost price of the cheaper animal?",
    hi: "एक ग्रामीण व्यापार मेले में, एक व्यक्ति कुल 5,125 रुपये में एक घोड़ा और एक ऊंट खरीदता है। वह घोड़े को 25% लाभ पर और ऊंट को 20% हानि पर बेचता है। यदि वह दोनों जानवरों को समान मूल्य पर बेचता है, तो सस्ते जानवर का क्रय मूल्य क्या था?",
    options: [
      { label: 'a', text: "Rs. 2,500" },
      { label: 'b', text: "Rs. 6,900" },
      { label: 'c', text: "Rs. 2,000" },
      { label: 'd', text: "Rs. 8,500" }
    ],
    correctAnswer: 'c',
    pageOriginal: 10,
    solutionHint: "1.25 H = 0.80 C ⇒ H/C = 0.80 / 1.25 = 16 / 25. Total 41 units = 5125 ⇒ 1 unit = 125. Cheaper animal (Horse) = 16 × 125 = Rs. 2,000."
  },
  {
    id: 80,
    category: "समान विक्रय मूल्य पर आधारित प्रश्न (Equal Selling Price)",
    type: "TYPE - 2",
    year: "2022",
    exam: "RRB NTPC (CBT-2) 16.06.2022",
    en: "A person bought articles A and B for a total of Rs. 2312. He sold A at a loss of 16% and B at a gain of 20%. The selling price of A and B was equal. Find the difference between the cost prices of A and B.",
    hi: "एक व्यक्ति ने कुल 2312 रुपये में वस्तुएं A और B खरीदीं। उसने A को 16% की हानि पर और B को 20% के लाभ पर बेचा। A और B का विक्रय मूल्य बराबर था। A और B के क्रय मूल्यों के बीच का अंतर ज्ञात कीजिए।",
    options: [
      { label: 'a', text: "Rs. 408" },
      { label: 'b', text: "Rs. 428" },
      { label: 'c', text: "Rs. 420" },
      { label: 'd', text: "Rs. 416" }
    ],
    correctAnswer: 'a',
    pageOriginal: 10,
    solutionHint: "0.84 A = 1.20 B ⇒ A/B = 1.20 / 0.84 = 10 / 7. Total 17 units = 2312 ⇒ 1 unit = 136. Difference = (10 - 7) × 136 = Rs. 408."
  },
  {
    id: 81,
    category: "समान विक्रय मूल्य पर आधारित प्रश्न (Equal Selling Price)",
    type: "TYPE - 2",
    year: "2019",
    exam: "SSC - CGL - 2019",
    en: "Abhi bought two articles for Rs. 624. He sold an article at a loss of 14% and another article at a gain of 14%. If the selling price of both the articles is same, then the difference (in Rs.) between their cost prices is:",
    hi: "अभी ने 624 रुपये में दो वस्तुएं खरीदीं। उसने एक वस्तु 14% की हानि पर और दूसरी वस्तु 14% के लाभ पर बेची। यदि दोनों वस्तुओं का विक्रय मूल्य समान है, तो उनके क्रय मूल्यों के बीच का अंतर (रुपये में) है:",
    options: [
      { label: 'a', text: "87.36" },
      { label: 'b', text: "89.68" },
      { label: 'c', text: "89.64" },
      { label: 'd', text: "88.84" }
    ],
    correctAnswer: 'a',
    pageOriginal: 11,
    solutionHint: "0.86 CP1 = 1.14 CP2 ⇒ CP1/CP2 = 114/86 = 57/43. Total = 100 units = 624. Difference = 14 units = 14 × 6.24 = Rs. 87.36."
  },
  {
    id: 82,
    category: "समान विक्रय मूल्य पर आधारित प्रश्न (Equal Selling Price)",
    type: "TYPE - 3",
    year: "2021",
    exam: "SSC CHSL - 12.04.2021",
    en: "A shopkeeper sells two refrigerator sets at the same price. He gains 40% on one refrigerator and loses 40% on the other. What is the net loss percentage in the whole transaction?",
    hi: "एक दुकानदार दो रेफ्रिजरेटर सेट समान मूल्य पर बेचता है। उसे एक रेफ्रिजरेटर पर 40% का लाभ और दूसरे पर 40% की हानि होती है। पूरे सौदे में शुद्ध हानि प्रतिशत क्या है?",
    options: [
      { label: 'a', text: "12%" },
      { label: 'b', text: "14%" },
      { label: 'c', text: "16%" },
      { label: 'd', text: "18%" }
    ],
    correctAnswer: 'c',
    pageOriginal: 11,
    solutionHint: "Loss % = x² / 100 = 40² / 100 = 16%."
  },
  {
    id: 83,
    category: "समान विक्रय मूल्य पर आधारित प्रश्न (Equal Selling Price)",
    type: "TYPE - 3",
    year: "2021",
    exam: "UPSI - 23.11.2021 (IIIrd)",
    en: "A shopkeeper sells two bags for Rs. 5500 each. On one, he gets 25% profit and on the other he gets 25% loss. Find his profit or loss percentage for the entire transaction?",
    hi: "एक दुकानदार प्रत्येक 5500 रुपये में दो बैग बेचता है। एक पर उसे 25% का लाभ और दूसरे पर 25% की हानि होती है। पूरे सौदे के लिए उसका लाभ या हानि प्रतिशत ज्ञात कीजिए?",
    options: [
      { label: 'a', text: "5.25% profit" },
      { label: 'b', text: "5.25% loss" },
      { label: 'c', text: "6.25% profit" },
      { label: 'd', text: "6.25% loss" }
    ],
    correctAnswer: 'd',
    pageOriginal: 11,
    solutionHint: "Loss % = 25² / 100 = 6.25% loss."
  },
  {
    id: 84,
    category: "समान विक्रय मूल्य पर आधारित प्रश्न (Equal Selling Price)",
    type: "TYPE - 4",
    year: "2022",
    exam: "SSC CGL (11.04.2022 III Shift)",
    en: "Aditya sells two wrist watches from his personal collection for Rs. 12,600 each. On the first watch he gains 26% and on the second he loses 10%. Find the overall gain or loss percentage.",
    hi: "आदित्य अपने व्यक्तिगत संग्रह से दो कलाई घड़ियाँ प्रत्येक 12,600 रुपये में बेचता है। पहली घड़ी पर उसे 26% का लाभ और दूसरी पर 10% की हानि होती है। समग्र लाभ या हानि प्रतिशत ज्ञात कीजिए।",
    options: [
      { label: 'a', text: "12% gain" },
      { label: 'b', text: "5% gain" },
      { label: 'c', text: "5% loss" },
      { label: 'd', text: "16% gain" }
    ],
    correctAnswer: 'b',
    pageOriginal: 11,
    solutionHint: "CP1 = 12600 / 1.26 = 10000. CP2 = 12600 / 0.90 = 14000. Total CP = 24000. Total SP = 25200. Profit = 1200 / 24000 × 100 = 5% gain."
  },
  {
    id: 85,
    category: "समान विक्रय मूल्य पर आधारित प्रश्न (Equal Selling Price)",
    type: "TYPE - 4",
    year: "2023",
    exam: "SSC CHSL (Tier-I) - 13.03.2023",
    en: "A dealer sells two machines at the rate of Rs. 15000 per machine. On one he earns a profit of 20 percent and on the other he loses 40%. What loss percentage in the whole transaction?",
    hi: "एक डीलर 15000 रुपये प्रति मशीन की दर से दो मशीनें बेचता है। एक पर वह 20 प्रतिशत का लाभ कमाता है और दूसरे पर 40% की हानि उठाता है। पूरे सौदे में कितने प्रतिशत की हानि हुई?",
    options: [
      { label: 'a', text: "10% profit" },
      { label: 'b', text: "20% loss" },
      { label: 'c', text: "20% profit" },
      { label: 'd', text: "10% loss" }
    ],
    correctAnswer: 'b',
    pageOriginal: 11,
    solutionHint: "CP1 = 15000 / 1.20 = 12500. CP2 = 15000 / 0.60 = 25000. Total CP = 37500. Total SP = 30000. Loss = 7500 / 37500 × 100 = 20% loss."
  },
  {
    id: 86,
    category: "समान विक्रय मूल्य पर आधारित प्रश्न (Equal Selling Price)",
    type: "TYPE - 5",
    year: "2026",
    exam: "UPSI Mritak Ashrit - 22.05.2026",
    en: "Two items were sold for ₹990 each. One was sold at a profit of 10% and the other at a loss of 10%. The result was:",
    hi: "दो वस्तुएं प्रत्येक ₹990 में बेची गईं। एक को 10% के लाभ पर और दूसरे को 10% की हानि पर बेचा गया। परिणाम क्या था:",
    options: [
      { label: 'a', text: "No profit no loss" },
      { label: 'b', text: "₹ 20 loss" },
      { label: 'c', text: "₹ 20 gain" },
      { label: 'd', text: "₹ 40 loss" }
    ],
    correctAnswer: 'b',
    pageOriginal: 11,
    solutionHint: "Net loss % = 1%. Total SP = 1980 = 99% of CP ⇒ CP = 2000. Loss = 2000 - 1980 = ₹ 20 loss."
  },
  {
    id: 87,
    category: "समान विक्रय मूल्य पर आधारित प्रश्न (Equal Selling Price)",
    type: "TYPE - 5",
    year: "2021",
    exam: "SSC CHSL - 16.04.2021",
    en: "Two wrist watches were sold for ₹1,980 each. One wrist watch was sold at a profit of 10% and the other one at a loss of 10%. The entire transaction resulted in:",
    hi: "दो कलाई घड़ियाँ प्रत्येक ₹1,980 में बेची गईं। एक कलाई घड़ी 10% के लाभ पर और दूसरी 10% की हानि पर बेची गई। पूरे सौदे का परिणाम क्या रहा:",
    options: [
      { label: 'a', text: "₹40 loss" },
      { label: 'b', text: "₹99 loss" },
      { label: 'c', text: "₹99 gain" },
      { label: 'd', text: "No loss no gain" }
    ],
    correctAnswer: 'a',
    pageOriginal: 11,
    solutionHint: "Total SP = 3960. Loss = 1%. CP = 3960 / 0.99 = 4000. Loss = 4000 - 3960 = ₹40 loss."
  },
  {
    id: 88,
    category: "समान विक्रय मूल्य पर आधारित प्रश्न (Equal Selling Price)",
    type: "TYPE - 5",
    year: "2025",
    exam: "Delhi Police - 20.12.2025 III",
    en: "A merchant sold two items at Rs. 5,000 each, making a profit of 20% on one and a loss of 20% on the other. Find his total profit or loss.",
    hi: "एक व्यापारी ने प्रत्येक Rs. 5,000 में दो वस्तुएं बेचीं, जिसमें एक पर 20% का लाभ और दूसरी पर 20% की हानि हुई। उसका कुल लाभ या हानि ज्ञात कीजिए।",
    options: [
      { label: 'a', text: "Rs. 216.67 loss" },
      { label: 'b', text: "Rs. 250 loss" },
      { label: 'c', text: "Rs. 316.67 loss" },
      { label: 'd', text: "Rs. 416.67 loss" }
    ],
    correctAnswer: 'd',
    pageOriginal: 11,
    solutionHint: "Loss % = 4%. Total SP = 10,000. Loss = 10,000 × (4 / 96) = 10,000 / 24 = Rs. 416.67 loss."
  },
  {
    id: 89,
    category: "समान विक्रय मूल्य पर आधारित प्रश्न (Equal Selling Price)",
    type: "TYPE - 5",
    year: "2019",
    exam: "SSC - CGL - 2019",
    en: "Two articles are sold at ₹9,720 each. On one of them the seller makes a profit of 8% and on the other article there is a loss of 10%. What is the total profit or loss made by the seller?",
    hi: "दो वस्तुएं प्रत्येक ₹9,720 में बेची जाती हैं। उनमें से एक पर विक्रेता को 8% का लाभ होता है और दूसरी वस्तु पर 10% की हानि होती है। विक्रेता द्वारा अर्जित कुल लाभ या हानि क्या है?",
    options: [
      { label: 'a', text: "₹ 380 profit" },
      { label: 'b', text: "₹ 360 profit" },
      { label: 'c', text: "₹ 380 loss" },
      { label: 'd', text: "₹ 360 loss" }
    ],
    correctAnswer: 'd',
    pageOriginal: 12,
    solutionHint: "CP1 = 9720 / 1.08 = 9000 (Profit = 720). CP2 = 9720 / 0.90 = 10800 (Loss = 1080). Net = 720 - 1080 = -₹ 360 (loss)."
  },
  {
    id: 90,
    category: "समान विक्रय मूल्य पर आधारित प्रश्न (Equal Selling Price)",
    type: "TYPE - 6",
    year: "2011",
    exam: "SSC - CGL - 2011",
    en: "X sells two articles at the rate of ₹4000 per article without making any profit or loss. If one of them was sold at 25% profit, then at what percent loss was the other sold?",
    hi: "X बिना किसी लाभ या हानि के ₹4000 प्रति वस्तु की दर से दो वस्तुएं बेचता है। यदि उनमें से एक को 25% लाभ पर बेचा गया, तो दूसरे को कितने प्रतिशत हानि पर बेचा गया था?",
    options: [
      { label: 'a', text: "16 2/3%" },
      { label: 'b', text: "18 2/9%" },
      { label: 'c', text: "25%" },
      { label: 'd', text: "20%" }
    ],
    correctAnswer: 'a',
    pageOriginal: 12,
    solutionHint: "Total SP = 8000. CP1 = 4000 / 1.25 = 3200. Profit1 = 800. CP2 = 8000 - 3200 = 4800. Loss on 2nd = 800 / 4800 × 100 = 16 2/3%."
  },
  {
    id: 91,
    category: "समान विक्रय मूल्य पर आधारित प्रश्न (Equal Selling Price)",
    type: "TYPE - 6",
    year: "2020",
    exam: "SSC CGL (Tier - II) - 15.11.2020",
    en: "Shashi sold two articles for Rs. 5000 each. In which there is no profit and loss in the whole transaction. If one article is sold at 16 2/3% loss, then the other is sold at what percent profit?",
    hi: "शशि ने प्रत्येक 5000 रुपये में दो वस्तुएं बेचीं। जिसमें पूरे सौदे में न तो लाभ हुआ और न ही हानि। यदि एक वस्तु को 16 2/3% हानि पर बेचा जाता है, तो दूसरी को कितने प्रतिशत लाभ पर बेचा गया?",
    options: [
      { label: 'a', text: "24%" },
      { label: 'b', text: "25%" },
      { label: 'c', text: "18 1/3%" },
      { label: 'd', text: "16 2/3%" }
    ],
    correctAnswer: 'b',
    pageOriginal: 12,
    solutionHint: "Loss 16 2/3% = 1/6 loss ⇒ SP1 = 5/6 CP1 = 5000 ⇒ CP1 = 6000. Loss = 1000. Total CP = 10,000 ⇒ CP2 = 4000. Profit on 2nd = 1000 / 4000 × 100 = 25%."
  },
  {
    id: 92,
    category: "समान विक्रय मूल्य पर आधारित प्रश्न (Equal Selling Price)",
    type: "TYPE - 6",
    year: "2013",
    exam: "SSC - 2013",
    en: "A person sold two articles at the rate of ₹ 8400 per article. He neither gained nor lost in it. If the same person sells one article at 20% profit, then at what percent loss will he have to sell the other?",
    hi: "एक व्यक्ति ने ₹ 8400 प्रति वस्तु की दर से दो वस्तुएं बेचीं। उसे इसमें न तो लाभ हुआ और न ही हानि। यदि वही व्यक्ति एक वस्तु को 20% लाभ पर बेचता है, तो उसे दूसरी वस्तु को कितने प्रतिशत हानि पर बेचना होगा?",
    options: [
      { label: 'a', text: "15 2/3%" },
      { label: 'b', text: "14 2/7%" },
      { label: 'c', text: "17 1/3%" },
      { label: 'd', text: "18 1/3%" }
    ],
    correctAnswer: 'b',
    pageOriginal: 12,
    solutionHint: "CP1 = 8400 / 1.20 = 7000 (gain 1400). Total CP = 16800 ⇒ CP2 = 9800. Loss on 2nd = 1400 / 9800 = 1/7 = 14 2/7%."
  },
  {
    id: 93,
    category: "समान विक्रय मूल्य पर आधारित प्रश्न (Equal Selling Price)",
    type: "TYPE - 7",
    year: "PYQ",
    exam: "Standard Competitive Exam",
    en: "A man sells two articles at the same price, the first article he sold at 17% profit, the second article at 30% profit, if the cost price of the first article is ₹5000, then find the cost price of the second article.",
    hi: "एक व्यक्ति दो वस्तुओं को समान मूल्य पर बेचता है, पहली वस्तु को उसने 17% लाभ पर, दूसरी वस्तु को 30% लाभ पर बेचा, यदि पहली वस्तु का क्रय मूल्य ₹5000 है, तो दूसरी वस्तु का क्रय मूल्य ज्ञात कीजिए।",
    options: [
      { label: 'a', text: "₹ 4500" },
      { label: 'b', text: "₹ 5000" },
      { label: 'c', text: "₹ 2000" },
      { label: 'd', text: "₹ 4300" }
    ],
    correctAnswer: 'a',
    pageOriginal: 12,
    solutionHint: "SP = 5000 × 1.17 = 5850. CP2 = 5850 / 1.30 = ₹ 4500."
  },
  {
    id: 94,
    category: "समान विक्रय मूल्य पर आधारित प्रश्न (Equal Selling Price)",
    type: "TYPE - 7",
    year: "PYQ",
    exam: "Standard Competitive Exam",
    en: "A person sells two articles at the same price, the first article he sold at 20% profit, the second article at 30% loss, if the cost price of the second article is ₹3000, then what is the cost price of the first article?",
    hi: "एक व्यक्ति दो वस्तुओं को समान मूल्य पर बेचता है, पहली वस्तु को उसने 20% लाभ पर, दूसरी वस्तु को 30% हानि पर बेचा, यदि दूसरी वस्तु का क्रय मूल्य ₹3000 है, तो पहली वस्तु का क्रय मूल्य क्या है?",
    options: [
      { label: 'a', text: "₹ 1825" },
      { label: 'b', text: "₹ 1725" },
      { label: 'c', text: "₹ 1750" },
      { label: 'd', text: "₹ 1850" }
    ],
    correctAnswer: 'c',
    pageOriginal: 12,
    solutionHint: "SP = 3000 × 0.70 = 2100. CP1 = 2100 / 1.20 = ₹ 1750."
  },
  {
    id: 95,
    category: "समान क्रय मूल्य पर आधारित प्रश्न (Equal Cost Price)",
    type: "TYPE - 1",
    year: "2023",
    exam: "SSC GD 17.01.2023 (II)",
    en: "R buys two cars of same price. He sells one at a profit of 12% and the other at a loss of 8%. His overall percentage of profit or loss is:",
    hi: "R समान मूल्य की दो कारें खरीदता है। वह एक को 12% लाभ पर और दूसरी को 8% हानि पर बेचता है। उसका समग्र लाभ या हानि प्रतिशत क्या है?",
    options: [
      { label: 'a', text: "2% loss" },
      { label: 'b', text: "4% loss" },
      { label: 'c', text: "2% profit" },
      { label: 'd', text: "4% profit" }
    ],
    correctAnswer: 'c',
    pageOriginal: 12,
    solutionHint: "When CP is same: Net % = (12 - 8) / 2 = +2% profit."
  },
  {
    id: 96,
    category: "समान क्रय मूल्य पर आधारित प्रश्न (Equal Cost Price)",
    type: "TYPE - 1",
    year: "2022",
    exam: "SSC CPO SI - 10.11.2022 (Ist)",
    en: "A man bought two bicycles for Rs. 3,000 each. If he sells one bicycle at a profit of 10%, then for how much percentage profit should he sell the other bicycle so that he makes a profit of 20% on the whole?",
    hi: "एक व्यक्ति ने प्रत्येक Rs. 3,000 में दो साइकिलें खरीदीं। यदि वह एक साइकिल को 10% लाभ पर बेचता है, तो उसे दूसरी साइकिल को कितने प्रतिशत लाभ पर बेचना चाहिए ताकि उसे कुल मिलाकर 20% का लाभ हो?",
    options: [
      { label: 'a', text: "30%" },
      { label: 'b', text: "25%" },
      { label: 'c', text: "15%" },
      { label: 'd', text: "10%" }
    ],
    correctAnswer: 'a',
    pageOriginal: 12,
    solutionHint: "(10 + x) / 2 = 20 ⇒ 10 + x = 40 ⇒ x = 30%."
  },
  {
    id: 97,
    category: "समान क्रय मूल्य पर आधारित प्रश्न (Equal Cost Price)",
    type: "TYPE - 1",
    year: "2019",
    exam: "SSC - CHSL - 2019",
    en: "A man bought 2 articles, each of which cost ₹3050. He sold one article at 10% loss and another at 20% profit. What is his total profit or loss?",
    hi: "एक व्यक्ति ने 2 वस्तुएं खरीदीं, जिनमें से प्रत्येक की लागत ₹3050 थी। उसने एक वस्तु 10% हानि पर और दूसरी 20% लाभ पर बेची। उसका कुल लाभ या हानि क्या है?",
    options: [
      { label: 'a', text: "10% profit" },
      { label: 'b', text: "5% profit" },
      { label: 'c', text: "5% loss" },
      { label: 'd', text: "10% loss" }
    ],
    correctAnswer: 'b',
    pageOriginal: 13,
    solutionHint: "Net % = (-10 + 20) / 2 = +5% profit."
  },
  {
    id: 98,
    category: "समान क्रय मूल्य पर आधारित प्रश्न (Equal Cost Price)",
    type: "TYPE - 2",
    year: "2019",
    exam: "SSC - CHSL - 2019",
    en: "A person bought three articles, each of which cost ₹3000. He sold those articles at 15% profit, 10% profit and 15% loss respectively. The total profit/loss percentage earned by him is:",
    hi: "एक व्यक्ति ने तीन वस्तुएं खरीदीं, जिनमें से प्रत्येक की लागत ₹3000 थी। उसने उन वस्तुओं को क्रमशः 15% लाभ, 10% लाभ और 15% हानि पर बेचा। उसके द्वारा अर्जित कुल लाभ/हानि प्रतिशत है:",
    options: [
      { label: 'a', text: "10% loss" },
      { label: 'b', text: "10/3% profit" },
      { label: 'c', text: "No profit no loss" },
      { label: 'd', text: "10/3% loss" }
    ],
    correctAnswer: 'b',
    pageOriginal: 13,
    solutionHint: "Net % = (15 + 10 - 15) / 3 = 10/3% profit."
  },
  {
    id: 99,
    category: "समान क्रय मूल्य पर आधारित प्रश्न (Equal Cost Price)",
    type: "TYPE - 2",
    year: "2019",
    exam: "SSC - CHSL - 2019",
    en: "A person bought three articles, each of which cost ₹6000. He sold those articles at 15% profit, 12% profit and 15% loss respectively. The percentage is:",
    hi: "एक व्यक्ति ने तीन वस्तुएं खरीदीं, जिनमें से प्रत्येक की लागत ₹6000 थी। उसने उन वस्तुओं को क्रमशः 15% लाभ, 12% लाभ और 15% हानि पर बेचा। प्रतिशत क्या है:",
    options: [
      { label: 'a', text: "No profit no loss" },
      { label: 'b', text: "4% profit" },
      { label: 'c', text: "3% loss" },
      { label: 'd', text: "4% loss" }
    ],
    correctAnswer: 'b',
    pageOriginal: 13,
    solutionHint: "Net % = (15 + 12 - 15) / 3 = 12 / 3 = 4% profit."
  },
  {
    id: 100,
    category: "समान क्रय मूल्य पर आधारित प्रश्न (Equal Cost Price)",
    type: "TYPE - 2",
    year: "2019",
    exam: "SSC - CHSL - 2019",
    en: "Three articles are bought at the rate of ₹ 200 per article. One of them is sold at a loss of 10%. If the other two articles are sold at such a rate that 20% profit is made on the whole transaction, then what is the percentage of profit on the two articles?",
    hi: "तीन वस्तुएं ₹ 200 प्रति वस्तु की दर से खरीदी जाती हैं। उनमें से एक को 10% की हानि पर बेचा जाता है। यदि अन्य दो वस्तुओं को ऐसी दर पर बेचा जाता है कि पूरे सौदे पर 20% लाभ हो, तो उन दो वस्तुओं पर लाभ का प्रतिशत क्या है?",
    options: [
      { label: 'a', text: "32%" },
      { label: 'b', text: "30%" },
      { label: 'c', text: "28%" },
      { label: 'd', text: "35%" }
    ],
    correctAnswer: 'd',
    pageOriginal: 13,
    solutionHint: "(-10 + 2x) / 3 = 20 ⇒ -10 + 2x = 60 ⇒ 2x = 70 ⇒ x = 35%."
  },
  {
    id: 101,
    category: "अनुपात पर आधारित प्रश्न (Ratio Based Problems)",
    type: "TYPE - 1",
    year: "2023",
    exam: "SSC GD - 09.02.2023 (Ist)",
    en: "What is the percentage loss when the cost price and selling price of an article are in the ratio of 5:3?",
    hi: "जब किसी वस्तु का क्रय मूल्य और विक्रय मूल्य 5:3 के अनुपात में हो तो प्रतिशत हानि क्या होगी?",
    options: [
      { label: 'a', text: "60%" },
      { label: 'b', text: "30%" },
      { label: 'c', text: "50%" },
      { label: 'd', text: "40%" }
    ],
    correctAnswer: 'd',
    pageOriginal: 13,
    solutionHint: "Loss = 5 - 3 = 2. Loss % = (2 / 5) × 100 = 40%."
  },
  {
    id: 102,
    category: "अनुपात पर आधारित प्रश्न (Ratio Based Problems)",
    type: "TYPE - 1",
    year: "2024",
    exam: "UPP Re - Exam - 25.08.2024",
    en: "What is the loss percentage when the ratio of the cost price and selling price is 15:14?",
    hi: "जब क्रय मूल्य और विक्रय मूल्य का अनुपात 15:14 हो तो हानि प्रतिशत क्या है?",
    options: [
      { label: 'a', text: "40%" },
      { label: 'b', text: "6 2/3%" },
      { label: 'c', text: "16 2/3%" },
      { label: 'd', text: "50%" }
    ],
    correctAnswer: 'b',
    pageOriginal: 13,
    solutionHint: "Loss % = (1 / 15) × 100 = 100 / 15 = 20 / 3 = 6 2/3%."
  },
  {
    id: 103,
    category: "अनुपात पर आधारित प्रश्न (Ratio Based Problems)",
    type: "TYPE - 1",
    year: "2024",
    exam: "SSC GD - 23.02.2024 IIIrd",
    en: "The ratio of the cost price and selling price of a bulb is 20 : 25. What is the profit percentage?",
    hi: "एक बल्ब के क्रय मूल्य और विक्रय मूल्य का अनुपात 20 : 25 है। लाभ प्रतिशत क्या है?",
    options: [
      { label: 'a', text: "30%" },
      { label: 'b', text: "25%" },
      { label: 'c', text: "20%" },
      { label: 'd', text: "15%" }
    ],
    correctAnswer: 'b',
    pageOriginal: 13,
    solutionHint: "Profit % = (5 / 20) × 100 = 25%."
  },
  {
    id: 104,
    category: "अनुपात पर आधारित प्रश्न (Ratio Based Problems)",
    type: "TYPE - 1",
    year: "2017",
    exam: "SSC CPO SI - 2017",
    en: "The ratio of cost price and selling price of an article is 13 : 9. If on the article there is a loss of Rs. 320, find the sum of cost price and selling price (in Rs.).",
    hi: "एक वस्तु के क्रय मूल्य और विक्रय मूल्य का अनुपात 13 : 9 है। यदि वस्तु पर Rs. 320 की हानि होती है, तो क्रय मूल्य और विक्रय मूल्य का योग (Rs. में) ज्ञात कीजिए।",
    options: [
      { label: 'a', text: "1480" },
      { label: 'b', text: "1620" },
      { label: 'c', text: "1500" },
      { label: 'd', text: "1760" }
    ],
    correctAnswer: 'd',
    pageOriginal: 13,
    solutionHint: "Loss = 13 - 9 = 4 units = 320 ⇒ 1 unit = 80. Sum = 13 + 9 = 22 units = 22 × 80 = Rs. 1760."
  },
  {
    id: 105,
    category: "अनुपात पर आधारित प्रश्न (Ratio Based Problems)",
    type: "TYPE - 2",
    year: "2024",
    exam: "SSC GD - 22.02.2024 IIIrd",
    en: "If an article is sold at a loss of 20 percent, then what is the ratio of the cost price and selling price of the article respectively?",
    hi: "यदि किसी वस्तु को 20 प्रतिशत की हानि पर बेचा जाता है, तो क्रमशः वस्तु के क्रय मूल्य और विक्रय मूल्य का अनुपात क्या है?",
    options: [
      { label: 'a', text: "7 : 8" },
      { label: 'b', text: "5 : 4" },
      { label: 'c', text: "7 : 4" },
      { label: 'd', text: "4 : 5" }
    ],
    correctAnswer: 'b',
    pageOriginal: 14,
    solutionHint: "CP : SP = 100 : 80 = 5 : 4."
  },
  {
    id: 106,
    category: "अनुपात पर आधारित प्रश्न (Ratio Based Problems)",
    type: "TYPE - 2",
    year: "2024",
    exam: "SSC CGL - 13.09.2024 Ist",
    en: "An article is sold at a profit of 250%. What is the ratio of its purchasing price and selling price?",
    hi: "एक वस्तु 250% के लाभ पर बेची जाती है। इसके क्रय मूल्य और विक्रय मूल्य का अनुपात क्या है?",
    options: [
      { label: 'a', text: "7 : 2" },
      { label: 'b', text: "2 : 5" },
      { label: 'c', text: "5 : 2" },
      { label: 'd', text: "2 : 7" }
    ],
    correctAnswer: 'd',
    pageOriginal: 14,
    solutionHint: "CP = 100, Profit = 250 ⇒ SP = 350. CP : SP = 100 : 350 = 2 : 7."
  },
  {
    id: 107,
    category: "अनुपात पर आधारित प्रश्न (Ratio Based Problems)",
    type: "TYPE - 2",
    year: "2024",
    exam: "SSC GD - 30.03.2024 Ist",
    en: "If the cost price of an article is 80 percent of its selling price, then what is the profit percentage?",
    hi: "यदि किसी वस्तु का क्रय मूल्य उसके विक्रय मूल्य का 80 प्रतिशत है, तो लाभ प्रतिशत क्या है?",
    options: [
      { label: 'a', text: "20%" },
      { label: 'b', text: "30%" },
      { label: 'c', text: "35%" },
      { label: 'd', text: "25%" }
    ],
    correctAnswer: 'd',
    pageOriginal: 14,
    solutionHint: "Let SP = 100, CP = 80. Profit = 20. Profit % = (20 / 80) × 100 = 25%."
  },
  {
    id: 108,
    category: "अनुपात पर आधारित प्रश्न (Ratio Based Problems)",
    type: "TYPE - 3",
    year: "2017",
    exam: "UPSI - 2017",
    en: "The cost prices of a mobile phone and a watch are in the ratio 3 : 4. What is the ratio of their selling prices if the mobile phone is sold at a 20% profit and the watch at a 20% loss?",
    hi: "एक मोबाइल फोन और एक घड़ी का क्रय मूल्य 3 : 4 के अनुपात में है। यदि मोबाइल फोन को 20% लाभ पर और घड़ी को 20% हानि पर बेचा जाता है तो उनके विक्रय मूल्यों का अनुपात क्या है?",
    options: [
      { label: 'a', text: "9 : 7" },
      { label: 'b', text: "7 : 6" },
      { label: 'c', text: "7 : 8" },
      { label: 'd', text: "9 : 8" }
    ],
    correctAnswer: 'd',
    pageOriginal: 14,
    solutionHint: "SP_m = 3 × 1.20 = 3.6. SP_w = 4 × 0.80 = 3.2. Ratio = 3.6 / 3.2 = 36 / 32 = 9 : 8."
  },
  {
    id: 109,
    category: "अनुपात पर आधारित प्रश्न (Ratio Based Problems)",
    type: "TYPE - 3",
    year: "2020",
    exam: "SSC - CGL - 2020",
    en: "Sudhir bought a laptop for ₹ 42000 and a scanner-cum-printer for ₹ 8000. He sold the laptop at 10% profit and the scanner-cum-printer at 5% profit. What is his profit percentage?",
    hi: "सुधीर ने ₹ 42000 में एक लैपटॉप और ₹ 8000 में एक स्कैनर-कम-प्रिंटर खरीदा। उसने लैपटॉप को 10% लाभ पर और स्कैनर-कम-प्रिंटर को 5% लाभ पर बेचा। उसका लाभ प्रतिशत क्या है?",
    options: [
      { label: 'a', text: "15%" },
      { label: 'b', text: "7 1/2%" },
      { label: 'c', text: "9 2/5%" },
      { label: 'd', text: "9 1/5%" }
    ],
    correctAnswer: 'd',
    pageOriginal: 14,
    solutionHint: "Total profit = (10% of 42000) + (5% of 8000) = 4200 + 400 = 4600. Total CP = 50,000. Profit % = 4600 / 50000 × 100 = 9.2% = 9 1/5%."
  },
  {
    id: 110,
    category: "अनुपात पर आधारित प्रश्न (Ratio Based Problems)",
    type: "TYPE - 3",
    year: "2019",
    exam: "SSC - CHSL - 2019",
    en: "A bought two articles for ₹ 200 and ₹ 300 respectively and sold them at 5% and 10% profit respectively. What was his overall percentage?",
    hi: "A ने क्रमशः ₹ 200 और ₹ 300 में दो वस्तुएं खरीदीं और उन्हें क्रमशः 5% और 10% लाभ पर बेच दिया। उसका समग्र प्रतिशत क्या था?",
    options: [
      { label: 'a', text: "9%" },
      { label: 'b', text: "8%" },
      { label: 'c', text: "5%" },
      { label: 'd', text: "6%" }
    ],
    correctAnswer: 'b',
    pageOriginal: 14,
    solutionHint: "Profit = (5% of 200) + (10% of 300) = 10 + 30 = 40. Total CP = 500. Profit % = (40 / 500) × 100 = 8%."
  },
  {
    id: 111,
    category: "वस्तुओं के क्रय मूल्य व विक्रय मूल्य पर आधारित प्रश्न (Articles CP & SP)",
    type: "TYPE - 1",
    year: "2024",
    exam: "UPP Radio Operator - 05.02.2024",
    en: "The selling price of 72 oranges is equal to the cost price of 36 oranges. Find the profit or loss received.",
    hi: "72 संतरों का विक्रय मूल्य 36 संतरों के क्रय मूल्य के बराबर है। प्राप्त लाभ या हानि ज्ञात कीजिए।",
    options: [
      { label: 'a', text: "26% profit" },
      { label: 'b', text: "50% loss" },
      { label: 'c', text: "32% profit" },
      { label: 'd', text: "45% loss" }
    ],
    correctAnswer: 'b',
    pageOriginal: 14,
    solutionHint: "72 SP = 36 CP ⇒ SP/CP = 36/72 = 1/2. Loss = 50%."
  },
  {
    id: 112,
    category: "वस्तुओं के क्रय मूल्य व विक्रय मूल्य पर आधारित प्रश्न (Articles CP & SP)",
    type: "TYPE - 1",
    year: "2024",
    exam: "RPF SI - 02.12.2024 Ist",
    en: "The selling price of 16 books is equal to the cost price of 12. Find the loss or profit percentage.",
    hi: "16 पुस्तकों का विक्रय मूल्य 12 पुस्तकों के क्रय मूल्य के बराबर है। हानि या लाभ प्रतिशत ज्ञात कीजिए।",
    options: [
      { label: 'a', text: "100/3% loss" },
      { label: 'b', text: "25% profit" },
      { label: 'c', text: "25% loss" },
      { label: 'd', text: "100/3% profit" }
    ],
    correctAnswer: 'c',
    pageOriginal: 14,
    solutionHint: "16 SP = 12 CP ⇒ SP/CP = 12/16 = 3/4. Loss = (1/4) × 100 = 25% loss."
  },
  {
    id: 113,
    category: "वस्तुओं के क्रय मूल्य व विक्रय मूल्य पर आधारित प्रश्न (Articles CP & SP)",
    type: "TYPE - 1",
    year: "2021",
    exam: "UPSI (02-12-2021) III Shift",
    en: "If the cost price of 2170 articles is equal to the selling price of 1736 articles, then what is the gain%?",
    hi: "यदि 2170 वस्तुओं का क्रय मूल्य 1736 वस्तुओं के विक्रय मूल्य के बराबर है, तो लाभ% क्या है?",
    options: [
      { label: 'a', text: "21%" },
      { label: 'b', text: "27%" },
      { label: 'c', text: "25%" },
      { label: 'd', text: "23%" }
    ],
    correctAnswer: 'c',
    pageOriginal: 15,
    solutionHint: "Gain % = (2170 - 1736) / 1736 × 100 = 434 / 1736 × 100 = 1/4 × 100 = 25%."
  },
  {
    id: 114,
    category: "वस्तुओं के क्रय मूल्य व विक्रय मूल्य पर आधारित प्रश्न (Articles CP & SP)",
    type: "TYPE - 2",
    year: "2024",
    exam: "UPP Re-Exam - 24.08.2024",
    en: "The cost price of 27 items is the same as the selling price of x items. If the profit is 35%, what is the value of x?",
    hi: "27 वस्तुओं का क्रय मूल्य x वस्तुओं के विक्रय मूल्य के समान है। यदि लाभ 35% है, तो x का मान क्या है?",
    options: [
      { label: 'a', text: "18" },
      { label: 'b', text: "22" },
      { label: 'c', text: "24" },
      { label: 'd', text: "20" }
    ],
    correctAnswer: 'd',
    pageOriginal: 15,
    solutionHint: "27 CP = x SP ⇒ SP/CP = 27/x = 1.35 ⇒ x = 27 / 1.35 = 20."
  },
  {
    id: 115,
    category: "वस्तुओं के क्रय मूल्य व विक्रय मूल्य पर आधारित प्रश्न (Articles CP & SP)",
    type: "TYPE - 2",
    year: "2022",
    exam: "SSC Phase IX - 16.03.2022",
    en: "If the cost price of x articles is equal to the selling price of 20 articles and the loss is 20%, then what is the value of x?",
    hi: "यदि x वस्तुओं का क्रय मूल्य 20 वस्तुओं के विक्रय मूल्य के बराबर है और हानि 20% है, तो x का मान क्या है?",
    options: [
      { label: 'a', text: "12" },
      { label: 'b', text: "18" },
      { label: 'c', text: "16" },
      { label: 'd', text: "15" }
    ],
    correctAnswer: 'c',
    pageOriginal: 15,
    solutionHint: "x CP = 20 SP ⇒ SP/CP = x/20 = 0.80 ⇒ x = 20 × 0.80 = 16."
  },
  {
    id: 116,
    category: "वस्तुओं के क्रय मूल्य व विक्रय मूल्य पर आधारित प्रश्न (Articles CP & SP)",
    type: "TYPE - 2",
    year: "2021",
    exam: "RRB NTPC - 16.01.2021 (IIIrd)",
    en: "The cost price of 120 pens is the same as the selling price of x pens. If the profit is 25%, then the value of x is:",
    hi: "120 पेनों का क्रय मूल्य x पेनों के विक्रय मूल्य के समान है। यदि लाभ 25% है, तो x का मान है:",
    options: [
      { label: 'a', text: "91" },
      { label: 'b', text: "95" },
      { label: 'c', text: "96" },
      { label: 'd', text: "90" }
    ],
    correctAnswer: 'c',
    pageOriginal: 15,
    solutionHint: "120 CP = x SP ⇒ SP/CP = 120/x = 1.25 ⇒ x = 120 / 1.25 = 96."
  },
  {
    id: 117,
    category: "वस्तुओं के क्रय मूल्य व विक्रय मूल्य पर आधारित प्रश्न (Articles CP & SP)",
    type: "TYPE - 3",
    year: "2023",
    exam: "SSC GD - 12.01.2023 IVth Shift",
    en: "A salesman buys 15 articles for Rs. 10 and sells 10 articles for Rs. 15. Determine the percentage profit earned by the salesman.",
    hi: "एक विक्रेता Rs. 10 में 15 वस्तुएं खरीदता है और Rs. 15 में 10 वस्तुएं बेचता है। विक्रेता द्वारा अर्जित प्रतिशत लाभ ज्ञात कीजिए।",
    options: [
      { label: 'a', text: "225%" },
      { label: 'b', text: "125%" },
      { label: 'c', text: "150%" },
      { label: 'd', text: "100%" }
    ],
    correctAnswer: 'b',
    pageOriginal: 15,
    solutionHint: "CP per article = 10/15 = 2/3. SP per article = 15/10 = 3/2. Profit % = (3/2 - 2/3)/(2/3) × 100 = (5/6)/(2/3) × 100 = 5/4 × 100 = 125%."
  },
  {
    id: 118,
    category: "वस्तुओं के क्रय मूल्य व विक्रय मूल्य पर आधारित प्रश्न (Articles CP & SP)",
    type: "TYPE - 3",
    year: "2024",
    exam: "UPP Re-Exam - 24.08.2024",
    en: "If bananas are bought at Rs. 50 for 60 and sold at Rs. 60 for 50, what is the profit percentage?",
    hi: "यदि केले Rs. 50 में 60 के भाव से खरीदे जाते हैं और Rs. 60 में 50 के भाव से बेचे जाते हैं, तो लाभ प्रतिशत क्या है?",
    options: [
      { label: 'a', text: "48%" },
      { label: 'b', text: "66%" },
      { label: 'c', text: "42%" },
      { label: 'd', text: "44%" }
    ],
    correctAnswer: 'd',
    pageOriginal: 15,
    solutionHint: "Cross multiplication: CP = 50 × 50 = 2500, SP = 60 × 60 = 3600. Profit % = (1100 / 2500) × 100 = 44%."
  },
  {
    id: 119,
    category: "वस्तुओं के क्रय मूल्य व विक्रय मूल्य पर आधारित प्रश्न (Articles CP & SP)",
    type: "TYPE - 4",
    year: "2024",
    exam: "UPP - 18.02.2024 IInd",
    en: "A vendor bought 6 bananas for Rs. 10 and sold them for 4 for Rs. 6. Find his profit or loss percentage.",
    hi: "एक विक्रेता ने Rs. 10 में 6 केले खरीदे और उन्हें Rs. 6 में 4 के भाव से बेच दिया। उसका लाभ या हानि प्रतिशत ज्ञात कीजिए।",
    options: [
      { label: 'a', text: "10% profit" },
      { label: 'b', text: "10% loss" },
      { label: 'c', text: "8% profit" },
      { label: 'd', text: "8% loss" }
    ],
    correctAnswer: 'b',
    pageOriginal: 15,
    solutionHint: "CP = 10 × 4 = 40, SP = 6 × 6 = 36. Loss = (4/40) × 100 = 10% loss."
  },
  {
    id: 120,
    category: "वस्तुओं के क्रय मूल्य व विक्रय मूल्य पर आधारित प्रश्न (Articles CP & SP)",
    type: "TYPE - 4",
    year: "2023",
    exam: "SSC GD – 23.01.2023 (I)",
    en: "By selling 25 articles for a rupee a man gains 20%. How much for a rupee did he buy?",
    hi: "एक रुपये में 25 वस्तुएं बेचकर एक व्यक्ति को 20% का लाभ होता है। उसने एक रुपये में कितनी खरीदी थीं?",
    options: [
      { label: 'a', text: "30" },
      { label: 'b', text: "25" },
      { label: 'c', text: "40" },
      { label: 'd', text: "35" }
    ],
    correctAnswer: 'a',
    pageOriginal: 15,
    solutionHint: "Quantity bought = 25 × (120 / 100) = 30 articles for a rupee."
  }
];
