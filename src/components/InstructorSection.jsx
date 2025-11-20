const InstructorsSection = () => {
  const instructors = [
    {
      name: "Michael Chen",
      role: "Senior Instructor",
      experience: "15 Years",
      img: 1,
    },
    {
      name: "Sarah Williams",
      role: "Driving Trainer",
      experience: "12 Years",
      img: 2,
    },
    {
      name: "David Brown",
      role: "Head Instructor",
      experience: "18 Years",
      img: 3,
    },
    {
      name: "Emily Johnson",
      role: "Professional Trainer",
      experience: "10 Years",
      img: 4,
    },
  ];

  return (
    <section id="instructors" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 font-['Julius_Sans_One'] text-[#1a1a2e]">
            We Have Great Experience Of Driving
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Meet our team of certified and experienced driving instructors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={`https://i.pravatar.cc/400?img=${instructor.img}`}
                  alt={instructor.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2 font-['Julius_Sans_One'] text-[#1a1a2e]">
                  {instructor.name}
                </h3>
                <p className="text-[#90EE90] font-semibold mb-1">
                  {instructor.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {instructor.experience} Experience
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default InstructorsSection;