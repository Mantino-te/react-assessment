// features/products/components/ProductDetail.jsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // For accessing URL parameters
import { fetchProductById } from "../../../features/products/services";

const ProductDetail = () => {
  const { id } = useParams(); // Get product ID from URL
  const [products, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProductDetail = async () => {
      try {
        const data = await fetchProductById(id); // Fetch product by ID
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProductDetail();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>No product found.</div>;
  }

  return (
    <div className="product-detail">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Add more details or actions like Add to Cart */}
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
