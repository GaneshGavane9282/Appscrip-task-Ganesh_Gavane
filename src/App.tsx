import "./App.css";
import SEO from "@/components/SEO/SEO";
import Page from "./Page";

function App() {
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
      <Page />
    </div>
  );
}

export default App;
