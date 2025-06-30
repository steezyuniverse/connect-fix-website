
const ServiceAreas = () => {
  const areas = [
    "Downtown District", "Residential Heights", "Business Park", "Eastside", 
    "Westgate", "Northpoint", "Southside", "Industrial Zone", 
    "Suburban Gardens", "Metro Center", "Riverside", "Hillcrest"
  ];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Service Areas We Cover
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Providing reliable electrical and plumbing services throughout the metropolitan area and surrounding communities.
          </p>
        </div>

        {/* Service Areas Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {areas.map((area, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20 hover:bg-white/20 transition-colors">
              <span className="font-medium">{area}</span>
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Interactive Service Map</h3>
            <div className="bg-white/20 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  📍
                </div>
                <p className="text-blue-100">Google Maps integration showing our service coverage area</p>
                <p className="text-sm text-blue-200 mt-2">
                  We serve a 50-mile radius from our central location
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
