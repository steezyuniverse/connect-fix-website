
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, AlertTriangle, Wrench, Zap } from 'lucide-react';

const Services = () => {
  const electricalServices = [
    {
      category: "Electrical Installations",
      icon: Zap,
      services: [
        "New electrical panel upgrades",
        "Outlet and switch installations", 
        "Ceiling fan installations",
        "Light fixture installations",
        "Smart home wiring",
        "Electric vehicle charging stations",
        "Whole house rewiring",
        "Generator installations"
      ]
    },
    {
      category: "Electrical Repairs",
      icon: Wrench,
      services: [
        "Circuit breaker repairs",
        "Outlet and switch repairs",
        "Electrical troubleshooting",
        "Code violation corrections",
        "Electrical safety inspections",
        "GFCI outlet repairs",
        "Flickering light repairs",
        "Power surge protection"
      ]
    }
  ];

  const plumbingServices = [
    {
      category: "Plumbing Installations", 
      icon: Wrench,
      services: [
        "Water heater installations",
        "Toilet installations",
        "Sink and faucet installations",
        "Shower and bathtub installations",
        "Garbage disposal installations",
        "Water filtration systems",
        "Pipe installations",
        "Bathroom remodeling"
      ]
    },
    {
      category: "Plumbing Repairs",
      icon: AlertTriangle,
      services: [
        "Leak repairs",
        "Drain cleaning and unclogging",
        "Toilet repairs",
        "Faucet and fixture repairs",
        "Water heater repairs",
        "Pipe repairs and replacements",
        "Sewer line repairs",
        "Emergency plumbing services"
      ]
    }
  ];

  const emergencyServices = [
    "24/7 emergency electrical repairs",
    "Emergency plumbing services",
    "Power outage troubleshooting",
    "Burst pipe repairs",
    "Electrical fire safety",
    "Sewer backup cleanup",
    "Water damage prevention",
    "Emergency generator services"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Professional Electrical & Plumbing Services
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Comprehensive solutions for all your electrical and plumbing needs. 
              From installations to emergency repairs, we've got you covered.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link to="/contact">Get Free Estimate</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Electrical Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              ⚡ Electrical Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Licensed electricians providing safe, code-compliant electrical work for residential and commercial properties.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {electricalServices.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <category.icon className="w-8 h-8 text-primary mr-3" />
                    <CardTitle className="text-primary">{category.category}</CardTitle>
                  </div>
                  <CardDescription>
                    Professional electrical {category.category.toLowerCase()} with safety as our top priority.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {category.services.map((service, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-success mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">Request Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Plumbing Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              🔧 Plumbing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert plumbers handling everything from simple repairs to complete system installations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {plumbingServices.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <category.icon className="w-8 h-8 text-success mr-3" />
                    <CardTitle className="text-success">{category.category}</CardTitle>
                  </div>
                  <CardDescription>
                    Quality plumbing {category.category.toLowerCase()} with lasting results and fair pricing.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {category.services.map((service, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-success mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">Request Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              🚨 24/7 Emergency Services
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              When emergencies strike, we're here to help. Our emergency team is available around the clock.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {emergencyServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center">
                  <AlertTriangle className="w-5 h-5 text-orange-200 mr-3 flex-shrink-0" />
                  <span className="font-medium">{service}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="secondary" className="mr-4">
              <a href="tel:+1234567890">Call Emergency Line</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-accent">
              <Link to="/contact">Request Service</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Services;
