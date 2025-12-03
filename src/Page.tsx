import { useState } from "react";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import Hero from "./components/layout/Hero/Hero";
import FilterBar from "./components/product/Filter/filter-bar/FilterBar";
import FilterSidebar from "./components/product/Filter/filter-side-bar/FilterSidebar";
import ProductGrid from "./components/product/product-grid/ProductGrid";
import WishlistProvider from "./context/WishlistContextProvider";

const Page = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  return (
    <WishlistProvider>
      <Header />

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
    </WishlistProvider>
  );
};

export default Page;
