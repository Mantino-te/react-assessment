// features/products/components/ProductList.jsx

import React from "react";
import ProductCard from "../../features/products/components/ProductCard";
import { fetchProducts } from "../../features/products/services";
import "./index.css"; // Import CSS for styling

const ProductList = ({ onAddToCart }) => {
  return (
    <div className="product-grid">
      {/* This is the grid container */}
      {fetchProducts.map((product) => (
        <ProductCard
          key={product.id}
          data={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
