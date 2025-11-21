import { useState } from "react";
import { Calendar } from "lucide-react";

const AppointmentSection = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      // Send to Formspree
      const res = await fetch("https://formspree.io/f/xqannjkn", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setIsSuccess(true);
        form.reset();
        // Auto-close modal after 4 seconds
        setTimeout(() => setIsSuccess(false), 4000);
      } else {
        setIsError(true);
        setTimeout(() => setIsError(false), 4000);
      }
    } catch (error) {
      setIsError(true);
      setTimeout(() => setIsError(false), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  required
                  className="w-full px-6 py-4 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#1a1a2e]/20 text-lg transition-all duration-300"
                  disabled={isSubmitting}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  required
                  className="w-full px-6 py-4 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#1a1a2e]/20 text-lg transition-all duration-300"
                  disabled={isSubmitting}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone *"
                  required
                  className="w-full px-6 py-4 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#1a1a2e]/20 text-lg transition-all duration-300"
                  disabled={isSubmitting}
                />
                <select
                  name="course"
                  required
                  className="w-full px-6 py-4 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#1a1a2e]/20 text-lg transition-all duration-300"
                  disabled={isSubmitting}
                >
                  <option value="">Select Course *</option>
                  <option value="basic">Basic Driving Lessons</option>
                  <option value="advance">Advance Driving Lessons</option>
                  <option value="international">International Driving</option>
                </select>
              </div>

              {/* <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="date"
                  name="date"
                  required
                  className="w-full px-6 py-4 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#1a1a2e]/20 text-lg transition-all duration-300"
                  disabled={isSubmitting}
                />
                <input
                  type="time"
                  name="time"
                  required
                  className="w-full px-6 py-4 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#1a1a2e]/20 text-lg transition-all duration-300"
                  disabled={isSubmitting}
                />
              </div> */}

              <textarea
                name="message"
                placeholder="Your Message (Optional)"
                rows="5"
                className="w-full px-6 py-4 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#1a1a2e]/20 text-lg resize-none transition-all duration-300"
                disabled={isSubmitting}
              ></textarea>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1a1a2e] text-white py-5 rounded-xl font-bold text-lg hover:bg-[#2a2a3e] transition-all duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Calendar className="w-6 h-6" />
                    <span>Submit Appointment</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {isSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white p-10 rounded-3xl text-center shadow-2xl max-w-md w-full transform animate-scaleIn">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-[#1a1a2e] mb-3 font-['Julius_Sans_One']">
              Appointment Sent!
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Thank you for booking with us. We will contact you soon to confirm
              your appointment.
            </p>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {isError && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white p-10 rounded-3xl text-center shadow-2xl max-w-md w-full transform animate-scaleIn">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-red-700 mb-3 font-['Julius_Sans_One']">
              Something Went Wrong
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              We couldn't process your request. Please try again or contact us
              directly.
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default AppointmentSection;
