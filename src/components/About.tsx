import { motion } from 'motion/react';
import { Heart, Truck, Star, Cake } from 'lucide-react';

export default function About() {
  const features = [
    { icon: <Heart size={24} />, title: "Productos artesanales", desc: "Hechos a mano con amor y dedicación." },
    { icon: <Star size={24} />, title: "Ingredientes de calidad", desc: "Seleccionamos lo mejor para un sabor excepcional." },
    { icon: <Truck size={24} />, title: "Entregas a Domicilio", desc: "Llevamos la felicidad fresca a la puerta de tu casa." },
    { icon: <Cake size={24} />, title: "Tortas personalizadas", desc: "Diseños únicos para celebraciones especiales." }
  ];

  return (
    <section id="nosotros" className="py-24 bg-brand-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Images Grid */}
          <div className="w-full lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.img
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=2070&auto=format&fit=crop"
                alt="Cupcakes"
                className="rounded-3xl object-cover h-64 w-full shadow-lg"
              />
              <motion.img
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1965&auto=format&fit=crop"
                alt="Baking"
                className="rounded-3xl object-cover h-64 w-full mt-8 shadow-lg"
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.4 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-pink text-white w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-xl border-4 border-white"
            >
              <span className="font-display font-bold text-3xl">100%</span>
              <span className="text-sm font-semibold">Artesanal</span>
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-brand-pink uppercase tracking-widest mb-1">Sobre Nosotros</h2>
              <h3 className="text-4xl md:text-5xl font-black font-display text-brand-dark mb-6 leading-tight">
                Elaborando momentos de felicidad
              </h3>
              <p className="text-lg text-gray-600 mb-8 font-medium">
                En KHASA, creemos que cada bocado debe ser una experiencia inolvidable. 
                Como repostería 100% virtual, nos dedicamos a hornear momentos de felicidad 
                y llevarlos directamente a donde estés. Nuestro enfoque en los detalles y 
                atención personalizada son el sello que nos caracteriza.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-yellow-pastel text-brand-pink flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
