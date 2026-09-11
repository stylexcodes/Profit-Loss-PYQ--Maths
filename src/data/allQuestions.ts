import { Question } from '../types';
import { questionsPart1 } from './questionsPart1';
import { questionsPart2 } from './questionsPart2';
import { questionsPart3 } from './questionsPart3';

export const allQuestions: Question[] = [
  ...questionsPart1,
  ...questionsPart2,
  ...questionsPart3,
];

export const TOPIC_SECTIONS = [
  {
    id: "simple",
    title: "साधारण प्रश्न (Simple Questions)",
    range: "Q1 - Q4",
    count: 4
  },
  {
    id: "single-sell",
    title: "जब कोई वस्तु एक बार बेची जाए (Single Transaction)",
    range: "Q5 - Q8",
    count: 4
  },
  {
    id: "double-sell",
    title: "जब कोई वस्तु दो बार बेची जाए (Two Transactions)",
    range: "Q9 - Q14",
    count: 6
  },
  {
    id: "multiple-sell",
    title: "जब कोई वस्तु कई बार बेची जाए (Successive Selling)",
    range: "Q15 - Q24",
    count: 10
  },
  {
    id: "dishonest",
    title: "बेईमान दुकानदार पर आधारित प्रश्न (Dishonest Shopkeeper)",
    range: "Q25 - Q50",
    count: 26
  },
  {
    id: "price-variance",
    title: "अधिक या कम मूल्य पर आधारित प्रश्न (Price Variance Problems)",
    range: "Q51 - Q64",
    count: 14
  },
  {
    id: "combined-cp",
    title: "संयुक्त क्रय मूल्य पर आधारित प्रश्न (Combined Cost Price)",
    range: "Q65 - Q76",
    count: 12
  },
  {
    id: "equal-sp",
    title: "समान विक्रय मूल्य पर आधारित प्रश्न (Equal Selling Price)",
    range: "Q77 - Q94",
    count: 18
  },
  {
    id: "equal-cp",
    title: "समान क्रय मूल्य पर आधारित प्रश्न (Equal Cost Price)",
    range: "Q95 - Q100",
    count: 6
  },
  {
    id: "ratio",
    title: "अनुपात पर आधारित प्रश्न (Ratio Based Problems)",
    range: "Q101 - Q110",
    count: 10
  },
  {
    id: "article-cp-sp",
    title: "वस्तुओं के क्रय मूल्य व विक्रय मूल्य पर आधारित प्रश्न (Articles CP & SP)",
    range: "Q111 - Q139",
    count: 29
  },
  {
    id: "cp-eq-percent",
    title: "जब वस्तु का क्रय मूल्य, लाभ %/हानि % के बराबर हो (CP equals Profit/Loss %)",
    range: "Q140 - Q145",
    count: 6
  },
  {
    id: "misc",
    title: "विविध प्रश्नावली (Miscellaneous Problems)",
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
