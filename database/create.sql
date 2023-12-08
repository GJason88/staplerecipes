--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4 (Debian 15.4-1.pgdg120+1)
-- Dumped by pg_dump version 15.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: recipes; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA recipes;


ALTER SCHEMA recipes OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

CREATE USER client WITH PASSWORD 'user';

CREATE USER admin WITH PASSWORD 'admin';

--
-- Name: ingredient; Type: TABLE; Schema: recipes; Owner: postgres
--

CREATE TABLE recipes.ingredient (
    ingredient_id integer NOT NULL,
    ingredient_name character varying(75) NOT NULL,
    category_id integer NOT NULL,
    g_ml double precision DEFAULT 0 NOT NULL
);


ALTER TABLE recipes.ingredient OWNER TO postgres;

--
-- Name: COLUMN ingredient.g_ml; Type: COMMENT; Schema: recipes; Owner: postgres
--

COMMENT ON COLUMN recipes.ingredient.g_ml IS 'ml equivalent of 100g, else 0';


--
-- Name: ingredient_category; Type: TABLE; Schema: recipes; Owner: postgres
--

CREATE TABLE recipes.ingredient_category (
    category_id integer NOT NULL,
    category_name character varying(75) NOT NULL
);


ALTER TABLE recipes.ingredient_category OWNER TO postgres;

--
-- Name: ingredient_category_ingredient_category_id_seq; Type: SEQUENCE; Schema: recipes; Owner: postgres
--

CREATE SEQUENCE recipes.ingredient_category_ingredient_category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE recipes.ingredient_category_ingredient_category_id_seq OWNER TO postgres;

--
-- Name: ingredient_category_ingredient_category_id_seq; Type: SEQUENCE OWNED BY; Schema: recipes; Owner: postgres
--

ALTER SEQUENCE recipes.ingredient_category_ingredient_category_id_seq OWNED BY recipes.ingredient_category.category_id;


--
-- Name: ingredient_ingredient_id_seq; Type: SEQUENCE; Schema: recipes; Owner: postgres
--

CREATE SEQUENCE recipes.ingredient_ingredient_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE recipes.ingredient_ingredient_id_seq OWNER TO postgres;

--
-- Name: ingredient_ingredient_id_seq; Type: SEQUENCE OWNED BY; Schema: recipes; Owner: postgres
--

ALTER SEQUENCE recipes.ingredient_ingredient_id_seq OWNED BY recipes.ingredient.ingredient_id;


--
-- Name: ingredient_measurement; Type: TABLE; Schema: recipes; Owner: postgres
--

CREATE TABLE recipes.ingredient_measurement (
    measurement_id integer NOT NULL,
    ingredient_id integer NOT NULL,
    measurement_name character varying(75) NOT NULL,
    grams integer NOT NULL
);


ALTER TABLE recipes.ingredient_measurement OWNER TO postgres;

--
-- Name: ingredient_measurement_measurement_id_seq; Type: SEQUENCE; Schema: recipes; Owner: postgres
--

CREATE SEQUENCE recipes.ingredient_measurement_measurement_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE recipes.ingredient_measurement_measurement_id_seq OWNER TO postgres;

--
-- Name: ingredient_measurement_measurement_id_seq; Type: SEQUENCE OWNED BY; Schema: recipes; Owner: postgres
--

ALTER SEQUENCE recipes.ingredient_measurement_measurement_id_seq OWNED BY recipes.ingredient_measurement.measurement_id;


--
-- Name: ingredient_nutrient; Type: TABLE; Schema: recipes; Owner: postgres
--

CREATE TABLE recipes.ingredient_nutrient (
    ingredient_id integer NOT NULL,
    nutrient_id integer NOT NULL,
    amount integer NOT NULL,
    ingredient_nutrient_id integer NOT NULL
);


ALTER TABLE recipes.ingredient_nutrient OWNER TO postgres;

--
-- Name: ingredient_nutrient_ingredient_nutrient_id_seq; Type: SEQUENCE; Schema: recipes; Owner: postgres
--

CREATE SEQUENCE recipes.ingredient_nutrient_ingredient_nutrient_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE recipes.ingredient_nutrient_ingredient_nutrient_id_seq OWNER TO postgres;

--
-- Name: ingredient_nutrient_ingredient_nutrient_id_seq; Type: SEQUENCE OWNED BY; Schema: recipes; Owner: postgres
--

ALTER SEQUENCE recipes.ingredient_nutrient_ingredient_nutrient_id_seq OWNED BY recipes.ingredient_nutrient.ingredient_nutrient_id;


--
-- Name: nutrient; Type: TABLE; Schema: recipes; Owner: postgres
--

CREATE TABLE recipes.nutrient (
    nutrient_id integer NOT NULL,
    nutrient_name character varying(75) NOT NULL,
    unit character varying(75) NOT NULL,
    dv double precision,
    lookup character varying(75)
);


ALTER TABLE recipes.nutrient OWNER TO postgres;

--
-- Name: nutrient_nutrient_id_seq; Type: SEQUENCE; Schema: recipes; Owner: postgres
--

CREATE SEQUENCE recipes.nutrient_nutrient_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE recipes.nutrient_nutrient_id_seq OWNER TO postgres;

--
-- Name: nutrient_nutrient_id_seq; Type: SEQUENCE OWNED BY; Schema: recipes; Owner: postgres
--

ALTER SEQUENCE recipes.nutrient_nutrient_id_seq OWNED BY recipes.nutrient.nutrient_id;


--
-- Name: recipe; Type: TABLE; Schema: recipes; Owner: postgres
--

CREATE TABLE recipes.recipe (
    recipe_id integer NOT NULL,
    recipe_name character varying(75) NOT NULL,
    "time" character varying(75) NOT NULL,
    instructions text[] NOT NULL,
    diet character varying(75) DEFAULT 'All'::character varying NOT NULL,
    servings character varying(75) NOT NULL
);


ALTER TABLE recipes.recipe OWNER TO postgres;

--
-- Name: recipe_ingredient; Type: TABLE; Schema: recipes; Owner: postgres
--

CREATE TABLE recipes.recipe_ingredient (
    recipe_ingredient_id integer NOT NULL,
    recipe_id integer NOT NULL,
    ingredient_id integer NOT NULL,
    amount integer NOT NULL,
    default_measurement character varying(75) NOT NULL
);


ALTER TABLE recipes.recipe_ingredient OWNER TO postgres;

--
-- Name: recipe_ingredient_id_seq; Type: SEQUENCE; Schema: recipes; Owner: postgres
--

CREATE SEQUENCE recipes.recipe_ingredient_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE recipes.recipe_ingredient_id_seq OWNER TO postgres;

--
-- Name: recipe_ingredient_id_seq; Type: SEQUENCE OWNED BY; Schema: recipes; Owner: postgres
--

ALTER SEQUENCE recipes.recipe_ingredient_id_seq OWNED BY recipes.recipe_ingredient.recipe_ingredient_id;


--
-- Name: recipe_recipe_id_seq; Type: SEQUENCE; Schema: recipes; Owner: postgres
--

CREATE SEQUENCE recipes.recipe_recipe_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE recipes.recipe_recipe_id_seq OWNER TO postgres;

--
-- Name: recipe_recipe_id_seq; Type: SEQUENCE OWNED BY; Schema: recipes; Owner: postgres
--

ALTER SEQUENCE recipes.recipe_recipe_id_seq OWNED BY recipes.recipe.recipe_id;


--
-- Name: recipe_review; Type: TABLE; Schema: recipes; Owner: postgres
--

CREATE TABLE recipes.recipe_review (
    review_id integer NOT NULL,
    recipe_id integer NOT NULL,
    uid character varying(128) NOT NULL,
    review_text character varying(8192) NOT NULL,
    rating smallint NOT NULL,
    date date NOT NULL,
    display_name character varying(128) NOT NULL,
    CONSTRAINT recipe_review_rating_check CHECK (((rating >= 1) AND (rating <= 5)))
);


ALTER TABLE recipes.recipe_review OWNER TO postgres;

--
-- Name: recipe_review_review_id_seq; Type: SEQUENCE; Schema: recipes; Owner: postgres
--

CREATE SEQUENCE recipes.recipe_review_review_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE recipes.recipe_review_review_id_seq OWNER TO postgres;

--
-- Name: recipe_review_review_id_seq; Type: SEQUENCE OWNED BY; Schema: recipes; Owner: postgres
--

ALTER SEQUENCE recipes.recipe_review_review_id_seq OWNED BY recipes.recipe_review.review_id;


--
-- Name: recipe_tool; Type: TABLE; Schema: recipes; Owner: postgres
--

CREATE TABLE recipes.recipe_tool (
    recipe_tool_id integer NOT NULL,
    recipe_id integer NOT NULL,
    tool_id integer NOT NULL
);


ALTER TABLE recipes.recipe_tool OWNER TO postgres;

--
-- Name: recipe_tool_id_seq; Type: SEQUENCE; Schema: recipes; Owner: postgres
--

CREATE SEQUENCE recipes.recipe_tool_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE recipes.recipe_tool_id_seq OWNER TO postgres;

--
-- Name: recipe_tool_id_seq; Type: SEQUENCE OWNED BY; Schema: recipes; Owner: postgres
--

ALTER SEQUENCE recipes.recipe_tool_id_seq OWNED BY recipes.recipe_tool.recipe_tool_id;


--
-- Name: tool; Type: TABLE; Schema: recipes; Owner: postgres
--

CREATE TABLE recipes.tool (
    tool_id integer NOT NULL,
    tool_name character varying(75) NOT NULL,
    category_id integer NOT NULL
);


ALTER TABLE recipes.tool OWNER TO postgres;

--
-- Name: tool_category; Type: TABLE; Schema: recipes; Owner: postgres
--

CREATE TABLE recipes.tool_category (
    category_id integer NOT NULL,
    category_name character varying(75) NOT NULL
);


ALTER TABLE recipes.tool_category OWNER TO postgres;

--
-- Name: tool_category_tool_category_id_seq; Type: SEQUENCE; Schema: recipes; Owner: postgres
--

CREATE SEQUENCE recipes.tool_category_tool_category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE recipes.tool_category_tool_category_id_seq OWNER TO postgres;

--
-- Name: tool_category_tool_category_id_seq; Type: SEQUENCE OWNED BY; Schema: recipes; Owner: postgres
--

ALTER SEQUENCE recipes.tool_category_tool_category_id_seq OWNED BY recipes.tool_category.category_id;


--
-- Name: tool_tool_id_seq; Type: SEQUENCE; Schema: recipes; Owner: postgres
--

CREATE SEQUENCE recipes.tool_tool_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE recipes.tool_tool_id_seq OWNER TO postgres;

--
-- Name: tool_tool_id_seq; Type: SEQUENCE OWNED BY; Schema: recipes; Owner: postgres
--

ALTER SEQUENCE recipes.tool_tool_id_seq OWNED BY recipes.tool.tool_id;


--
-- Name: ingredient ingredient_id; Type: DEFAULT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.ingredient ALTER COLUMN ingredient_id SET DEFAULT nextval('recipes.ingredient_ingredient_id_seq'::regclass);


--
-- Name: ingredient_category category_id; Type: DEFAULT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.ingredient_category ALTER COLUMN category_id SET DEFAULT nextval('recipes.ingredient_category_ingredient_category_id_seq'::regclass);


--
-- Name: ingredient_measurement measurement_id; Type: DEFAULT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.ingredient_measurement ALTER COLUMN measurement_id SET DEFAULT nextval('recipes.ingredient_measurement_measurement_id_seq'::regclass);


--
-- Name: ingredient_nutrient ingredient_nutrient_id; Type: DEFAULT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.ingredient_nutrient ALTER COLUMN ingredient_nutrient_id SET DEFAULT nextval('recipes.ingredient_nutrient_ingredient_nutrient_id_seq'::regclass);


--
-- Name: recipe recipe_id; Type: DEFAULT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.recipe ALTER COLUMN recipe_id SET DEFAULT nextval('recipes.recipe_recipe_id_seq'::regclass);


--
-- Name: recipe_ingredient recipe_ingredient_id; Type: DEFAULT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.recipe_ingredient ALTER COLUMN recipe_ingredient_id SET DEFAULT nextval('recipes.recipe_ingredient_id_seq'::regclass);


--
-- Name: recipe_review review_id; Type: DEFAULT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.recipe_review ALTER COLUMN review_id SET DEFAULT nextval('recipes.recipe_review_review_id_seq'::regclass);


--
-- Name: recipe_tool recipe_tool_id; Type: DEFAULT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.recipe_tool ALTER COLUMN recipe_tool_id SET DEFAULT nextval('recipes.recipe_tool_id_seq'::regclass);


--
-- Name: tool tool_id; Type: DEFAULT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.tool ALTER COLUMN tool_id SET DEFAULT nextval('recipes.tool_tool_id_seq'::regclass);


--
-- Name: tool_category category_id; Type: DEFAULT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.tool_category ALTER COLUMN category_id SET DEFAULT nextval('recipes.tool_category_tool_category_id_seq'::regclass);


--
-- Name: ingredient_category ingredient_category_name_key; Type: CONSTRAINT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.ingredient_category
    ADD CONSTRAINT ingredient_category_name_key UNIQUE (category_name);


--
-- Name: ingredient_category ingredient_category_pkey; Type: CONSTRAINT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.ingredient_category
    ADD CONSTRAINT ingredient_category_pkey PRIMARY KEY (category_id);


--
-- Name: ingredient_measurement ingredient_measurement_pkey; Type: CONSTRAINT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.ingredient_measurement
    ADD CONSTRAINT ingredient_measurement_pkey PRIMARY KEY (measurement_id);


--
-- Name: ingredient ingredient_name_key; Type: CONSTRAINT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.ingredient
    ADD CONSTRAINT ingredient_name_key UNIQUE (ingredient_name);


--
-- Name: ingredient_nutrient ingredient_nutrient_ingredient_nutrient_id_key; Type: CONSTRAINT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.ingredient_nutrient
    ADD CONSTRAINT ingredient_nutrient_ingredient_nutrient_id_key UNIQUE (ingredient_nutrient_id);


--
-- Name: ingredient_nutrient ingredient_nutrient_pkey; Type: CONSTRAINT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.ingredient_nutrient
    ADD CONSTRAINT ingredient_nutrient_pkey PRIMARY KEY (ingredient_nutrient_id);


--
-- Name: ingredient ingredient_pkey; Type: CONSTRAINT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.ingredient
    ADD CONSTRAINT ingredient_pkey PRIMARY KEY (ingredient_id);


--
-- Name: nutrient nutrient_name_key; Type: CONSTRAINT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.nutrient
    ADD CONSTRAINT nutrient_name_key UNIQUE (nutrient_name);


--
-- Name: nutrient nutrient_pkey; Type: CONSTRAINT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.nutrient
    ADD CONSTRAINT nutrient_pkey PRIMARY KEY (nutrient_id);


--
-- Name: recipe_ingredient recipe_ingredient_pkey; Type: CONSTRAINT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.recipe_ingredient
    ADD CONSTRAINT recipe_ingredient_pkey PRIMARY KEY (recipe_ingredient_id);


--
-- Name: recipe recipe_name_key; Type: CONSTRAINT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.recipe
    ADD CONSTRAINT recipe_name_key UNIQUE (recipe_name);


--
-- Name: recipe recipe_pkey; Type: CONSTRAINT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.recipe
    ADD CONSTRAINT recipe_pkey PRIMARY KEY (recipe_id);


--
-- Name: recipe_review recipe_review_pkey; Type: CONSTRAINT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.recipe_review
    ADD CONSTRAINT recipe_review_pkey PRIMARY KEY (review_id);


--
-- Name: recipe_review recipe_review_recipe_id_uid_key; Type: CONSTRAINT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.recipe_review
    ADD CONSTRAINT recipe_review_recipe_id_uid_key UNIQUE (recipe_id, uid);


--
-- Name: recipe_tool recipe_tool_pkey; Type: CONSTRAINT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.recipe_tool
    ADD CONSTRAINT recipe_tool_pkey PRIMARY KEY (recipe_tool_id);


--
-- Name: tool_category tool_category_name_key; Type: CONSTRAINT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.tool_category
    ADD CONSTRAINT tool_category_name_key UNIQUE (category_name);


--
-- Name: tool_category tool_category_pkey; Type: CONSTRAINT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.tool_category
    ADD CONSTRAINT tool_category_pkey PRIMARY KEY (category_id);


--
-- Name: tool tool_name_key; Type: CONSTRAINT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.tool
    ADD CONSTRAINT tool_name_key UNIQUE (tool_name);


--
-- Name: tool tool_pkey; Type: CONSTRAINT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.tool
    ADD CONSTRAINT tool_pkey PRIMARY KEY (tool_id);


--
-- Name: ingredient ingredient_category_id_fkey; Type: FK CONSTRAINT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.ingredient
    ADD CONSTRAINT ingredient_category_id_fkey FOREIGN KEY (category_id) REFERENCES recipes.ingredient_category(category_id) ON DELETE CASCADE;


--
-- Name: ingredient_measurement ingredient_measurement_ingredient_id_fkey; Type: FK CONSTRAINT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.ingredient_measurement
    ADD CONSTRAINT ingredient_measurement_ingredient_id_fkey FOREIGN KEY (ingredient_id) REFERENCES recipes.ingredient(ingredient_id) ON DELETE CASCADE;


--
-- Name: ingredient_nutrient ingredient_nutrient_ingredient_id_fkey; Type: FK CONSTRAINT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.ingredient_nutrient
    ADD CONSTRAINT ingredient_nutrient_ingredient_id_fkey FOREIGN KEY (ingredient_id) REFERENCES recipes.ingredient(ingredient_id) ON DELETE CASCADE;


--
-- Name: ingredient_nutrient ingredient_nutrient_nutrient_id_fkey; Type: FK CONSTRAINT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.ingredient_nutrient
    ADD CONSTRAINT ingredient_nutrient_nutrient_id_fkey FOREIGN KEY (nutrient_id) REFERENCES recipes.nutrient(nutrient_id) NOT VALID;


--
-- Name: recipe_ingredient recipe_ingredient_ingredient_id_fkey; Type: FK CONSTRAINT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.recipe_ingredient
    ADD CONSTRAINT recipe_ingredient_ingredient_id_fkey FOREIGN KEY (ingredient_id) REFERENCES recipes.ingredient(ingredient_id) ON DELETE CASCADE;


--
-- Name: recipe_ingredient recipe_ingredient_recipe_id_fkey; Type: FK CONSTRAINT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.recipe_ingredient
    ADD CONSTRAINT recipe_ingredient_recipe_id_fkey FOREIGN KEY (recipe_id) REFERENCES recipes.recipe(recipe_id) ON DELETE CASCADE;


--
-- Name: recipe_review recipe_review_recipe_id_fkey; Type: FK CONSTRAINT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.recipe_review
    ADD CONSTRAINT recipe_review_recipe_id_fkey FOREIGN KEY (recipe_id) REFERENCES recipes.recipe(recipe_id) ON DELETE CASCADE;


--
-- Name: recipe_tool recipe_tool_recipe_id_fkey; Type: FK CONSTRAINT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.recipe_tool
    ADD CONSTRAINT recipe_tool_recipe_id_fkey FOREIGN KEY (recipe_id) REFERENCES recipes.recipe(recipe_id) ON DELETE CASCADE;


--
-- Name: recipe_tool recipe_tool_tool_id_fkey; Type: FK CONSTRAINT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.recipe_tool
    ADD CONSTRAINT recipe_tool_tool_id_fkey FOREIGN KEY (tool_id) REFERENCES recipes.tool(tool_id) ON DELETE CASCADE;


--
-- Name: tool tool_category_id_fkey; Type: FK CONSTRAINT; Schema: recipes; Owner: postgres
--

ALTER TABLE ONLY recipes.tool
    ADD CONSTRAINT tool_category_id_fkey FOREIGN KEY (category_id) REFERENCES recipes.tool_category(category_id) ON DELETE CASCADE;


--
-- Name: recipe_review client_delete; Type: POLICY; Schema: recipes; Owner: postgres
--

CREATE POLICY client_delete ON recipes.recipe_review FOR DELETE USING (((uid)::text = current_setting('rls.uid'::text)));


--
-- Name: recipe_review client_insert; Type: POLICY; Schema: recipes; Owner: postgres
--

CREATE POLICY client_insert ON recipes.recipe_review FOR INSERT WITH CHECK (true);


--
-- Name: recipe_review client_select; Type: POLICY; Schema: recipes; Owner: postgres
--

CREATE POLICY client_select ON recipes.recipe_review FOR SELECT USING (true);


--
-- Name: recipe_review client_update; Type: POLICY; Schema: recipes; Owner: postgres
--

CREATE POLICY client_update ON recipes.recipe_review FOR UPDATE USING (((uid)::text = current_setting('rls.uid'::text)));


--
-- Name: recipe_review; Type: ROW SECURITY; Schema: recipes; Owner: postgres
--

ALTER TABLE recipes.recipe_review ENABLE ROW LEVEL SECURITY;

--
-- Name: SCHEMA recipes; Type: ACL; Schema: -; Owner: postgres
--

GRANT USAGE ON SCHEMA recipes TO client;
GRANT USAGE ON SCHEMA recipes TO admin;


--
-- Name: TABLE ingredient; Type: ACL; Schema: recipes; Owner: postgres
--

GRANT SELECT ON TABLE recipes.ingredient TO client;
GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE recipes.ingredient TO admin;


--
-- Name: TABLE ingredient_category; Type: ACL; Schema: recipes; Owner: postgres
--

GRANT SELECT ON TABLE recipes.ingredient_category TO client;
GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE recipes.ingredient_category TO admin;


--
-- Name: SEQUENCE ingredient_category_ingredient_category_id_seq; Type: ACL; Schema: recipes; Owner: postgres
--

GRANT USAGE ON SEQUENCE recipes.ingredient_category_ingredient_category_id_seq TO admin;


--
-- Name: SEQUENCE ingredient_ingredient_id_seq; Type: ACL; Schema: recipes; Owner: postgres
--

GRANT USAGE ON SEQUENCE recipes.ingredient_ingredient_id_seq TO admin;


--
-- Name: TABLE ingredient_measurement; Type: ACL; Schema: recipes; Owner: postgres
--

GRANT SELECT ON TABLE recipes.ingredient_measurement TO client;
GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE recipes.ingredient_measurement TO admin;


--
-- Name: SEQUENCE ingredient_measurement_measurement_id_seq; Type: ACL; Schema: recipes; Owner: postgres
--

GRANT USAGE ON SEQUENCE recipes.ingredient_measurement_measurement_id_seq TO admin;


--
-- Name: TABLE ingredient_nutrient; Type: ACL; Schema: recipes; Owner: postgres
--

GRANT SELECT ON TABLE recipes.ingredient_nutrient TO client;
GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE recipes.ingredient_nutrient TO admin;


--
-- Name: SEQUENCE ingredient_nutrient_ingredient_nutrient_id_seq; Type: ACL; Schema: recipes; Owner: postgres
--

GRANT USAGE ON SEQUENCE recipes.ingredient_nutrient_ingredient_nutrient_id_seq TO admin;


--
-- Name: TABLE nutrient; Type: ACL; Schema: recipes; Owner: postgres
--

GRANT SELECT ON TABLE recipes.nutrient TO client;
GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE recipes.nutrient TO admin;


--
-- Name: SEQUENCE nutrient_nutrient_id_seq; Type: ACL; Schema: recipes; Owner: postgres
--

GRANT USAGE ON SEQUENCE recipes.nutrient_nutrient_id_seq TO admin;


--
-- Name: TABLE recipe; Type: ACL; Schema: recipes; Owner: postgres
--

GRANT SELECT ON TABLE recipes.recipe TO client;
GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE recipes.recipe TO admin;


--
-- Name: TABLE recipe_ingredient; Type: ACL; Schema: recipes; Owner: postgres
--

GRANT SELECT ON TABLE recipes.recipe_ingredient TO client;
GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE recipes.recipe_ingredient TO admin;


--
-- Name: SEQUENCE recipe_ingredient_id_seq; Type: ACL; Schema: recipes; Owner: postgres
--

GRANT USAGE ON SEQUENCE recipes.recipe_ingredient_id_seq TO admin;


--
-- Name: SEQUENCE recipe_recipe_id_seq; Type: ACL; Schema: recipes; Owner: postgres
--

GRANT USAGE ON SEQUENCE recipes.recipe_recipe_id_seq TO admin;


--
-- Name: TABLE recipe_review; Type: ACL; Schema: recipes; Owner: postgres
--

REVOKE ALL ON TABLE recipes.recipe_review FROM postgres;
GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE recipes.recipe_review TO client;
GRANT SELECT ON TABLE recipes.recipe_review TO PUBLIC;
GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE recipes.recipe_review TO admin;


--
-- Name: SEQUENCE recipe_review_review_id_seq; Type: ACL; Schema: recipes; Owner: postgres
--

GRANT USAGE ON SEQUENCE recipes.recipe_review_review_id_seq TO client;
GRANT USAGE ON SEQUENCE recipes.recipe_review_review_id_seq TO admin;


--
-- Name: TABLE recipe_tool; Type: ACL; Schema: recipes; Owner: postgres
--

GRANT SELECT ON TABLE recipes.recipe_tool TO client;
GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE recipes.recipe_tool TO admin;


--
-- Name: SEQUENCE recipe_tool_id_seq; Type: ACL; Schema: recipes; Owner: postgres
--

GRANT USAGE ON SEQUENCE recipes.recipe_tool_id_seq TO admin;


--
-- Name: TABLE tool; Type: ACL; Schema: recipes; Owner: postgres
--

GRANT SELECT ON TABLE recipes.tool TO client;
GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE recipes.tool TO admin;


--
-- Name: TABLE tool_category; Type: ACL; Schema: recipes; Owner: postgres
--

GRANT SELECT ON TABLE recipes.tool_category TO client;
GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE recipes.tool_category TO admin;


--
-- Name: SEQUENCE tool_category_tool_category_id_seq; Type: ACL; Schema: recipes; Owner: postgres
--

GRANT USAGE ON SEQUENCE recipes.tool_category_tool_category_id_seq TO admin;


--
-- Name: SEQUENCE tool_tool_id_seq; Type: ACL; Schema: recipes; Owner: postgres
--

GRANT USAGE ON SEQUENCE recipes.tool_tool_id_seq TO admin;


--
-- PostgreSQL database dump complete
--

