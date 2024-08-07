import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-xl md:text-2xl mb-12 md:mb-0">
          &copy; {new Date().getFullYear()} Greece Cat. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-2 items-center justify-center space-x-14 px-7 md:px-2">
          <a href="/privacy" className="text-xl text-gray-400 hover:text-white">
            Privacy Policy
          </a>
          <a href="/terms" className="text-xl text-gray-400 hover:text-white">
            Terms of Service
          </a>
          <a href="/contact" className="text-xl text-gray-400 hover:text-white">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
