import { StarRating } from '../StarRating';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'An absolutely incredible dining experience! The ambiance is perfect, the food is exquisite, and the service is impeccable. Royal Flame has become our go-to for special occasions.'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      text: 'The BBQ platter is phenomenal! Watching the chefs work their magic at the live grill station is entertainment in itself. Highly recommend for anyone who appreciates quality food.'
    },
    {
      name: 'Emily Rodriguez',
      rating: 5,
      text: 'We hosted our anniversary dinner in one of their private dining rooms. Everything was perfect from start to finish. The attention to detail and personalized service exceeded our expectations.'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What Our Guests Say
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Don't just take our word for it—hear from our valued guests
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg shadow-sm hover:shadow-premium transition-all duration-300"
            >
              <StarRating rating={testimonial.rating} />
              <p className="text-foreground/80 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <p className="font-semibold text-foreground">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
