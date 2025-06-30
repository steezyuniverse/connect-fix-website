
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Downtown District",
      rating: 5,
      text: "ConnectFix saved the day when our electrical panel failed. They arrived within an hour and had everything working perfectly. Professional, fast, and reasonably priced!"
    },
    {
      name: "Mike Thompson",
      location: "Residential Area",
      rating: 5,
      text: "Had a major plumbing leak at 2 AM. Their emergency service was incredible - they were here in 30 minutes and fixed everything quickly. Highly recommend!"
    },
    {
      name: "Lisa Chen",
      location: "Business District",
      rating: 5,
      text: "Used ConnectFix for our office renovation. Their electrical work was top-notch and completed on time. Will definitely use them again for future projects."
    }
  ];

  const clientLogos = [
    "ABC Corp", "XYZ Industries", "Local Hospital", "City Council", "Green Energy Co", "Tech Solutions"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from satisfied customers who trust ConnectFix for their electrical and plumbing needs.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trusted by section */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Trusted by Local Businesses</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((logo, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="text-gray-400 font-medium text-center">{logo}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
