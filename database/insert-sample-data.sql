--
-- Data for Name: ingredient_category; Type: TABLE DATA; Schema: recipes; Owner: postgres
--

INSERT INTO recipes.ingredient_category (category_id, category_name) VALUES (4, 'Fruits');
INSERT INTO recipes.ingredient_category (category_id, category_name) VALUES (5, 'Vegetables');
INSERT INTO recipes.ingredient_category (category_id, category_name) VALUES (6, 'Grains');
INSERT INTO recipes.ingredient_category (category_id, category_name) VALUES (7, 'Dairy');
INSERT INTO recipes.ingredient_category (category_id, category_name) VALUES (8, 'Meats');
INSERT INTO recipes.ingredient_category (category_id, category_name) VALUES (9, 'Oil & Seasonings');
INSERT INTO recipes.ingredient_category (category_id, category_name) VALUES (10, 'Other');


--
-- Data for Name: ingredient; Type: TABLE DATA; Schema: recipes; Owner: postgres
--

INSERT INTO recipes.ingredient (ingredient_id, ingredient_name, category_id, g_ml) VALUES (118, 'Milk, whole', 7, 97);
INSERT INTO recipes.ingredient (ingredient_id, ingredient_name, category_id, g_ml) VALUES (119, 'Onion', 5, 0);
INSERT INTO recipes.ingredient (ingredient_id, ingredient_name, category_id, g_ml) VALUES (120, 'Garlic', 5, 0);
INSERT INTO recipes.ingredient (ingredient_id, ingredient_name, category_id, g_ml) VALUES (122, 'Flour, potato', 4, 3435);
INSERT INTO recipes.ingredient (ingredient_id, ingredient_name, category_id, g_ml) VALUES (111, 'Egg', 10, 0);
INSERT INTO recipes.ingredient (ingredient_id, ingredient_name, category_id, g_ml) VALUES (112, 'Quinoa, uncooked', 6, 131);
INSERT INTO recipes.ingredient (ingredient_id, ingredient_name, category_id, g_ml) VALUES (110, 'Bread, whole-wheat', 6, 0);
INSERT INTO recipes.ingredient (ingredient_id, ingredient_name, category_id, g_ml) VALUES (113, 'Pasta', 6, 0);
INSERT INTO recipes.ingredient (ingredient_id, ingredient_name, category_id, g_ml) VALUES (56, 'White rice', 6, 118);
INSERT INTO recipes.ingredient (ingredient_id, ingredient_name, category_id, g_ml) VALUES (54, 'Potato', 5, 0);
INSERT INTO recipes.ingredient (ingredient_id, ingredient_name, category_id, g_ml) VALUES (114, 'Tomato', 5, 0);


--
-- Data for Name: ingredient_measurement; Type: TABLE DATA; Schema: recipes; Owner: postgres
--

INSERT INTO recipes.ingredient_measurement (measurement_id, ingredient_id, measurement_name, grams) VALUES (15, 119, 'small', 70);
INSERT INTO recipes.ingredient_measurement (measurement_id, ingredient_id, measurement_name, grams) VALUES (16, 119, 'medium', 110);
INSERT INTO recipes.ingredient_measurement (measurement_id, ingredient_id, measurement_name, grams) VALUES (17, 119, 'large', 150);
INSERT INTO recipes.ingredient_measurement (measurement_id, ingredient_id, measurement_name, grams) VALUES (18, 120, 'clove', 3);
INSERT INTO recipes.ingredient_measurement (measurement_id, ingredient_id, measurement_name, grams) VALUES (22, 122, 'test', 3443);
INSERT INTO recipes.ingredient_measurement (measurement_id, ingredient_id, measurement_name, grams) VALUES (26, 111, 'whole', 50);
INSERT INTO recipes.ingredient_measurement (measurement_id, ingredient_id, measurement_name, grams) VALUES (28, 110, 'slice', 40);
INSERT INTO recipes.ingredient_measurement (measurement_id, ingredient_id, measurement_name, grams) VALUES (43, 54, 'small', 170);
INSERT INTO recipes.ingredient_measurement (measurement_id, ingredient_id, measurement_name, grams) VALUES (44, 54, 'medium', 213);
INSERT INTO recipes.ingredient_measurement (measurement_id, ingredient_id, measurement_name, grams) VALUES (45, 54, 'large', 369);
INSERT INTO recipes.ingredient_measurement (measurement_id, ingredient_id, measurement_name, grams) VALUES (46, 114, 'small', 91);
INSERT INTO recipes.ingredient_measurement (measurement_id, ingredient_id, measurement_name, grams) VALUES (47, 114, 'medium', 123);
INSERT INTO recipes.ingredient_measurement (measurement_id, ingredient_id, measurement_name, grams) VALUES (48, 114, 'large', 182);


--
-- Data for Name: ingredient_nutrient; Type: TABLE DATA; Schema: recipes; Owner: postgres
--

INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (119, 1003, 1, 337);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (119, 1004, 0, 338);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (119, 1005, 9, 339);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (119, 1079, 2, 340);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (119, 1087, 23, 341);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (119, 1089, 0, 342);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (119, 1090, 10, 343);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (119, 1092, 146, 344);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (119, 1093, 4, 345);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (119, 1095, 0, 346);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (119, 1098, 0, 347);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (119, 1101, 0, 348);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (119, 1103, 1, 349);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (119, 1106, 0, 350);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (119, 1107, 1, 351);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (119, 1108, 0, 352);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (119, 1109, 0, 353);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (119, 1114, 0, 354);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (119, 1162, 7, 355);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (119, 1165, 0, 356);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (119, 1166, 0, 357);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (119, 1167, 0, 358);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (119, 1170, 0, 359);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (119, 1175, 0, 360);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (119, 1177, 19, 361);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (119, 1178, 0, 362);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (119, 1180, 6, 363);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (119, 1185, 0, 364);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (119, 1253, 0, 365);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (119, 1257, 0, 366);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1003, 1, 2165);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1004, 0, 2166);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1005, 4, 2167);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1079, 1, 2168);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1087, 10, 2169);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1089, 0, 2170);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1090, 8, 2171);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1092, 193, 2172);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1093, 0, 2173);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1095, 0, 2174);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1098, 0, 2175);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1101, 0, 2176);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1103, 0, 2177);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1106, 24, 2178);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1107, 276, 2179);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1108, 1, 2180);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1162, 18, 2181);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1165, 0, 2182);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1166, 0, 2183);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1167, 1, 2184);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1175, 0, 2185);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1176, 0, 2186);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1177, 10, 2187);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1003, 14, 1316);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1004, 6, 1317);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1005, 64, 1318);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1079, 7, 1319);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1087, 47, 1320);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1089, 5, 1321);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1090, 197, 1322);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1092, 563, 1323);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1093, 5, 1324);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1095, 3, 1325);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1098, 1, 1326);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1101, 2, 1327);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1103, 9, 1328);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1106, 1, 1329);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1107, 8, 1330);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1108, 0, 1331);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1109, 2, 1332);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1114, 0, 1333);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1165, 0, 1334);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1166, 0, 1335);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1167, 2, 1336);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1170, 1, 1337);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1175, 0, 1338);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1177, 184, 1339);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1178, 0, 1340);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1180, 70, 1341);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1183, 1, 1342);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1185, 0, 1343);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (122, 1003, 8, 698);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (122, 1004, 1, 699);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (122, 1005, 80, 700);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (122, 1079, 5, 701);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (122, 1087, 44, 702);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (122, 1089, 12, 703);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (122, 1090, 74, 704);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (122, 1092, 1270, 705);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (122, 1093, 48, 706);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (122, 1095, 1, 707);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (122, 1098, 0, 708);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (122, 1101, 1, 709);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (122, 1102, 19, 710);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (122, 1103, 1, 711);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (122, 1165, 0, 712);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (122, 1166, 0, 713);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (122, 1167, 6, 714);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (122, 1175, 1, 715);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (122, 1176, 1, 716);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (122, 1177, 41, 717);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1253, 0, 1344);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1258, 1, 1345);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1003, 12, 1346);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1004, 4, 1347);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1003, 12, 1174);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1004, 10, 1175);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1005, 1, 1176);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1063, 0, 1177);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1079, 0, 1178);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1087, 48, 1179);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1089, 2, 1180);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (119, 1258, 0, 367);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1090, 11, 1181);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1092, 132, 1182);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1093, 129, 1183);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1095, 1, 1184);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1098, 0, 1185);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1100, 49, 1186);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1101, 0, 1187);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1103, 31, 1188);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1106, 180, 1189);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1107, 0, 1190);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1108, 0, 1191);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1114, 2, 1192);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1165, 0, 1193);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1166, 0, 1194);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1167, 0, 1195);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1175, 0, 1196);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1177, 71, 1197);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1178, 1, 1198);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1180, 335, 1199);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1253, 411, 1200);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1258, 3, 1201);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1005, 43, 1348);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1063, 4, 1349);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1079, 6, 1350);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1087, 163, 1351);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1089, 3, 1352);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1090, 77, 1353);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1092, 250, 1354);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1093, 450, 1355);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1095, 2, 1356);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1098, 0, 1357);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1101, 2, 1358);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1103, 26, 1359);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1109, 3, 1360);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1165, 0, 1361);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1166, 0, 1362);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1167, 4, 1363);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1170, 1, 1364);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1175, 0, 1365);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1177, 42, 1366);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1180, 27, 1367);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1257, 0, 1368);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1258, 1, 1369);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (56, 1003, 7, 1927);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (56, 1004, 1, 1928);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (56, 1005, 80, 1929);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (56, 1079, 0, 1930);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (56, 1087, 4, 1931);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (56, 1089, 0, 1932);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (56, 1090, 27, 1933);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (56, 1092, 82, 1934);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (56, 1093, 0, 1935);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (56, 1095, 1, 1936);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (56, 1098, 0, 1937);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (56, 1101, 1, 1938);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (56, 1102, 64, 1939);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (56, 1103, 7, 1940);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (56, 1165, 0, 1941);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (56, 1166, 0, 1942);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (56, 1167, 1, 1943);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (56, 1175, 0, 1944);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (56, 1176, 0, 1945);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (118, 1003, 3, 307);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (118, 1004, 3, 308);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (118, 1005, 5, 309);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (118, 1063, 5, 310);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (118, 1087, 123, 311);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (118, 1089, 0, 312);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (118, 1090, 12, 313);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (118, 1092, 150, 314);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (118, 1093, 38, 315);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (118, 1095, 0, 316);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (118, 1098, 0, 317);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (118, 1100, 38, 318);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (118, 1101, 0, 319);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (118, 1103, 2, 320);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (118, 1106, 32, 321);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (118, 1107, 7, 322);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (118, 1108, 0, 323);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (118, 1109, 0, 324);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (118, 1114, 1, 325);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (118, 1165, 0, 326);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (118, 1166, 0, 327);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (118, 1167, 0, 328);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (118, 1170, 0, 329);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (118, 1175, 0, 330);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (118, 1177, 0, 331);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (118, 1178, 1, 332);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (118, 1180, 18, 333);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (118, 1253, 12, 334);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (118, 1257, 0, 335);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (118, 1258, 2, 336);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (120, 1003, 6, 368);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (120, 1004, 1, 369);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (120, 1005, 33, 370);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (120, 1079, 2, 371);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (120, 1087, 181, 372);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (120, 1089, 2, 373);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (120, 1090, 25, 374);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (120, 1092, 401, 375);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (120, 1093, 17, 376);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (120, 1095, 1, 377);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (120, 1098, 0, 378);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (120, 1101, 2, 379);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (120, 1103, 14, 380);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (120, 1106, 0, 381);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (120, 1107, 5, 382);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (120, 1108, 0, 383);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (120, 1109, 0, 384);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (120, 1114, 0, 385);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (120, 1162, 31, 386);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (120, 1165, 0, 387);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (120, 1166, 0, 388);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (120, 1167, 1, 389);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (120, 1170, 1, 390);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (120, 1175, 1, 391);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (120, 1177, 3, 392);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (120, 1178, 0, 393);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (120, 1180, 23, 394);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (120, 1185, 2, 395);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (120, 1253, 0, 396);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (120, 1257, 0, 397);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (120, 1258, 0, 398);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1003, 2, 2134);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1004, 0, 2135);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1005, 18, 2136);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1079, 2, 2137);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1087, 12, 2138);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1089, 1, 2139);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1090, 23, 2140);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1092, 425, 2141);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1093, 6, 2142);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1095, 0, 2143);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1098, 0, 2144);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1101, 0, 2145);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1103, 0, 2146);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1106, 0, 2147);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1107, 1, 2148);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1108, 0, 2149);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1109, 0, 2150);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1114, 0, 2151);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1162, 20, 2152);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1003, 13, 1801);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1004, 2, 1802);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1005, 75, 1803);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1079, 3, 1804);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1087, 21, 1805);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1089, 3, 1806);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1090, 53, 1807);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1092, 223, 1808);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1093, 6, 1809);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1095, 1, 1810);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1098, 0, 1811);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1101, 1, 1812);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1103, 63, 1813);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1106, 0, 1814);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1107, 0, 1815);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1108, 0, 1816);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1109, 0, 1817);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1114, 0, 1818);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1162, 0, 1819);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1165, 1, 1820);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1166, 0, 1821);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1167, 7, 1822);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1170, 0, 1823);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1175, 0, 1824);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1177, 237, 1825);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1178, 0, 1826);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1180, 15, 1827);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1185, 0, 1828);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1253, 0, 1829);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1257, 0, 1830);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1258, 0, 1831);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1165, 0, 2153);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1166, 0, 2154);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1167, 1, 2155);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1170, 0, 2156);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1175, 0, 2157);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1177, 15, 2158);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1178, 0, 2159);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1180, 12, 2160);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1185, 2, 2161);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1253, 0, 2162);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1257, 0, 2163);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1258, 0, 2164);


--
-- Data for Name: recipe; Type: TABLE DATA; Schema: recipes; Owner: postgres
--

INSERT INTO recipes.recipe (recipe_id, recipe_name, "time", instructions, diet, servings) VALUES (120, 'test 1111', '20 minutes', '{"Heat oil in a 4 quart Dutch oven or large pot over medium-high heat until the oil is sizzling hot, about 1 minute. Add onion, garlic, carrots, celery and bell pepper. Sauté until tender, about 2-3 minutes.","This is a test instruction."}', 'All', '1');
INSERT INTO recipes.recipe (recipe_id, recipe_name, "time", instructions, diet, servings) VALUES (132, 'testgfdg', 'test', '{res}', 'test', 'test');


--
-- Data for Name: recipe_ingredient; Type: TABLE DATA; Schema: recipes; Owner: postgres
--

INSERT INTO recipes.recipe_ingredient (recipe_ingredient_id, recipe_id, ingredient_id, amount, default_measurement) VALUES (134, 120, 118, 34, 'oz');
INSERT INTO recipes.recipe_ingredient (recipe_ingredient_id, recipe_id, ingredient_id, amount, default_measurement) VALUES (135, 132, 113, 3, 'g');


--
-- Data for Name: recipe_review; Type: TABLE DATA; Schema: recipes; Owner: postgres
--

INSERT INTO recipes.recipe_review (review_id, recipe_id, uid, review_text, rating, date, display_name) VALUES (10, 132, 'testuid', 'testtext', 3, '2023-11-23', 'testuser1');
INSERT INTO recipes.recipe_review (review_id, recipe_id, uid, review_text, rating, date, display_name) VALUES (12, 132, 'testuid2', 'testtext2', 5, '2023-11-02', 'testuser2');
INSERT INTO recipes.recipe_review (review_id, recipe_id, uid, review_text, rating, date, display_name) VALUES (13, 132, 'testuid3', 'testtext3', 5, '2023-11-05', 'testuser3');


--
-- Data for Name: tool_category; Type: TABLE DATA; Schema: recipes; Owner: postgres
--

INSERT INTO recipes.tool_category (category_id, category_name) VALUES (27, 'Stoveware');
INSERT INTO recipes.tool_category (category_id, category_name) VALUES (32, 'Utensils');
INSERT INTO recipes.tool_category (category_id, category_name) VALUES (33, 'Dishes and Gadgets');
INSERT INTO recipes.tool_category (category_id, category_name) VALUES (34, 'Appliances');


--
-- Data for Name: tool; Type: TABLE DATA; Schema: recipes; Owner: postgres
--

INSERT INTO recipes.tool (tool_id, tool_name, category_id) VALUES (25, 'Mid-Sized Knife', 32);
INSERT INTO recipes.tool (tool_id, tool_name, category_id) VALUES (26, 'Wooden Spatula', 32);
INSERT INTO recipes.tool (tool_id, tool_name, category_id) VALUES (27, 'Wooden Spoon', 32);
INSERT INTO recipes.tool (tool_id, tool_name, category_id) VALUES (28, 'Tongs', 32);
INSERT INTO recipes.tool (tool_id, tool_name, category_id) VALUES (29, 'Peeler', 32);
INSERT INTO recipes.tool (tool_id, tool_name, category_id) VALUES (30, 'Measuring Spoons/Cups', 32);
INSERT INTO recipes.tool (tool_id, tool_name, category_id) VALUES (31, 'Can Opener', 32);
INSERT INTO recipes.tool (tool_id, tool_name, category_id) VALUES (32, 'Microplane Grater/Zester', 32);
INSERT INTO recipes.tool (tool_id, tool_name, category_id) VALUES (33, 'Large Cutting Board', 33);
INSERT INTO recipes.tool (tool_id, tool_name, category_id) VALUES (34, 'Small Cutting Board', 33);
INSERT INTO recipes.tool (tool_id, tool_name, category_id) VALUES (35, 'Large Colander', 33);
INSERT INTO recipes.tool (tool_id, tool_name, category_id) VALUES (36, 'Small Colander', 33);
INSERT INTO recipes.tool (tool_id, tool_name, category_id) VALUES (37, 'Prep Bowls', 33);
INSERT INTO recipes.tool (tool_id, tool_name, category_id) VALUES (38, 'Rice Cooker', 34);
INSERT INTO recipes.tool (tool_id, tool_name, category_id) VALUES (24, 'Chef''s Knife', 32);
INSERT INTO recipes.tool (tool_id, tool_name, category_id) VALUES (17, 'Nonstick Pan (10'''' - 12'''')', 27);
INSERT INTO recipes.tool (tool_id, tool_name, category_id) VALUES (18, 'Stainless Steel Pan (10'''' - 12'''')', 27);
INSERT INTO recipes.tool (tool_id, tool_name, category_id) VALUES (21, 'Sheet Pan', 27);


--
-- Data for Name: recipe_tool; Type: TABLE DATA; Schema: recipes; Owner: postgres
--

INSERT INTO recipes.recipe_tool (recipe_tool_id, recipe_id, tool_id) VALUES (71, 132, 30);
INSERT INTO recipes.recipe_tool (recipe_tool_id, recipe_id, tool_id) VALUES (107, 120, 30);
INSERT INTO recipes.recipe_tool (recipe_tool_id, recipe_id, tool_id) VALUES (121, 132, 30);


--
-- Name: ingredient_category_ingredient_category_id_seq; Type: SEQUENCE SET; Schema: recipes; Owner: postgres
--

SELECT pg_catalog.setval('recipes.ingredient_category_ingredient_category_id_seq', 12, true);


--
-- Name: ingredient_ingredient_id_seq; Type: SEQUENCE SET; Schema: recipes; Owner: postgres
--

SELECT pg_catalog.setval('recipes.ingredient_ingredient_id_seq', 158, true);


--
-- Name: ingredient_measurement_measurement_id_seq; Type: SEQUENCE SET; Schema: recipes; Owner: postgres
--

SELECT pg_catalog.setval('recipes.ingredient_measurement_measurement_id_seq', 48, true);


--
-- Name: ingredient_nutrient_ingredient_nutrient_id_seq; Type: SEQUENCE SET; Schema: recipes; Owner: postgres
--

SELECT pg_catalog.setval('recipes.ingredient_nutrient_ingredient_nutrient_id_seq', 2187, true);


--
-- Name: nutrient_nutrient_id_seq; Type: SEQUENCE SET; Schema: recipes; Owner: postgres
--

SELECT pg_catalog.setval('recipes.nutrient_nutrient_id_seq', 39, true);


--
-- Name: recipe_ingredient_id_seq; Type: SEQUENCE SET; Schema: recipes; Owner: postgres
--

SELECT pg_catalog.setval('recipes.recipe_ingredient_id_seq', 135, true);


--
-- Name: recipe_recipe_id_seq; Type: SEQUENCE SET; Schema: recipes; Owner: postgres
--

SELECT pg_catalog.setval('recipes.recipe_recipe_id_seq', 171, true);


--
-- Name: recipe_review_review_id_seq; Type: SEQUENCE SET; Schema: recipes; Owner: postgres
--

SELECT pg_catalog.setval('recipes.recipe_review_review_id_seq', 109, true);


--
-- Name: recipe_tool_id_seq; Type: SEQUENCE SET; Schema: recipes; Owner: postgres
--

SELECT pg_catalog.setval('recipes.recipe_tool_id_seq', 121, true);


--
-- Name: tool_category_tool_category_id_seq; Type: SEQUENCE SET; Schema: recipes; Owner: postgres
--

SELECT pg_catalog.setval('recipes.tool_category_tool_category_id_seq', 37, true);


--
-- Name: tool_tool_id_seq; Type: SEQUENCE SET; Schema: recipes; Owner: postgres
--

SELECT pg_catalog.setval('recipes.tool_tool_id_seq', 49, true);


--
-- PostgreSQL database dump complete
--

