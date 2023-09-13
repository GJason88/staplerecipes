CREATE TABLE recipes.recipe (
  id serial NOT NULL PRIMARY KEY,
  name VARCHAR ( 75 ) UNIQUE NOT NULL,
  time VARCHAR ( 75 ),
  instructions text[]
);

CREATE TABLE recipes.ingredient (
  id serial NOT NULL PRIMARY KEY,
  name VARCHAR ( 75 ) UNIQUE NOT NULL,
  calories smallint,
  protein smallint,
  carbs smallint,
  fat smallint,
  fiber smallint
);

CREATE TABLE recipes.tool (
  id serial NOT NULL PRIMARY KEY,
  name VARCHAR ( 75 ) UNIQUE NOT NULL
);

CREATE TABLE recipes.recipe_ingredient (
  id serial NOT NULL PRIMARY KEY,
  recipe_id int REFERENCES recipes.recipe(recipe_id),
  ingredient_id int REFERENCES recipes.ingredient(ingredient_id),
  amount VARCHAR ( 75 )
);

CREATE TABLE recipes.recipe_tool (
  id serial NOT NULL PRIMARY KEY,
  recipe_id int REFERENCES recipes.recipe(recipe_id),
  tool_id int REFERENCES recipes.tool(tool_id)
);
