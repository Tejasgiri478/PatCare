import React from "react";

const Content = () => {
  const dummyItems = [
    {
      id: 1,
      name: "Pet Food - Chicken Flavor",
      price: "$15.99",
      imgSrc: "./src/assets/images/petfood2.jpeg",
    },
    {
      id: 2,
      name: "Cat Toy - Interactive",
      price: "$9.99",
      imgSrc: "./src/assets/images/cat-toy.jpeg",
    },
    {
      id: 3,
      name: "Dog Leash - Nylon",
      price: "$12.49",
      imgSrc: "./src/assets/images/dog-leash.jpeg",
    },
    {
      id: 4,
      name: "Pet Bed - Cozy",
      price: "$25.00",
      imgSrc: "./src/assets/images/pet-bed.jpeg",
    },
    {
      id: 5,
      name: "Bird Cage - Large",
      price: "$60.00",
      imgSrc: "./src/assets/images/Bird-Cage.jpeg",
    },
    {
      id: 6,
      name: "Pet Shampoo - Gentle",
      price: "$7.99",
      imgSrc: "./src/assets/images/Pet-shampoo.jpeg",
    },
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Featured Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {dummyItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={item.imgSrc}
                alt={item.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="text-lg text-blue-500 mt-2">{item.price}</p>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content;
