import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              PetCare is your one-stop destination for all things pets. From
              food and accessories to pets themselves, we have everything your
              furry friends need.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-blue-200">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-xl hover:text-blue-500"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://instagram.com"
                className="text-xl hover:text-pink-500"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://twitter.com"
                className="text-xl hover:text-blue-400"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://linkedin.com"
                className="text-xl hover:text-blue-700"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="mt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} PetStore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
