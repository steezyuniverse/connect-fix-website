
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-primary text-white p-2 rounded-lg">
                <div className="w-6 h-6 flex items-center justify-center font-bold">CF</div>
              </div>
              <span className="text-xl font-bold">ConnectFix</span>
            </div>
            <p className="text-gray-300 mb-4">
              Professional electrical and plumbing services with 15+ years of experience. Licensed, insured, and available 24/7 for emergencies.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">📘</div>
              <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">📱</div>
              <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">🐦</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-300">Electrical Repairs</span></li>
              <li><span className="text-gray-300">Electrical Installations</span></li>
              <li><span className="text-gray-300">Plumbing Repairs</span></li>
              <li><span className="text-gray-300">Plumbing Installations</span></li>
              <li><span className="text-gray-300">Emergency Services</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-accent mr-3" />
                <div>
                  <div className="font-semibold">(123) 456-7890</div>
                  <div className="text-sm text-gray-400">24/7 Emergency</div>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-accent mr-3" />
                <span className="text-gray-300">info@connectfix.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-accent mr-3" />
                <span className="text-gray-300">123 Service Street<br />Your City, State 12345</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-accent mr-3" />
                <span className="text-gray-300">Mon-Fri: 8AM-6PM<br />Emergency: 24/7</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 ConnectFix. All rights reserved. Licensed & Insured.
            </div>
            <div className="text-gray-400 text-sm mt-4 md:mt-0">
              Professional Electrical & Plumbing Services
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
