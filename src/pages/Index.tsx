
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import ServiceAreas from '@/components/ServiceAreas';
import FloatingContact from '@/components/FloatingContact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <ServiceAreas />
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Index;
