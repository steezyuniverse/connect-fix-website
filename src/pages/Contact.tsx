
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Contact ConnectFix
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Ready to get started? Contact us today for a free estimate or emergency service. 
              We're here to help with all your electrical and plumbing needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Contact;
