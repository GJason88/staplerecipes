--
-- Name: recipes; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA recipes;


--
-- Name: ingredient; Type: TABLE; Schema: recipes; Owner: -
--

CREATE TABLE recipes.ingredient (
    ingredient_id integer NOT NULL,
    ingredient_name character varying(75) NOT NULL,
    category_id integer NOT NULL,
    g_ml double precision DEFAULT 0 NOT NULL
);


--
-- Name: ingredient_category; Type: TABLE; Schema: recipes; Owner: -
--

CREATE TABLE recipes.ingredient_category (
    category_id integer NOT NULL,
    category_name character varying(75) NOT NULL
);


--
-- Name: ingredient_category_ingredient_category_id_seq; Type: SEQUENCE; Schema: recipes; Owner: -
--

CREATE SEQUENCE recipes.ingredient_category_ingredient_category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: ingredient_category_ingredient_category_id_seq; Type: SEQUENCE OWNED BY; Schema: recipes; Owner: -
--

ALTER SEQUENCE recipes.ingredient_category_ingredient_category_id_seq OWNED BY recipes.ingredient_category.category_id;


--
-- Name: ingredient_ingredient_id_seq; Type: SEQUENCE; Schema: recipes; Owner: -
--

CREATE SEQUENCE recipes.ingredient_ingredient_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: ingredient_ingredient_id_seq; Type: SEQUENCE OWNED BY; Schema: recipes; Owner: -
--

ALTER SEQUENCE recipes.ingredient_ingredient_id_seq OWNED BY recipes.ingredient.ingredient_id;


--
-- Name: ingredient_measurement; Type: TABLE; Schema: recipes; Owner: -
--

CREATE TABLE recipes.ingredient_measurement (
    measurement_id integer NOT NULL,
    ingredient_id integer NOT NULL,
    measurement_name character varying(75) NOT NULL,
    grams integer NOT NULL
);


--
-- Name: ingredient_measurement_measurement_id_seq; Type: SEQUENCE; Schema: recipes; Owner: -
--

CREATE SEQUENCE recipes.ingredient_measurement_measurement_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: ingredient_measurement_measurement_id_seq; Type: SEQUENCE OWNED BY; Schema: recipes; Owner: -
--

ALTER SEQUENCE recipes.ingredient_measurement_measurement_id_seq OWNED BY recipes.ingredient_measurement.measurement_id;


--
-- Name: ingredient_nutrient; Type: TABLE; Schema: recipes; Owner: -
--

CREATE TABLE recipes.ingredient_nutrient (
    ingredient_id integer NOT NULL,
    nutrient_id integer NOT NULL,
    amount integer NOT NULL,
    ingredient_nutrient_id integer NOT NULL
);


--
-- Name: ingredient_nutrient_ingredient_nutrient_id_seq; Type: SEQUENCE; Schema: recipes; Owner: -
--

CREATE SEQUENCE recipes.ingredient_nutrient_ingredient_nutrient_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: ingredient_nutrient_ingredient_nutrient_id_seq; Type: SEQUENCE OWNED BY; Schema: recipes; Owner: -
--

ALTER SEQUENCE recipes.ingredient_nutrient_ingredient_nutrient_id_seq OWNED BY recipes.ingredient_nutrient.ingredient_nutrient_id;


--
-- Name: nutrient; Type: TABLE; Schema: recipes; Owner: -
--

CREATE TABLE recipes.nutrient (
    nutrient_id integer NOT NULL,
    nutrient_name character varying(75) NOT NULL,
    unit character varying(75) NOT NULL,
    dv double precision,
    lookup character varying(75)
);


--
-- Name: nutrient_nutrient_id_seq; Type: SEQUENCE; Schema: recipes; Owner: -
--

CREATE SEQUENCE recipes.nutrient_nutrient_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: nutrient_nutrient_id_seq; Type: SEQUENCE OWNED BY; Schema: recipes; Owner: -
--

ALTER SEQUENCE recipes.nutrient_nutrient_id_seq OWNED BY recipes.nutrient.nutrient_id;


--
-- Name: recipe; Type: TABLE; Schema: recipes; Owner: -
--

CREATE TABLE recipes.recipe (
    recipe_id integer NOT NULL,
    recipe_name character varying(75) NOT NULL,
    "time" character varying(75) NOT NULL,
    instructions text[] NOT NULL,
    diet character varying(75) DEFAULT 'All'::character varying NOT NULL
);


--
-- Name: recipe_ingredient; Type: TABLE; Schema: recipes; Owner: -
--

CREATE TABLE recipes.recipe_ingredient (
    recipe_ingredient_id integer NOT NULL,
    recipe_id integer NOT NULL,
    ingredient_id integer NOT NULL,
    amount integer NOT NULL,
    default_measurement character varying(75) NOT NULL
);


--
-- Name: recipe_ingredient_id_seq; Type: SEQUENCE; Schema: recipes; Owner: -
--

CREATE SEQUENCE recipes.recipe_ingredient_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: recipe_ingredient_id_seq; Type: SEQUENCE OWNED BY; Schema: recipes; Owner: -
--

ALTER SEQUENCE recipes.recipe_ingredient_id_seq OWNED BY recipes.recipe_ingredient.recipe_ingredient_id;


--
-- Name: recipe_recipe_id_seq; Type: SEQUENCE; Schema: recipes; Owner: -
--

CREATE SEQUENCE recipes.recipe_recipe_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: recipe_recipe_id_seq; Type: SEQUENCE OWNED BY; Schema: recipes; Owner: -
--

ALTER SEQUENCE recipes.recipe_recipe_id_seq OWNED BY recipes.recipe.recipe_id;


--
-- Name: recipe_tool; Type: TABLE; Schema: recipes; Owner: -
--

CREATE TABLE recipes.recipe_tool (
    recipe_tool_id integer NOT NULL,
    recipe_id integer NOT NULL,
    tool_id integer NOT NULL
);


--
-- Name: recipe_tool_id_seq; Type: SEQUENCE; Schema: recipes; Owner: -
--

CREATE SEQUENCE recipes.recipe_tool_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: recipe_tool_id_seq; Type: SEQUENCE OWNED BY; Schema: recipes; Owner: -
--

ALTER SEQUENCE recipes.recipe_tool_id_seq OWNED BY recipes.recipe_tool.recipe_tool_id;


--
-- Name: tool; Type: TABLE; Schema: recipes; Owner: -
--

CREATE TABLE recipes.tool (
    tool_id integer NOT NULL,
    tool_name character varying(75) NOT NULL,
    category_id integer NOT NULL
);


--
-- Name: tool_category; Type: TABLE; Schema: recipes; Owner: -
--

CREATE TABLE recipes.tool_category (
    category_id integer NOT NULL,
    category_name character varying(75) NOT NULL
);


--
-- Name: tool_category_tool_category_id_seq; Type: SEQUENCE; Schema: recipes; Owner: -
--

CREATE SEQUENCE recipes.tool_category_tool_category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: tool_category_tool_category_id_seq; Type: SEQUENCE OWNED BY; Schema: recipes; Owner: -
--

ALTER SEQUENCE recipes.tool_category_tool_category_id_seq OWNED BY recipes.tool_category.category_id;


--
-- Name: tool_tool_id_seq; Type: SEQUENCE; Schema: recipes; Owner: -
--

CREATE SEQUENCE recipes.tool_tool_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: tool_tool_id_seq; Type: SEQUENCE OWNED BY; Schema: recipes; Owner: -
--

ALTER SEQUENCE recipes.tool_tool_id_seq OWNED BY recipes.tool.tool_id;


--
-- Name: ingredient ingredient_id; Type: DEFAULT; Schema: recipes; Owner: -
--

ALTER TABLE ONLY recipes.ingredient ALTER COLUMN ingredient_id SET DEFAULT nextval('recipes.ingredient_ingredient_id_seq'::regclass);


--
-- Name: ingredient_category category_id; Type: DEFAULT; Schema: recipes; Owner: -
--

ALTER TABLE ONLY recipes.ingredient_category ALTER COLUMN category_id SET DEFAULT nextval('recipes.ingredient_category_ingredient_category_id_seq'::regclass);


--
-- Name: ingredient_measurement measurement_id; Type: DEFAULT; Schema: recipes; Owner: -
--

ALTER TABLE ONLY recipes.ingredient_measurement ALTER COLUMN measurement_id SET DEFAULT nextval('recipes.ingredient_measurement_measurement_id_seq'::regclass);


--
-- Name: ingredient_nutrient ingredient_nutrient_id; Type: DEFAULT; Schema: recipes; Owner: -
--

ALTER TABLE ONLY recipes.ingredient_nutrient ALTER COLUMN ingredient_nutrient_id SET DEFAULT nextval('recipes.ingredient_nutrient_ingredient_nutrient_id_seq'::regclass);


--
-- Name: recipe recipe_id; Type: DEFAULT; Schema: recipes; Owner: -
--

ALTER TABLE ONLY recipes.recipe ALTER COLUMN recipe_id SET DEFAULT nextval('recipes.recipe_recipe_id_seq'::regclass);


--
-- Name: recipe_ingredient recipe_ingredient_id; Type: DEFAULT; Schema: recipes; Owner: -
--

ALTER TABLE ONLY recipes.recipe_ingredient ALTER COLUMN recipe_ingredient_id SET DEFAULT nextval('recipes.recipe_ingredient_id_seq'::regclass);


--
-- Name: recipe_tool recipe_tool_id; Type: DEFAULT; Schema: recipes; Owner: -
--

ALTER TABLE ONLY recipes.recipe_tool ALTER COLUMN recipe_tool_id SET DEFAULT nextval('recipes.recipe_tool_id_seq'::regclass);


--
-- Name: tool tool_id; Type: DEFAULT; Schema: recipes; Owner: -
--

ALTER TABLE ONLY recipes.tool ALTER COLUMN tool_id SET DEFAULT nextval('recipes.tool_tool_id_seq'::regclass);


--
-- Name: tool_category category_id; Type: DEFAULT; Schema: recipes; Owner: -
--

ALTER TABLE ONLY recipes.tool_category ALTER COLUMN category_id SET DEFAULT nextval('recipes.tool_category_tool_category_id_seq'::regclass);


--
-- Name: ingredient_category ingredient_category_name_key; Type: CONSTRAINT; Schema: recipes; Owner: -
--

ALTER TABLE ONLY recipes.ingredient_category
    ADD CONSTRAINT ingredient_category_name_key UNIQUE (category_name);


--
-- Name: ingredient_category ingredient_category_pkey; Type: CONSTRAINT; Schema: recipes; Owner: -
--

ALTER TABLE ONLY recipes.ingredient_category
    ADD CONSTRAINT ingredient_category_pkey PRIMARY KEY (category_id);


--
-- Name: ingredient_measurement ingredient_measurement_pkey; Type: CONSTRAINT; Schema: recipes; Owner: -
--

ALTER TABLE ONLY recipes.ingredient_measurement
    ADD CONSTRAINT ingredient_measurement_pkey PRIMARY KEY (measurement_id);


--
-- Name: ingredient ingredient_name_key; Type: CONSTRAINT; Schema: recipes; Owner: -
--

ALTER TABLE ONLY recipes.ingredient
    ADD CONSTRAINT ingredient_name_key UNIQUE (ingredient_name);


--
-- Name: ingredient_nutrient ingredient_nutrient_ingredient_nutrient_id_key; Type: CONSTRAINT; Schema: recipes; Owner: -
--

ALTER TABLE ONLY recipes.ingredient_nutrient
    ADD CONSTRAINT ingredient_nutrient_ingredient_nutrient_id_key UNIQUE (ingredient_nutrient_id);


--
-- Name: ingredient_nutrient ingredient_nutrient_pkey; Type: CONSTRAINT; Schema: recipes; Owner: -
--

ALTER TABLE ONLY recipes.ingredient_nutrient
    ADD CONSTRAINT ingredient_nutrient_pkey PRIMARY KEY (ingredient_nutrient_id);


--
-- Name: ingredient ingredient_pkey; Type: CONSTRAINT; Schema: recipes; Owner: -
--

ALTER TABLE ONLY recipes.ingredient
    ADD CONSTRAINT ingredient_pkey PRIMARY KEY (ingredient_id);


--
-- Name: nutrient nutrient_name_key; Type: CONSTRAINT; Schema: recipes; Owner: -
--

ALTER TABLE ONLY recipes.nutrient
    ADD CONSTRAINT nutrient_name_key UNIQUE (nutrient_name);


--
-- Name: nutrient nutrient_pkey; Type: CONSTRAINT; Schema: recipes; Owner: -
--

ALTER TABLE ONLY recipes.nutrient
    ADD CONSTRAINT nutrient_pkey PRIMARY KEY (nutrient_id);


--
-- Name: recipe_ingredient recipe_ingredient_pkey; Type: CONSTRAINT; Schema: recipes; Owner: -
--

ALTER TABLE ONLY recipes.recipe_ingredient
    ADD CONSTRAINT recipe_ingredient_pkey PRIMARY KEY (recipe_ingredient_id);


--
-- Name: recipe recipe_name_key; Type: CONSTRAINT; Schema: recipes; Owner: -
--

ALTER TABLE ONLY recipes.recipe
    ADD CONSTRAINT recipe_name_key UNIQUE (recipe_name);


--
-- Name: recipe recipe_pkey; Type: CONSTRAINT; Schema: recipes; Owner: -
--

ALTER TABLE ONLY recipes.recipe
    ADD CONSTRAINT recipe_pkey PRIMARY KEY (recipe_id);


--
-- Name: recipe_tool recipe_tool_pkey; Type: CONSTRAINT; Schema: recipes; Owner: -
--

ALTER TABLE ONLY recipes.recipe_tool
    ADD CONSTRAINT recipe_tool_pkey PRIMARY KEY (recipe_tool_id);


--
-- Name: tool_category tool_category_name_key; Type: CONSTRAINT; Schema: recipes; Owner: -
--

ALTER TABLE ONLY recipes.tool_category
    ADD CONSTRAINT tool_category_name_key UNIQUE (category_name);


--
-- Name: tool_category tool_category_pkey; Type: CONSTRAINT; Schema: recipes; Owner: -
--

ALTER TABLE ONLY recipes.tool_category
    ADD CONSTRAINT tool_category_pkey PRIMARY KEY (category_id);


--
-- Name: tool tool_name_key; Type: CONSTRAINT; Schema: recipes; Owner: -
--

ALTER TABLE ONLY recipes.tool
    ADD CONSTRAINT tool_name_key UNIQUE (tool_name);


--
-- Name: tool tool_pkey; Type: CONSTRAINT; Schema: recipes; Owner: -
--

ALTER TABLE ONLY recipes.tool
    ADD CONSTRAINT tool_pkey PRIMARY KEY (tool_id);


--
-- Name: ingredient ingredient_category_id_fkey; Type: FK CONSTRAINT; Schema: recipes; Owner: -
--

ALTER TABLE ONLY recipes.ingredient
    ADD CONSTRAINT ingredient_category_id_fkey FOREIGN KEY (category_id) REFERENCES recipes.ingredient_category(category_id) ON DELETE CASCADE;


--
-- Name: ingredient_measurement ingredient_measurement_ingredient_id_fkey; Type: FK CONSTRAINT; Schema: recipes; Owner: -
--

ALTER TABLE ONLY recipes.ingredient_measurement
    ADD CONSTRAINT ingredient_measurement_ingredient_id_fkey FOREIGN KEY (ingredient_id) REFERENCES recipes.ingredient(ingredient_id) ON DELETE CASCADE;


--
-- Name: ingredient_nutrient ingredient_nutrient_ingredient_id_fkey; Type: FK CONSTRAINT; Schema: recipes; Owner: -
--

ALTER TABLE ONLY recipes.ingredient_nutrient
    ADD CONSTRAINT ingredient_nutrient_ingredient_id_fkey FOREIGN KEY (ingredient_id) REFERENCES recipes.ingredient(ingredient_id) ON DELETE CASCADE;


--
-- Name: ingredient_nutrient ingredient_nutrient_nutrient_id_fkey; Type: FK CONSTRAINT; Schema: recipes; Owner: -
--

ALTER TABLE ONLY recipes.ingredient_nutrient
    ADD CONSTRAINT ingredient_nutrient_nutrient_id_fkey FOREIGN KEY (nutrient_id) REFERENCES recipes.nutrient(nutrient_id) NOT VALID;


--
-- Name: recipe_ingredient recipe_ingredient_ingredient_id_fkey; Type: FK CONSTRAINT; Schema: recipes; Owner: -
--

ALTER TABLE ONLY recipes.recipe_ingredient
    ADD CONSTRAINT recipe_ingredient_ingredient_id_fkey FOREIGN KEY (ingredient_id) REFERENCES recipes.ingredient(ingredient_id) ON DELETE CASCADE;


--
-- Name: recipe_ingredient recipe_ingredient_recipe_id_fkey; Type: FK CONSTRAINT; Schema: recipes; Owner: -
--

ALTER TABLE ONLY recipes.recipe_ingredient
    ADD CONSTRAINT recipe_ingredient_recipe_id_fkey FOREIGN KEY (recipe_id) REFERENCES recipes.recipe(recipe_id) ON DELETE CASCADE;


--
-- Name: recipe_tool recipe_tool_recipe_id_fkey; Type: FK CONSTRAINT; Schema: recipes; Owner: -
--

ALTER TABLE ONLY recipes.recipe_tool
    ADD CONSTRAINT recipe_tool_recipe_id_fkey FOREIGN KEY (recipe_id) REFERENCES recipes.recipe(recipe_id) ON DELETE CASCADE;


--
-- Name: recipe_tool recipe_tool_tool_id_fkey; Type: FK CONSTRAINT; Schema: recipes; Owner: -
--

ALTER TABLE ONLY recipes.recipe_tool
    ADD CONSTRAINT recipe_tool_tool_id_fkey FOREIGN KEY (tool_id) REFERENCES recipes.tool(tool_id) ON DELETE CASCADE;


--
-- Name: tool tool_category_id_fkey; Type: FK CONSTRAINT; Schema: recipes; Owner: -
--

ALTER TABLE ONLY recipes.tool
    ADD CONSTRAINT tool_category_id_fkey FOREIGN KEY (category_id) REFERENCES recipes.tool_category(category_id) ON DELETE CASCADE;
  

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
