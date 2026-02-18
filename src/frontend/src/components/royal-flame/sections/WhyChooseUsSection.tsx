import { Star, Flame, Users, Clock } from 'lucide-react';

export function WhyChooseUsSection() {
  const features = [
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'Only the finest ingredients and meticulous preparation'
    },
    {
      icon: Flame,
      title: 'Live BBQ',
      description: 'Watch our chefs create magic at our open grill station'
    },
    {
      icon: Users,
      title: 'Private Dining Rooms',
      description: 'Exclusive spaces for intimate gatherings and celebrations'
    },
    {
      icon: Clock,
      title: 'Fast Service',
      description: 'Efficient service without compromising on quality'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why Choose Us
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Experience the difference that sets Royal Flame apart
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-lg bg-card shadow-sm hover:shadow-premium transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-foreground/70">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
