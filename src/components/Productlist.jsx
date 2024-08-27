import React from "react";
import Product from "./ProductCard";

const ProductList = () => {
  const products = [
    {
      title: "Feature Products",
      product: [
        {
          label: "Best Selling",
          name: "Night Serum for Sensitive Skin",
          image: "path/to/your/image1.jpg",
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
        {
          label: "Best Selling",
          name: "Night Serum",
          image: "path/to/your/image3.jpg",
        },
      ],
    },
    {
      title: "Feature Products",
      product: [
        {
          label: "Best Selling",
          name: "Night Serum for Sensitive Skin",
          image: "path/to/your/image1.jpg",
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
        {
          label: "Best Selling",
          name: "Night Serum",
          image: "path/to/your/image3.jpg",
        },
      ],
    },
    {
      title: "Feature Products",
      product: [
        {
          label: "Best Selling",
          name: "Night Serum for Sensitive Skin",
          image: "path/to/your/image1.jpg",
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
        {
          label: "Best Selling",
          name: "Night Serum",
          image: "path/to/your/image3.jpg",
        },
      ],
    },
  ];

  return (
    <div className=" px-4 py-6">
      <div className="flex flex-col gap-4">
        {products.map((product, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold mb-4 ">{product.title}</h2>
            <div className="flex flex-col md:flex-row gap-4 w-full">
              {product.product.map((item, i) => (
                <Product key={i} product={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
