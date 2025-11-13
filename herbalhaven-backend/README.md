# Herbal Haven Backend README

## Herbal Haven

Herbal Haven is a cannabis e-commerce platform designed for users in Kenya and internationally. This project includes a frontend built with React and a backend powered by Node.js and Express. The platform supports user authentication via Firebase, data storage using MongoDB or Firebase Firestore, and has placeholders for M-Pesa and Stripe payment integrations.

### Project Goals

- Provide a seamless shopping experience for cannabis products.
- Implement user authentication and authorization.
- Enable product management for admins.
- Integrate payment solutions for local and international users.

### Backend Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd herbalhaven/herbalhaven-backend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the root of the backend directory and populate it with the following variables:
   ```
   PORT=5000
   MONGO_URI=<your_mongo_db_connection_string>
   JWT_SECRET=<your_jwt_secret>
   MPESA_CONSUMER_KEY=<your_mpesa_consumer_key>
   MPESA_CONSUMER_SECRET=<your_mpesa_consumer_secret>
   STRIPE_SECRET_KEY=<your_stripe_secret_key>
   ```

4. **Database Setup**
   Ensure you have a MongoDB database set up. You can use MongoDB Atlas for a cloud-based solution.

5. **Run the Server**
   ```bash
   npm start
   ```

6. **API Endpoints**
   - `GET /api/products` - Get all products
   - `GET /api/products/:id` - Get a single product
   - `POST /api/products` - Add a product (Admin only)
   - `PUT /api/products/:id` - Update a product (Admin only)
   - `DELETE /api/products/:id` - Delete a product (Admin only)
   - `POST /api/orders` - Create an order
   - `GET /api/orders/:id` - View an order
   - `POST /api/payments/mpesa` - Trigger M-Pesa STK Push
   - `POST /api/payments/stripe` - Handle Stripe payments

### Payment Integration Placeholders

- **M-Pesa**: The `mpesaController.js` contains comments indicating where to integrate the Safaricom Daraja API for STK Push flow.
- **Stripe**: The `stripeController.js` contains comments for future Stripe setup.

### Authentication

- User authentication is handled via Firebase Authentication.
- Admin privileges are managed through JWT tokens.

### Multi-Currency Support

The backend includes utility functions to fetch exchange rates and convert currencies dynamically.

### Deployment

- The backend can be deployed on platforms like Render or Railway.
- Ensure that CORS is enabled and all secrets are stored in environment variables.

### Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

### License

This project is licensed under the MIT License. See the LICENSE file for details.