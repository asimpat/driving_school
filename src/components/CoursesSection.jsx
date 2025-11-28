const CoursesSection = () => {
  const courses = [
    {
      title: "Basic Driving Lessons",
      duration: "2 Weeks",
      price: "NGN 35,000",
      features: [
        "10 Hours Behind the Wheel",
        "Theory and Road Rules",
        "Basic Maneuvers Training",
        "Road Safety Education",
        "Practice Test Preparation",
      ],
    },
    {
      title: "Intermediate Driving Lessons",
      duration: "3 Weeks",
      price: "NGN 45,000",
      popular: true,
      features: [
        "15 Hours Behind the Wheel",
        "Highway Driving Skills",  
        "Advanced Parking Techniques",
        "Defensive Driving Training",
        "Test Day Simulation",
      ],
    },
    {
      title: "Advanced Driving Lessons",
      duration: "4 Weeks",
      price: "NGN 65,000",
      features: [
        "20 Hours Behind the Wheel",
        "All Road Type Training",
        "Night Driving Sessions", 
        "Test Day Simulation",
        "Full Support Until You Pass",
      ],
    },
  ];

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 font-['Julius_Sans_One'] text-[#1a1a2e]">
            Our Courses Upskill You With Driving Training
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Choose the perfect course for your needs and skill level
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                course.popular
                  ? "ring-4 ring-[#90EE90] relative"
                  : "border-2 border-gray-100"
              }`}
            >
              {course.popular && (
                <div className="absolute top-6 right-6 bg-[#90EE90] text-[#1a1a2e] px-4 py-2 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}

              <div className="bg-gradient-to-br from-[#1a1a2e] to-[#2a2a3e] text-white px-8 py-6 text-center">
                <div className="text-lg font-bold mb-1">{course.duration}</div>
                <div className="text-sm opacity-80">Course Duration</div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 font-['Julius_Sans_One'] text-[#1a1a2e] text-center">
                  {course.title}
                </h3>

                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-[#90EE90] mb-2">
                    {course.price}
                  </div>
                  <div className="text-gray-500">Per Course</div>
                </div>

                <ul className="space-y-4 mb-8">
                  {course.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-5 h-5 bg-[#90EE90] rounded-full flex-shrink-0 mt-0.5 mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-full font-bold transition-all duration-300 ${
                    course.popular
                      ? "bg-[#90EE90] text-[#1a1a2e] hover:bg-[#7CFC00]"
                      : "bg-[#1a1a2e] text-white hover:bg-[#2a2a3e]"
                  }`}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CoursesSection;