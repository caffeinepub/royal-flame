import { useState } from 'react';
import { Calendar, Clock, Users, Phone, User, Check } from 'lucide-react';

export function ReservationsSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.date) {
      newErrors.date = 'Date is required';
    }
    if (!formData.time) {
      newErrors.time = 'Time is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitted(true);
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          date: '',
          time: '',
          guests: '2'
        });
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <section id="reservations" className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-card p-12 rounded-lg shadow-premium">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6">
                <Check className="w-10 h-10 text-accent" />
              </div>
              <h3 className="font-serif text-3xl font-bold mb-4 text-foreground">
                Reservation Confirmed!
              </h3>
              <p className="text-lg text-foreground/70 mb-2">
                Thank you for choosing Royal Flame, {formData.name}.
              </p>
              <p className="text-foreground/70">
                We've received your reservation request for {formData.guests} {formData.guests === '1' ? 'guest' : 'guests'} on {formData.date} at {formData.time}.
                We'll contact you shortly at {formData.phone} to confirm your booking.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="reservations" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Reserve Your Table
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Book your unforgettable dining experience at Royal Flame
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-card p-8 md:p-10 rounded-lg shadow-premium">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  <User className="inline w-4 h-4 mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md border ${
                    errors.name ? 'border-destructive' : 'border-input'
                  } bg-background focus:outline-none focus:ring-2 focus:ring-accent`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  <Phone className="inline w-4 h-4 mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md border ${
                    errors.phone ? 'border-destructive' : 'border-input'
                  } bg-background focus:outline-none focus:ring-2 focus:ring-accent`}
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && (
                  <p className="text-destructive text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Date */}
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">
                  <Calendar className="inline w-4 h-4 mr-2" />
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full px-4 py-3 rounded-md border ${
                    errors.date ? 'border-destructive' : 'border-input'
                  } bg-background focus:outline-none focus:ring-2 focus:ring-accent`}
                />
                {errors.date && (
                  <p className="text-destructive text-sm mt-1">{errors.date}</p>
                )}
              </div>

              {/* Time */}
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-foreground mb-2">
                  <Clock className="inline w-4 h-4 mr-2" />
                  Time
                </label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md border ${
                    errors.time ? 'border-destructive' : 'border-input'
                  } bg-background focus:outline-none focus:ring-2 focus:ring-accent`}
                >
                  <option value="">Select time</option>
                  <option value="17:00">5:00 PM</option>
                  <option value="17:30">5:30 PM</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="18:30">6:30 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="19:30">7:30 PM</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="20:30">8:30 PM</option>
                  <option value="21:00">9:00 PM</option>
                  <option value="21:30">9:30 PM</option>
                </select>
                {errors.time && (
                  <p className="text-destructive text-sm mt-1">{errors.time}</p>
                )}
              </div>

              {/* Guests */}
              <div className="md:col-span-2">
                <label htmlFor="guests" className="block text-sm font-medium text-foreground mb-2">
                  <Users className="inline w-4 h-4 mr-2" />
                  Number of Guests
                </label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-8 px-8 py-4 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-all font-semibold text-lg shadow-premium hover:shadow-premium-hover transform hover:-translate-y-0.5"
            >
              Reserve Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
