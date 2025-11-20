const MapSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6 font-['Julius_Sans_One'] text-[#1a1a2e]">
            Locate Us
          </h2>
          <p className="text-gray-600 text-xl">Visit us at our location</p>
        </div>

        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d1022.2113008099054!2d8.341790445409451!3d5.004463065745355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x106787fe8d454cd9%3A0x1fe1c6018ca821f0!2sEmpas%20Driving%20School%2C%2012%20Ikot%20Effa%20Road%2C%20Ikot%20Akasuk%2C%20Calabar%20540211%2C%20Cross%20River!3m2!1d5.0035633!2d8.3414454!5e0!3m2!1sen!2sng!4v1763652202419!5m2!1sen!2sng"
            // src="https://www.google.com/maps?q=7.4298518,3.8993893&hl=en&z=16&output=embed"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen={true}
            className="w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
export default MapSection;
