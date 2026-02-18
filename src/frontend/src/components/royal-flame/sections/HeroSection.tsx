export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/generated/hero-interior.dim_2400x1350.jpg)' }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Experience Fine Dining<br />Like Never Before
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl mx-auto">
          Where culinary artistry meets warm hospitality in an atmosphere of timeless elegance
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('reservations')}
            className="px-8 py-4 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-all font-semibold text-lg shadow-premium hover:shadow-premium-hover transform hover:-translate-y-0.5"
          >
            Reserve a Table
          </button>
          <button
            onClick={() => scrollToSection('menu')}
            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-md hover:bg-white hover:text-primary transition-all font-semibold text-lg"
          >
            View Menu
          </button>
        </div>
      </div>
    </section>
  );
}
