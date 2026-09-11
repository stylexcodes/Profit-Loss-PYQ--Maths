import { Question } from '../types';
import { questionsPart1 } from './questionsPart1';
import { questionsPart2 } from './questionsPart2';
import { questionsPart3 } from './questionsPart3';
import { getTypeDefinition, ALL_TYPE_DEFINITIONS } from '../utils/typeMapping';

const rawQuestions: Question[] = [
  ...questionsPart1,
  ...questionsPart2,
  ...questionsPart3,
];

// Enrich each question with its canonical Type Name & Type Number
export const allQuestions: Question[] = rawQuestions.map((q) => {
  const typeDef = getTypeDefinition(q.id);
  return {
    ...q,
    answer: q.correctAnswer,
    category: typeDef.fullTitle,
    type: typeDef.typeLabel,
    typeNum: typeDef.typeNum,
    typeLabel: typeDef.typeLabel,
    typeNameHi: typeDef.nameHi,
    typeNameEn: typeDef.nameEn,
    shortName: typeDef.shortName,
    typeTitle: typeDef.fullTitle,
  };
});

export const TOPIC_SECTIONS = [
  {
    id: "simple",
    typeNum: 1,
    typeLabel: "TYPE - 1",
    title: "TYPE 1 : साधारण प्रश्न (Simple Questions)",
    typeNameHi: "साधारण प्रश्न",
    typeNameEn: "Simple Questions",
    range: "Q1 - Q4",
    count: 4
  },
  {
    id: "single-sell",
    typeNum: 2,
    typeLabel: "TYPE - 2",
    title: "TYPE 2 : जब कोई वस्तु एक बार बेची जाए (Single Transaction)",
    typeNameHi: "जब कोई वस्तु एक बार बेची जाए",
    typeNameEn: "Single Transaction",
    range: "Q5 - Q8",
    count: 4
  },
  {
    id: "double-sell",
    typeNum: 3,
    typeLabel: "TYPE - 3",
    title: "TYPE 3 : जब कोई वस्तु दो बार बेची जाए (Two Transactions)",
    typeNameHi: "जब कोई वस्तु दो बार बेची जाए",
    typeNameEn: "Two Transactions",
    range: "Q9 - Q14",
    count: 6
  },
  {
    id: "multiple-sell",
    typeNum: 4,
    typeLabel: "TYPE - 4",
    title: "TYPE 4 : जब कोई वस्तु कई बार बेची जाए (Successive Selling)",
    typeNameHi: "जब कोई वस्तु कई बार बेची जाए",
    typeNameEn: "Successive Selling",
    range: "Q15 - Q24",
    count: 10
  },
  {
    id: "dishonest",
    typeNum: 5,
    typeLabel: "TYPE - 5",
    title: "TYPE 5 : बेईमान दुकानदार पर आधारित प्रश्न (Dishonest Shopkeeper)",
    typeNameHi: "बेईमान दुकानदार पर आधारित प्रश्न",
    typeNameEn: "Dishonest Shopkeeper",
    range: "Q25 - Q50",
    count: 26
  },
  {
    id: "price-variance",
    typeNum: 6,
    typeLabel: "TYPE - 6",
    title: "TYPE 6 : अधिक या कम मूल्य पर आधारित प्रश्न (Price Variance Problems)",
    typeNameHi: "अधिक या कम मूल्य पर आधारित प्रश्न",
    typeNameEn: "Price Variance Problems",
    range: "Q51 - Q64",
    count: 14
  },
  {
    id: "combined-cp",
    typeNum: 7,
    typeLabel: "TYPE - 7",
    title: "TYPE 7 : संयुक्त क्रय मूल्य पर आधारित प्रश्न (Combined Cost Price)",
    typeNameHi: "संयुक्त क्रय मूल्य पर आधारित प्रश्न",
    typeNameEn: "Combined Cost Price",
    range: "Q65 - Q76",
    count: 12
  },
  {
    id: "equal-sp",
    typeNum: 8,
    typeLabel: "TYPE - 8",
    title: "TYPE 8 : समान विक्रय मूल्य पर आधारित प्रश्न (Equal Selling Price)",
    typeNameHi: "समान विक्रय मूल्य पर आधारित प्रश्न",
    typeNameEn: "Equal Selling Price",
    range: "Q77 - Q94",
    count: 18
  },
  {
    id: "equal-cp",
    typeNum: 9,
    typeLabel: "TYPE - 9",
    title: "TYPE 9 : समान क्रय मूल्य पर आधारित प्रश्न (Equal Cost Price)",
    typeNameHi: "समान क्रय मूल्य पर आधारित प्रश्न",
    typeNameEn: "Equal Cost Price",
    range: "Q95 - Q100",
    count: 6
  },
  {
    id: "ratio",
    typeNum: 10,
    typeLabel: "TYPE - 10",
    title: "TYPE 10 : अनुपात पर आधारित प्रश्न (Ratio Based Problems)",
    typeNameHi: "अनुपात पर आधारित प्रश्न",
    typeNameEn: "Ratio Based Problems",
    range: "Q101 - Q110",
    count: 10
  },
  {
    id: "article-cp-sp",
    typeNum: 11,
    typeLabel: "TYPE - 11",
    title: "TYPE 11 : वस्तुओं के क्रय मूल्य व विक्रय मूल्य पर आधारित प्रश्न (Articles CP & SP)",
    typeNameHi: "वस्तुओं के क्रय मूल्य व विक्रय मूल्य पर आधारित प्रश्न",
    typeNameEn: "Articles CP & SP",
    range: "Q111 - Q139",
    count: 29
  },
  {
    id: "cp-eq-percent",
    typeNum: 12,
    typeLabel: "TYPE - 12",
    title: "TYPE 12 : जब वस्तु का क्रय मूल्य, लाभ %/हानि % के बराबर हो (CP equals Profit/Loss %)",
    typeNameHi: "जब वस्तु का क्रय मूल्य, लाभ %/हानि % के बराबर हो",
    typeNameEn: "CP equals Profit/Loss %",
    range: "Q140 - Q145",
    count: 6
  },
  {
    id: "misc",
    typeNum: 13,
    typeLabel: "TYPE - 13",
    title: "TYPE 13 : विविध प्रश्नावली (Miscellaneous Problems)",
    typeNameHi: "विविध प्रश्नावली",
    typeNameEn: "Miscellaneous Problems",
    range: "Q146 - Q180",
    count: 35
  }
];

export const EXAM_BADGES = [
  "All Exams",
  "SSC CGL",
  "SSC CHSL",
  "SSC CPO SI",
  "SSC GD",
  "UPP",
  "UPSI",
  "RRB NTPC",
  "RPF SI",
  "UPPCS CSAT"
];
