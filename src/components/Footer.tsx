export default function Footer() {
  return (
    <footer className="bg-brand-white/40 backdrop-blur-md pt-16 pb-8 border-t border-brand-yellow/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div>
            <a href="#inicio" className="flex items-center gap-2 mb-6 group inline-block">
              <span className="font-display font-black text-3xl tracking-tight text-brand-dark">KHASA</span>
            </a>
            <p className="text-brand-dark/60 mb-6 max-w-sm text-sm">
              Repostería virtual donde cada detalle está hecho para sorprender, entregado en tu puerta.
            </p>
          </div>

          <div>
            <h4 className="font-display font-black uppercase tracking-widest text-sm mb-6 text-brand-pink">Horario</h4>
            <ul className="space-y-3 text-brand-dark/70 text-sm">
              <li>Domingo: 10:00 AM – 7:45 PM</li>
              <li>Lunes - Jueves: 10:00 AM – 7:30 PM</li>
              <li>Viernes - Sábado: 10:00 AM – 7:45 PM</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-black uppercase tracking-widest text-sm mb-6 text-brand-pink">Contacto</h4>
            <ul className="space-y-3 text-brand-dark/70 text-sm">
              <li>Repostería 100% Virtual</li>
              <li>Envíos a todo Quito, Ecuador</li>
              <li>Atención y Pedidos: +593 99 874 0006</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-black uppercase tracking-widest text-sm mb-6 text-brand-pink">Síguenos</h4>
            <div className="flex flex-col space-y-3 text-sm">
              <span className="text-brand-dark/40 uppercase tracking-widest text-xs font-bold cursor-not-allowed">
                Instagram (Próximamente)
              </span>
              <span className="text-brand-dark/40 uppercase tracking-widest text-xs font-bold cursor-not-allowed">
                TikTok (Próximamente)
              </span>
            </div>
          </div>
          
        </div>

        <div className="border-t border-brand-yellow/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-brand-dark/50 text-xs font-bold uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} KHASA. Todos los derechos reservados.</p>
          <p>Creado por Mantai.</p>
        </div>
      </div>
    </footer>
  );
}
