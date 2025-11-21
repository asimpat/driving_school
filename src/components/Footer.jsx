import {

  Phone,
  Mail,
  MapPin,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,

} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a2e] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-[#90EE90] w-12 h-12 rounded-lg flex items-center justify-center">
                <span className="text-[#1a1a2e] font-bold text-2xl font-['Julius_Sans_One']">
                  E
                </span>
              </div>
              <span className="text-xl font-bold font-['Julius_Sans_One']">
                Empas Driving School
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner in learning to drive safely and confidently.
              Excellence in driver education since 2005.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-[#90EE90] p-3 rounded-full hover:bg-[#7CFC00] transition-all duration-300"
              >
                <Facebook className="w-5 h-5 text-[#1a1a2e]" />
              </a>
              <a
                href="#"
                className="bg-[#90EE90] p-3 rounded-full hover:bg-[#7CFC00] transition-all duration-300"
              >
                <Twitter className="w-5 h-5 text-[#1a1a2e]" />
              </a>
              <a
                href="#"
                className="bg-[#90EE90] p-3 rounded-full hover:bg-[#7CFC00] transition-all duration-300"
              >
                <Instagram className="w-5 h-5 text-[#1a1a2e]" />
              </a>
              <a
                href="#"
                className="bg-[#90EE90] p-3 rounded-full hover:bg-[#7CFC00] transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-[#1a1a2e]" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-bold text-xl mb-6 font-['Julius_Sans_One']">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-[#90EE90] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-[#90EE90] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="text-gray-400 hover:text-[#90EE90] transition-colors"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#instructors"
                  className="text-gray-400 hover:text-[#90EE90] transition-colors"
                >
                  Instructors
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-[#90EE90] transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-[#90EE90] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Courses Column */}
          <div>
            <h3 className="font-bold text-xl mb-6 font-['Julius_Sans_One']">
              Our Courses
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#courses"
                  className="text-gray-400 hover:text-[#90EE90] transition-colors"
                >
                  Basic Driving Lessons
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="text-gray-400 hover:text-[#90EE90] transition-colors"
                >
                  Intermediate Driving Lessons
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="text-gray-400 hover:text-[#90EE90] transition-colors"
                >
                  Advanced Driving Lesson
                </a>
              </li>
              {/* <li>
                <a
                  href="#courses"
                  className="text-gray-400 hover:text-[#90EE90] transition-colors"
                >
                  Defensive Driving
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="text-gray-400 hover:text-[#90EE90] transition-colors"
                >
                  Refresher Courses
                </a>
              </li> */}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h3 className="font-bold text-xl mb-6 font-['Julius_Sans_One']">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-[#90EE90] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white mb-1">Phone</p>
                  <p>+234 903 2601 821</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-[#90EE90] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white mb-1">Email</p>
                  <p>empas6371@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-[#90EE90] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white mb-1">Address</p>
                  <p>12 Ikot Effa Calabar, Nigeria</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              &copy; 2025 Empas Driving School. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-400">
              <a>
                Privacy Policy
              </a>
              <a >
                Terms of Service
              </a>
              <a >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
