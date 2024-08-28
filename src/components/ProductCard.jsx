const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 w-full rounded-lg shadow-md hover:shadow-lg transition-shadow bg-[#DCEADA]">
      <div className="flex justify-between items-center mb-2">
        <span className="bg-green-100  text-green-800 text-xs font-medium px-2 py-1 rounded">
          {product.label}
        </span>
      </div>
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="mb-4 w-full md:h-40 lg:h-56 xl:h-64 h-32 object-cover rounded-2xl"
        />
      </div>
      <div className="flex flex-col justify-between">
        <h3 className="text-gray-800 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">{product.name}</h3>
        <h3 className="text-red-500 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">{product.price}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
