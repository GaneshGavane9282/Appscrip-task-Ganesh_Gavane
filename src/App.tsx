import { useState } from "react";
import "./App.css";
import SEO from "@/components/SEO/SEO";
import Header from "./components/layout/Header/Header";
import Hero from "./components/layout/Hero/Hero";
import FilterBar from "./components/product/Filter/filter-bar/FilterBar";
import FilterSidebar from "./components/product/Filter/filter-side-bar/FilterSidebar";
import ProductGrid from "./components/product/product-grid/ProductGrid";
import Footer from "./components/layout/Footer/Footer";

function App() {
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  // SEO Schema for a Product Listing Page (CollectionPage)
  // Ideally, this data comes from your API, but here's the structure
  const plpSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Discover Our Products",
    description:
      "Explore our exclusive collection of bags, clothing, and accessories.",
    url: "https://easyclickshop.netlify.app/",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        // This array should ideally be populated dynamically from your product data
        {
          "@type": "ListItem",
          position: 1,
          url: "https://easyclickshop.netlify.app/",
        },
        {
          "@type": "ListItem",
          position: 2,
          url: "https://easyclickshop.netlify.app/",
        },
      ],
    },
  };

  return (
    <div className="App">
      <SEO
        title="Shop Premium Bags & Clothing | Easy Click Shop Store"
        description="Discover our premium collection of durable backpacks, stylish jackets, and accessories. Shop now for the best deals on high-quality fashion."
        url="https://easyclickshop.netlify.app/"
        schema={plpSchema}
      />

      <Header />

      {/* Semantic HTML: Main content wrapper */}
      <main className="main-container">
        <Hero />

        <FilterBar
          isFilterVisible={isFilterVisible}
          onToggle={() => setIsFilterVisible(!isFilterVisible)}
        />

        <div className="content-layout">
          <FilterSidebar isVisible={isFilterVisible} />

          <div className="grid-container">
            {/* Semantic HTML: Product List Section */}
            <section aria-label="Product List">
              <ProductGrid />
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
