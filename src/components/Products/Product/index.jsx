// features/products/components/Product/index.jsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // To get the product ID from the URL
import { fetchProductById } from "../../../features/products/services"; // Adjust path as necessary
//import "./Product.css"; // Optional: Import CSS for styling

const Product = () => {
  const { id } = useParams(); // Get the product ID from URL parameters
  const [products, setProduct] = useState(null); // State to hold product data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProductById(id); // Fetch product by ID
        setProduct(data); // Set the product data to state
      } catch (err) {
        setError(err.message); // Set error message if fetch fails
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    loadProduct(); // Call the function to load product details
  }, [id]); // Dependency array includes id to refetch if it changes

  if (loading) return <div>Loading...</div>; // Show loading state
  if (error) return <div>Error: {error}</div>; // Show error message if any occurs

  if (!product) return <div>No product found.</div>; // Handle case where no product is found

  return (
    <div className="product-detail">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} className="product-image" />
      <p>{product.description}</p>
      <p className="product-price">Price: ${product.price.toFixed(2)}</p>
      <button className="add-to-cart-button">Add to Cart</button>
    </div>
  );
};

export default Product;
