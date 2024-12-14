// features/products/components/ProductDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [productId]);

  const handleAddToCart = () => {
    // Implement add to cart logic
    console.log(`Added ${quantity} of product ${productId} to cart`);
  };

  if (loading) {
    return <div className="text-center py-8">Loading product details...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500">Error: {error}</p>
        <button
          onClick={() => navigate("/products")}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Back to Products
        </button>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8 grid md:grid-cols-2 gap-8">
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-lg shadow-md"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-600 mb-6">{product.description}</p>
        <div className="flex items-center mb-6">
          <span className="text-2xl font-bold text-green-600 mr-4">
            ${product.price.toFixed(2)}
          </span>
          {product.inStock ? (
            <span className="text-green-500">In Stock</span>
          ) : (
            <span className="text-red-500">Out of Stock</span>
          )}
        </div>
        <div className="flex items-center mb-6">
          <label htmlFor="quantity" className="mr-4">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="w-20 border rounded px-2 py-1"
          />
        </div>
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`
            w-full py-3 rounded text-white font-bold
            ${
              product.inStock
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-400 cursor-not-allowed"
            }
          `}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
