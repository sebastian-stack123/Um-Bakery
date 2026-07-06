import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const menuCategories = [
  "Todos",
  "Brownies",
  "Cheesecakes",
  "Desayunos",
  "Brunch",
  "Sandwiches",
  "Bebidas Frías",
  "Bebidas Calientes",
];

const menuItems = [
  { id: 1, name: "Brownie Rocky Road", category: "Brownies", description: "Con malvaviscos, nueces y doble chocolate.", price: "$3.50", popular: true },
  { id: 2, name: "Brownie Red Velvet & Cream Cheese", category: "Brownies", description: "Clásico red velvet con remolinos de queso crema.", price: "$4.00", popular: true },
  { id: 3, name: "Cheesecake de Frutos Rojos", category: "Cheesecakes", description: "Base de galleta artesanal y mermelada casera.", price: "$5.50" },
  { id: 4, name: "Soup & Sandwich", category: "Sandwiches", description: "Sopa del día con medio sándwich gourmet.", price: "$7.50", popular: true },
  { id: 5, name: "Tostadas Francesas", category: "Desayunos", description: "Pan brioche con miel de maple y fruta fresca.", price: "$6.00" },
  { id: 6, name: "Avocado Toast", category: "Brunch", description: "Pan de masa madre, aguacate, huevo pochado.", price: "$7.00" },
  { id: 7, name: "Limonada Jengibre", category: "Bebidas Frías", description: "Refrescante con un toque picante.", price: "$3.00", popular: true },
  { id: 8, name: "Cappuccino", category: "Bebidas Calientes", description: "Café de especialidad con leche texturizada.", price: "$3.50" },
  { id: 9, name: "Latte de Vainilla", category: "Bebidas Calientes", description: "Doble espresso, leche y sirope artesanal.", price: "$4.00" },
  { id: 10, name: "Iced Caramel Macchiato", category: "Bebidas Frías", description: "Leche fría, espresso y salsa de caramelo.", price: "$4.50" }
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredItems = activeCategory === "Todos" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-brand-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-pink font-bold text-xl mb-2"
          >
            Nuestro Menú
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-display text-brand-dark mb-6"
          >
            Descubre tus favoritos
          </motion.h3>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {menuCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-brand-dark text-brand-yellow' 
                  : 'bg-brand-cream text-brand-dark hover:bg-brand-yellow hover:text-brand-dark'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col border-b border-gray-100 pb-6 relative group"
              >
                <div className="flex justify-between items-start mb-2 gap-4">
                  <h4 className="text-xl font-bold font-display text-brand-dark group-hover:text-brand-pink transition-colors">
                    {item.name}
                  </h4>
                  <span className="font-bold text-lg text-brand-dark bg-white border border-brand-yellow/20 shadow-sm px-3 py-1 rounded-lg">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-500 pr-16">{item.description}</p>
                
                {item.popular && (
                  <span className="absolute -top-3 left-0 bg-brand-yellow text-brand-dark text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full shadow-sm">
                    Lo más pedido
                  </span>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://wa.me/593963516821"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-dark hover:bg-brand-pink text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl"
          >
            Hacer un pedido
          </a>
        </div>
      </div>
    </section>
  );
}
