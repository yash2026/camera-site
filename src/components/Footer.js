import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-white py-8 px-36">
      <div className="container mx-auto flex justify-between items-center ">
        <div>
          <p>© 2024 Camera Store</p>
          <div className="mt-2">
            <a href="#" className="text-blue-500 mx-2">
              Facebook
            </a>
            <a href="#" className="text-pink-500 mx-2">
              Instagram
            </a>
            <a href="#" className="text-blue-400 mx-2">
              Twitter
            </a>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <h3 className="text-xl font-semibold">Subscribe to Our Newsletter</h3>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg border border-gray-400"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded-r-lg hover:bg-red-600 transition duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
