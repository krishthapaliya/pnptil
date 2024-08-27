// src/components/ProductCard.js

import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 w-full rounded-lg shadow-md hover:shadow-lg transition-shadow bg-[#DCEADA] ">
      <div className="flex justify-between items-center mb-2">
        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
          {product.label}
        </span>
        <button className="text-gray-400 hover:text-red-500">
          <i className="fas fa-heart"></i>
        </button>
      </div>
      <img src={product.image} alt={product.name} className="mb-4 w-full" />
      <h3 className="text-gray-800 font-semibold">{product.name}</h3>
    </div>
  );
};

export default ProductCard;
