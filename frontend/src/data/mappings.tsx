// FDC ids to nutrient key
export const nutrientIdToKey: { [key: string]: NutritionKey } = {
  '1003': 'protein',
  '1004': 'totalFat',
  '1005': 'carbs',
  '2047': 'calories',
  '1063': 'totalSugars',
  '1079': 'dietaryFiber',
  '1087': 'calcium',
  '1089': 'iron',
  '1090': 'magnesium',
  '1092': 'potassium',
  '1093': 'sodium',
  '1095': 'zinc',
  '1096': 'chromium',
  '1098': 'copper',
  '1100': 'iodine',
  '1101': 'manganese',
  '1102': 'molybdenum',
  '1103': 'selenium',
  '1106': 'vitaminA',
  '1107': 'betaCarotene',
  '1108': 'alphaCarotene',
  '1109': 'vitaminE',
  '1114': 'vitaminD',
  '1162': 'vitaminC',
  '1165': 'thiaminB1',
  '1166': 'riboflavinB2',
  '1167': 'niacinB3',
  '1170': 'pantothenicAcidB5',
  '1175': 'pyridoxineB6',
  '1176': 'biotinB7',
  '1177': 'folateB9',
  '1178': 'cyanocobalaminB12',
  '1180': 'choline',
  '1183': 'vitaminK2',
  '1185': 'vitaminK1',
  '1235': 'addedSugars',
  '1253': 'cholesterol',
  '1257': 'transFat',
  '1258': 'saturatedFat',
};
// maps fdc nutrients to name and daily value
export const fdcNutrients: {
  [key: number]: { nutrientName: string, dv?: number },
} = {
  1004: {
    nutrientName: 'Total Fat',
    dv: 78,
  },
  1258: {
    nutrientName: 'Saturated Fat',
    dv: 20,
  },
  1257: {
    nutrientName: 'Trans Fat',
  },
  1253: {
    nutrientName: 'Cholesterol',
    dv: 300,
  },
  1093: {
    nutrientName: 'Sodium',
    dv: 2300,
  },
  1005: {
    nutrientName: 'Carbohydrates',
    dv: 275,
  },
  1079: {
    nutrientName: 'Dietary Fiber',
    dv: 28,
  },
  1063: {
    nutrientName: 'Total Sugars',
  },
  1235: {
    nutrientName: 'Added Sugars',
    dv: 50,
  },
  1003: {
    nutrientName: 'Protein',
    dv: 50,
  },
  1092: {
    nutrientName: 'Potassium',
    dv: 4700,
  },
  1087: {
    nutrientName: 'Calcium',
    dv: 1300,
  },
  1089: {
    nutrientName: 'Iron',
    dv: 18,
  },
  1090: {
    nutrientName: 'Magnesium',
    dv: 420,
  },
  1095: {
    nutrientName: 'Zinc',
    dv: 11,
  },
  1098: {
    nutrientName: 'Copper',
    dv: 0.9,
  },
  1101: {
    nutrientName: 'Manganese',
    dv: 2.3,
  },
  1103: {
    nutrientName: 'Selenium',
    dv: 55,
  },
  1100: {
    nutrientName: 'Iodine',
    dv: 150,
  },
  1096: {
    nutrientName: 'Chromium',
    dv: 35,
  },
  1102: {
    nutrientName: 'Molybdenum',
    dv: 45,
  },
  1107: {
    nutrientName: 'Beta Carotene',
  },
  1108: {
    nutrientName: 'Alpha Carotene',
  },
  1162: {
    nutrientName: 'Vitamin C',
    dv: 90,
  },
  1114: {
    nutrientName: 'Vitamin D',
    dv: 20,
  },
  1106: {
    nutrientName: 'Vitamin A',
    dv: 900,
  },
  1109: {
    nutrientName: 'Vitamin E',
    dv: 15,
  },
  1185: {
    nutrientName: 'Vitamin K-1',
    dv: 120,
  },
  1183: {
    nutrientName: 'Vitamin K-2',
    dv: 120,
  },
  1165: {
    nutrientName: 'Thiamin (B-1)',
    dv: 1.2,
  },
  1166: {
    nutrientName: 'Riboflavin (B-2)',
    dv: 1.3,
  },
  1167: {
    nutrientName: 'Niacin (B-3)',
    dv: 16,
  },
  1170: {
    nutrientName: 'Pantothenic Acid (B-5)',
    dv: 5,
  },
  1175: {
    nutrientName: 'Pyridoxine (B-6)',
    dv: 1.7,
  },
  1176: {
    nutrientName: 'Biotin (B-7)',
    dv: 30,
  },
  1177: {
    nutrientName: 'Folate (B-9)',
    dv: 400,
  },
  1178: {
    nutrientName: 'Cyanocobalamin (B-12)',
    dv: 2.4,
  },
  1180: {
    nutrientName: 'Choline',
    dv: 550,
  },
};
