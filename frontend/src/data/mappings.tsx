// maps fdc nutrients to name and daily value
export const fdcNutrients: {
  [key: number]: { displayName: string, dv?: number },
} = {
  1004: {
    displayName: 'Total Fat',
    dv: 78,
  },
  1258: {
    displayName: 'Saturated Fat',
    dv: 20,
  },
  1257: {
    displayName: 'Trans Fat',
  },
  1253: {
    displayName: 'Cholesterol',
    dv: 300,
  },
  1093: {
    displayName: 'Sodium',
    dv: 2300,
  },
  1005: {
    displayName: 'Carbohydrates',
    dv: 275,
  },
  1079: {
    displayName: 'Dietary Fiber',
    dv: 28,
  },
  1063: {
    displayName: 'Total Sugars',
  },
  1235: {
    displayName: 'Added Sugars',
    dv: 50,
  },
  1003: {
    displayName: 'Protein',
    dv: 50,
  },
  1092: {
    displayName: 'Potassium',
    dv: 4700,
  },
  1087: {
    displayName: 'Calcium',
    dv: 1300,
  },
  1089: {
    displayName: 'Iron',
    dv: 18,
  },
  1090: {
    displayName: 'Magnesium',
    dv: 420,
  },
  1095: {
    displayName: 'Zinc',
    dv: 11,
  },
  1098: {
    displayName: 'Copper',
    dv: 0.9,
  },
  1101: {
    displayName: 'Manganese',
    dv: 2.3,
  },
  1103: {
    displayName: 'Selenium',
    dv: 55,
  },
  1100: {
    displayName: 'Iodine',
    dv: 150,
  },
  1096: {
    displayName: 'Chromium',
    dv: 35,
  },
  1102: {
    displayName: 'Molybdenum',
    dv: 45,
  },
  1107: {
    displayName: 'Beta Carotene',
  },
  1108: {
    displayName: 'Alpha Carotene',
  },
  1162: {
    displayName: 'Vitamin C',
    dv: 90,
  },
  1114: {
    displayName: 'Vitamin D',
    dv: 20,
  },
  1106: {
    displayName: 'Vitamin A',
    dv: 900,
  },
  1109: {
    displayName: 'Vitamin E',
    dv: 15,
  },
  1185: {
    displayName: 'Vitamin K-1',
    dv: 120,
  },
  1183: {
    displayName: 'Vitamin K-2',
    dv: 120,
  },
  1165: {
    displayName: 'Thiamin (B-1)',
    dv: 1.2,
  },
  1166: {
    displayName: 'Riboflavin (B-2)',
    dv: 1.3,
  },
  1167: {
    displayName: 'Niacin (B-3)',
    dv: 16,
  },
  1170: {
    displayName: 'Pantothenic Acid (B-5)',
    dv: 5,
  },
  1175: {
    displayName: 'Pyridoxine (B-6)',
    dv: 1.7,
  },
  1176: {
    displayName: 'Biotin (B-7)',
    dv: 30,
  },
  1177: {
    displayName: 'Folate (B-9)',
    dv: 400,
  },
  1178: {
    displayName: 'Cyanocobalamin (B-12)',
    dv: 2.4,
  },
  1180: {
    displayName: 'Choline',
    dv: 550,
  },
};
