import React from "react";

const HeroBanner = () => {
  return (
    <div
      className="bg-cover bg-center h-96 relative"
      style={{ backgroundImage: "url(/images/cover.jpg)" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold">Capture Your Moments</h1>
          <p className="mt-4 text-lg">
            Discover the best cameras at unbeatable prices!
          </p>
          <button className="bg-red-500 text-white px-6 py-3 rounded mt-6 hover:bg-red-600 transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
