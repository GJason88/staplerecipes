--
-- Data for Name: nutrient; Type: TABLE DATA; Schema: recipes; Owner: postgres
--

INSERT INTO recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) VALUES (1258, 'Saturated Fat', 'g', 20, 'saturatedFat');
INSERT INTO recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) VALUES (1003, 'Protein', 'g', 50, 'protein');
INSERT INTO recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) VALUES (1004, 'Total Fat', 'g', 78, 'totalFat');
INSERT INTO recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) VALUES (1005, 'Total Carbohydrate', 'g', 275, 'totalCarbs');
INSERT INTO recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) VALUES (1063, 'Total Sugars', 'g', NULL, 'totalSugars');
INSERT INTO recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) VALUES (1079, 'Dietary Fiber', 'g', 28, 'dietaryFiber');
INSERT INTO recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) VALUES (1087, 'Calcium', 'mg', 1300, 'calcium');
INSERT INTO recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) VALUES (1089, 'Iron', 'mg', 18, 'iron');
INSERT INTO recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) VALUES (1090, 'Magnesium', 'mg', 420, 'magnesium');
INSERT INTO recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) VALUES (1092, 'Potassium', 'mg', 4700, 'potassium');
INSERT INTO recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) VALUES (1093, 'Sodium', 'mg', 2300, 'sodium');
INSERT INTO recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) VALUES (1095, 'Zinc', 'mg', 11, 'zinc');
INSERT INTO recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) VALUES (1096, 'Chromium', 'mcg', 35, 'chromium');
INSERT INTO recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) VALUES (1098, 'Copper', 'mg', 0.9, 'copper');
INSERT INTO recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) VALUES (1100, 'Iodine', 'mcg', 150, 'iodine');
INSERT INTO recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) VALUES (1101, 'Manganese', 'mg', 2.3, 'manganese');
INSERT INTO recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) VALUES (1102, 'Molybdenum', 'mg', 45, 'molybdenum');
INSERT INTO recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) VALUES (1103, 'Selenium', 'mcg', 55, 'selenium');
INSERT INTO recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) VALUES (1106, 'Vitamin A', 'mcg', 900, 'vitaminA');
INSERT INTO recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) VALUES (1107, 'Alpha Carotene', 'mcg', NULL, 'alphaCarotene');
INSERT INTO recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) VALUES (1108, 'Beta Carotene', 'mcg', NULL, 'betaCarotene');
INSERT INTO recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) VALUES (1109, 'Vitamin E', 'mg', 15, 'vitaminE');
INSERT INTO recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) VALUES (1114, 'Vitamin D', 'mcg', 20, 'vitaminD');
INSERT INTO recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) VALUES (1162, 'Vitamin C', 'mg', 90, 'vitaminC');
INSERT INTO recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) VALUES (1165, 'Thiamin (B1)', 'mg', 1.2, 'thiaminB1');
INSERT INTO recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) VALUES (1166, 'Riboflavin (B2)', 'mg', 1.3, 'riboflavinB2');
INSERT INTO recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) VALUES (1167, 'Niacin (B3)', 'mg', 16, 'niacinB3');
INSERT INTO recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) VALUES (1170, 'Pantothenic Acid (B5)', 'mg', 5, 'pantothenicAcidB5');
INSERT INTO recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) VALUES (1175, 'Pyridoxine (B6)', 'mg', 1.7, 'pyridoxineB6');
INSERT INTO recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) VALUES (1176, 'Biotin (B7)', 'mcg', 30, 'biotinB7');
INSERT INTO recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) VALUES (1177, 'Folate (B9)', 'mcg', 400, 'folateB9');
INSERT INTO recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) VALUES (1178, 'Cyanocobalamin (B12)', 'mcg', 2.4, 'cyanocobalaminB12');
INSERT INTO recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) VALUES (1180, 'Choline', 'mg', 550, 'choline');
INSERT INTO recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) VALUES (1183, 'Vitamin (K2)', 'mcg', 120, 'vitaminK2');
INSERT INTO recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) VALUES (1185, 'Vitamin (K1)', 'mcg', 120, 'vitaminK1');
INSERT INTO recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) VALUES (1235, 'Added Sugars', 'g', 50, 'addedSugars');
INSERT INTO recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) VALUES (1253, 'Cholesterol', 'mg', 300, 'cholesterol');
INSERT INTO recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) VALUES (1257, 'Trans Fat', 'g', NULL, 'transFat');

--
-- Name: nutrient_nutrient_id_seq; Type: SEQUENCE SET; Schema: recipes; Owner: postgres
--

SELECT pg_catalog.setval('recipes.nutrient_nutrient_id_seq', 39, true);
