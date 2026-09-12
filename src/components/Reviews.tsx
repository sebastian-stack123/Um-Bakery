import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "María Fernanda",
    text: "Los mejores brownies de la ciudad. Siempre pido para las reuniones familiares y son un éxito total.",
    rating: 5,
    bgColor: "bg-white border border-brand-yellow/20 shadow-sm hover:shadow-xl transition-shadow"
  },
  {
    id: 2,
    name: "Carlos V.",
    text: "Los postres llegaron en perfecto estado y la presentación es increíble. Excelente servicio a domicilio.",
    rating: 5,
    bgColor: "bg-white border border-brand-yellow/20 shadow-sm hover:shadow-xl transition-shadow"
  },
  {
    id: 3,
    name: "Ana Lucía",
    text: "Pedí mi pastel de cumpleaños aquí y fue perfecto. Hermoso diseño y el sabor espectacular.",
    rating: 5,
    bgColor: "bg-white border border-brand-yellow/20 shadow-sm hover:shadow-xl transition-shadow"
  }
];

export default function Reviews() {
  return (
    <section className="py-24 bg-brand-white relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-brand-pink uppercase tracking-widest mb-1"
          >
            Opiniones
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-display text-brand-dark mb-6"
          >
            Lo que dicen nuestros clientes
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`${review.bgColor} rounded-3xl p-8 relative`}
            >
              <Quote className="text-brand-yellow/10 absolute top-6 right-6" size={48} />
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="text-brand-yellow fill-brand-yellow" size={20} />
                ))}
              </div>
              <p className="text-brand-dark/80 text-lg mb-8 font-medium leading-relaxed relative z-10">
                "{review.text}"
              </p>
              <div className="font-bold font-display text-brand-dark text-xl">
                {review.name}
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
