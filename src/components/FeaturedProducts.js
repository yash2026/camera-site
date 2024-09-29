import React from "react";

const FeaturedProducts = () => {
  return (
    <div className="container mx-auto my-12 px-36">
      <h2 className="text-center text-3xl font-bold mb-8">Featured Products</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-8 ">
        {/* Product 1 */}
        <div className="border p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src="/images/camera1.jpg"
            alt="Product 1"
            className=" h-48  object-cover rounded-lg"
          />
          <h3 className="mt-4 text-xl font-semibold">Camera Model 1</h3>
          <p className="mt-2 text-gray-700">$999</p>
          <button className="bg-blue-500 text-white mt-4 py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            View Details
          </button>
        </div>
        <div className="border p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src="/images/camera1.jpg"
            alt="Product 1"
            className=" h-48  object-cover rounded-lg"
          />
          <h3 className="mt-4 text-xl font-semibold">Camera Model 1</h3>
          <p className="mt-2 text-gray-700">$999</p>
          <button className="bg-blue-500 text-white mt-4 py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            View Details
          </button>
        </div>
        <div className="border p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src="/images/camera1.jpg"
            alt="Product 1"
            className=" h-48  object-cover rounded-lg"
          />
          <h3 className="mt-4 text-xl font-semibold">Camera Model 1</h3>
          <p className="mt-2 text-gray-700">$999</p>
          <button className="bg-blue-500 text-white mt-4 py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            View Details
          </button>
        </div>
        <div className="border p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src="/images/camera1.jpg"
            alt="Product 1"
            className=" h-48  object-cover rounded-lg"
          />
          <h3 className="mt-4 text-xl font-semibold">Camera Model 1</h3>
          <p className="mt-2 text-gray-700">$999</p>
          <button className="bg-blue-500 text-white mt-4 py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            View Details
          </button>
        </div>
        {/* Repeat for other products */}
      </div>
    </div>
  );
};

export default FeaturedProducts;
