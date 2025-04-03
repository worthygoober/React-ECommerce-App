# React E-Commerce App

This is a modern e-commerce web application built using React, Redux Toolkit, React Query, and Vite. The project fetches product data from FakeStoreAPI and provides functionalities such as category filtering, a shopping cart with session storage, and a checkout simulation.

## Features

- **Redux Toolkit for State Management**: Handles product data, cart management, and category filtering.
- **React Query for Data Fetching**: Efficiently fetches and caches product data from FakeStoreAPI.
- **Shopping Cart with Session Persistence**: Stores cart data in `sessionStorage` to maintain state across page reloads.
- **Category Filtering**: Allows users to browse products by category.
- **Checkout Simulation**: Clears cart and resets the application state.

## Tech Stack

- **React**: Frontend library for UI development.
- **Redux Toolkit**: Manages application state.
- **React Query**: Handles data fetching and caching.
- **Vite**: Build tool for fast development.
- **TypeScript**: Provides type safety.

## Project Structure

```
/src
├── api/                # API request handling
├── assets/             # Static assets
├── components/         # Reusable UI components
│   ├── NavBar/         # Navigation bar component
│   ├── ProductCard/    # Product display component
├── redux/              # Redux state management
│   ├── store.ts        # Configures Redux store
│   ├── slices/         # Redux slices for products and cart
├── types/              # TypeScript types
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/react-ecommerce.git
   cd react-ecommerce
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## Usage

- Browse products from FakeStoreAPI.
- Add products to the shopping cart.
- View total price and item count.
- Remove items from the cart.
- Proceed to checkout to reset the cart.

## Future Enhancements

- User authentication and order history.
- Improved UI/UX with additional animations.
- Backend integration for real transactions.

## License

This project is open-source and available under the MIT License.