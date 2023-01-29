import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 w-screen">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <p>Copyright © {new Date().getFullYear()} IODB Movies</p>
          <nav className="space-x-2">
            <a href="#" className="text-white hover:text-gray-400">
              About
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Contact
              
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Terms & Privacy
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
