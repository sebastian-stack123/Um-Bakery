import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Brownies",
    description: "Melcochudos y llenos de chocolate.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1974&auto=format&fit=crop",
    color: "bg-amber-100"
  },
  {
    id: 2,
    name: "Cheesecakes",
    description: "Suaves, cremosos y con sabores únicos.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=2070&auto=format&fit=crop",
    color: "bg-pink-100"
  },
  {
    id: 3,
    name: "Pasteles Personalizados",
    description: "Diseñados exclusivamente para tu celebración.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1989&auto=format&fit=crop",
    color: "bg-blue-100"
  },
  {
    id: 4,
    name: "Desayunos Sorpresa",
    description: "Cajas de regalo y sorpresas a domicilio.",
    image: "https://images.unsplash.com/photo-1513442542250-854d436a73f2?q=80&w=2047&auto=format&fit=crop",
    color: "bg-brand-cream"
  }
];

export default function FeaturedProducts() {
  return (
    <section id="especialidades" className="py-24 bg-brand-cream relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-pink font-bold text-xl mb-2"
          >
            Nuestras Especialidades
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-display text-brand-dark mb-6"
          >
            Sabor que enamora
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group cursor-pointer bg-white rounded-3xl p-6 shadow-sm border border-brand-yellow/20 hover:shadow-xl transition-shadow relative"
            >
              <div className={`rounded-2xl overflow-hidden ${product.color} p-4 aspect-square relative`}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover rounded-[2rem] group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-4 rounded-[2rem] bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <div className="bg-white p-4 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ShoppingBag className="text-brand-pink" size={24} />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col mt-4 text-left">
                <span className="text-[10px] font-bold text-brand-pink uppercase tracking-widest mb-1">Especialidad</span>
                <h4 className="text-xl font-bold font-display text-brand-dark mb-1">{product.name}</h4>
                <p className="text-sm text-gray-500 italic">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
