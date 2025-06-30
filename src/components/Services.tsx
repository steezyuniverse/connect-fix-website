
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const electricalServices = [
    {
      title: "Electrical Installations",
      description: "New wiring, outlets, switches, and electrical panel upgrades",
      features: ["Panel Upgrades", "New Outlets", "Light Fixtures", "Smart Home Wiring"]
    },
    {
      title: "Electrical Repairs",
      description: "Quick fixes for faulty wiring, broken outlets, and electrical issues",
      features: ["Circuit Repairs", "Outlet Fixes", "Breaker Issues", "Safety Inspections"]
    },
    {
      title: "Emergency Electrical",
      description: "24/7 emergency electrical services for urgent situations",
      features: ["Power Outages", "Electrical Fires", "Exposed Wiring", "Emergency Repairs"]
    }
  ];

  const plumbingServices = [
    {
      title: "Plumbing Installations",
      description: "New pipes, fixtures, water heaters, and bathroom installations",
      features: ["Water Heaters", "Bathroom Fixtures", "Kitchen Sinks", "Pipe Installation"]
    },
    {
      title: "Plumbing Repairs",
      description: "Fast repairs for leaks, clogs, and plumbing system issues",
      features: ["Leak Repairs", "Drain Cleaning", "Pipe Repairs", "Fixture Repairs"]
    },
    {
      title: "Emergency Plumbing",
      description: "24/7 emergency plumbing services for burst pipes and major leaks",
      features: ["Burst Pipes", "Sewer Backups", "Water Damage", "Emergency Repairs"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From routine maintenance to emergency repairs, we provide comprehensive electrical and plumbing solutions
          </p>
        </div>

        {/* Electrical Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">
            ⚡ Electrical Services
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {electricalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-primary">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Plumbing Services */}
        <div>
          <h3 className="text-2xl font-bold text-success mb-8 text-center">
            🔧 Plumbing Services
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {plumbingServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-success">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-success rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
