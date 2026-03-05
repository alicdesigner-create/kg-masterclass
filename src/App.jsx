import React, { useState } from 'react';
import { ChevronRight, ArrowLeft, Building2, Sparkles, AlertTriangle, Wrench, Droplets, Star } from 'lucide-react';

export default function KGMasterClass() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [lang, setLang] = useState('en');

  const categoryIcons = {
    kgfs:      Building2,
    cleaning:  Sparkles,
    safety:    AlertTriangle,
    equipment: Wrench,
    chemicals: Droplets,
    standards: Star,
  };

  const translations = {
    en: {
      subtitle:     'Professional Training Platform',
      needMoreInfo: 'Need more info?',
      contactUs:    'Contact us',
      designedBy:   'Designed by tesocraphics.com',

      categories: [
        { id: 'kgfs',      title: 'Learn about KGFS',   description: 'Company history and mission' },
        { id: 'cleaning',  title: 'Cleaning training',  description: 'Professional cleaning techniques' },
        { id: 'safety',    title: 'Safety at work',     description: 'Workplace safety protocols' },
        { id: 'equipment', title: 'Equipment',          description: 'Tools and equipment guide' },
        { id: 'chemicals', title: 'Chemicals',          description: 'Chemical handling and safety' },
        { id: 'standards', title: 'Employee Standard',  description: 'Company standards and expectations' },
      ],

      kgfs: {
        navTitle:    'Learn about KGFS',
        title:       'About KG Facility Solutions',
        description: 'Family-owned and operated since 1995, KG Facility Solutions has proudly served the Front Range with premier commercial cleaning. We are dedicated to delivering top-tier cleaning and facility management services with a personal touch.',
        details: [
          { label: '', value: '30+ years in the market' },
          { label: '', value: 'Serving multiple industries across Colorado' },
        ],
        missionLabel: 'Our Mission',
        mission:      'Providing superior commercial cleaning services that go beyond the surface. We are committed to exceeding client standards while ensuring the highest levels of safety and professional care.',
        valuesLabel:  'Our Values',
        values: [
          'Excellence in Service Quality & Customer Experience',
          'Employee safety and wellbeing',
          'Environmental responsibility',
          'Customer-focused solutions',
          'Continuous improvement',
        ],
      },

      cleaning: {
        navTitle: 'Cleaning Training',
        intro:    'Select a cleaning category to learn professional techniques and best practices.',
        subCategories: [
          { id: 'offices',     title: 'Office Cleaning',     icon: '🏢' },
          { id: 'bathrooms',   title: 'Bathroom Cleaning',   icon: '🚽' },
          { id: 'kitchens',    title: 'Kitchen Cleaning',    icon: '🍳' },
          { id: 'cubicles',    title: 'Cubicle Cleaning',    icon: '📊' },
          { id: 'lobbies',     title: 'Lobby Cleaning',      icon: '🚪' },
          { id: 'windows',     title: 'Window Cleaning',     icon: '🪟' },
          { id: 'floors',      title: 'Floor Care',          icon: '⛹️' },
          { id: 'conferences', title: 'Conference Rooms',    icon: '🎤' },
        ],
      },

      safety: {
        navTitle: 'Safety at Work',
        topics: [
          { title: 'Uniform Requirements',              description: 'Proper work attire and safety gear' },
          { title: 'OSHA Requirements',                 description: 'Compliance and safety standards' },
          { title: 'Biohazards',                        description: 'Identifying and handling biohazards' },
          { title: 'Height Safety',                     description: 'Ladder and height safety protocols' },
          { title: 'Tripping Hazards',                  description: 'Identifying and preventing accidents' },
          { title: 'PPE (Personal Protective Equipment)', description: 'Proper use and care of safety equipment' },
        ],
      },

      equipment: {
        navTitle: 'Equipment',
        topics: [
          { title: 'Equipment Usage',                         description: 'General equipment operation' },
          { title: 'How to Use Equipment',                    description: 'Step-by-step equipment guides' },
          { title: 'Equipment Maintenance',                   description: 'Keeping equipment in top condition' },
          { title: 'Auto Scrubbers',                          description: 'Operation and maintenance of auto scrubbers' },
          { title: 'Industrial Backpack and Upright Vacuums', description: 'Proper use and care of vacuum equipment' },
        ],
      },

      chemicals: {
        navTitle: 'Chemicals',
        section1: {
          title: 'How to Use & Where to Use',
          topics: [
            { title: 'NABC',            description: 'Usage guidelines and safety' },
            { title: 'Glance / Klearview', description: 'Proper application and usage' },
            { title: 'Top Clean',       description: 'Application and proper use' },
            { title: 'Nutra Rinse',     description: 'How to use and where to apply Nutra Rinse' },
            { title: 'Oxyvir',          description: 'How to use and where to apply Oxyvir' },
            { title: 'Stainless Steel', description: 'How to use on stainless steel surfaces' },
            { title: 'Ajax',            description: 'Proper use and application' },
            { title: 'CLR',             description: 'Safe use and application of CLR' },
            { title: 'Enzymes',         description: 'How to use and where to apply Enzymes' },
          ],
        },
        section2: {
          title: 'Chemical Safety',
          topics: [
            { title: 'Chemical Safety',       description: 'Handling hazardous materials safely' },
            { title: 'Storage & Wiring',      description: 'Proper chemical storage procedures' },
            { title: 'Emergency Procedures',  description: 'What to do in case of chemical incidents' },
            { title: 'Safety Data Sheet',     description: 'Understanding and using SDS documents' },
          ],
        },
      },

      standards: {
        navTitle: 'Employee Standard',
        heading:  'Company Standards',
        intro:    'Our standards define the expectations and professional conduct required from every KGFS team member.',
        items: [
          { title: 'Punctuality',           description: 'Arrive on time and notify supervisors of any delays.',            icon: '⏰' },
          { title: 'Uniform & Appearance',  description: 'Wear the full uniform clean and properly at all times.',          icon: '👔' },
          { title: 'Communication',         description: 'Maintain professional and respectful communication.',              icon: '💬' },
          { title: 'Quality of Work',       description: 'Deliver consistent, high-quality results on every job.',          icon: '✅' },
          { title: 'Teamwork',              description: 'Support your team and collaborate effectively.',                   icon: '🤝' },
          { title: 'Accountability',        description: 'Take responsibility for your tasks and report issues promptly.',   icon: '📋' },
          { title: 'Clearance and Badging', description: 'Follow clearance processes and badge requirements at all times.',  icon: '🪪' },
          { title: 'Language Skills',       description: 'Use clear and professional language in all communications.',       icon: '🗣️' },
        ],
      },
    },

    es: {
      subtitle:     'Plataforma de Entrenamiento Profesional',
      needMoreInfo: '¿Necesitas más información?',
      contactUs:    'Contáctanos',
      designedBy:   'Diseñado por tesocraphics.com',

      categories: [
        { id: 'kgfs',      title: 'Conoce KGFS',                description: 'Historia y misión de la empresa' },
        { id: 'cleaning',  title: 'Entrenamiento de limpieza',  description: 'Técnicas profesionales de limpieza' },
        { id: 'safety',    title: 'Seguridad en el trabajo',    description: 'Protocolos de seguridad laboral' },
        { id: 'equipment', title: 'Equipos',                    description: 'Guía de herramientas y equipos' },
        { id: 'chemicals', title: 'Químicos',                   description: 'Manejo y seguridad de químicos' },
        { id: 'standards', title: 'Estándar del empleado',      description: 'Estándares y expectativas de la empresa' },
      ],

      kgfs: {
        navTitle:    'Conoce KGFS',
        title:       'Sobre KG Facility Solutions',
        description: 'Empresa familiar fundada en 1995, KG Facility Solutions ha servido con orgullo al Front Range con limpieza comercial de primer nivel. Nos dedicamos a brindar servicios de limpieza y gestión de instalaciones de primera clase con un toque personal.',
        details: [
          { label: '', value: '30+ años en el mercado' },
          { label: '', value: 'Sirviendo múltiples industrias en Colorado' },
        ],
        missionLabel: 'Nuestra Misión',
        mission:      'Brindar servicios superiores de limpieza comercial que van más allá de la superficie. Estamos comprometidos a superar los estándares del cliente garantizando los más altos niveles de seguridad y atención profesional.',
        valuesLabel:  'Nuestros Valores',
        values: [
          'Excelencia en Calidad del Servicio & Experiencia del Cliente',
          'Seguridad y bienestar del empleado',
          'Responsabilidad ambiental',
          'Soluciones centradas en el cliente',
          'Mejora continua',
        ],
      },

      cleaning: {
        navTitle: 'Entrenamiento de Limpieza',
        intro:    'Selecciona una categoría de limpieza para aprender técnicas profesionales y mejores prácticas.',
        subCategories: [
          { id: 'offices',     title: 'Limpieza de Oficinas',      icon: '🏢' },
          { id: 'bathrooms',   title: 'Limpieza de Baños',         icon: '🚽' },
          { id: 'kitchens',    title: 'Limpieza de Cocinas',       icon: '🍳' },
          { id: 'cubicles',    title: 'Limpieza de Cubículos',     icon: '📊' },
          { id: 'lobbies',     title: 'Limpieza de Lobby',         icon: '🚪' },
          { id: 'windows',     title: 'Limpieza de Ventanas',      icon: '🪟' },
          { id: 'floors',      title: 'Cuidado de Pisos',          icon: '⛹️' },
          { id: 'conferences', title: 'Salas de Conferencias',     icon: '🎤' },
        ],
      },

      safety: {
        navTitle: 'Seguridad en el Trabajo',
        topics: [
          { title: 'Requisitos de Uniforme',              description: 'Vestimenta adecuada y equipo de seguridad' },
          { title: 'Requisitos OSHA',                     description: 'Cumplimiento y estándares de seguridad' },
          { title: 'Biohazards',                          description: 'Identificar y manejar materiales peligrosos biológicos' },
          { title: 'Seguridad en Alturas',                description: 'Protocolos de seguridad con escaleras y alturas' },
          { title: 'Riesgos de Tropiezo',                 description: 'Identificar y prevenir accidentes' },
          { title: 'EPP (Equipo de Protección Personal)', description: 'Uso y cuidado del equipo de seguridad' },
        ],
      },

      equipment: {
        navTitle: 'Equipos',
        topics: [
          { title: 'Uso de Equipos',                                    description: 'Operación general de equipos' },
          { title: 'Cómo Usar los Equipos',                             description: 'Guías paso a paso' },
          { title: 'Mantenimiento de Equipos',                          description: 'Mantener los equipos en óptimas condiciones' },
          { title: 'Auto Scrubbers',                                    description: 'Operación y mantenimiento de auto scrubbers' },
          { title: 'Aspiradoras Industriales de Mochila y Verticales',  description: 'Uso y cuidado del equipo de aspirado' },
        ],
      },

      chemicals: {
        navTitle: 'Químicos',
        section1: {
          title: 'Cómo Usar y Dónde Usar',
          topics: [
            { title: 'NABC',            description: 'Guías de uso y seguridad' },
            { title: 'Glance / Klearview', description: 'Aplicación y uso adecuado' },
            { title: 'Top Clean',       description: 'Aplicación y uso adecuado' },
            { title: 'Nutra Rinse',     description: 'Cómo usar y dónde aplicar Nutra Rinse' },
            { title: 'Oxyvir',          description: 'Cómo usar y dónde aplicar Oxyvir' },
            { title: 'Stainless Steel', description: 'Cómo usar en superficies de acero inoxidable' },
            { title: 'Ajax',            description: 'Uso y aplicación adecuados' },
            { title: 'CLR',             description: 'Uso seguro y aplicación de CLR' },
            { title: 'Enzymes',         description: 'Cómo usar y dónde aplicar Enzymes' },
          ],
        },
        section2: {
          title: 'Seguridad con Químicos',
          topics: [
            { title: 'Seguridad con Químicos',       description: 'Manejo seguro de materiales peligrosos' },
            { title: 'Almacenamiento y Cableado',    description: 'Procedimientos adecuados de almacenamiento' },
            { title: 'Procedimientos de Emergencia', description: 'Qué hacer en caso de incidentes con químicos' },
            { title: 'Hoja de Datos de Seguridad',   description: 'Entender y usar documentos SDS' },
          ],
        },
      },

      standards: {
        navTitle: 'Estándar del Empleado',
        heading:  'Estándares de la Empresa',
        intro:    'Nuestros estándares definen las expectativas y la conducta profesional requerida de cada miembro del equipo KGFS.',
        items: [
          { title: 'Puntualidad',             description: 'Llega a tiempo y notifica a los supervisores de cualquier retraso.',                icon: '⏰' },
          { title: 'Uniforme y Apariencia',   description: 'Usa el uniforme completo, limpio y apropiadamente en todo momento.',                icon: '👔' },
          { title: 'Comunicación',            description: 'Mantén una comunicación profesional y respetuosa.',                                 icon: '💬' },
          { title: 'Calidad del Trabajo',     description: 'Entrega resultados consistentes y de alta calidad en cada trabajo.',                icon: '✅' },
          { title: 'Trabajo en Equipo',       description: 'Apoya a tu equipo y colabora de manera efectiva.',                                  icon: '🤝' },
          { title: 'Responsabilidad',         description: 'Hazte responsable de tus tareas e informa los problemas de inmediato.',             icon: '📋' },
          { title: 'Clearance y Credenciales', description: 'Sigue los procesos de clearance y requisitos de credencial en todo momento.',     icon: '🪪' },
          { title: 'Habilidades Lingüísticas', description: 'Usa un lenguaje claro y profesional en todas las comunicaciones.',                icon: '🗣️' },
        ],
      },
    },
  };

  const t = translations[lang];

  // ── Language Toggle (dark navbar variant) ─────────────────────────────────────
  const LangToggle = ({ dark = false }) => (
    <div className={`flex items-center rounded-full px-1 py-0.5 ${dark ? 'bg-blue-900/10' : 'bg-white/20'}`}>
      {['en', 'es'].map((l, i) => (
        <React.Fragment key={l}>
          {i > 0 && (
            <span className={`text-xs mx-0.5 ${dark ? 'text-blue-900/30' : 'text-white/40'}`}>|</span>
          )}
          <button
            onClick={() => setLang(l)}
            className={`text-xs font-bold px-2 py-0.5 rounded-full transition-colors ${
              lang === l
                ? dark ? 'bg-blue-900 text-white' : 'bg-white text-blue-900'
                : dark ? 'text-blue-700' : 'text-white/70 hover:text-white'
            }`}
          >
            {l.toUpperCase()}
          </button>
        </React.Fragment>
      ))}
    </div>
  );

  // ── Home Screen ──────────────────────────────────────────────────────────────
  const renderHome = () => (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pb-24">
      {/* Header */}
      <div className="bg-white px-6 py-6 text-center border-b-4 border-blue-900 shadow-lg relative">
        <div className="absolute top-4 right-4">
          <LangToggle dark />
        </div>
        <img src="/kg-logo.png" alt="KG Masterclass Logo" className="h-20 mx-auto object-contain" />
        <p className="text-gray-600 text-sm mt-2">{t.subtitle}</p>
      </div>

      {/* Categories */}
      <div className="px-4 py-8">
        <div className="space-y-4">
          {t.categories.map(({ id, title, description }) => {
            const Icon = categoryIcons[id];
            return (
              <button
                key={id}
                onClick={() => setCurrentScreen(id)}
                className="w-full bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 text-left transform"
              >
                <div className="relative overflow-hidden h-24">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: 'linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)' }}
                  />
                  <div className="relative flex items-center gap-4 h-full px-5 py-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-md">
                      <Icon size={26} className="text-white" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-white font-bold text-lg">{title}</h3>
                      <p className="text-gray-200 text-xs">{description}</p>
                    </div>
                    <ChevronRight className="text-yellow-400 flex-shrink-0" size={24} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-blue-900 px-6 py-6 text-center shadow-2xl">
        <p className="text-white text-sm mb-4 font-semibold">{t.needMoreInfo}</p>
        <button
          onClick={() => window.location.href = 'tel:3036659757'}
          className="bg-cyan-500 hover:bg-cyan-600 text-blue-900 font-bold py-2 px-8 rounded-lg transition-colors w-full shadow-lg"
        >
          {t.contactUs}
        </button>
        <p className="text-gray-300 text-xs mt-4">{t.designedBy}</p>
      </div>
    </div>
  );

  // ── KGFS Screen ──────────────────────────────────────────────────────────────
  const renderKGFS = () => {
    const k = t.kgfs;
    return (
      <div className="min-h-screen bg-slate-50 pb-20">
        <div className="bg-blue-900 text-white py-4 px-6 sticky top-0 z-10 shadow-lg flex items-center gap-3">
          <button onClick={() => setCurrentScreen('home')} className="hover:bg-blue-800 p-2 rounded transition">
            <ArrowLeft size={24} />
          </button>
          <h2 className="font-bold text-lg">{k.navTitle}</h2>
          <div className="ml-auto"><LangToggle /></div>
        </div>

        <div className="p-6 max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-4xl">🏢</span>
              <h2 className="text-2xl font-bold text-blue-900">{k.title}</h2>
            </div>
            <div className="flex justify-center mb-6">
              <img src="/kg-logo-mean.png" alt="KG Logo" className="h-48 object-contain" />
            </div>
            <p className="text-gray-700 mb-6">{k.description}</p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {k.details.map((item, idx) => (
                <div key={idx} className="bg-blue-50 rounded-lg p-4 border border-blue-100 text-center">
                  {item.label && <p className="text-xs text-blue-600 font-medium uppercase tracking-wide">{item.label}</p>}
                  <p className="text-blue-900 font-bold mt-1">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-900 text-white rounded-lg p-5 mb-6 text-center">
              <h3 className="font-bold text-lg mb-2">{k.missionLabel}</h3>
              <p className="text-blue-100 text-sm leading-relaxed">{k.mission}</p>
            </div>

            <div>
              <h3 className="font-bold text-blue-900 text-lg mb-3">{k.valuesLabel}</h3>
              <div className="space-y-2">
                {k.values.map((value, idx) => (
                  <div key={idx} className="flex items-center justify-center gap-3 bg-gray-50 rounded-lg p-3">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-900 text-xs font-bold">✓</span>
                    </div>
                    <p className="text-gray-700 text-sm">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // ── Cleaning Screen ──────────────────────────────────────────────────────────
  const renderCleaning = () => {
    const c = t.cleaning;
    return (
      <div className="min-h-screen bg-slate-50 pb-20">
        <div className="bg-blue-900 text-white py-4 px-6 sticky top-0 z-10 shadow-lg flex items-center gap-3">
          <button onClick={() => setCurrentScreen('home')} className="hover:bg-blue-800 p-2 rounded transition">
            <ArrowLeft size={24} />
          </button>
          <h2 className="font-bold text-lg">{c.navTitle}</h2>
          <div className="ml-auto"><LangToggle /></div>
        </div>

        <div className="p-6 max-w-2xl mx-auto">
          <p className="text-gray-600 text-sm mb-6">{c.intro}</p>
          <div className="grid grid-cols-2 gap-4">
            {c.subCategories.map((sub) => (
              <button
                key={sub.id}
                className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center gap-3 hover:shadow-lg hover:scale-105 transition-all border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-800 to-blue-900 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-2xl">{sub.icon}</span>
                </div>
                <p className="text-blue-900 font-semibold text-sm text-center">{sub.title}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // ── Generic Topics Screen (Safety / Equipment) ────────────────────────────────
  const renderTopics = (navTitle, icon, topics) => (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="bg-blue-900 text-white py-4 px-6 sticky top-0 z-10 shadow-lg flex items-center gap-3">
        <button onClick={() => setCurrentScreen('home')} className="hover:bg-blue-800 p-2 rounded transition">
          <ArrowLeft size={24} />
        </button>
        <span className="text-xl">{icon}</span>
        <h2 className="font-bold text-lg">{navTitle}</h2>
        <div className="ml-auto"><LangToggle /></div>
      </div>

      <div className="p-6 max-w-2xl mx-auto space-y-3">
        {topics.map((topic, idx) => (
          <button
            key={idx}
            className="w-full bg-white rounded-xl shadow-md p-5 flex items-center gap-4 hover:shadow-lg hover:scale-105 transition-all border border-gray-100 text-left"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 shadow">
              <span className="text-white font-bold text-sm">{idx + 1}</span>
            </div>
            <div className="flex-grow">
              <p className="text-blue-900 font-semibold">{topic.title}</p>
              <p className="text-gray-500 text-xs mt-0.5">{topic.description}</p>
            </div>
            <ChevronRight className="text-blue-300 flex-shrink-0" size={18} />
          </button>
        ))}
      </div>
    </div>
  );

  // ── Chemicals Screen ──────────────────────────────────────────────────────────
  const renderChemicals = () => {
    const c = t.chemicals;
    return (
      <div className="min-h-screen bg-slate-50 pb-20">
        <div className="bg-blue-900 text-white py-4 px-6 sticky top-0 z-10 shadow-lg flex items-center gap-3">
          <button onClick={() => setCurrentScreen('home')} className="hover:bg-blue-800 p-2 rounded transition">
            <ArrowLeft size={24} />
          </button>
          <h2 className="font-bold text-lg">{c.navTitle}</h2>
          <div className="ml-auto"><LangToggle /></div>
        </div>

        <div className="p-6 max-w-2xl mx-auto space-y-6">
          {[c.section1, c.section2].map((section) => (
            <div key={section.title}>
              <h3 className="text-blue-900 font-bold text-base uppercase tracking-wide mb-3 px-1">
                {section.title}
              </h3>
              <div className="space-y-3">
                {section.topics.map((topic, idx) => (
                  <button
                    key={idx}
                    className="w-full bg-white rounded-xl shadow-md p-5 flex items-center gap-4 hover:shadow-lg hover:scale-105 transition-all border border-gray-100 text-left"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 shadow">
                      <span className="text-white font-bold text-sm">{idx + 1}</span>
                    </div>
                    <div className="flex-grow">
                      <p className="text-blue-900 font-semibold">{topic.title}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{topic.description}</p>
                    </div>
                    <ChevronRight className="text-blue-300 flex-shrink-0" size={18} />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // ── Standards Screen ─────────────────────────────────────────────────────────
  const renderStandards = () => {
    const s = t.standards;
    return (
      <div className="min-h-screen bg-slate-50 pb-20">
        <div className="bg-blue-900 text-white py-4 px-6 sticky top-0 z-10 shadow-lg flex items-center gap-3">
          <button onClick={() => setCurrentScreen('home')} className="hover:bg-blue-800 p-2 rounded transition">
            <ArrowLeft size={24} />
          </button>
          <h2 className="font-bold text-lg">{s.navTitle}</h2>
          <div className="ml-auto"><LangToggle /></div>
        </div>

        <div className="p-6 max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">⭐</span>
              <h2 className="text-xl font-bold text-blue-900">{s.heading}</h2>
            </div>
            <p className="text-gray-600 text-sm mb-6">{s.intro}</p>

            {s.items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 py-4 border-b border-gray-100 last:border-0">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">{item.icon}</span>
                </div>
                <div>
                  <p className="font-semibold text-blue-900">{item.title}</p>
                  <p className="text-gray-500 text-sm mt-0.5">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // ── Router ───────────────────────────────────────────────────────────────────
  switch (currentScreen) {
    case 'kgfs':      return renderKGFS();
    case 'cleaning':  return renderCleaning();
    case 'safety':    return renderTopics(t.safety.navTitle,    '⚠️', t.safety.topics);
    case 'equipment': return renderTopics(t.equipment.navTitle, '🔧', t.equipment.topics);
    case 'chemicals': return renderChemicals();
    case 'standards': return renderStandards();
    default:          return renderHome();
  }
}
