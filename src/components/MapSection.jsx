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
            src="https://www.google.com/maps?q=7.4298518,3.8993893&hl=en&z=16&output=embed"
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