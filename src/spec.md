# Specification

## Summary
**Goal:** Build a responsive, conversion-focused single-page homepage for “Royal Flame” with section-based layout, anchor navigation, premium styling, and static image assets.

**Planned changes:**
- Create a single scrolling homepage with 10 sections in order: Hero, About, Featured Menu, Why Choose Us, Gallery, Testimonials, Reservations, Location, Footer.
- Implement a sticky navbar with logo, anchor links (Home, Menu, About, Gallery, Reservations, Contact), and a gold-accent “Reservation” button; ensure mobile navigation is usable.
- Build a full-width Hero with background image + dark gradient overlay, exact heading text, emotional tagline, and two CTAs that scroll to Reservations and Featured Menu.
- Add About split layout (image + story) with three highlights: Fresh Ingredients, Award Winning Chefs, Cozy Atmosphere.
- Add Featured Menu with exactly 6 menu cards (image, name, description, price) and soft shadow hover effect.
- Add “Why Choose Us” with 4 icon-based features: Premium Quality, Live BBQ, Private Dining Rooms, Fast Service.
- Add Gallery as a responsive image grid with lightbox overlay (open/close + next/previous).
- Add Testimonials as centered cards with review text and star ratings.
- Add Reservations booking form (Name, Phone, Date, Time, Guests) with basic client-side validation and a success state after submit.
- Add Location section with an embedded map placeholder plus address/contact info.
- Add Footer with 4 columns: About, Quick Links, Opening Hours, Social Media.
- Apply brand styling across the page (cream/white backgrounds, dark brown accents, gold highlights; serif headings + sans-serif body; modern spacing, soft shadows, smooth scrolling).
- Add and reference generated static images (logo, hero, about, 6 menu images, gallery images) under `frontend/public/assets/generated`.

**User-visible outcome:** Users can browse a polished, mobile-friendly Royal Flame homepage, jump to sections via the sticky navbar, view menu highlights and a lightbox gallery, read testimonials, and submit a reservation request with validation and an on-page confirmation.
