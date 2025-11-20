const AppointmentSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6 font-['Julius_Sans_One'] text-[#1a1a2e]">
              Make Appointment
            </h2>
            <p className="text-gray-600 text-xl">
              Book your driving lesson today and start your journey to success
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#90EE90] to-[#7CFC00] rounded-3xl p-10 shadow-2xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#1a1a2e]/20 text-lg"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#1a1a2e]/20 text-lg"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full px-6 py-4 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#1a1a2e]/20 text-lg"
                />
                <select className="w-full px-6 py-4 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#1a1a2e]/20 text-lg">
                  <option>Select Course</option>
                  <option>Basic Driving Lessons</option>
                  <option>Advance Driving Lessons</option>
                  <option>International Driving</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="date"
                  className="w-full px-6 py-4 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#1a1a2e]/20 text-lg"
                />
                <input
                  type="time"
                  className="w-full px-6 py-4 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#1a1a2e]/20 text-lg"
                />
              </div>

              <textarea
                placeholder="Your Message (Optional)"
                rows="5"
                className="w-full px-6 py-4 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#1a1a2e]/20 text-lg resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#1a1a2e] text-white py-5 rounded-xl font-bold text-lg hover:bg-[#2a2a3e] transition-all duration-300 shadow-xl"
              >
                Submit Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppointmentSection;