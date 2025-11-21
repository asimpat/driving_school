import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      name: "Mr. Victor Thompson",
      role: "Student",
      rating: 5,
      text: "Excellent experience! The instructors at Empas were incredibly patient and professional. I passed my driving test on the first attempt thanks to their thorough training.",
      image: null, // Replace with your image URL: "/path/to/image.jpg"
      initials: "VT",
      bgColor: "bg-blue-600",
    },
    {
      name: "Mrs Precious Ben",
      role: "Student",
      rating: 5,
      text: "I was nervous about learning to drive, but the team made me feel comfortable and confident. Best driving school in Calabar! Highly recommended.",
      image: null, // Replace with your image URL
      initials: "PB",
      bgColor: "bg-purple-600",
    },
    {
      name: "Mr. David Effiong",
      role: "Student",
      rating: 5,
      text: "Professional staff, modern vehicles, and effective teaching methods. Worth every penny. I'm now a confident driver thanks to Empas Driving School.",
      image: null, // Replace with your image URL
      initials: "DE",
      bgColor: "bg-teal-600",
    },
  ];

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () =>
    setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-20 bg-[#1a1a2e] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 font-['Julius_Sans_One']">
            What Our Clients Say!
          </h2>
          <p className="text-white/80 text-xl">
            Real reviews from our satisfied students
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-[#90EE90]">
                {testimonials[current].image ? (
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className={`w-full h-full ${testimonials[current].bgColor} flex items-center justify-center`}
                  >
                    <span className="text-white text-3xl font-bold font-['Julius_Sans_One']">
                      {testimonials[current].initials}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-center mb-6">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-[#90EE90] text-[#90EE90]"
                />
              ))}
            </div>

            <p className="text-center text-xl mb-8 leading-relaxed italic">
              "{testimonials[current].text}"
            </p>

            <div className="text-center">
              <h4 className="font-bold text-2xl mb-1">
                {testimonials[current].name}
              </h4>
              <p className="text-[#90EE90] font-semibold">
                {testimonials[current].role}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-[#90EE90] p-4 rounded-full hover:bg-[#7CFC00] transition-all duration-300 shadow-xl"
          >
            <ChevronLeft className="text-[#1a1a2e]" size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-[#90EE90] p-4 rounded-full hover:bg-[#7CFC00] transition-all duration-300 shadow-xl"
          >
            <ChevronRight className="text-[#1a1a2e]" size={24} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  current === idx ? "w-12 bg-[#90EE90]" : "w-3 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;