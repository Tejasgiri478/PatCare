import React from "react";

const Shop = () => {
  console.log("Rendering Shop Page");
  return (
    <div className="py-16 bg-gray-100">
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Our Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Example Product 1 */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src="/path-to-product-image1.jpg"
                alt="Product 1"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Pet Food</h3>
              <p className="text-lg text-blue-500 mt-2">$15.99</p>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
                Add to Cart
              </button>
            </div>

            {/* Example Product 2 */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src="/path-to-product-image2.jpg"
                alt="Product 2"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Interactive Cat Toy
              </h3>
              <p className="text-lg text-blue-500 mt-2">$9.99</p>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
                Add to Cart
              </button>
            </div>

            {/* Additional Products... */}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Shop;
