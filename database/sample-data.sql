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

INSERT INTO recipes.ingredient (ingredient_id, ingredient_name, category_id, g_ml) VALUES (110, 'Bread, whole-wheat', 6, 0);
INSERT INTO recipes.ingredient (ingredient_id, ingredient_name, category_id, g_ml) VALUES (111, 'Egg', 10, 0);
INSERT INTO recipes.ingredient (ingredient_id, ingredient_name, category_id, g_ml) VALUES (112, 'Quinoa, uncooked', 6, 131);
INSERT INTO recipes.ingredient (ingredient_id, ingredient_name, category_id, g_ml) VALUES (113, 'Pasta', 6, 0);
INSERT INTO recipes.ingredient (ingredient_id, ingredient_name, category_id, g_ml) VALUES (56, 'White rice', 6, 118);
INSERT INTO recipes.ingredient (ingredient_id, ingredient_name, category_id, g_ml) VALUES (114, 'Tomato', 5, 0);
INSERT INTO recipes.ingredient (ingredient_id, ingredient_name, category_id, g_ml) VALUES (54, 'Potato', 5, 0);
INSERT INTO recipes.ingredient (ingredient_id, ingredient_name, category_id, g_ml) VALUES (118, 'Milk, whole', 7, 97);
INSERT INTO recipes.ingredient (ingredient_id, ingredient_name, category_id, g_ml) VALUES (119, 'Onion', 5, 0);
INSERT INTO recipes.ingredient (ingredient_id, ingredient_name, category_id, g_ml) VALUES (120, 'Garlic', 5, 0);


--
-- Data for Name: ingredient_measurement; Type: TABLE DATA; Schema: recipes; Owner: postgres
--

INSERT INTO recipes.ingredient_measurement (measurement_id, ingredient_id, measurement_name, grams) VALUES (7, 54, 'small', 170);
INSERT INTO recipes.ingredient_measurement (measurement_id, ingredient_id, measurement_name, grams) VALUES (8, 54, 'medium', 213);
INSERT INTO recipes.ingredient_measurement (measurement_id, ingredient_id, measurement_name, grams) VALUES (9, 54, 'large', 369);
INSERT INTO recipes.ingredient_measurement (measurement_id, ingredient_id, measurement_name, grams) VALUES (12, 114, 'small', 91);
INSERT INTO recipes.ingredient_measurement (measurement_id, ingredient_id, measurement_name, grams) VALUES (13, 114, 'medium', 123);
INSERT INTO recipes.ingredient_measurement (measurement_id, ingredient_id, measurement_name, grams) VALUES (14, 114, 'large', 182);
INSERT INTO recipes.ingredient_measurement (measurement_id, ingredient_id, measurement_name, grams) VALUES (15, 119, 'small', 70);
INSERT INTO recipes.ingredient_measurement (measurement_id, ingredient_id, measurement_name, grams) VALUES (16, 119, 'medium', 110);
INSERT INTO recipes.ingredient_measurement (measurement_id, ingredient_id, measurement_name, grams) VALUES (17, 119, 'large', 150);
INSERT INTO recipes.ingredient_measurement (measurement_id, ingredient_id, measurement_name, grams) VALUES (10, 110, 'slice', 40);
INSERT INTO recipes.ingredient_measurement (measurement_id, ingredient_id, measurement_name, grams) VALUES (11, 111, 'whole', 50);
INSERT INTO recipes.ingredient_measurement (measurement_id, ingredient_id, measurement_name, grams) VALUES (18, 120, 'clove', 3);


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
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1003, 2, 31);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1004, 0, 32);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1005, 18, 33);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1079, 2, 34);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1087, 12, 35);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1089, 1, 36);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1090, 23, 37);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1092, 425, 38);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1093, 6, 39);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1095, 0, 40);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1098, 0, 41);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1101, 0, 42);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1103, 0, 43);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1106, 0, 44);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1107, 1, 45);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1108, 0, 46);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1109, 0, 47);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1114, 0, 48);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1162, 20, 49);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1165, 0, 50);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1166, 0, 51);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1167, 1, 52);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1170, 0, 53);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1175, 0, 54);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1177, 15, 55);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1178, 0, 56);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1180, 12, 57);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1185, 2, 58);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1253, 0, 59);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1257, 0, 60);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (54, 1258, 0, 61);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (56, 1003, 7, 62);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (56, 1004, 1, 63);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (56, 1005, 80, 64);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (56, 1079, 0, 65);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (56, 1087, 4, 66);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (56, 1089, 0, 67);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (56, 1090, 27, 68);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (56, 1092, 82, 69);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (56, 1093, 0, 70);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (56, 1095, 1, 71);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (56, 1098, 0, 72);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (56, 1101, 1, 73);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (56, 1102, 64, 74);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (56, 1103, 7, 75);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (56, 1165, 0, 76);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (56, 1166, 0, 77);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (56, 1167, 1, 78);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (56, 1175, 0, 79);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (56, 1176, 0, 80);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1003, 12, 81);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1004, 4, 82);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1005, 43, 83);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1063, 4, 84);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1079, 6, 85);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1087, 163, 86);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1089, 3, 87);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1090, 77, 88);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1092, 250, 89);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1093, 450, 90);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1095, 2, 91);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1098, 0, 92);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1101, 2, 93);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1103, 26, 94);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1109, 3, 95);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1165, 0, 96);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1166, 0, 97);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1167, 4, 98);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1170, 1, 99);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1175, 0, 100);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1177, 42, 101);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1180, 27, 102);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1257, 0, 103);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (110, 1258, 1, 104);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1003, 12, 105);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1004, 10, 106);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1005, 1, 107);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1063, 0, 108);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1079, 0, 109);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1087, 48, 110);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1089, 2, 111);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1090, 11, 112);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1092, 132, 113);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1093, 129, 114);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1095, 1, 115);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1098, 0, 116);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1100, 49, 117);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1101, 0, 118);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1103, 31, 119);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1106, 180, 120);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1107, 0, 121);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1108, 0, 122);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1114, 2, 123);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1165, 0, 124);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1166, 0, 125);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1167, 0, 126);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1175, 0, 127);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1177, 71, 128);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1178, 1, 129);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1180, 335, 130);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1253, 411, 131);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (111, 1258, 3, 132);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1003, 14, 133);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1004, 6, 134);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1005, 64, 135);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1079, 7, 136);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1087, 47, 137);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1089, 5, 138);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1090, 197, 139);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1092, 563, 140);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1093, 5, 141);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1095, 3, 142);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1098, 1, 143);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1101, 2, 144);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1103, 9, 145);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1106, 1, 146);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1107, 8, 147);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1108, 0, 148);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1109, 2, 149);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1114, 0, 150);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1165, 0, 151);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1166, 0, 152);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1167, 2, 153);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1170, 1, 154);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1175, 0, 155);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1177, 184, 156);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1178, 0, 157);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1180, 70, 158);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1183, 1, 159);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1185, 0, 160);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1253, 0, 161);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (112, 1258, 1, 162);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1003, 13, 163);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1004, 2, 164);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1005, 75, 165);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1079, 3, 166);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1087, 21, 167);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1089, 3, 168);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1090, 53, 169);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1092, 223, 170);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1093, 6, 171);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1095, 1, 172);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1098, 0, 173);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1101, 1, 174);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1103, 63, 175);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1106, 0, 176);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1107, 0, 177);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1108, 0, 178);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1109, 0, 179);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1114, 0, 180);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1162, 0, 181);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1165, 1, 182);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1166, 0, 183);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1167, 7, 184);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1170, 0, 185);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1175, 0, 186);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1177, 237, 187);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1178, 0, 188);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1180, 15, 189);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1185, 0, 190);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1253, 0, 191);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1257, 0, 192);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (113, 1258, 0, 193);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1003, 1, 194);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1004, 0, 195);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1005, 4, 196);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1079, 1, 197);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1087, 10, 198);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1089, 0, 199);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1090, 8, 200);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1092, 193, 201);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1093, 0, 202);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1095, 0, 203);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1098, 0, 204);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1101, 0, 205);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1103, 0, 206);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1106, 24, 207);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1107, 276, 208);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1108, 1, 209);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1162, 18, 210);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1165, 0, 211);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1166, 0, 212);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1167, 1, 213);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1175, 0, 214);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1176, 0, 215);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (114, 1177, 10, 216);
INSERT INTO recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) VALUES (119, 1258, 0, 367);
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


--
-- Data for Name: recipe; Type: TABLE DATA; Schema: recipes; Owner: postgres
--

INSERT INTO recipes.recipe (recipe_id, recipe_name, "time", instructions, diet) VALUES (120, 'test 1', '20 minutes', '{"Heat oil in a 4 quart Dutch oven or large pot over medium-high heat until the oil is sizzling hot, about 1 minute. Add onion, garlic, carrots, celery and bell pepper. Sauté until tender, about 2-3 minutes.","This is a test instruction."}', 'All');


--
-- Data for Name: recipe_ingredient; Type: TABLE DATA; Schema: recipes; Owner: postgres
--



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

INSERT INTO recipes.tool (tool_id, tool_name, category_id) VALUES (17, 'Nonstick Pan (10'''' - 12'''')', 27);
INSERT INTO recipes.tool (tool_id, tool_name, category_id) VALUES (18, 'Stainless Steel Pan (10'''' - 12'''')', 27);
INSERT INTO recipes.tool (tool_id, tool_name, category_id) VALUES (19, 'Stainless Steel Saucepan', 27);
INSERT INTO recipes.tool (tool_id, tool_name, category_id) VALUES (20, 'Stock Pot', 27);
INSERT INTO recipes.tool (tool_id, tool_name, category_id) VALUES (21, 'Sheet Pan', 27);
INSERT INTO recipes.tool (tool_id, tool_name, category_id) VALUES (24, 'Chef''s Knife', 32);
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


--
-- Data for Name: recipe_tool; Type: TABLE DATA; Schema: recipes; Owner: postgres
--

INSERT INTO recipes.recipe_tool (recipe_tool_id, recipe_id, tool_id) VALUES (52, 120, 19);
INSERT INTO recipes.recipe_tool (recipe_tool_id, recipe_id, tool_id) VALUES (53, 120, 20);
INSERT INTO recipes.recipe_tool (recipe_tool_id, recipe_id, tool_id) VALUES (54, 120, 21);


--
-- Name: ingredient_category_ingredient_category_id_seq; Type: SEQUENCE SET; Schema: recipes; Owner: postgres
--

SELECT pg_catalog.setval('recipes.ingredient_category_ingredient_category_id_seq', 12, true);


--
-- Name: ingredient_ingredient_id_seq; Type: SEQUENCE SET; Schema: recipes; Owner: postgres
--

SELECT pg_catalog.setval('recipes.ingredient_ingredient_id_seq', 120, true);


--
-- Name: ingredient_measurement_measurement_id_seq; Type: SEQUENCE SET; Schema: recipes; Owner: postgres
--

SELECT pg_catalog.setval('recipes.ingredient_measurement_measurement_id_seq', 18, true);


--
-- Name: ingredient_nutrient_ingredient_nutrient_id_seq; Type: SEQUENCE SET; Schema: recipes; Owner: postgres
--

SELECT pg_catalog.setval('recipes.ingredient_nutrient_ingredient_nutrient_id_seq', 398, true);


--
-- Name: recipe_ingredient_id_seq; Type: SEQUENCE SET; Schema: recipes; Owner: postgres
--

SELECT pg_catalog.setval('recipes.recipe_ingredient_id_seq', 55, true);


--
-- Name: recipe_recipe_id_seq; Type: SEQUENCE SET; Schema: recipes; Owner: postgres
--

SELECT pg_catalog.setval('recipes.recipe_recipe_id_seq', 120, true);


--
-- Name: recipe_tool_id_seq; Type: SEQUENCE SET; Schema: recipes; Owner: postgres
--

SELECT pg_catalog.setval('recipes.recipe_tool_id_seq', 54, true);


--
-- Name: tool_category_tool_category_id_seq; Type: SEQUENCE SET; Schema: recipes; Owner: postgres
--

SELECT pg_catalog.setval('recipes.tool_category_tool_category_id_seq', 37, true);


--
-- Name: tool_tool_id_seq; Type: SEQUENCE SET; Schema: recipes; Owner: postgres
--

SELECT pg_catalog.setval('recipes.tool_tool_id_seq', 39, true);
