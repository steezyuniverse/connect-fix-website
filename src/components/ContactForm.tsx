
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation
    if (!formData.name || !formData.phone || !formData.serviceType || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, phone, service type, and message are required.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Request Submitted Successfully!",
      description: "We'll contact you within 30 minutes to discuss your needs.",
    });

    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      serviceType: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Get Your Free Quote Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to get started? Contact us for a free estimate or emergency service.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Request Service</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 30 minutes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="(123) 456-7890"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Service Type *
                  </label>
                  <Select value={formData.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="electrical-repair">Electrical Repair</SelectItem>
                      <SelectItem value="electrical-installation">Electrical Installation</SelectItem>
                      <SelectItem value="plumbing-repair">Plumbing Repair</SelectItem>
                      <SelectItem value="plumbing-installation">Plumbing Installation</SelectItem>
                      <SelectItem value="emergency-electrical">Emergency Electrical</SelectItem>
                      <SelectItem value="emergency-plumbing">Emergency Plumbing</SelectItem>
                      <SelectItem value="maintenance">Maintenance</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Please describe your service needs..."
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                  Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary mr-3" />
                  <div>
                    <div className="font-semibold">(123) 456-7890</div>
                    <div className="text-sm text-gray-500">24/7 Emergency Line</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-primary mr-3" />
                  <div>
                    <div className="font-semibold">info@connectfix.com</div>
                    <div className="text-sm text-gray-500">Email us anytime</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary mr-3" />
                  <div>
                    <div className="font-semibold">123 Service Street</div>
                    <div className="text-sm text-gray-500">Your City, State 12345</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-primary mr-3" />
                  <div>
                    <div className="font-semibold">24/7 Emergency Service</div>
                    <div className="text-sm text-gray-500">Regular hours: Mon-Fri 8AM-6PM</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Emergency Service Available</h3>
                <p className="mb-4">
                  Need immediate assistance? Our emergency team is standing by 24/7 for urgent electrical and plumbing issues.
                </p>
                <Button asChild variant="secondary" className="w-full">
                  <a href="tel:+1234567890">Call Emergency Line</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
