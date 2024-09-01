import React from "react";
import Product from "./ProductCard";
import hempfabricindoor from '../assets/images/Hemp Fabric Indoor Slipper.jpeg';
import hempshirt from '../assets/images/Hemp Shirt .jpeg';
import hempshirt2 from '../assets/images/Hemp Shirt.jpeg';
import hempslipper from '../assets/images/Hemp Slipper.jpeg';
import hempslippershoes from '../assets/images/Hemp Slipper Shoes.jpeg';
import butterflyembroidebag from '../assets/images/Butterfly Embroidery Backpack.jpeg';
import naturalhemphat from '../assets/images/naturalhemphat.jpeg';
import multicolorhat from '../assets/images/Multi Colour Hat.jpeg';
import multicolorbohobelt from '../assets/images/Multi Colour Boho Belt.jpeg';
import naturalhempwallet from '../assets/images/Natural Hemp Wallet.jpeg';
import stylishgreenhemphat from '../assets/images/Stylish Green Hemp Hat.jpeg';
import orident from '../assets/images/Ori-Dent.jpeg'
import orihygiea from '../assets/images/Ori-Hygiea.jpeg'
import origoldscrub from '../assets/images/Ori Glod Scrub.jpeg'
import orifacescrub from '../assets/images/Ori face scrub Bio-White.jpeg'
import acnecontrol from '../assets/images/Acne Control.jpeg'
import brightbeauty from '../assets/images/bright beauty.jpeg'
import dentalcare  from '../assets/images/dentalcare.jpeg'
import organiccoffee from '../assets/images/organic coffee.jpeg'
import shampoo from '../assets/images/Parachute natural shampoo.jpeg'
import herbaltea from '../assets/images/supplement herbal tea.jpeg'
import slimmingtea from '../assets/images/Progenitor Slimming Black Tea.jpeg'

const ProductList = () => {
  const products = [
    {
      title: "Hemp's Products & Handicrafts",
      product: [
        {
          label: "Best Selling",
          name: "Natural Hemp Hat",
          price:"¥ 1100",
          image: naturalhemphat,
        },
        {
          label: "Best Selling",
          name: "Stylish Green Hemp Hat",
          price:"¥ 1000",
          image: stylishgreenhemphat,
        },
        {
          label: "Best Selling",
          name: "Natural Hemp Wallet",
          price:"¥ 700",
          image: naturalhempwallet,
        },
        {
          label: "Best Selling",
          name: "Hemp Slipper",
          price: "¥ 1100",
          image: hempslipper,
        },
        {
          label: "Best Selling",
          name: "Multi Colour Boho Belt",
          price: "¥ 800",
          image: multicolorbohobelt,
        },
        {
          label: "Best Selling",
          name: "Butterfly Embroidery Backpack",
          price: "¥ 1600",
          image: butterflyembroidebag,
        },
        {
          label: "Best Selling",
          name: "Hemp Shirt ",
          price: "¥ 1900",
          image: hempshirt,
        },
        {
          label: "Best Selling",
          name: "Hemp Shirt ",
          price: "¥ 1700",
          image: hempshirt2,
        },
        {
          label: "Best Selling",
          name: "Multi Colour Hat ",
          price: "¥ 900",
          image: multicolorhat,
        },
        {
          label: "Best Selling",
          name: "Hemp Fabric Indoor Slipper ",
          price: "¥ 950",
          image: hempfabricindoor,
        },
        {
          label: "Best Selling",
          name: "Hemp Slipper Shoes ",
          price: "¥ 1300",
          image: hempslippershoes,
        },
      ],
    },
    {
      title: "Orien's Products",
      product: [
        {
          label: "Best Selling",
          name: "Ori ageless 30ml ",
          price: "¥ 3222",
          image: hempfabricindoor,
        },
        {
          label: "Best Selling",
          name: "Ori Dent ",
          price: "¥ 429",
          image: orident,
        },
        {
          label: "Best Selling",
          name: "Ori Hygiea ",
          price: "¥ 374",
          image: orihygiea,
        },
        {
          label: "Best Selling",
          name: "Ori Gold Scrub ",
          price: "¥ 3400",
          image: origoldscrub,
        },
        {
          label: "Best Selling",
          name: "Ori Bio White 100mg ",
          price: "¥ 590",
          image: orifacescrub,
        },
        
      ],
    },
    {
      title: "Ponds Products",
      product: [
        {
          label: "Best Selling",
          name: "Bright Beauty 100mg",
          price:"¥ 745",
          image: brightbeauty,
        },
        {
          label: "Best Selling",
          name: "Acne Control 100mg",
          price:"¥ 745",
          image: acnecontrol,
        },
        {
          label: "Best Selling",
          name: "Bright Beauty super cream ",
          price:"¥ 1100",
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
      title: "Bryn Gharelu Udhyog",
      product: [
        {
          label: "Best Selling",
          name: "Progenitor Slimming tea 250gm",
          price:"¥ 550",
          image: slimmingtea,
        },
        {
          label: "Best Selling",
          name: "Supplement herbal tea 250gm",
          price:"¥ 550",
          image: herbaltea,
        },
        {
          label: "Best Selling",
          name: "Organic Coffee 500gm ",
          price:"¥ 1900",
          image: organiccoffee,
        },
        {
          label: "Best Selling",
          name: "Herbal Dental Care",
          price:"¥ 850",
          image: dentalcare,
        },
      ],
    },
  ];

  return (
    <div className="px-4 py-6">
      <div className="flex flex-col gap-4">
        {products.map((productCategory, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold mb-4">{productCategory.title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
              {productCategory.product.map((item, i) => (
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
