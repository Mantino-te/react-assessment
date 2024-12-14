// features/products/components/ProductList.jsx

import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../../features/products/services";
import ProductDetail from "../ProductDetails";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="product-list">
      <h1>Available Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <ProductDetail key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
