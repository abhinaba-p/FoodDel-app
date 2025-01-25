# FoodDel-app
Ecommerce Platform to order foods. Built using the MERN Stack.

## Overview

This project is a fully functional food delivery platform where users can browse food items, add them to their cart, and place orders. It features a backend built with Node.js, Express, and MongoDB, and a frontend built with React. It has admin access pannel where they can add ,list and update the order status accordingly.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://classic.yarnpkg.com/en/docs/install/)

## Backend Setup

1. Create a `.env` file in the `backend` directory and add the necessary environment variables:

    ```plaintext
    STRIPE_SECRET_KEY=" "         # Your Stripe secret key for payment feature
    DB_URL=' '                    # Your MongoDB URL
    PORT=4000                     # Backend port
    FRONTEND_URL=" "              # Your frontend URL
    ```

2. Navigate to the `backend` directory and install dependencies:

    ```bash
    cd backend
    npm install
    ```

3. Start the backend server:

    ```bash
    npm run server
    ```

## Frontend Setup

1. Navigate to the `frontend` directory and install dependencies:

    ```bash
    cd frontend
    npm install
    ```

2. Start the frontend server:

    ```bash
    npm run dev
    ```

## Admin Pannel Setup

1. Navigate to the `admin` directory and install dependencies:
   
    ```bash
    cd frontend
    npm install
    ```
2. Start the admin server:

    ```bash
    npm run dev
    ```



    
