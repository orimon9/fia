The purpose of this thesis was to develop a well-being eCommerce website using the MERN stack (MongoDB, Express.js, React, Node.js) to cater to consumer needs. The platform prioritizes user trust and direct involvement to enhance the overall buying experience in the local market.

The goal of the development was to leverage the MERN stack for a flexible, scalable, and efficient solution, integrating client-side and server-side operations through a unified JavaScript framework. In a three-tier e-commerce architecture, the client-server model plays a crucial role in enabling efficient interaction between the client and server components. The client, whether a web browser, mobile app, or other user-facing software, plays a crucial role in facilitating user interaction. The server processes client requests, executes business logic, and manages data to deliver essential services in the e-commerce system.

This architecture ensures seamless communication and functionality in e-commerce systems. The platform architecture follows the Model-View-Controller (MVC) pattern, ensuring clear separation of concerns, which enhances maintainability and scalability. Key features include user registration, authentication, product management, shopping cart functionality, and real-time customer support, all rigorously tested using the Postman API for robust performance and reliability. Redux is implemented for state management, offering centralized control over application data and state transitions. The implementation of React Router DOM enables seamless navigation between different sections of the application without the need for full page reloads, enhancing the user experience. It facilitates navigation and access control within the application, ensuring a seamless user experience. Moreover, the system integrates real-time chat capabilities through WebSocket, fostering dynamic interaction and engagement between users and administrators.

 # Project Name: Designing and Implementing a Well-being ECommerce Website.

## Project Setup, Environment set, Express server setup -> express package

## Install Dependencies: npm i, HTTP request & response, nodemon and morgan package, postman install and API testing, use Middleware

## Install additional packages for the frontend project: : npm i nodemon multer mongoose jsonwebtoken express-formidable express-async-handler express dotenv cors cookie-parser concurrently bcryptjs

## Install additional packages for the frontend project: npm i slick-carousel react-slick react-toastify react-router react-router-dom react-redux react-icons apexcharts react-apexcharts moment flowbite axios @reduxjs/toolkit @paypal/react-paypal-js

## Express error Handling Middleware -> body parser package -> npm install body-parser

## HTTP error handling  -> npm i http-errors

## Secure API -> xss clean, express-rate-limit -> npm install xss-clean --save   -> npm i express-rate-limit

## Environment variable & .gitignore  -> npm i dotenv

## MVC Architecture -> MODEL, VIEW , CONTROLLER

## Database create and connect to MongoDB database -> cloud.mongodb ->Copy the connection string, then open MongoDB Compass

## Mongoose npm setup -> --npm i mongoose

## Schema & Model for User

## node bcrypt package install and package setup for password encryption and decryption -> npm i bcrypt

## npm cors package install -> npm i cors

## npm cookie-parser install -> npm i cookie-parser

## nodemailer install and setup -> npm i nodemailer

## Express Validator package use: express-validator install -> npm i express-validator

## Google Auth Library: Node.js Client -> npm i google-auth-library

## jsonwebtoken -> npm i jsonwebtoken@9.0.0

## multer install -> npm install --save multer

## react-tostify -> It's a library for creating notification messages toasts in React applications

## Uploading files in Cloudinary

## Product API- Delete Product

## Product API- Update Product

## Product API- Search Products

## Product API- filter Products

## GET / api/users -> isAdmin ->getAllUsers -> search byName + pagination functionality

## GET /api/users/:id -> get a single user by id

## Delete/api/users:id ->delete a single user by id

## Refactoring & reusability, dynamic

## POST/api/users/register ->process the registration

## POST/api/users/verify ->verify + registration in database
