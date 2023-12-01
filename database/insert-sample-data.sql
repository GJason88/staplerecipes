--
-- Data for Name: ingredient_category; Type: TABLE DATA; Schema: recipes; Owner: postgres
--

COPY recipes.ingredient_category (category_id, category_name) FROM stdin;
4	Fruits
5	Vegetables
6	Grains
7	Dairy
8	Meats
9	Oil & Seasonings
10	Other
\.


--
-- Data for Name: ingredient; Type: TABLE DATA; Schema: recipes; Owner: postgres
--

COPY recipes.ingredient (ingredient_id, ingredient_name, category_id, g_ml) FROM stdin;
118	Milk, whole	7	97
119	Onion	5	0
120	Garlic	5	0
122	Flour, potato	4	3435
111	Egg	10	0
112	Quinoa, uncooked	6	131
110	Bread, whole-wheat	6	0
113	Pasta	6	0
56	White rice	6	118
54	Potato	5	0
114	Tomato	5	0
\.


--
-- Data for Name: ingredient_measurement; Type: TABLE DATA; Schema: recipes; Owner: postgres
--

COPY recipes.ingredient_measurement (measurement_id, ingredient_id, measurement_name, grams) FROM stdin;
15	119	small	70
16	119	medium	110
17	119	large	150
18	120	clove	3
22	122	test	3443
26	111	whole	50
28	110	slice	40
43	54	small	170
44	54	medium	213
45	54	large	369
46	114	small	91
47	114	medium	123
48	114	large	182
\.


--
-- Data for Name: nutrient; Type: TABLE DATA; Schema: recipes; Owner: postgres
--

-- COPY recipes.nutrient (nutrient_id, nutrient_name, unit, dv, lookup) FROM stdin;
-- 1258	Saturated Fat	g	20	saturatedFat
-- 1003	Protein	g	50	protein
-- 1004	Total Fat	g	78	totalFat
-- 1005	Total Carbohydrate	g	275	totalCarbs
-- 1063	Total Sugars	g	\N	totalSugars
-- 1079	Dietary Fiber	g	28	dietaryFiber
-- 1087	Calcium	mg	1300	calcium
-- 1089	Iron	mg	18	iron
-- 1090	Magnesium	mg	420	magnesium
-- 1092	Potassium	mg	4700	potassium
-- 1093	Sodium	mg	2300	sodium
-- 1095	Zinc	mg	11	zinc
-- 1096	Chromium	mcg	35	chromium
-- 1098	Copper	mg	0.9	copper
-- 1100	Iodine	mcg	150	iodine
-- 1101	Manganese	mg	2.3	manganese
-- 1102	Molybdenum	mg	45	molybdenum
-- 1103	Selenium	mcg	55	selenium
-- 1106	Vitamin A	mcg	900	vitaminA
-- 1107	Alpha Carotene	mcg	\N	alphaCarotene
-- 1108	Beta Carotene	mcg	\N	betaCarotene
-- 1109	Vitamin E	mg	15	vitaminE
-- 1114	Vitamin D	mcg	20	vitaminD
-- 1162	Vitamin C	mg	90	vitaminC
-- 1165	Thiamin (B1)	mg	1.2	thiaminB1
-- 1166	Riboflavin (B2)	mg	1.3	riboflavinB2
-- 1167	Niacin (B3)	mg	16	niacinB3
-- 1170	Pantothenic Acid (B5)	mg	5	pantothenicAcidB5
-- 1175	Pyridoxine (B6)	mg	1.7	pyridoxineB6
-- 1176	Biotin (B7)	mcg	30	biotinB7
-- 1177	Folate (B9)	mcg	400	folateB9
-- 1178	Cyanocobalamin (B12)	mcg	2.4	cyanocobalaminB12
-- 1180	Choline	mg	550	choline
-- 1183	Vitamin (K2)	mcg	120	vitaminK2
-- 1185	Vitamin (K1)	mcg	120	vitaminK1
-- 1235	Added Sugars	g	50	addedSugars
-- 1253	Cholesterol	mg	300	cholesterol
-- 1257	Trans Fat	g	\N	transFat
-- \.


--
-- Data for Name: ingredient_nutrient; Type: TABLE DATA; Schema: recipes; Owner: postgres
--

COPY recipes.ingredient_nutrient (ingredient_id, nutrient_id, amount, ingredient_nutrient_id) FROM stdin;
119	1003	1	337
119	1004	0	338
119	1005	9	339
119	1079	2	340
119	1087	23	341
119	1089	0	342
119	1090	10	343
119	1092	146	344
119	1093	4	345
119	1095	0	346
119	1098	0	347
119	1101	0	348
119	1103	1	349
119	1106	0	350
119	1107	1	351
119	1108	0	352
119	1109	0	353
119	1114	0	354
119	1162	7	355
119	1165	0	356
119	1166	0	357
119	1167	0	358
119	1170	0	359
119	1175	0	360
119	1177	19	361
119	1178	0	362
119	1180	6	363
119	1185	0	364
119	1253	0	365
119	1257	0	366
114	1003	1	2165
114	1004	0	2166
114	1005	4	2167
114	1079	1	2168
114	1087	10	2169
114	1089	0	2170
114	1090	8	2171
114	1092	193	2172
114	1093	0	2173
114	1095	0	2174
114	1098	0	2175
114	1101	0	2176
114	1103	0	2177
114	1106	24	2178
114	1107	276	2179
114	1108	1	2180
114	1162	18	2181
114	1165	0	2182
114	1166	0	2183
114	1167	1	2184
114	1175	0	2185
114	1176	0	2186
114	1177	10	2187
112	1003	14	1316
112	1004	6	1317
112	1005	64	1318
112	1079	7	1319
112	1087	47	1320
112	1089	5	1321
112	1090	197	1322
112	1092	563	1323
112	1093	5	1324
112	1095	3	1325
112	1098	1	1326
112	1101	2	1327
112	1103	9	1328
112	1106	1	1329
112	1107	8	1330
112	1108	0	1331
112	1109	2	1332
112	1114	0	1333
112	1165	0	1334
112	1166	0	1335
112	1167	2	1336
112	1170	1	1337
112	1175	0	1338
112	1177	184	1339
112	1178	0	1340
112	1180	70	1341
112	1183	1	1342
112	1185	0	1343
122	1003	8	698
122	1004	1	699
122	1005	80	700
122	1079	5	701
122	1087	44	702
122	1089	12	703
122	1090	74	704
122	1092	1270	705
122	1093	48	706
122	1095	1	707
122	1098	0	708
122	1101	1	709
122	1102	19	710
122	1103	1	711
122	1165	0	712
122	1166	0	713
122	1167	6	714
122	1175	1	715
122	1176	1	716
122	1177	41	717
112	1253	0	1344
112	1258	1	1345
110	1003	12	1346
110	1004	4	1347
111	1003	12	1174
111	1004	10	1175
111	1005	1	1176
111	1063	0	1177
111	1079	0	1178
111	1087	48	1179
111	1089	2	1180
119	1258	0	367
111	1090	11	1181
111	1092	132	1182
111	1093	129	1183
111	1095	1	1184
111	1098	0	1185
111	1100	49	1186
111	1101	0	1187
111	1103	31	1188
111	1106	180	1189
111	1107	0	1190
111	1108	0	1191
111	1114	2	1192
111	1165	0	1193
111	1166	0	1194
111	1167	0	1195
111	1175	0	1196
111	1177	71	1197
111	1178	1	1198
111	1180	335	1199
111	1253	411	1200
111	1258	3	1201
110	1005	43	1348
110	1063	4	1349
110	1079	6	1350
110	1087	163	1351
110	1089	3	1352
110	1090	77	1353
110	1092	250	1354
110	1093	450	1355
110	1095	2	1356
110	1098	0	1357
110	1101	2	1358
110	1103	26	1359
110	1109	3	1360
110	1165	0	1361
110	1166	0	1362
110	1167	4	1363
110	1170	1	1364
110	1175	0	1365
110	1177	42	1366
110	1180	27	1367
110	1257	0	1368
110	1258	1	1369
56	1003	7	1927
56	1004	1	1928
56	1005	80	1929
56	1079	0	1930
56	1087	4	1931
56	1089	0	1932
56	1090	27	1933
56	1092	82	1934
56	1093	0	1935
56	1095	1	1936
56	1098	0	1937
56	1101	1	1938
56	1102	64	1939
56	1103	7	1940
56	1165	0	1941
56	1166	0	1942
56	1167	1	1943
56	1175	0	1944
56	1176	0	1945
118	1003	3	307
118	1004	3	308
118	1005	5	309
118	1063	5	310
118	1087	123	311
118	1089	0	312
118	1090	12	313
118	1092	150	314
118	1093	38	315
118	1095	0	316
118	1098	0	317
118	1100	38	318
118	1101	0	319
118	1103	2	320
118	1106	32	321
118	1107	7	322
118	1108	0	323
118	1109	0	324
118	1114	1	325
118	1165	0	326
118	1166	0	327
118	1167	0	328
118	1170	0	329
118	1175	0	330
118	1177	0	331
118	1178	1	332
118	1180	18	333
118	1253	12	334
118	1257	0	335
118	1258	2	336
120	1003	6	368
120	1004	1	369
120	1005	33	370
120	1079	2	371
120	1087	181	372
120	1089	2	373
120	1090	25	374
120	1092	401	375
120	1093	17	376
120	1095	1	377
120	1098	0	378
120	1101	2	379
120	1103	14	380
120	1106	0	381
120	1107	5	382
120	1108	0	383
120	1109	0	384
120	1114	0	385
120	1162	31	386
120	1165	0	387
120	1166	0	388
120	1167	1	389
120	1170	1	390
120	1175	1	391
120	1177	3	392
120	1178	0	393
120	1180	23	394
120	1185	2	395
120	1253	0	396
120	1257	0	397
120	1258	0	398
54	1003	2	2134
54	1004	0	2135
54	1005	18	2136
54	1079	2	2137
54	1087	12	2138
54	1089	1	2139
54	1090	23	2140
54	1092	425	2141
54	1093	6	2142
54	1095	0	2143
54	1098	0	2144
54	1101	0	2145
54	1103	0	2146
54	1106	0	2147
54	1107	1	2148
54	1108	0	2149
54	1109	0	2150
54	1114	0	2151
54	1162	20	2152
113	1003	13	1801
113	1004	2	1802
113	1005	75	1803
113	1079	3	1804
113	1087	21	1805
113	1089	3	1806
113	1090	53	1807
113	1092	223	1808
113	1093	6	1809
113	1095	1	1810
113	1098	0	1811
113	1101	1	1812
113	1103	63	1813
113	1106	0	1814
113	1107	0	1815
113	1108	0	1816
113	1109	0	1817
113	1114	0	1818
113	1162	0	1819
113	1165	1	1820
113	1166	0	1821
113	1167	7	1822
113	1170	0	1823
113	1175	0	1824
113	1177	237	1825
113	1178	0	1826
113	1180	15	1827
113	1185	0	1828
113	1253	0	1829
113	1257	0	1830
113	1258	0	1831
54	1165	0	2153
54	1166	0	2154
54	1167	1	2155
54	1170	0	2156
54	1175	0	2157
54	1177	15	2158
54	1178	0	2159
54	1180	12	2160
54	1185	2	2161
54	1253	0	2162
54	1257	0	2163
54	1258	0	2164
\.


--
-- Data for Name: recipe; Type: TABLE DATA; Schema: recipes; Owner: postgres
--

COPY recipes.recipe (recipe_id, recipe_name, "time", instructions, diet, servings) FROM stdin;
132	test	test	{res}	test	test
120	test 111	20 minutes	{"Heat oil in a 4 quart Dutch oven or large pot over medium-high heat until the oil is sizzling hot, about 1 minute. Add onion, garlic, carrots, celery and bell pepper. Sauté until tender, about 2-3 minutes.","This is a test instruction."}	All	1
151	reviewtestdelete23	dfgsa	{fasdf}	hgf	gfd
\.


--
-- Data for Name: recipe_ingredient; Type: TABLE DATA; Schema: recipes; Owner: postgres
--

COPY recipes.recipe_ingredient (recipe_ingredient_id, recipe_id, ingredient_id, amount, default_measurement) FROM stdin;
\.


--
-- Data for Name: recipe_review; Type: TABLE DATA; Schema: recipes; Owner: postgres
--

COPY recipes.recipe_review (review_id, recipe_id, uid, review_text, rating, date, display_name) FROM stdin;
10	132	testuid	testtext	3	2023-11-23	testuser1
12	132	testuid2	testtext2	5	2023-11-02	testuser2
13	132	testuid3	testtext3	5	2023-11-05	testuser3
\.


--
-- Data for Name: tool_category; Type: TABLE DATA; Schema: recipes; Owner: postgres
--

COPY recipes.tool_category (category_id, category_name) FROM stdin;
27	Stoveware
32	Utensils
33	Dishes and Gadgets
34	Appliances
\.


--
-- Data for Name: tool; Type: TABLE DATA; Schema: recipes; Owner: postgres
--

COPY recipes.tool (tool_id, tool_name, category_id) FROM stdin;
25	Mid-Sized Knife	32
26	Wooden Spatula	32
27	Wooden Spoon	32
28	Tongs	32
29	Peeler	32
30	Measuring Spoons/Cups	32
31	Can Opener	32
32	Microplane Grater/Zester	32
33	Large Cutting Board	33
34	Small Cutting Board	33
35	Large Colander	33
36	Small Colander	33
37	Prep Bowls	33
38	Rice Cooker	34
24	Chefs Knife	32
17	Nonstick Pan (10'' - 12'')	27
18	Stainless Steel Pan (10'' - 12'')	27
21	Sheet Pan	27
\.


--
-- Data for Name: recipe_tool; Type: TABLE DATA; Schema: recipes; Owner: postgres
--

COPY recipes.recipe_tool (recipe_tool_id, recipe_id, tool_id) FROM stdin;
71	132	30
97	151	31
\.


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

SELECT pg_catalog.setval('recipes.recipe_ingredient_id_seq', 110, true);


--
-- Name: recipe_recipe_id_seq; Type: SEQUENCE SET; Schema: recipes; Owner: postgres
--

SELECT pg_catalog.setval('recipes.recipe_recipe_id_seq', 152, true);


--
-- Name: recipe_review_review_id_seq; Type: SEQUENCE SET; Schema: recipes; Owner: postgres
--

SELECT pg_catalog.setval('recipes.recipe_review_review_id_seq', 109, true);


--
-- Name: recipe_tool_id_seq; Type: SEQUENCE SET; Schema: recipes; Owner: postgres
--

SELECT pg_catalog.setval('recipes.recipe_tool_id_seq', 105, true);


--
-- Name: tool_category_tool_category_id_seq; Type: SEQUENCE SET; Schema: recipes; Owner: postgres
--

SELECT pg_catalog.setval('recipes.tool_category_tool_category_id_seq', 37, true);


--
-- Name: tool_tool_id_seq; Type: SEQUENCE SET; Schema: recipes; Owner: postgres
--

SELECT pg_catalog.setval('recipes.tool_tool_id_seq', 48, true);


--
-- PostgreSQL database dump complete
--

