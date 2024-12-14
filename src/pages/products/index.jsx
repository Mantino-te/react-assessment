import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../features/products/services";
import Product from "./product"; // Assuming this is the ProductCard component

const ProductsPage = () => {
  const [products, setProducts] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts(); // Fetch products from the service
        console.log("Fetched data:", data); // Log the fetched data
        if (Array.isArray(data)) {
          setProducts(data); // Set products only if it's an array
        } else {
          setError("Fetched data is not an array");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  if (!Array.isArray(products) || products.length === 0) {
    return <div>No products available</div>; // Handle non-array case
  }

  return (
    <div>
      <h1>Available Products</h1>
      <div className="products-list">
        {products.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
