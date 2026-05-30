export default function App() {
  const services = [
    {
      title: 'Desarrollo Web',
      description:
        'Creamos sitios web modernos, rápidos y funcionales adaptados a cada marca.',
    },
    {
      title: 'Diseño Web',
      description:
        'Diseñamos interfaces limpias y visualmente atractivas con enfoque moderno.',
    },
    {
      title: 'Branding Digital',
      description:
        'Construimos identidades visuales sólidas y memorables para negocios digitales.',
    },
    {
      title: 'Marketing Digital',
      description:
        'Impulsamos marcas mediante estrategias visuales y contenido digital.',
    },
    {
      title: 'Automatización',
      description:
        'Optimizamos procesos utilizando herramientas y soluciones tecnológicas.',
    },
  ]

  const projects = [
    'Branding Corporativo',
    'Desarrollo Web',
    'Marketing Visual',
  ]

  return (
    <div className="bg-[#f3f3f3] text-[#525252] min-h-screen font-sans overflow-x-hidden">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 lg:px-14 py-5">
          <h1 className="text-4xl font-black italic text-black tracking-tight">
            be <span className="text-[#84CC16]">better</span>
          </h1>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#525252]">
            <a href="#inicio" className="hover:text-[#06B6D4] transition">Inicio</a>
            <a href="#servicios" className="hover:text-[#06B6D4] transition">Servicios</a>
            <a href="#proyectos" className="hover:text-[#06B6D4] transition">Proyectos</a>
            <a href="#nosotros" className="hover:text-[#06B6D4] transition">Nosotros</a>
            <a href="#contacto" className="hover:text-[#06B6D4] transition">Contacto</a>
          </nav>

          <button className="bg-gradient-to-r from-[#06B6D4] to-[#84CC16] text-white px-6 py-3 rounded-2xl font-bold hover:scale-105 transition">
            Trabaja con nosotros
          </button>
        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center px-8 lg:px-20 overflow-hidden bg-[#f8f8f8] pt-32"
      >
        <div className="absolute right-[-250px] top-[-150px] w-[900px] h-[900px] rotate-45 rounded-[120px] bg-gradient-to-br from-[#06B6D4] to-[#84CC16]"></div>

        <div className="relative z-10 max-w-4xl">
          <p className="uppercase tracking-[0.3em] text-[#06B6D4] font-semibold mb-6 text-sm">
            Desarrollamos soluciones digitales
          </p>

          <h2 className="text-6xl lg:text-8xl font-black leading-[0.92] tracking-tight text-black">
            Transformamos
            <br />
            ideas en <span className="text-[#06B6D4]">experiencias</span>
            <br />
            <span className="text-[#84CC16]">digitales</span>
          </h2>

          <p className="mt-8 text-xl leading-relaxed max-w-2xl text-[#525252]">
            Desarrollamos soluciones digitales modernas que impulsan marcas,
            conectan con personas y generan resultados reales.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <button className="bg-gradient-to-r from-[#06B6D4] to-[#84CC16] text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
              Conoce nuestros proyectos
            </button>

            <button className="border-2 border-[#06B6D4] text-[#06B6D4] px-8 py-4 rounded-2xl font-bold hover:bg-[#06B6D4] hover:text-white transition">
              Hablemos
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" className="px-8 lg:px-20 py-28 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="uppercase tracking-[0.25em] text-[#06B6D4] font-semibold text-sm mb-4">
              Nuestros servicios
            </p>

            <h2 className="text-5xl font-black text-black mb-4">
              Soluciones modernas para marcas digitales
            </h2>

            <p className="max-w-3xl text-lg leading-relaxed">
              Creamos experiencias visuales y tecnológicas enfocadas en innovación,
              crecimiento y presencia digital.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-[#525252] rounded-3xl p-8 text-white border border-[#06B6D4]/20 hover:-translate-y-2 hover:border-[#84CC16] transition duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#06B6D4] to-[#84CC16] mb-6"></div>

                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

                <p className="text-gray-300 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="nosotros" className="px-8 lg:px-20 py-28">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-[#06B6D4] font-semibold text-sm mb-4">
              ¿Por qué elegirnos?
            </p>

            <h2 className="text-5xl font-black text-black leading-tight mb-8">
              Innovación,
              <br />
              compromiso y
              <br />
              <span className="text-[#84CC16]">resultados reales</span>
            </h2>

            <p className="text-lg leading-relaxed max-w-2xl">
              En Be Better combinamos creatividad, tecnología y estrategia para
              construir experiencias digitales modernas y funcionales.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
                <h3 className="text-4xl font-black text-[#06B6D4]">+20</h3>
                <p className="mt-3 font-medium">Proyectos realizados</p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
                <h3 className="text-4xl font-black text-[#84CC16]">95%</h3>
                <p className="mt-3 font-medium">Clientes satisfechos</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#06B6D4] to-[#84CC16] p-[2px] rounded-[36px] shadow-xl">
            <div className="bg-[#009E7E] rounded-[34px] p-12 text-white min-h-[420px] flex flex-col justify-center">
              <h3 className="text-4xl font-black leading-tight mb-6">
                Tecnología y diseño
                <br />
                para impulsar marcas.
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed">
                Nuestro enfoque visual minimalista y moderno refleja innovación,
                crecimiento y profesionalismo en cada proyecto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="proyectos" className="px-8 lg:px-20 py-28 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="uppercase tracking-[0.25em] text-[#06B6D4] font-semibold text-sm mb-4">
              Proyectos
            </p>

            <h2 className="text-5xl font-black text-black">
              Experiencias creadas por Be Better
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <div
                key={project}
                className="rounded-[32px] overflow-hidden bg-[#525252] shadow-xl hover:scale-[1.02] transition"
              >
                <div className="h-72 bg-gradient-to-br from-[#06B6D4] to-[#84CC16]"></div>

                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">{project}</h3>

                  <p className="text-gray-300 leading-relaxed">
                    Proyecto desarrollado bajo la identidad moderna y tecnológica
                    de Be Better.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 px-8 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(6,182,212,0.12),transparent_60%)]"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-black text-black leading-tight">
            Hablemos y
            <br />
            hagámoslo realidad.
          </h2>

          <p className="mt-8 text-xl text-[#525252] leading-relaxed max-w-2xl mx-auto">
            Creamos soluciones digitales enfocadas en crecimiento, innovación y
            posicionamiento visual.
          </p>

          <button className="mt-10 bg-gradient-to-r from-[#06B6D4] to-[#84CC16] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition">
            Contáctanos
          </button>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" className="px-8 lg:px-20 py-28 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.25em] text-[#06B6D4] font-semibold text-sm mb-4">
              Contacto
            </p>

            <h2 className="text-5xl font-black text-black mb-6">
              Hablemos de tu próximo proyecto
            </h2>

            <p className="text-lg max-w-2xl mx-auto leading-relaxed">
              En Be Better desarrollamos soluciones digitales modernas para
              negocios y marcas que buscan evolucionar.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-[#A3A3A3] rounded-[36px] p-10 text-white border border-[#06B6D4]/20">
              <h3 className="text-3xl font-black mb-8">
                Información de contacto
              </h3>

              <div className="space-y-6 text-gray-300 text-lg">
                <p>📧 contacto@bebetter.com</p>
                <p>📱 +57 302 733 9935</p>
                <p>📍 Cúcuta, Colombia</p>
              </div>
            </div>

            <div className="bg-[#f5f5f5] border border-gray-200 rounded-[36px] p-10">
              <div className="space-y-6">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full p-5 rounded-2xl border border-gray-300 focus:outline-none focus:border-[#06B6D4] bg-white"
                />

                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full p-5 rounded-2xl border border-gray-300 focus:outline-none focus:border-[#06B6D4] bg-white"
                />

                <textarea
                  rows="6"
                  placeholder="Cuéntanos sobre tu proyecto"
                  className="w-full p-5 rounded-2xl border border-gray-300 focus:outline-none focus:border-[#06B6D4] bg-white"
                ></textarea>

                <button className="w-full bg-gradient-to-r from-[#06B6D4] to-[#84CC16] text-white py-5 rounded-2xl font-bold text-lg hover:scale-[1.01] transition">
                  Enviar mensaje
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#525252] text-white px-8 lg:px-20 py-10 border-t border-[#06B6D4]/20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-4xl font-black italic text-white tracking-tight">
              be <span className="text-[#84CC16]">better</span>
            </h3>

            <p className="text-gray-400 mt-3 text-sm max-w-sm leading-relaxed">
              Soluciones digitales modernas enfocadas en innovación,
              tecnología y crecimiento visual.
            </p>
          </div>

          <div className="flex gap-8 text-sm font-medium text-gray-300">
            <a href="#" className="hover:text-[#06B6D4] transition">Instagram</a>
            <a href="#" className="hover:text-[#06B6D4] transition">Behance</a>
            <a href="#" className="hover:text-[#06B6D4] transition">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
