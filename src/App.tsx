import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { Toast } from './components/Toast';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Balayage & Blond Design');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsBookingOpen(true);
  };

  const handleShowToast = (msg: string) => {
    setToastMessage(msg);
  };

  return (
    <div className="min-h-screen bg-[#181615] text-[#FAF8F5] selection:bg-[#D4AF37] selection:text-[#181615]">
      {/* Top Fixed Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main className="pt-20">
        <Hero onOpenBooking={() => handleOpenBooking()} />
        <About />
        <Services onSelectService={(srv) => handleOpenBooking(srv)} />
        <Portfolio onOpenBooking={(srv) => handleOpenBooking(srv)} />
        <Testimonials onShowToast={handleShowToast} />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        preSelectedService={selectedService}
        onClose={() => setIsBookingOpen(false)}
        onShowToast={handleShowToast}
      />

      {/* Floating Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
