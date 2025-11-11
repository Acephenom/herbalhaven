# Herbal Haven

## Project Overview
Herbal Haven is a cannabis e-commerce platform designed for users in Kenya and internationally. The platform allows users to browse, purchase, and manage cannabis products while providing a seamless shopping experience.

## Project Structure
The project is divided into two main parts: the frontend and the backend.

### Frontend
- Built with React using `create-react-app`.
- Utilizes Firebase Authentication for user login and signup.
- Features include product browsing, cart management, and checkout options.

### Backend
- Built with Node.js and Express.
- Connects to MongoDB for data storage.
- Provides RESTful API endpoints for product management, order processing, and payment integration.

## Setup Instructions

### Prerequisites
- Node.js and npm installed on your machine.
- MongoDB Atlas account (if using MongoDB).
- Firebase project set up for authentication.

### Frontend Setup
1. Navigate to the `herbalhaven-frontend` directory:
   ```
   cd herbalhaven/herbalhaven-frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file based on `.env.example` and fill in your Firebase configuration:
   ```
   FIREBASE_API_KEY=your_api_key
   FIREBASE_AUTH_DOMAIN=your_auth_domain
   FIREBASE_PROJECT_ID=your_project_id
   ```
4. Start the development server:
   ```
   npm start
   ```

### Backend Setup
1. Navigate to the `herbalhaven-backend` directory:
   ```
   cd herbalhaven/herbalhaven-backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file based on `.env.example` and fill in your MongoDB and JWT configuration:
   ```
   PORT=5000
   MONGO_URI=your_mongo_uri
   JWT_SECRET=your_jwt_secret
   MPESA_CONSUMER_KEY=your_mpesa_consumer_key
   MPESA_CONSUMER_SECRET=your_mpesa_consumer_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```
4. Start the backend server:
   ```
   node server.js
   ```

## Features
- **User Authentication**: Users can sign up and log in using Firebase Authentication.
- **Product Management**: Admins can add, edit, and delete products through the Admin dashboard.
- **Shopping Cart**: Users can add products to their cart, view, and manage their selections.
- **Checkout Process**: Users can choose between M-Pesa and card payment options (placeholders for integration).
- **Multi-Currency Support**: Prices are displayed in both KES and USD, with real-time exchange rates.

## Future Enhancements
- Implement M-Pesa and Stripe payment integrations.
- Enhance user experience with additional features such as product reviews and ratings.
- Optimize performance and security measures.

## Deployment
- Frontend can be deployed to Vercel or Netlify.
- Backend can be deployed to Render or Railway.
- Ensure all environment variables are set correctly in the deployment environment.

## License
This project is licensed under the MIT License.# herbalhaven
