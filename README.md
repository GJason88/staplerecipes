# Staple Recipes

Staple Recipes is a full-stack web app designed to be a modern, no-frills take on a recipe site. It aims to provide an easy-to-navigate repository of recipes that can be made with standard kitchen tools, using a set list of common pantry staples and other ubiquitous ingredients. All of the recipes are focused on being quick and easy to cook and clean, while also being delicious and nutritious. Ingredients and their nutrition facts come from the Food Data Central (FDC), and the nutrition facts of recipes are auto calculated based on their ingredients.

<a href="https://staplerecipes.com" target="_blank" rel='noopener noreferrer'>View Live</a>

## Information

Frontend: React + TypeScript along with Redux, and Vite.js as the build tool.

Backend: Node.js using the Express framework

Reverse Proxy: Nginx

Deployment: AWS EC2, AWS RDS, Docker

Other Tools: Firebase Auth, Firebase Cloud Storage

## Requirements

Node 18.17.1

Yarn 1.22.19

Install dependencies in frontend and backend directories using `yarn`

## Getting Started

### Setting up a local development environment

- Install [PostgreSQL](https://www.postgresql.org/) version 15.4 and create a database. Using docker, this can be done with `docker pull postgres`.

- Run the `combined.sql` script found in the database folder against your postgreSQL database to set up the schema, initialize the nutrient table, and insert sample data.

- Start backend server locally with `yarn start`

- Serve frontend app locally with `yarn dev`

## Authors

[Jason Gin](https://github.com/GJason88)

## Contributors

