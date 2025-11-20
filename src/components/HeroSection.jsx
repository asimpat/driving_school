import React, { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "The Best Place To Receive Your License",
    "The Best Training You Can Get",
    "Reliable And Helpful Instructors",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(26, 26, 46, 0.7), rgba(26, 26, 46, 0.7)), url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600')",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white font-['Julius_Sans_One'] leading-tight transition-all duration-700">
            {slides[currentSlide]}
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl">
            Professional driving instruction with certified experts. Start your
            journey to becoming a confident driver today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-[#90EE90] text-[#1a1a2e] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#7CFC00] transition-all duration-300 shadow-xl">
              Get Started
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#1a1a2e] transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex gap-3 mt-12">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? "w-16 bg-[#90EE90]" : "w-8 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
