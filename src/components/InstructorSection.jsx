import AsimImage from "../assets/img/asim.png"
import PatrickImage from "../assets/img/patrick.jpeg";

const InstructorsSection = () => {
  const instructors = [
    {
      name: "Cmdr. Patrick Okon Edet",
      role: "CEO & Lead Instructor",
      experience: "15 Years",
      image: PatrickImage, // Replace with your image URL: "/path/to/image.jpg"
      initials: "PO",
      bgColor: "bg-blue-500",
    },
    {
      name: "Asim Patrick",
      role: "Driving Trainer",
      experience: "10 Years",
      image: AsimImage, // Replace with your image URL
      initials: "AP",
      bgColor: "bg-purple-500",
    },
    {
      name: "David James",
      role: "Class Room Instructor",
      experience: "5 Years",
      image: null, // Replace with your image URL
      initials: "DJ",
      bgColor: "bg-orange-500",
    },
    {
      name: "Emily Johnson",
      role: "Simulator Trainer",
      experience: "7 Years",
      image: null, // Replace with your image URL
      initials: "EJ",
      bgColor: "bg-pink-500",
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
                {instructor.image ? (
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div
                    className={`w-full h-full ${instructor.bgColor} flex items-center justify-center hover:scale-110 transition-transform duration-500`}
                  >
                    <span className="text-white text-6xl font-bold font-['Julius_Sans_One']">
                      {instructor.initials}
                    </span>
                  </div>
                )}
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
