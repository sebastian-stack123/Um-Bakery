import { motion } from 'motion/react';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function Location() {
  const hours = [
    { day: "Lunes - Jueves", time: "10:00 AM – 7:30 PM" },
    { day: "Viernes - Sábado", time: "10:00 AM – 7:45 PM" },
    { day: "Domingo", time: "10:00 AM – 7:45 PM" },
  ];

  return (
    <section id="ubicacion" className="py-24 bg-brand-cream">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-brand-pink uppercase tracking-widest mb-1">Encuéntranos</h2>
              <h3 className="text-4xl font-black font-display text-brand-dark mb-8">
                Ven a visitarnos
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-brand-pink shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-lg">Dirección</h4>
                    <p className="text-gray-600">Av. González Suárez N27-374<br/>Quito, Ecuador</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-brand-pink shadow-sm">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-lg">Horario</h4>
                    {hours.map((h, i) => (
                      <div key={i} className="flex justify-between text-gray-600 gap-4">
                        <span>{h.day}</span>
                        <span>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-brand-pink shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-lg">Teléfonos</h4>
                    <p className="text-gray-600">Local: (02) 511-9894</p>
                    <p className="text-gray-600">Pedidos: 0963516821</p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Av.+González+Suárez+N27-374,+Quito,+Ecuador"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block bg-brand-dark hover:bg-brand-yellow hover:text-brand-dark text-white font-bold py-3 px-8 rounded-full transition-all duration-300 w-full text-center"
              >
                Abrir en Google Maps
              </a>
            </motion.div>
          </div>

          <div className="w-full lg:w-2/3 h-[500px] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7915591322045!2d-78.4831869!3d-0.1983053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a721df266cb%3A0xc6226ab29dd0dc35!2sAv.%20Gonz%C3%A1lez%20Su%C3%A1rez%2C%20Quito%2C%20Ecuador!5e0!3m2!1sen!2sus!4v1714413123456!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Um! Bakery"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
