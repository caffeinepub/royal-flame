import { Leaf, Award, Heart } from 'lucide-react';

export function AboutSection() {
  const highlights = [
    {
      icon: Leaf,
      title: 'Fresh Ingredients',
      description: 'Locally sourced, premium quality ingredients in every dish'
    },
    {
      icon: Award,
      title: 'Award Winning Chefs',
      description: 'Culinary masters with decades of combined experience'
    },
    {
      icon: Heart,
      title: 'Cozy Atmosphere',
      description: 'Warm, inviting ambiance perfect for any occasion'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src="/assets/generated/about-ambience.dim_1400x1000.jpg"
              alt="Royal Flame Restaurant Interior"
              className="rounded-lg shadow-premium w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our Story
            </h2>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              At Royal Flame, we believe dining is more than just a meal—it's an experience. 
              Since our founding, we've been dedicated to creating unforgettable moments through 
              exceptional cuisine, impeccable service, and an atmosphere that feels like home. 
              Our passion for culinary excellence and commitment to quality has made us a beloved 
              destination for fine dining enthusiasts.
            </p>

            {/* Highlights */}
            <div className="space-y-6">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-foreground">
                        {highlight.title}
                      </h3>
                      <p className="text-foreground/70">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
