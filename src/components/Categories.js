import React from "react";

const Categories = () => {
  return (
    <div className="container mx-auto my-12 px-36">
      <h2 className="text-center text-3xl font-bold mb-8">Shop by Category</h2>
      <div className="flex justify-around">
        <div className="text-center hover:scale-105 transition transform duration-300">
          <img
            src="/images/camera1.jpg"
            alt="DSLR Cameras"
            className="w-64 h-64 object-cover mx-auto rounded-lg"
          />
          <h3 className="mt-4 text-lg hover:underline">DSLR Cameras</h3>
        </div>
        <div className="text-center hover:scale-105 transition transform duration-300">
          <img
            src="/images/camera2.jpg"
            alt="Mirrorless Cameras"
            className="w-64 h-64 object-cover mx-auto rounded-lg"
          />
          <h3 className="mt-4 text-lg hover:underline">Mirrorless Cameras</h3>
        </div>
        <div className="text-center hover:scale-105 transition transform duration-300">
          <img
            src="/images/camera3.jpg"
            alt="Accessories"
            className="w-64 h-64 object-cover mx-auto rounded-lg"
          />
          <h3 className="mt-4 text-lg hover:underline ">Accessories</h3>
        </div>
      </div>
    </div>
  );
};

export default Categories;
