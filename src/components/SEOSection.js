import React from "react";

const SEOSection = () => {
  return (
    <div className="container mx-auto my-12 p-8 bg-gray-100 rounded-lg px-36">
      <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
      <p className="text-lg leading-relaxed">
        We offer the best camera products and accessories, handpicked by
        industry experts. Our cameras deliver superior performance, and we
        provide exceptional customer service. Whether you're a professional or
        just getting started, we have everything you need to capture the perfect
        shot. With unbeatable prices and top-tier support, choosing us ensures a
        smooth and satisfying shopping experience.
      </p>
      <img
        src="/images/cover.jpg"
        alt="SEO"
        className="mt-6 rounded-lg shadow-lg object-cover h-[50vh] w-full"
      />
    </div>
  );
};

export default SEOSection;
