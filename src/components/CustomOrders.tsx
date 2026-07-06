import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function CustomOrders() {
  return (
    <section id="pedidos" className="py-24 relative overflow-hidden bg-brand-cream">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-brand-yellow rounded-3xl p-8 md:p-16 shadow-lg flex flex-col lg:flex-row items-center justify-between overflow-hidden relative border border-brand-yellow/50">
          
          <div className="w-full lg:w-1/2 z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-brand-dark text-white px-4 py-2 rounded-full font-bold text-[10px] uppercase tracking-widest mb-6">
                <Sparkles size={14} className="text-brand-yellow" />
                Celebraciones Únicas
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-display text-brand-dark mb-6 leading-tight">
                ¿Algo Especial?
              </h2>
              <p className="text-lg text-brand-dark/80 mb-8 font-medium">
                Tortas personalizadas para momentos inolvidables. Hacemos realidad tus ideas. 
                Desde cumpleaños hasta bodas, diseñamos pasteles que no solo se ven espectaculares, 
                sino que saben increíbles.
              </p>
              
              <a
                href="https://wa.me/593994335216"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-dark hover:bg-white text-white hover:text-brand-dark font-bold py-4 px-10 rounded-2xl transition-colors duration-300 text-sm tracking-widest shadow-xl inline-block uppercase"
              >
                SOLICITAR COTIZACIÓN
              </a>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 z-10">
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1562777717-dc6984f65a63?q=80&w=1974&auto=format&fit=crop"
                alt="Pastel Personalizado"
                className="rounded-3xl w-full object-cover h-[400px] shadow-lg border-4 border-brand-yellow/20"
              />
            </div>
          </div>
          
          <div className="absolute right-[-100px] bottom-[-100px] w-96 h-96 opacity-10">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#000" d="M44.7,-76.4C58.3,-69.2,70,-58.5,78.8,-45.5C87.6,-32.5,93.5,-16.3,92.5,-0.6C91.5,15.1,83.6,30.3,73.5,43.2C63.4,56.1,51,66.8,36.8,73.8C22.6,80.8,6.5,84.1,-9.5,82.5C-25.5,80.9,-41.4,74.4,-54.6,63.9C-67.7,53.4,-78.2,38.8,-83,22.7C-87.7,6.6,-86.7,-11,-80,-26.7C-73.3,-42.4,-61,-56.3,-46.3,-63.1C-31.6,-69.8,-15.8,-69.5,0.4,-70.1C16.6,-70.7,31.1,-83.5,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}
