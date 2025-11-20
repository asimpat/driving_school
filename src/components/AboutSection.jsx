

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
                alt="Driving instruction"
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-[#90EE90] p-8 rounded-2xl shadow-xl hidden lg:block">
              <div className="text-[#1a1a2e]">
                <div className="text-5xl font-bold font-['Julius_Sans_One']">
                  20+
                </div>
                <div className="text-lg font-semibold">Years Experience</div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-5xl font-bold mb-6 font-['Julius_Sans_One'] text-[#1a1a2e] leading-tight">
              We Help Students To Pass Test & Get A License On The First Try
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              At Empas Driving School, we have over 20 years of experience
              helping students become confident, skilled drivers. Our proven
              teaching methods and patient instructors ensure you're fully
              prepared for your driving test.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We pride ourselves on our exceptional pass rate and personalized
              approach. Every student receives individual attention and a
              customized learning plan tailored to their needs and learning
              pace.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#90EE90] rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-bold text-[#1a1a2e] mb-1">
                    Expert Instructors
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Certified professionals
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#90EE90] rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-bold text-[#1a1a2e] mb-1">
                    Modern Vehicles
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Safe and well-maintained
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#90EE90] rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-bold text-[#1a1a2e] mb-1">
                    Flexible Schedule
                  </h4>
                  <p className="text-gray-600 text-sm">Learn at your pace</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#90EE90] rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-bold text-[#1a1a2e] mb-1">
                    High Pass Rate
                  </h4>
                  <p className="text-gray-600 text-sm">
                    95% first-time success
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <button className="bg-[#90EE90] text-[#1a1a2e] px-8 py-4 rounded-full font-bold hover:bg-[#7CFC00] transition-all duration-300 shadow-lg">
                Learn More
              </button>
              <button className="border-2 border-[#1a1a2e] text-[#1a1a2e] px-8 py-4 rounded-full font-bold hover:bg-[#1a1a2e] hover:text-white transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;