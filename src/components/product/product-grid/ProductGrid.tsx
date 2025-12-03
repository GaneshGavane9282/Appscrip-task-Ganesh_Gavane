import { useState, useEffect, type FC } from "react";
import "./ProductGrid.css";
import { Icon } from "@/components/common/Icon/Icon";
import { useWishlist } from "@/context/useWishlist";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

const ProductGrid: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Use the context hook
  const { isWishlisted, toggleWishlist } = useWishlist();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="loading-state">Loading Products...</div>;
  }

  if (error) {
    return <div className="error-state">Error: {error}</div>;
  }

  if (products.length === 0) {
    return <div className="no-products-state">No Products Available</div>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => {
        const isLiked = isWishlisted(product.id);

        return (
          <article key={product.id} className="product-card">
            {" "}
            {/* Use <article> for items */}
            <div className="image-container">
              <img
                src={product.image}
                alt={`Buy ${product.title} - ${product.category}`} // Keyword-rich Alt Text
                loading="lazy"
              />
            </div>
            <div className="product-details">
              {/* Use H2 or H3 for product titles, never H1 (reserved for page title) */}
              <h3 className="product-title" title={product.title}>
                {product.title}
              </h3>

              <div className="product-info">
                <span className="product-price">
                  <a href="#">Sign in</a> or Create an account to see pricing
                </span>
                <button
                  className="favorite-btn"
                  aria-label={
                    isLiked ? "Remove from wishlist" : "Add to wishlist"
                  }
                  onClick={() => toggleWishlist(product.id)}
                >
                  <Icon
                    name="heart"
                    size={20}
                    style={{
                      fill: isLiked ? "red" : "none",
                      color: isLiked ? "red" : "inherit",
                      transition: "fill 0.3s ease",
                    }}
                  />
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ProductGrid;
