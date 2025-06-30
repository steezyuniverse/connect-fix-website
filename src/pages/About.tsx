
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Award, Users, Clock } from 'lucide-react';

const About = () => {
  const certifications = [
    "Licensed Electrical Contractor",
    "Master Plumber Certification",
    "OSHA Safety Certified",
    "Bonded & Insured",
    "BBB A+ Rating"
  ];

  const teamMembers = [
    {
      name: "John Smith",
      role: "Master Electrician",
      experience: "15+ years",
      specialization: "Commercial & Residential Electrical"
    },
    {
      name: "Sarah Davis",
      role: "Lead Plumber",
      experience: "12+ years", 
      specialization: "Emergency Plumbing & Installations"
    },
    {
      name: "Mike Johnson",
      role: "Service Manager",
      experience: "10+ years",
      specialization: "Project Management & Customer Service"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About ConnectFix
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Your trusted partner for professional electrical and plumbing services since 2009. 
              We're committed to quality, safety, and exceptional customer service.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2009, ConnectFix began as a small family business with a simple mission: 
                provide reliable, professional electrical and plumbing services to our community. 
                What started with one truck and a commitment to excellence has grown into the area's 
                most trusted service company.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, we've built our reputation on quality workmanship, fair pricing, 
                and treating every customer like family. Our team of licensed professionals brings 
                decades of combined experience to every job, from simple repairs to complex installations.
              </p>
              <p className="text-gray-600">
                Today, we're proud to serve thousands of satisfied customers across the metropolitan 
                area, maintaining the same values and dedication that started it all.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-primary mr-3" />
                  <span className="font-semibold">Safety First</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-primary mr-3" />
                  <span className="font-semibold">Quality Workmanship</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-primary mr-3" />
                  <span className="font-semibold">Customer Focus</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-primary mr-3" />
                  <span className="font-semibold">Reliable Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Licensed & Certified Professionals
            </h2>
            <p className="text-xl text-gray-600">
              Our team maintains all required certifications and continues ongoing education
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{cert}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to solving your electrical and plumbing needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-600">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-2">{member.experience}</p>
                  <p className="text-sm text-gray-500">{member.specialization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default About;
