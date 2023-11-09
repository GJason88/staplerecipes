# Staple Recipes

Staple Recipes is a full-stack web app designed to be a modern, no-frills take on a recipe site. It aims to provide an easy-to-navigate repository of recipes using a set list of common pantry staples and other ubiquitous ingredients that can be made with standard kitchen tools. All of the recipes are focused on being quick and easy to cook and clean, while also being delicious and nutritious. Ingredients and their nutrition facts come from official FDC source, and the nutrition facts of recipes are auto calculated based on their ingredients.

## Getting Started

### Database Setup

Install [postgreSQL](https://www.postgresql.org/) version 15.4 and create a database

Or using Docker:
```
docker pull postgres
```

Run the `create.sql` script found in the database folder against your postgreSQL database.

### Backend Setup

Install dependencies

```
npm install
```

Start server locally

```
node server.js
```

### Frontend Setup

Install dependencies

```
yarn
```

Deploy app locally

```
yarn dev
```
