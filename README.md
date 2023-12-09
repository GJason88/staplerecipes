# Staple Recipes

Staple Recipes is a full-stack web app designed to be a modern, no-frills take on a recipe site. It aims to provide an easy-to-navigate repository of recipes that can be made with standard kitchen tools, using a set list of common pantry staples and other ubiquitous ingredients. All of the recipes are focused on being quick and easy to cook and clean, while also being delicious and nutritious. Ingredients and their nutrition facts come from the Food Data Central (FDC), and the nutrition facts of recipes are auto calculated based on their ingredients.

## Information

Frontend: React + TypeScript along with Redux, and Vite.js as the build tool.

Backend: Node.js using the Express framework

Reverse Proxy: Nginx

Deployment: AWS EC2, AWS RDS, Docker, PM2

Other Tools: Firebase Auth, Firebase Cloud Storage

## Requirements

Node 18.17.1

Yarn 1.22.19

Install dependencies in frontend and backend directories using `yarn`

## Getting Started

Note: Features relying on external services will not be functional.

### Preview production build with docker compose

Note: Currently not working without including firebase auth api key in environment variables

- Uncomment [this line](https://github.com/GJason88/staplerecipes/blob/f9635bf8a7bfa5cb71cafd3ea217d40c9ce2764d/docker-compose.yml#L14) to run an initial db script on build.
- Ensure `--prod` is not present [here](https://github.com/GJason88/staplerecipes/blob/f9635bf8a7bfa5cb71cafd3ea217d40c9ce2764d/backend/Dockerfile#L10).
- Run `yarn build` in the frontend directory.
- Use `docker-compose up --build` to build the images and start the containers.
- Visit http://localhost:80

### Setting up a local development environment

- Install [PostgreSQL](https://www.postgresql.org/) version 15.4 and create a database. Using docker, this can be done with `docker pull postgres`.

- Run the `combined.sql` script found in the database folder against your postgreSQL database to set up the schema, initialize the nutrient table, and insert sample data.

- Start backend server locally with `yarn start`

- Serve frontend app locally with `yarn dev`

## Authors

[Jason Gin](https://github.com/GJason88)

## Contributors

