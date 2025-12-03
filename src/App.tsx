import { useState } from "react";
import "./App.css";
import Header from "./components/layout/Header/Header";
import Hero from "./components/layout/Hero/Hero";
import FilterBar from "./components/product/Filter/filter-bar/FilterBar";
import FilterSidebar from "./components/product/Filter/filter-side-bar/FilterSidebar";
import ProductGrid from "./components/product/product-grid/ProductGrid";
import Footer from "./components/layout/Footer/Footer";

function App() {
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  return (
    <div className="App">
      <Header />
      <Hero />

      <main className="main-container">
        {/* Filter Control Bar */}
        <FilterBar
          isFilterVisible={isFilterVisible}
          onToggle={() => setIsFilterVisible(!isFilterVisible)}
        />

        {/* Content Area: Sidebar + Grid */}
        <div className="content-layout">
          {/* Sidebar: Only renders if visible */}
          <FilterSidebar isVisible={isFilterVisible} />

          {/* Grid: Takes remaining space */}
          <div className="grid-container">
            <ProductGrid />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
