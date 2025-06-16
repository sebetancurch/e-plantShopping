# 🪴 Plant Shop Web App

This is a simple and responsive plant shopping web app built with **React** and **React Router**. It allows users to browse a list of plants, filter by category or name, and manage a shopping cart.

## Features

- **Routing & Paging**: Implemented using `react-router` for scalable and clean navigation.
- **Layout Structure**: Includes a persistent header with navigation, and a main content section displaying the plant list and shopping cart.
- **Plant List**:
  - Displays a grid of available plants.
  - Includes **filter inputs**:
    - Filter by **category** or **plant name**.
    - Case-insensitive and performs partial matches.
  - Clicking a plant:
    - **Adds it to the cart**.
    - Displays a red "IN CART" badge in the top-right corner of the card.
    - Clicking again **removes it from the cart**.
- **Shopping Cart**:
  - Displays selected plants.
  - Shows **quantity**, **subtotal per item**, and **total cost**.
- **Styling**:
  - Based on the provided design with minor enhancements for better UX.
  - Cards have hover effects and responsive layout.

## Technologies Used

- React
- React Router DOM
- Redux for state management
- Vanilla CSS (custom styles)

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sebetancurch/e-plantShopping.git
   cd plant-shop

   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to [http://localhost:5173/e-plantShopping/].
