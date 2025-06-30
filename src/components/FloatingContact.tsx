
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, X } from 'lucide-react';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Main FAB */}
      <div className="relative">
        {/* Expanded options */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 space-y-3 animate-slide-in-right">
            <Button
              asChild
              size="lg"
              className="bg-success hover:bg-success/90 text-white shadow-lg rounded-full w-14 h-14 p-0"
            >
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={24} />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white shadow-lg rounded-full w-14 h-14 p-0"
            >
              <a href="tel:+1234567890">
                <Phone size={24} />
              </a>
            </Button>
          </div>
        )}

        {/* Toggle button */}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="bg-accent hover:bg-accent/90 text-white shadow-lg rounded-full w-16 h-16 p-0"
        >
          {isOpen ? <X size={24} /> : <Phone size={24} />}
        </Button>
      </div>

      {/* Labels for hover */}
      {isOpen && (
        <>
          <div className="absolute bottom-28 right-20 bg-black text-white px-3 py-1 rounded text-sm whitespace-nowrap pointer-events-none">
            WhatsApp
          </div>
          <div className="absolute bottom-44 right-20 bg-black text-white px-3 py-1 rounded text-sm whitespace-nowrap pointer-events-none">
            Call Now
          </div>
        </>
      )}
    </div>
  );
};

export default FloatingContact;
