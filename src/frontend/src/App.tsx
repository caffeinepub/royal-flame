import { Navbar } from './components/royal-flame/Navbar';
import { HeroSection } from './components/royal-flame/sections/HeroSection';
import { AboutSection } from './components/royal-flame/sections/AboutSection';
import { FeaturedMenuSection } from './components/royal-flame/sections/FeaturedMenuSection';
import { WhyChooseUsSection } from './components/royal-flame/sections/WhyChooseUsSection';
import { GallerySection } from './components/royal-flame/sections/GallerySection';
import { TestimonialsSection } from './components/royal-flame/sections/TestimonialsSection';
import { ReservationsSection } from './components/royal-flame/sections/ReservationsSection';
import { LocationSection } from './components/royal-flame/sections/LocationSection';
import { Footer } from './components/royal-flame/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturedMenuSection />
        <WhyChooseUsSection />
        <GallerySection />
        <TestimonialsSection />
        <ReservationsSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
