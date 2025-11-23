import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1a1a2e] text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-[#90EE90] w-12 h-12 rounded-lg flex items-center justify-center">
              <span className="text-[#1a1a2e] font-bold text-2xl font-['Julius_Sans_One']">
                E
              </span>
            </div>
            <span className="text-2xl font-bold font-['Julius_Sans_One']">
              Empas Driving School
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="#home"
              className="hover:text-[#90EE90] transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-[#90EE90] transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#courses"
              className="hover:text-[#90EE90] transition-colors duration-300"
            >
              Courses
            </a>
            <a
              href="#instructors"
              className="hover:text-[#90EE90] transition-colors duration-300"
            >
              Instructors
            </a>
            <a
              href="#testimonials"
              className="hover:text-[#90EE90] transition-colors duration-300"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="hover:text-[#90EE90] transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="bg-[#90EE90] text-[#1a1a2e] px-8 py-3 rounded-full font-semibold hover:bg-[#7CFC00] transition-all duration-300 shadow-lg"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 space-y-4">
            <a
              href="#home"
              className="block py-2 hover:text-[#90EE90] transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="block py-2 hover:text-[#90EE90] transition-colors"
            >
              About
            </a>
            <a
              href="#courses"
              className="block py-2 hover:text-[#90EE90] transition-colors"
            >
              Courses
            </a>
            <a
              href="#instructors"
              className="block py-2 hover:text-[#90EE90] transition-colors"
            >
              Instructors
            </a>
            <a
              href="#testimonials"
              className="block py-2 hover:text-[#90EE90] transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="block py-2 hover:text-[#90EE90] transition-colors"
            >
              Contact
            </a>
            <button className="bg-[#90EE90] text-[#1a1a2e] px-8 py-3 rounded-full font-semibold w-full mt-4">
              Book Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
