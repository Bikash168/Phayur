import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import ContactSection from "@/components/ContactSection";
import DigitalPlatforms from "@/components/DigitalPlatforms";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="animate-fade-in">
        <Hero />
      </section>

      {/* Who We Are Section */}
      <section
        id="aboutus"
        className="py-12 md:py-16 bg-gradient-to-r from-green-50 to-green-100 px-4 md:px-12 text-center animate-slide-up"
      >
        <AboutUs />
      </section>

      {/* What We Do Section */}
      <section
        id="services"
        className="py-12 md:py-16 bg-gradient-to-r from-white to-gray-50 px-4 md:px-12 text-center animate-slide-up"
      >
        <Services />
      </section>

      {/* Digital Platforms Section */}
      <section
        id="digital-platforms"
        className="py-12 md:py-16 bg-gradient-to-r from-green-50 to-green-100 px-4 md:px-12 text-center animate-slide-up"
      >
        <DigitalPlatforms />
      </section>

      {/* Contact Us Section */}
      <section
        id="contact"
        className="py-12 md:py-16 bg-gradient-to-r from-green-900 to-green-700 text-white px-4 md:px-12 text-center animate-slide-up"
      >
        <ContactSection />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
