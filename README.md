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
