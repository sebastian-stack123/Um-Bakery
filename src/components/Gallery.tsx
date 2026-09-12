import { motion } from 'motion/react';

const images = [
  "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=1974&auto=format&fit=crop", // croissant
  "https://images.unsplash.com/photo-1621236378699-8597faf6a176?q=80&w=2003&auto=format&fit=crop", // macarons
  "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1974&auto=format&fit=crop", // brownies
  "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964&auto=format&fit=crop", // donut
  "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1965&auto=format&fit=crop", // cookies
  "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1975&auto=format&fit=crop", // coffee
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-brand-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-brand-pink uppercase tracking-widest mb-1"
          >
            Nuestra Galería
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-display text-brand-dark mb-6"
          >
            Momentos KHASA
          </motion.h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[300px]">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`rounded-3xl overflow-hidden group cursor-pointer ${
                idx === 0 || idx === 3 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <img 
                src={src} 
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
