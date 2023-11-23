# Staple Recipes

Staple Recipes is a full-stack web app designed to be a modern, no-frills take on a recipe site. It aims to provide an easy-to-navigate repository of recipes using a set list of common pantry staples and other ubiquitous ingredients that can be made with standard kitchen tools. All of the recipes are focused on being quick and easy to cook and clean, while also being delicious and nutritious. Ingredients and their nutrition facts come from the Food Data Central (FDC), and the nutrition facts of recipes are auto calculated based on their ingredients.

## Getting Started

### Database Setup

Install [PostgreSQL](https://www.postgresql.org/) version 15.4 and create a database.

Using Docker:
```
docker pull postgres
```

Run the `create.sql` script found in the database folder against your postgreSQL database to set up the schema and initialize the nutrient table.

Optionally run the `sample-data.sql` script to insert sample data into the database.

### Backend Setup

This project is built with Node.js using the Express framework. 

Install dependencies

```
npm install
```

Start server locally

```
node server.js
```

### Frontend Setup

This project is built with React + TypeScript along with Redux, and Vite.js as the build tool.

Install dependencies

```
yarn
```

Deploy app locally

```
yarn dev
```

## Authors

[Jason Gin](https://github.com/GJason88)

## Contributors

