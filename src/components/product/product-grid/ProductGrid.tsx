import { useState, useEffect, type FC } from "react";
import "./ProductGrid.css";
import { Icon } from "@/components/common/Icon/Icon";

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

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="image-container">
            <img
              src={product.image}
              alt={`Buy ${product.title} - ${product.category}`}
              loading="lazy"
            />
          </div>

          <div className="product-details">
            <h3 className="product-title" title={product.title}>
              {product.title}
            </h3>

            <div className="product-info">
              <span className="product-price">
                Sign in or Create an account to see pricing
              </span>
              <button className="favorite-btn" aria-label="Add to wishlist">
                <Icon name="heart" size={20} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
