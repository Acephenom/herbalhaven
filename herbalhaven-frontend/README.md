# Herbal Haven Frontend Setup

## Project Overview
Herbal Haven is a cannabis e-commerce platform designed for users in Kenya and internationally. This project utilizes React for the frontend, providing a modern and responsive user interface, and Firebase Authentication for secure user login and registration.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd herbalhaven/herbalhaven-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root of the `herbalhaven-frontend` directory and populate it with the following variables:
     ```
     FIREBASE_API_KEY=your_firebase_api_key
     FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
     FIREBASE_PROJECT_ID=your_firebase_project_id
     ```

### Running the Application

To start the development server, run:
```bash
npm start
```
This will launch the application in your default web browser at `http://localhost:3000`.

### Project Structure
- **src/**: Contains all the source code for the application.
  - **components/**: Reusable components like Navbar, Footer, and ProductCard.
  - **pages/**: Different pages of the application such as Home, Products, Cart, Checkout, Login, Signup, and Admin.
  - **contexts/**: Context providers for authentication and cart management.
  - **services/**: Utility functions for managing exchange rates and local storage for the cart.
  - **styles/**: CSS files for styling the application.
  - **utils/**: Utility functions for currency conversion.

### Features
- User authentication via Firebase.
- Product listing with filters for strain type and price range.
- Cart management with local storage.
- Checkout process with placeholders for M-Pesa and Stripe payment integrations.

### Future Enhancements
- Implement M-Pesa and Stripe payment integrations.
- Add more detailed product descriptions and images.
- Enhance the admin dashboard for better product management.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.