CREATE TABLE recipes.recipe (
  recipe_id serial NOT NULL PRIMARY KEY,
  name VARCHAR ( 75 ) UNIQUE NOT NULL,
  time VARCHAR ( 75 ),
  instructions text[]
);

CREATE TABLE recipes.ingredient (
  ingredient_id serial NOT NULL PRIMARY KEY,
  name VARCHAR ( 75 ) UNIQUE NOT NULL,
  calories smallint,
  protein smallint,
  carbs smallint,
  fat smallint,
  fiber smallint
);

CREATE TABLE recipes.tool (
  tool_id serial NOT NULL PRIMARY KEY,
  name VARCHAR ( 75 ) UNIQUE NOT NULL
);

CREATE TABLE recipes.recipe_ingredient (
  recipe_ingredient_id serial NOT NULL PRIMARY KEY,
  recipe_id int REFERENCES recipes.recipe(recipe_id),
  ingredient_id int REFERENCES recipes.ingredient(ingredient_id),
  amount VARCHAR ( 75 )
);

CREATE TABLE recipes.recipe_tool (
  recipe_tool_id serial NOT NULL PRIMARY KEY,
  recipe_id int REFERENCES recipes.recipe(recipe_id),
  tool_id int REFERENCES recipes.tool(tool_id)
);

CREATE TABLE recipes.ingredient_category (
	ingredient_category_id serial NOT NULL PRIMARY KEY,
  name VARCHAR ( 75 ) UNIQUE NOT NULL
);

CREATE TABLE recipes.tool_category (
	tool_category_id serial NOT NULL PRIMARY KEY,
  name VARCHAR ( 75 ) UNIQUE NOT NULL
);
