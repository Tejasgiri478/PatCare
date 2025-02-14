import React from "react";

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">About Us</h2>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:mr-8 mb-8 md:mb-0">
            <img
              src="src/assets/images/PetCare.png"
              alt="About PetStore"
              className="mx-auto w-64 h-64 object-cover rounded-md"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-lg about-site text-gray-700">
              At PetCare, we are dedicated to providing high-quality pet
              products for all pet owners. Our mission is to deliver everything
              your pets need to live happy, healthy lives, from food and toys to
              accessories and grooming essentials. We strive to offer the best
              products at affordable prices with exceptional customer service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
