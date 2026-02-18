export function FeaturedMenuSection() {
  const menuItems = [
    {
      image: '/assets/generated/menu-item-1.dim_1200x900.jpg',
      name: 'Grilled Ribeye Steak',
      description: 'Premium aged beef with herb butter and seasonal vegetables',
      price: '$45'
    },
    {
      image: '/assets/generated/menu-item-2.dim_1200x900.jpg',
      name: 'BBQ Platter Supreme',
      description: 'Assorted grilled meats with signature sauces and sides',
      price: '$52'
    },
    {
      image: '/assets/generated/menu-item-3.dim_1200x900.jpg',
      name: 'Truffle Pasta',
      description: 'Handmade pasta with black truffle and parmesan cream',
      price: '$38'
    },
    {
      image: '/assets/generated/menu-item-4.dim_1200x900.jpg',
      name: 'Gourmet Burger',
      description: 'Wagyu beef patty with caramelized onions and aged cheddar',
      price: '$28'
    },
    {
      image: '/assets/generated/menu-item-5.dim_1200x900.jpg',
      name: 'Pan-Seared Salmon',
      description: 'Atlantic salmon with lemon butter and asparagus',
      price: '$42'
    },
    {
      image: '/assets/generated/menu-item-6.dim_1200x900.jpg',
      name: 'Chocolate Soufflé',
      description: 'Decadent dark chocolate with vanilla bean ice cream',
      price: '$16'
    }
  ];

  return (
    <section id="menu" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured Menu
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover our chef's signature creations, crafted with passion and the finest ingredients
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-premium transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {item.name}
                  </h3>
                  <span className="text-accent font-semibold text-lg">
                    {item.price}
                  </span>
                </div>
                <p className="text-foreground/70">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
