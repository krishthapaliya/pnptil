// src/components/ProductList.js

import React from "react";
import Product from "./ProductCard";

const ProductList = () => {
  const products = [
    {
      label: "Best Selling",
      name: "Night Serum for Sensitive Skin",
      image: "path/to/your/image1.jpg", // replace with actual image paths or URLs
    },
    {
      label: "Best Selling",
      name: "Sensitive Skin",
      image: "path/to/your/image2.jpg",
    },
    {
      label: "Best Selling",
      name: "Night Serum",
      image: "path/to/your/image3.jpg",
    },
    // Add more products as needed
  ];

  return (
    <div className="px-4 py-6">
      <h2 className="text-xl font-semibold mb-4">Feature Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
