import {
  Award,
  Users,
  Clock,

} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Award className="w-14 h-14" />,
      title: "Easy Driving Learn",
      description:
        "Step-by-step instruction designed to make learning to drive simple and stress-free for everyone.",
    },
    {
      icon: <Users className="w-14 h-14" />,
      title: "Certified Instructor",
      description:
        "Learn from certified, experienced instructors who are committed to your success and safety.",
    },
    {
      icon: <Clock className="w-14 h-14" />,
      title: "Get License",
      description:
        "We guide you through every step of getting your license processed and to help you pass your test on first try.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-gray-100 p-10 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:border-[#90EE90] group"
            >
              <div className="text-[#90EE90] mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 font-['Julius_Sans_One'] text-[#1a1a2e]">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;