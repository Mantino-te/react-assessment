// features/products/services/products.js
import productsData from "../../../data/product.json";

// Function to fetch all products
export const fetchProducts = async () => {
  try {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    console.log(productsData);
    return productsData;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
};

// Function to fetch a product by ID
export const fetchProductById = async (productId) => {
  try {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const product = productsData.find((p) => p.id === parseInt(productId));

    if (!product) {
      throw new Error("Product not found");
    }

    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw new Error(error.message || "Failed to fetch product");
  }
};
