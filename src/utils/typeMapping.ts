export interface TypeDefinition {
  typeNum: number;
  typeLabel: string;
  badgeLabel: string;
  nameHi: string;
  nameEn: string;
  shortName: string;
  fullTitle: string;
  range: string;
  startId: number;
  endId: number;
  count: number;
}

export const ALL_TYPE_DEFINITIONS: TypeDefinition[] = [
  {
    typeNum: 1,
    typeLabel: "TYPE - 1",
    badgeLabel: "TYPE 1",
    nameHi: "साधारण प्रश्न",
    nameEn: "Simple Questions",
    shortName: "साधारण प्रश्न",
    fullTitle: "TYPE 1 : साधारण प्रश्न (Simple Questions)",
    range: "Q.1 - Q.4",
    startId: 1,
    endId: 4,
    count: 4,
  },
  {
    typeNum: 2,
    typeLabel: "TYPE - 2",
    badgeLabel: "TYPE 2",
    nameHi: "जब कोई वस्तु एक बार बेची जाए",
    nameEn: "Single Transaction",
    shortName: "एक बार बेची जाए",
    fullTitle: "TYPE 2 : जब कोई वस्तु एक बार बेची जाए (Single Transaction)",
    range: "Q.5 - Q.8",
    startId: 5,
    endId: 8,
    count: 4,
  },
  {
    typeNum: 3,
    typeLabel: "TYPE - 3",
    badgeLabel: "TYPE 3",
    nameHi: "जब कोई वस्तु दो बार बेची जाए",
    nameEn: "Two Transactions",
    shortName: "दो बार बेची जाए",
    fullTitle: "TYPE 3 : जब कोई वस्तु दो बार बेची जाए (Two Transactions)",
    range: "Q.9 - Q.14",
    startId: 9,
    endId: 14,
    count: 6,
  },
  {
    typeNum: 4,
    typeLabel: "TYPE - 4",
    badgeLabel: "TYPE 4",
    nameHi: "जब कोई वस्तु कई बार बेची जाए",
    nameEn: "Successive Selling",
    shortName: "कई बार बेची जाए",
    fullTitle: "TYPE 4 : जब कोई वस्तु कई बार बेची जाए (Successive Selling)",
    range: "Q.15 - Q.24",
    startId: 15,
    endId: 24,
    count: 10,
  },
  {
    typeNum: 5,
    typeLabel: "TYPE - 5",
    badgeLabel: "TYPE 5",
    nameHi: "बेईमान दुकानदार पर आधारित प्रश्न",
    nameEn: "Dishonest Shopkeeper",
    shortName: "बेईमान दुकानदार",
    fullTitle: "TYPE 5 : बेईमान दुकानदार पर आधारित प्रश्न (Dishonest Shopkeeper)",
    range: "Q.25 - Q.50",
    startId: 25,
    endId: 50,
    count: 26,
  },
  {
    typeNum: 6,
    typeLabel: "TYPE - 6",
    badgeLabel: "TYPE 6",
    nameHi: "अधिक या कम मूल्य पर आधारित प्रश्न",
    nameEn: "Price Variance Problems",
    shortName: "अधिक/कम मूल्य",
    fullTitle: "TYPE 6 : अधिक या कम मूल्य पर आधारित प्रश्न (Price Variance Problems)",
    range: "Q.51 - Q.64",
    startId: 51,
    endId: 64,
    count: 14,
  },
  {
    typeNum: 7,
    typeLabel: "TYPE - 7",
    badgeLabel: "TYPE 7",
    nameHi: "संयुक्त क्रय मूल्य पर आधारित प्रश्न",
    nameEn: "Combined Cost Price",
    shortName: "संयुक्त क्रय मूल्य",
    fullTitle: "TYPE 7 : संयुक्त क्रय मूल्य पर आधारित प्रश्न (Combined Cost Price)",
    range: "Q.65 - Q.76",
    startId: 65,
    endId: 76,
    count: 12,
  },
  {
    typeNum: 8,
    typeLabel: "TYPE - 8",
    badgeLabel: "TYPE 8",
    nameHi: "समान विक्रय मूल्य पर आधारित प्रश्न",
    nameEn: "Equal Selling Price",
    shortName: "समान विक्रय मूल्य",
    fullTitle: "TYPE 8 : समान विक्रय मूल्य पर आधारित प्रश्न (Equal Selling Price)",
    range: "Q.77 - Q.94",
    startId: 77,
    endId: 94,
    count: 18,
  },
  {
    typeNum: 9,
    typeLabel: "TYPE - 9",
    badgeLabel: "TYPE 9",
    nameHi: "समान क्रय मूल्य पर आधारित प्रश्न",
    nameEn: "Equal Cost Price",
    shortName: "समान क्रय मूल्य",
    fullTitle: "TYPE 9 : समान क्रय मूल्य पर आधारित प्रश्न (Equal Cost Price)",
    range: "Q.95 - Q.100",
    startId: 95,
    endId: 100,
    count: 6,
  },
  {
    typeNum: 10,
    typeLabel: "TYPE - 10",
    badgeLabel: "TYPE 10",
    nameHi: "अनुपात पर आधारित प्रश्न",
    nameEn: "Ratio Based Problems",
    shortName: "अनुपात पर आधारित",
    fullTitle: "TYPE 10 : अनुपात पर आधारित प्रश्न (Ratio Based Problems)",
    range: "Q.101 - Q.110",
    startId: 101,
    endId: 110,
    count: 10,
  },
  {
    typeNum: 11,
    typeLabel: "TYPE - 11",
    badgeLabel: "TYPE 11",
    nameHi: "वस्तुओं के क्रय मूल्य व विक्रय मूल्य पर आधारित प्रश्न",
    nameEn: "Articles CP & SP",
    shortName: "वस्तुओं के CP व SP",
    fullTitle: "TYPE 11 : वस्तुओं के क्रय मूल्य व विक्रय मूल्य पर आधारित प्रश्न (Articles CP & SP)",
    range: "Q.111 - Q.139",
    startId: 111,
    endId: 139,
    count: 29,
  },
  {
    typeNum: 12,
    typeLabel: "TYPE - 12",
    badgeLabel: "TYPE 12",
    nameHi: "जब वस्तु का क्रय मूल्य, लाभ %/हानि % के बराबर हो",
    nameEn: "CP equals Profit/Loss %",
    shortName: "CP = लाभ %/हानि %",
    fullTitle: "TYPE 12 : जब वस्तु का क्रय मूल्य, लाभ %/हानि % के बराबर हो (CP equals Profit/Loss %)",
    range: "Q.140 - Q.145",
    startId: 140,
    endId: 145,
    count: 6,
  },
  {
    typeNum: 13,
    typeLabel: "TYPE - 13",
    badgeLabel: "TYPE 13",
    nameHi: "विविध प्रश्नावली",
    nameEn: "Miscellaneous Problems",
    shortName: "विविध प्रश्नावली",
    fullTitle: "TYPE 13 : विविध प्रश्नावली (Miscellaneous Problems)",
    range: "Q.146 - Q.180",
    startId: 146,
    endId: 180,
    count: 35,
  },
];

/**
 * Returns complete Type information for any question ID (1 to 180)
 */
export function getTypeDefinition(questionId: number): TypeDefinition {
  const found = ALL_TYPE_DEFINITIONS.find(
    (t) => questionId >= t.startId && questionId <= t.endId
  );
  if (found) return found;

  // Fallback for safety
  return {
    typeNum: 1,
    typeLabel: "TYPE - 1",
    badgeLabel: "TYPE 1",
    nameHi: "साधारण प्रश्न",
    nameEn: "Simple Questions",
    shortName: "साधारण प्रश्न",
    fullTitle: "TYPE 1 : साधारण प्रश्न",
    range: `Q.${questionId}`,
    startId: questionId,
    endId: questionId,
    count: 1,
  };
}

/**
 * Checks whether this question ID is the opening/first question of its Type.
 */
export function isTypeStart(questionId: number): boolean {
  return ALL_TYPE_DEFINITIONS.some((t) => t.startId === questionId);
}

/**
 * Formats a clean Type badge string, e.g. "TYPE 1 : साधारण प्रश्न"
 */
export function formatTypeBadge(questionId: number): string {
  const t = getTypeDefinition(questionId);
  return `${t.badgeLabel} : ${t.shortName}`;
}
