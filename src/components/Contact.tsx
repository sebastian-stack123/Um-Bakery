import { motion } from 'motion/react';
import { Instagram, Smartphone, Send, PhoneCall } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    { name: "WhatsApp", icon: <Smartphone size={24} />, href: "https://wa.me/593963516821", color: "bg-green-500", textColor: "text-green-500" },
    { name: "Instagram", icon: <Instagram size={24} />, href: "https://instagram.com/um_bakery", color: "bg-pink-600", textColor: "text-pink-600" },
    { name: "Llamar", icon: <PhoneCall size={24} />, href: "tel:025119894", color: "bg-blue-500", textColor: "text-blue-500" },
  ];

  return (
    <section id="contacto" className="py-24 bg-brand-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 bg-brand-pink-light/30 rounded-[3rem] p-8 md:p-12 lg:p-16 border border-brand-pink-light">
          
          <div className="w-full lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black font-display text-brand-dark mb-6"
            >
              Hablemos
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 mb-8"
            >
              ¿Tienes alguna pregunta, quieres hacer un pedido especial o simplemente saludarnos? Escríbenos.
            </motion.p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {socialLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="flex items-center gap-2 bg-white px-6 py-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className={`p-2 rounded-full ${link.color} text-white group-hover:scale-110 transition-transform`}>
                    {link.icon}
                  </div>
                  <span className="font-bold text-brand-dark">{link.name}</span>
                </motion.a>
              ))}
            </div>

            <div className="flex gap-4">
              <motion.a 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                href="#"
                className="bg-black text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-gray-800 transition-colors"
              >
                Uber Eats
              </motion.a>
              <motion.a 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                href="#"
                className="bg-[#FF4338] text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-[#E03A30] transition-colors"
              >
                Rappi
              </motion.a>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.form 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2rem] shadow-xl"
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">Nombre</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-pink focus:ring-2 focus:ring-brand-pink-light outline-none transition-all" placeholder="Tu nombre" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">Correo Electrónico</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-pink focus:ring-2 focus:ring-brand-pink-light outline-none transition-all" placeholder="tucorreo@ejemplo.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">Mensaje</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-pink focus:ring-2 focus:ring-brand-pink-light outline-none transition-all resize-none" placeholder="¿En qué te podemos ayudar?"></textarea>
                </div>
                <button type="button" className="w-full bg-brand-pink hover:bg-brand-dark text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                  <Send size={18} />
                  Enviar Mensaje
                </button>
              </div>
            </motion.form>
          </div>

        </div>
      </div>
    </section>
  );
}
