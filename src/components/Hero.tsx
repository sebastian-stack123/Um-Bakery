import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen min-h-[600px] flex items-center pt-20 overflow-hidden bg-brand-cream">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=2070&auto=format&fit=crop"
          alt="KHASA Pastries"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-white/90 via-brand-white/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 max-w-2xl pt-10 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-pink/20 text-brand-pink font-bold text-xs uppercase tracking-widest mb-4">
              Cada bocado merece un "¡Um!"
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black font-display leading-tight mb-6 drop-shadow-lg flex gap-[2px]">
              <span className="text-[#F9A8D4]">K</span>
              <span className="text-[#FCD34D]">H</span>
              <span className="text-[#93C5FD]">A</span>
              <span className="text-[#C4B5FD]">S</span>
              <span className="text-[#FDA4AF]">A</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-dark/80 mb-8 max-w-lg font-medium">
              Repostería 100% virtual donde cada detalle está hecho para sorprender. Tus postres favoritos, directo a tu puerta.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#menu"
                className="bg-brand-yellow hover:bg-white text-brand-dark font-bold py-4 px-8 rounded-2xl transition-colors duration-300 text-center flex items-center justify-center gap-2 group"
              >
                Ver Menú
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/593998740006"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-brand-dark/40 hover:bg-brand-dark/10 backdrop-blur-sm text-brand-dark font-bold py-4 px-8 rounded-2xl transition-colors duration-300 text-center"
              >
                Pedir por WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative shapes */}
      <motion.div 
        className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-yellow rounded-full blur-3xl opacity-50 z-0"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
