# Shopify Polaris Dashboard

A React and TypeScript-based dashboard using [Shopify Polaris](https://polaris.shopify.com/) for UI components.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a dashboard designed with React and TypeScript, utilizing the Shopify Polaris component library for a consistent and responsive user interface. The dashboard displays user performance metrics, order status, shipment updates, and additional custom functionality for tracking pages and orders.

## Features

- **Polaris UI**: Pre-built components from Shopify's Polaris library.
- **Performance Metrics**: Displays shipment updates, stats, and tracking page views.
- **Responsive Design**: The layout is automatically responsive using Polaris’ built-in features.
- **Custom HTML Integration**: Placeholder for custom integrations in the future.

## Installation

Follow these steps to set up the project locally:

### Prerequisites

- Node.js >= 14
- npm or yarn

### Step 1: Clone the repository

```bash
git clone https://github.com/SarahF99/polaris-dashboard.git
cd polaris-dashboard
```

### Step 2: Install dependencies

Install the required packages, including React, TypeScript, and Shopify Polaris:

```bash
npm install
# or
yarn install
```

### Step 3: Start the development server

Start the local development server:

```bash
npm start
# or
yarn start
```

This will open the app in your default browser at [http://localhost:3000](http://localhost:3000).

## Usage

### Dashboard Layout

1. **Welcome Section**: Displays user greeting and basic order/sync information with action buttons.
2. **Performance Metrics**: Shows shipment updates and tracking page stats in a card layout with data visualization (placeholder for charts).
3. **Functionality Section**: Provides information on additional customizable features like onboarding support and brand customization.

### Customization

To customize the dashboard or add new components, modify the `src/components/Dashboard.tsx` file.

```bash
src/
│
├── components/
│   ├── Dashboard.tsx        # Main dashboard layout and logic
├── index.tsx                # App wrapping with Polaris AppProvider
├── App.tsx                  # Main app component
```

For styles, Polaris handles most UI design. If additional styles are required, you can create custom CSS modules and link them in the respective components.

## Project Structure

```bash
src/
│
├── components/
│   ├── Dashboard.tsx       # Dashboard component
│
├── index.tsx               # Application entry point
├── App.tsx                 # Root app component
├── README.md               # Project documentation
├── package.json            # Project dependencies and scripts
```

## Customization

- **Polaris Components**: You can find all available Polaris components and their usage in the [Polaris Documentation](https://polaris.shopify.com/components).
- **State Management**: For global state management, you can integrate libraries like Redux or React Context.
- **Data Fetching**: Use `axios` or `fetch` to retrieve data from APIs and render it in the dashboard.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](#).

1. Fork the project
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
