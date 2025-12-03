# Modern Product Listing Page (PLP)

A fully responsive, high-performance Product Listing Page built with **Vite**, **React**, and **TypeScript**. This project mimics a real-world e-commerce application, featuring a dynamic product grid, collapsible filter sidebar, and seamless API integration.

## 🚀 Features

- **Responsive Design**: A fluid layout that adapts perfectly to Mobile (2 cols), Tablet (3 cols), and Desktop (4 cols) screens.
- **Dynamic Data Fetching**: real-time product data fetching from the [Fake Store API](https://fakestoreapi.com/).
- **Interactive Sidebar**: A collapsible filter sidebar that toggles visibility based on user interaction, resizing the product grid dynamically.
- **Custom Icon System**: A lightweight, scalable SVG icon component system without external icon libraries.
- **Modern CSS Architecture**: modular CSS variables and scoped styles for maintainability.
- **Type Safety**: Full TypeScript integration for robust code quality.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) (via Vite)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Plain CSS (Modular & Responsive)
- **State Management**: React Hooks (`useState`, `useEffect`)
- **API**: Fetch API

## 📂 Project Structure

```text
src/
├── components/
│   ├── common/
│   │   └── Icon/           # Reusable SVG Icon Component
│   ├── FilterBar/          # Control bar for "Show/Hide Filter" & Sorting
│   ├── FilterSidebar/      # Accordion-style filter menu
│   ├── Footer/             # Responsive site footer
│   ├── Header/             # Responsive navigation bar with mobile drawer
│   ├── Hero/               # "Discover Our Products" banner section
│   └── ProductGrid/        # Main grid displaying API data
├── App.tsx                 # Main layout logic (Sidebar + Grid)
├── App.css                 # Global styles and variables
└── main.tsx                # Entry point
```

⚡ Getting Started
Follow these steps to run the project locally.

Prerequisites
Node.js (v14 or higher)

npm or yarn

Installation
Clone the repository

Bash

git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
cd your-repo-name
Install dependencies

Bash

npm install
Run the development server

Bash

npm run dev
Open in Browser Visit http://localhost:5173 to view the app.

🔌 API Reference
This project consumes the Fake Store API to populate the product grid.

Endpoint: GET https://fakestoreapi.com/products

Data Contract:

JSON

[
{
"id": 1,
"title": "Fjallraven - Foldsack No. 1 Backpack",
"price": 109.95,
"description": "Your perfect pack for everyday use...",
"category": "men's clothing",
"image": "[https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg](https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
"rating": { "rate": 3.9, "count": 120 }
}
]
📱 Responsiveness
The application handles three major breakpoints:

Mobile (< 768px):

Navbar collapses into a Hamburger menu.

Filter Sidebar is hidden or turns into a drawer (if extended).

Product Grid shows 2 columns.

Tablet (768px - 1024px):

Product Grid shows 3 columns.

Desktop (> 1024px):

Full Navbar visibility.

Product Grid shows 4 columns (or 3 when Sidebar is open).

📄 License
This project is open source and available under the MIT License.
