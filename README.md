# E-Commerce Backend 🛍️

## Description

This is the backend application for an e-commerce site. An Express.js API has been configured so that Sequelize can be used to interact with a MySQL database. The site connected to this backend application would have the ability to use different categories to organize its products and assign any relevant tags to each product. Click [here](https://watch.screencastify.com/v/xagSWq11TS4rKayFsSwr) to watch a quick walkthrough video that demonstrates the application's functionality.

## User Story

```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## Technologies Used

- JavaScript
- Express
- MySQL
- Sequelize
- Nodemon
- dotenv