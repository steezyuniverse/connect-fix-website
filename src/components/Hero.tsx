
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Professional <span className="text-accent">Electrical</span> & <span className="text-success">Plumbing</span> Services
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Fast, reliable, and affordable solutions for all your electrical and plumbing needs. 
              Licensed professionals available 24/7 for emergency services.
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-success mr-2" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-success mr-2" />
                <span>15+ Years Experience</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-success mr-2" />
                <span>24/7 Emergency Service</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-3">
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3">
                <a href="tel:+1234567890" className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: (123) 456-7890
                </a>
              </Button>
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-accent/20 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    ⚡
                  </div>
                  <h3 className="font-semibold mb-2">Electrical</h3>
                  <p className="text-sm text-blue-100">Wiring, Repairs, Installations</p>
                </div>
                <div className="bg-success/20 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-success rounded-full mx-auto mb-4 flex items-center justify-center">
                    🔧
                  </div>
                  <h3 className="font-semibold mb-2">Plumbing</h3>
                  <p className="text-sm text-blue-100">Pipes, Drains, Fixtures</p>
                </div>
                <div className="bg-white/20 rounded-lg p-6 text-center col-span-2">
                  <div className="w-12 h-12 bg-white/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                    🚨
                  </div>
                  <h3 className="font-semibold mb-2">Emergency Services</h3>
                  <p className="text-sm text-blue-100">Available 24/7 for urgent repairs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
