import React, { useState, useEffect, useCallback } from 'react';
import { ChevronRight, ArrowLeft, Building2, Sparkles, Shield, Wrench, Droplets, Star, FolderOpen, ShieldCheck, Lightbulb, Users2, ClipboardCheck, Handshake } from 'lucide-react';

export default function KGMasterClass() {
  const [showSplash, setShowSplash] = useState(true);
  const [splashHiding, setSplashHiding] = useState(false);
  const [currentScreen, setCurrentScreen] = useState(
    () => localStorage.getItem('currentScreen') || 'home'
  );
  const [lang, setLang] = useState('en');
  const [selectedChemical, setSelectedChemical] = useState(null);
  const [userInfo, setUserInfo] = useState({ name: '', phone: '', role: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // ── Splash Screen ─────────────────────────────────────────────────────────────
  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setSplashHiding(true);
      setTimeout(() => setShowSplash(false), 300);
    }, 2500);
    return () => clearTimeout(hideTimer);
  }, []);

  // ── Navigation: persist screen + handle Android back button ──────────────────
  const navigateTo = useCallback((screen) => {
    localStorage.setItem('currentScreen', screen);
    if (screen !== 'home') {
      window.history.pushState({ screen }, '', '');
    }
    setCurrentScreen(screen);
  }, []);

  const goHome = useCallback(() => {
    localStorage.setItem('currentScreen', 'home');
    setCurrentScreen('home');
  }, []);

  useEffect(() => {
    // Seed history so back button has somewhere to pop to
    window.history.replaceState({ screen: currentScreen }, '', '');
    if (currentScreen !== 'home') {
      window.history.pushState({ screen: 'home' }, '', '');
      window.history.pushState({ screen: currentScreen }, '', '');
    }

    const onPopState = (e) => {
      const target = e.state?.screen ?? 'home';
      localStorage.setItem('currentScreen', target);
      setCurrentScreen(target);
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const categoryIcons = {
    kgfs:      Building2,
    cleaning:  Sparkles,
    safety:    Shield,
    equipment: Wrench,
    chemicals: Droplets,
    standards: Star,
    resources: FolderOpen,
  };

  const translations = {
    en: {
      subtitle:     'Professional Training Platform',
      takeQuiz:     'Take a Quiz',
      needMoreInfo: 'Need more info?',
      contactUs:    'Contact us',
      footer: {
        copy:       '© 2026 KG Facility Solutions. All Rights Reserved.',
        designedBy: 'Designed by tesographics.com',
      },
      contact: {
        navTitle:     'Contact KG Office',
        officeTitle:  'KG Office',
        officeSubtitle: 'Get in touch with our office',
        callOffice:   'Call Office',
        managersTitle: 'Contact Your Manager',
        callBtn:      'Call',
      },

      categories: [
        { id: 'kgfs',      title: 'Learn about KGFS',   description: 'Company history and mission' },
        { id: 'cleaning',  title: 'Cleaning training',  description: 'Professional cleaning techniques' },
        { id: 'safety',    title: 'Safety at work',     description: 'Workplace safety protocols' },
        { id: 'equipment', title: 'Equipment',          description: 'Tools and equipment guide' },
        { id: 'chemicals', title: 'Chemicals',          description: 'Chemical handling and safety' },
        { id: 'standards', title: 'Employee Standard',  description: 'Company standards and expectations' },
        { id: 'resources', title: 'Other Resources',    description: 'Apps, handbooks and Trinet guides' },
      ],

      kgfs: {
        navTitle:      'Learn about KGFS',
        founders:      'Wade Keller & Debbie Garay',
        foundersLabel: 'Founders',
        purposeLabel:  'Our Purpose',
        description:   'Family-owned and operated since 1995, KG Facility Solutions has proudly served the Front Range with premier commercial cleaning. We are dedicated to leading and creating healthy, safe, and sustainable environments by delivering top-tier facility management and innovative solutions with a personal touch for all our communities.',
        boldYear:      '1995',
        boldCompany:   'KG Facility Solutions',
        details: [
          { value: '30+ years in the market' },
          { value: 'Serving multiple industries across Colorado' },
        ],
        valuesLabel: 'Core Values',
        values: [
          { label: 'Integrity',      Icon: ShieldCheck    },
          { label: 'Innovation',     Icon: Lightbulb      },
          { label: 'Inclusiveness',  Icon: Users2         },
          { label: 'Accountability', Icon: ClipboardCheck },
          { label: 'Relationships',  Icon: Handshake      },
        ],
      },

      cleaning: {
        navTitle: 'Cleaning Training',
        intro:    'Select a cleaning category to learn professional techniques and best practices.',
        subCategories: [
          { id: 'offices',          title: 'Office Cleaning',     icon: '🏢' },
          { id: 'bathrooms',        title: 'Bathroom Cleaning',   icon: '🚽' },
          { id: 'kitchens',         title: 'Kitchen Cleaning',    icon: '🍳' },
          { id: 'windows',          title: 'Window Cleaning',     icon: '🪟' },
          { id: 'floors',           title: 'Floor Care',          icon: '🪵' },
          { id: 'pressure_washing', title: 'Pressure Washing',    icon: '🚿' },
          { id: 'schools',          title: 'Schools Cleaning',    icon: '🏫' },
          { id: 'banking',          title: 'Banking Cleaning',    icon: '🏦' },
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
        descriptions: {
          nabc:       'A hospital-grade disinfectant and bathroom cleaner. Effectively kills bacteria and viruses while neutralizing odors; safe for most restroom surfaces.',
          klearview:  'A streak-free glass and surface cleaner. Specifically formulated for windows, mirrors, and other reflective surfaces.',
          topclean:   "A daily-use floor cleaner that removes dirt and grime without leaving residue. Its neutral pH ensures it won't damage floor finishes.",
          nutrarinse: 'A specialty cleaner designed to remove ice-melt and salt residue. It eliminates alkaline deposits that dull floors during winter or after stripping.',
          assurance:  'A heavy-duty cleaner for tough grease and oil build-up. Best suited for industrial or food-service environments.',
          oxivir:     'A hospital-grade cleaner powered by AHP (Accelerated Hydrogen Peroxide). Provides broad-spectrum disinfection while remaining gentle and residue-free.',
          ajax:       'A scratch-free powder cleanser designed for kitchens, bathrooms, and outdoor surfaces. It uses a bleach-based formula to scrub away tough stains and dirt.',
          clr:        'A powerful multi-use cleaner that blasts calcium deposits, dissolves lime scale, and zaps rust stains. Ideal for faucets, showerheads, and appliances.',
          enzymes:    'A bio-enzymatic solution with a fresh, fruity scent. It uses specialized bacterial strains to digest organic waste (fats, oils, grease) and neutralize odors in drains and pipes.',
          stainless:  'A premium stainless steel cleaner and polish that protects and preserves surfaces while resisting fingerprints. Oil-based formula for lasting shine.',
        },
        section1: {
          title: 'How to Use & Where to Use',
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

      resources: {
        navTitle: 'Other Resources',
        items: [
          { icon: '📱', title: 'My Applications',                          description: 'Access your work apps and platforms' },
          { icon: '📖', title: 'How to get the Employee Handbook on Trinet?', description: 'Step-by-step guide to download your handbook' },
          { icon: '📄', title: 'How to download my W2 on Tri-Net?',       description: 'Access and download your tax documents' },
          { icon: '☎️', title: 'Contact Trinet',                           description: 'Get support directly from Trinet' },
        ],
      },
    },

    registration: {
      en: {
        navTitle:     'Take a Quiz',
        heading:      'Before we start…',
        subheading:   'Please fill in your information to begin the quiz.',
        namePlaceholder:  'Full name',
        phonePlaceholder: 'Phone number',
        roleLabel:    'Your role',
        roleDefault:  'Select your role',
        roles: [
          { value: 'day_porter',        label: 'Day Porter' },
          { value: 'contractor',        label: 'Contractor' },
          { value: 'night_crew',        label: 'Night Cleaning Crew Member' },
          { value: 'corporate_office',  label: 'Corporate Office Member' },
        ],
        startBtn:     'Start Quiz',
        errors: {
          name:  'Please enter your full name.',
          phone: 'Please enter a valid phone number.',
          role:  'Please select your role.',
        },
        successHeading:  'You\'re all set!',
        successMessage:  'Your information has been saved. Good luck on the quiz!',
        backHome:        'Back to Home',
      },
      es: {
        navTitle:     'Tomar Quiz',
        heading:      'Antes de comenzar…',
        subheading:   'Por favor completa tu información para iniciar el quiz.',
        namePlaceholder:  'Nombre completo',
        phonePlaceholder: 'Número de teléfono',
        roleLabel:    'Tu rol',
        roleDefault:  'Selecciona tu rol',
        roles: [
          { value: 'day_porter',        label: 'Portero Diurno' },
          { value: 'contractor',        label: 'Contratista' },
          { value: 'night_crew',        label: 'Miembro del Equipo de Limpieza Nocturna' },
          { value: 'corporate_office',  label: 'Miembro de Oficina Corporativa' },
        ],
        startBtn:     'Iniciar Quiz',
        errors: {
          name:  'Por favor ingresa tu nombre completo.',
          phone: 'Por favor ingresa un número de teléfono válido.',
          role:  'Por favor selecciona tu rol.',
        },
        successHeading:  '¡Todo listo!',
        successMessage:  'Tu información fue guardada. ¡Mucho éxito en el quiz!',
        backHome:        'Volver al Inicio',
      },
    },

    es: {
      subtitle:     'Plataforma de Entrenamiento Profesional',
      takeQuiz:     'Tomar Quiz',
      needMoreInfo: '¿Necesitas más información?',
      contactUs:    'Contáctanos',
      footer: {
        copy:       '© 2026 KG Facility Solutions. Todos los Derechos Reservados.',
        designedBy: 'Diseñado por tesographics.com',
      },
      contact: {
        navTitle:      'Contactar Oficina KG',
        officeTitle:   'Oficina KG',
        officeSubtitle: 'Comunícate con nuestra oficina',
        callOffice:    'Llamar a la Oficina',
        managersTitle: 'Contacta a tu Supervisor',
        callBtn:       'Llamar',
      },

      categories: [
        { id: 'kgfs',      title: 'Conoce KGFS',                description: 'Historia y misión de la empresa' },
        { id: 'cleaning',  title: 'Entrenamiento de limpieza',  description: 'Técnicas profesionales de limpieza' },
        { id: 'safety',    title: 'Seguridad en el trabajo',    description: 'Protocolos de seguridad laboral' },
        { id: 'equipment', title: 'Equipos',                    description: 'Guía de herramientas y equipos' },
        { id: 'chemicals', title: 'Químicos',                   description: 'Manejo y seguridad de químicos' },
        { id: 'standards', title: 'Estándar del empleado',      description: 'Estándares y expectativas de la empresa' },
        { id: 'resources', title: 'Otros Recursos',             description: 'Apps, handbooks y guías de Trinet' },
      ],

      kgfs: {
        navTitle:      'Conoce KGFS',
        founders:      'Wade Keller & Debbie Garay',
        foundersLabel: 'Fundadores',
        purposeLabel:  'Nuestro Propósito',
        description:   'Empresa familiar fundada en 1995, KG Facility Solutions ha servido con orgullo al Front Range con limpieza comercial de primer nivel. Nos dedicamos a liderar y crear entornos saludables, seguros y sostenibles, brindando gestión de instalaciones de primer nivel y soluciones innovadoras con un toque personal para todas nuestras comunidades.',
        boldYear:      '1995',
        boldCompany:   'KG Facility Solutions',
        details: [
          { value: '30+ años en el mercado' },
          { value: 'Sirviendo múltiples industrias en Colorado' },
        ],
        valuesLabel: 'Valores Fundamentales',
        values: [
          { label: 'Integridad',       Icon: ShieldCheck    },
          { label: 'Innovación',       Icon: Lightbulb      },
          { label: 'Inclusión',        Icon: Users2         },
          { label: 'Responsabilidad',  Icon: ClipboardCheck },
          { label: 'Relaciones',       Icon: Handshake      },
        ],
      },

      cleaning: {
        navTitle: 'Entrenamiento de Limpieza',
        intro:    'Selecciona una categoría de limpieza para aprender técnicas profesionales y mejores prácticas.',
        subCategories: [
          { id: 'offices',          title: 'Limpieza de Oficinas',      icon: '🏢' },
          { id: 'bathrooms',        title: 'Limpieza de Baños',         icon: '🚽' },
          { id: 'kitchens',         title: 'Limpieza de Cocinas',       icon: '🍳' },
          { id: 'windows',          title: 'Limpieza de Ventanas',      icon: '🪟' },
          { id: 'floors',           title: 'Cuidado de Pisos',          icon: '🪵' },
          { id: 'pressure_washing', title: 'Limpieza a Presión',        icon: '🚿' },
          { id: 'schools',          title: 'Limpieza de Escuelas',      icon: '🏫' },
          { id: 'banking',          title: 'Limpieza de Bancos',        icon: '🏦' },
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
        descriptions: {
          nabc:       'Desinfectante y limpiador de baños de grado hospitalario. Elimina bacterias y virus eficazmente mientras neutraliza olores; seguro para la mayoría de las superficies de baño.',
          klearview:  'Limpiador de vidrios y superficies sin rayas. Formulado específicamente para ventanas, espejos y otras superficies reflectantes.',
          topclean:   'Limpiador de pisos de uso diario que elimina suciedad sin dejar residuos. Su pH neutro garantiza que no dañará los acabados del piso.',
          nutrarinse: 'Limpiador especializado para eliminar residuos de sal y deshielo. Elimina depósitos alcalinos que opacan los pisos en invierno o después del decapado.',
          assurance:  'Limpiador de alto poder para grasa y aceite acumulado. Ideal para entornos industriales o de servicios de alimentos.',
          oxivir:     'Limpiador de grado hospitalario impulsado por AHP (Peróxido de Hidrógeno Acelerado). Proporciona desinfección de amplio espectro siendo suave y sin residuos.',
          ajax:       'Limpiador en polvo sin rayaduras para cocinas, baños y superficies exteriores. Usa una fórmula con cloro para eliminar manchas y suciedad difíciles.',
          clr:        'Potente limpiador multiusos que elimina depósitos de calcio, disuelve sarro y quita manchas de óxido. Ideal para grifos, alcachofas de ducha y electrodomésticos.',
          enzymes:    'Solución bio-enzimática con aroma frutal fresco. Usa cepas bacterianas especializadas para digerir residuos orgánicos (grasas, aceites) y neutralizar olores en desagües y tuberías.',
          stainless:  'Limpiador y pulidor premium para acero inoxidable que protege y conserva las superficies resistiendo las huellas dactilares. Fórmula en aceite para un brillo duradero.',
        },
        section1: {
          title: 'Cómo Usar y Dónde Usar',
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

      resources: {
        navTitle: 'Otros Recursos',
        items: [
          { icon: '📱', title: 'Mis Aplicaciones',                                    description: 'Accede a tus apps y plataformas de trabajo' },
          { icon: '📖', title: '¿Cómo obtener el Handbook de empleado en Trinet?',    description: 'Guía paso a paso para descargar tu handbook' },
          { icon: '📄', title: '¿Cómo descargar mi W2 en Tri-Net?',                  description: 'Accede y descarga tus documentos de impuestos' },
          { icon: '☎️', title: 'Contactar a Trinet',                                  description: 'Obtén soporte directamente de Trinet' },
        ],
      },
    },
  };

  const t = translations[lang];

  // ── Page Footer (shared across all screens) ───────────────────────────────────
  const PageFooter = () => (
    <div className="bg-blue-950 px-4 py-3 text-center">
      <p className="text-gray-400 text-xs">{t.footer.copy}</p>
      <a
        href="https://www.tesographics.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400 text-xs hover:text-cyan-300 transition-colors"
      >
        {t.footer.designedBy}
      </a>
    </div>
  );

  // ── Language Toggle (dark navbar variant) ─────────────────────────────────────
  const LangToggle = ({ dark = false }) => (
    <div className={`flex items-center rounded-full px-1 py-0.5 ${dark ? 'bg-blue-900/10' : 'bg-white/20'}`}>
      {['en', 'es'].map((l, i) => (
        <React.Fragment key={l}>
          {i > 0 && (
            <span className={`mx-0.5 ${dark ? 'text-blue-900/30 text-sm' : 'text-white/40 text-xs'}`}>|</span>
          )}
          <button
            onClick={() => setLang(l)}
            className={`font-bold rounded-full transition-colors ${
              dark
                ? `text-sm px-3 py-1 ${lang === l ? 'bg-blue-900 text-white' : 'text-blue-700'}`
                : `text-xs px-2 py-0.5 ${lang === l ? 'bg-white text-blue-900' : 'text-white/70 hover:text-white'}`
            }`}
          >
            {l.toUpperCase()}
          </button>
        </React.Fragment>
      ))}
    </div>
  );

  // ── Sub-page Nav with logo (shared across all inner screens) ─────────────────
  const SubPageNav = ({ title, icon }) => (
    <div className="sticky top-0 z-10 shadow-lg">
      <div className="bg-blue-900 text-white py-3 px-4 flex items-center gap-3">
        <button onClick={goHome} className="hover:bg-blue-800 p-2 rounded transition">
          <ArrowLeft size={22} />
        </button>
        {icon && <span className="text-lg">{icon}</span>}
        <h2 className="font-bold text-base">{title}</h2>
        <div className="ml-auto"><LangToggle /></div>
      </div>
      <div className="bg-white border-b border-gray-100 py-2.5 text-center">
        <img src="/kg-logo.png" alt="KG Masterclass" className="h-11 mx-auto object-contain" />
      </div>
    </div>
  );

  // ── Home Screen ──────────────────────────────────────────────────────────────
  const renderHome = () => (
    <div
      className="min-h-screen pb-52"
      style={{
        backgroundImage: 'url("/janitor-cart.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Header */}
      <div className="bg-white px-6 py-6 text-center border-b-4 border-blue-900 shadow-lg relative">
        <div className="absolute top-4 right-4">
          <LangToggle dark />
        </div>
        <img src="/kg-logo.png" alt="KG Masterclass Logo" className="h-20 mx-auto object-contain" />
        <p className="text-gray-600 text-sm mt-2">{t.subtitle}</p>
      </div>

      {/* Categories */}
      <div className="px-4 py-6">
        <div className="space-y-3">
          {t.categories.map(({ id, title, description }) => {
            const Icon = categoryIcons[id];
            return (
              <button
                key={id}
                onClick={() => navigateTo(id)}
                className="w-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 text-left transform"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.88)' }}
              >
                <div className="flex items-center gap-4 px-4 py-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center shadow-md">
                    <Icon size={22} className="text-white" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-gray-900 font-bold text-base leading-tight">{title}</h3>
                    <p className="text-gray-600 text-xs mt-0.5">{description}</p>
                  </div>
                  <ChevronRight className="text-blue-900 flex-shrink-0" size={20} />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-blue-900 px-4 py-2 text-center shadow-2xl">
        <button
          onClick={() => { setFormSubmitted(false); setFormErrors({}); navigateTo('registration'); }}
          className="bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-500 text-blue-900 font-bold py-2 px-8 rounded-lg transition-all w-full shadow-lg text-sm mb-1.5"
        >
          🎯 {t.takeQuiz}
        </button>
        <p className="text-white text-xs mb-1 font-semibold">{t.needMoreInfo}</p>
        <button
          onClick={() => navigateTo('contact')}
          className="bg-cyan-500 hover:bg-cyan-600 text-blue-900 font-bold py-1.5 px-8 rounded-lg transition-colors w-full shadow text-xs"
        >
          {t.contactUs}
        </button>
        <div className="mt-1.5">
          <p className="text-gray-400 text-xs leading-tight">{t.footer.copy}</p>
          <a
            href="https://www.tesographics.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 text-xs hover:text-cyan-300 transition-colors"
          >
            {t.footer.designedBy}
          </a>
        </div>
      </div>
    </div>
  );

  // ── KGFS Screen ──────────────────────────────────────────────────────────────
  const renderKGFS = () => {
    const k = t.kgfs;
    const parts = k.description.split(/(1995|KG Facility Solutions)/g);

    return (
      <div className="min-h-screen bg-white pb-20">
        <SubPageNav title={k.navTitle} />

        <div className="max-w-2xl mx-auto px-5 pt-6 pb-4 space-y-6">

          {/* ── Logo + Founders ── */}
          <div className="flex flex-col items-center gap-1">
            <img src="/kg-logo-mean.png" alt="KG Logo" className="h-28 object-contain" />
            <p className="text-blue-900 font-semibold text-sm">{k.founders}</p>
            <p className="text-gray-400 text-xs">{k.foundersLabel}</p>
          </div>

          {/* ── Stats row ── */}
          <div className="flex items-stretch divide-x divide-blue-100 border border-blue-100 rounded-xl overflow-hidden">
            {k.details.map((item, idx) => (
              <div key={idx} className="flex-1 py-3 px-3 text-center bg-blue-50">
                <p className="text-blue-900 font-bold text-xs leading-snug">{item.value}</p>
              </div>
            ))}
          </div>

          {/* ── Our Purpose ── */}
          <div className="text-center">
            <h2 className="text-blue-900 font-bold text-base uppercase tracking-widest mb-2">{k.purposeLabel}</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {parts.map((part, i) =>
                part === k.boldYear || part === k.boldCompany
                  ? <strong key={i} className="text-blue-900 font-semibold">{part}</strong>
                  : part
              )}
            </p>
          </div>

          {/* ── Divider ── */}
          <hr className="border-gray-100" />

          {/* ── Core Values ── */}
          <div className="text-center">
            <h2 className="text-blue-900 font-bold text-base uppercase tracking-widest mb-3">{k.valuesLabel}</h2>
            <div className="grid grid-cols-2 gap-2">
              {k.values.map(({ label, Icon }, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1.5 p-3 rounded-xl border border-gray-100 bg-slate-50 hover:bg-blue-50 transition-colors">
                  <Icon size={20} className="text-blue-900" />
                  <p className="text-gray-700 font-medium text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
        <PageFooter />
      </div>
    );
  };

  // ── Cleaning Screen ──────────────────────────────────────────────────────────
  const renderCleaning = () => {
    const c = t.cleaning;
    return (
      <div className="min-h-screen bg-slate-50 pb-20">
        <SubPageNav title={c.navTitle} />
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
        <PageFooter />
      </div>
    );
  };

  // ── Generic Topics Screen (Safety / Equipment) ────────────────────────────────
  const renderTopics = (navTitle, icon, topics) => (
    <div className="min-h-screen bg-slate-50 pb-20">
      <SubPageNav title={navTitle} icon={icon} />

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
      <PageFooter />
    </div>
  );

  // ── Chemicals Screen ──────────────────────────────────────────────────────────
  const chemicalProductBase = [
    { id: 'nabc',       name: 'NABC',                        image: '/quimicos/nabc.jpg'       },
    { id: 'klearview',  name: 'Glance / Klearview',          image: '/quimicos/klearview.jpg'  },
    { id: 'topclean',   name: 'Top Clean',                   image: '/quimicos/topclean.jpg'   },
    { id: 'nutrarinse', name: 'Nutra Rinse',                 image: '/quimicos/nutrarinse.jpg' },
    { id: 'assurance',  name: 'Assurance',                   image: '/quimicos/assurance.jpg'  },
    { id: 'oxivir',     name: 'Oxivir',                      image: '/quimicos/oxivir.jpg'     },
    { id: 'ajax',       name: 'Ajax',                        image: '/quimicos/ajax.jpg'       },
    { id: 'clr',        name: 'CLR',                         image: '/quimicos/clr.jpg'        },
    { id: 'enzymes',    name: 'Victoria Bay Liquid Enzymes', image: '/quimicos/enzymes.jpg'    },
    { id: 'stainless',  name: 'Stainless Steel Polish',      image: '/quimicos/stainless.jpg'  },
  ];

  const renderChemicals = () => {
    const c = t.chemicals;
    const chemicalProducts = chemicalProductBase.map(p => ({ ...p, description: c.descriptions[p.id] }));
    return (
      <div className="min-h-screen bg-slate-50 pb-20">
        <SubPageNav title={c.navTitle} />
        <div className="p-4 max-w-2xl mx-auto space-y-6">
          {/* Section 1 — Product grid */}
          <div>
            <h3 className="text-blue-900 font-bold text-base uppercase tracking-wide mb-3 px-1">
              {c.section1.title}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {chemicalProducts.map((product) => (
                <button
                  key={product.id}
                  onClick={() => setSelectedChemical(product)}
                  className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all bg-gray-100"
                  style={{ height: '180px' }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full object-cover"
                    style={{ height: '70%' }}
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 flex items-center justify-center"
                    style={{ height: '30%', backgroundColor: 'rgba(30, 58, 138, 0.92)' }}
                  >
                    <p className="text-white font-bold text-sm text-center leading-tight px-2">{product.name}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Section 2 — Chemical Safety list */}
          <div>
            <h3 className="text-blue-900 font-bold text-base uppercase tracking-wide mb-3 px-1">
              {c.section2.title}
            </h3>
            <div className="space-y-3">
              {c.section2.topics.map((topic, idx) => (
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
        </div>

        <PageFooter />
        {/* Modal */}
        {selectedChemical && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
            onClick={() => setSelectedChemical(null)}
          >
            <div
              className="bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-sm relative"
              style={{ maxHeight: '90vh', overflowY: 'auto' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedChemical(null)}
                className="absolute top-3 right-3 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
              >
                <span className="text-blue-900 font-bold text-xl leading-none">×</span>
              </button>
              <img
                src={selectedChemical.image}
                alt={selectedChemical.name}
                className="modal-image w-full object-contain bg-white"
                style={{ maxHeight: '380px' }}
              />
              <div className="modal-content bg-blue-900 px-5 py-3 text-center">
                <h3 className="text-white font-bold text-lg">{selectedChemical.name}</h3>
              </div>
              <div className="modal-content bg-blue-700 px-5 py-4">
                <p className="text-blue-50 text-sm leading-relaxed">{selectedChemical.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // ── Standards Screen ─────────────────────────────────────────────────────────
  const renderStandards = () => {
    const s = t.standards;
    return (
      <div className="min-h-screen bg-slate-50 pb-20">
        <SubPageNav title={s.navTitle} />
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
        <PageFooter />
      </div>
    );
  };

  // ── Contact Screen ───────────────────────────────────────────────────────────
  const renderContact = () => {
    const c = t.contact;
    const managers = [
      { name: 'Miguel Torres',     photo: '/managers/miguel.jpg',  tel: 'tel:7207881118',  display: '720-788-1118' },
      { name: 'Alirio Castaneda',  photo: '/managers/alirio.jpg',  tel: 'tel:7209264665',  display: '720-926-4665' },
      { name: 'Rolando Hernández', photo: '/managers/rolando.jpg', tel: 'tel:7209552814',  display: '720-955-2814' },
    ];
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pb-8">
        <SubPageNav title={c.navTitle} />
        <div className="px-4 pt-8 pb-6 max-w-lg mx-auto space-y-8">

          {/* ── Office card ── */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex flex-col items-center pt-8 pb-6 px-6 gap-4">
              <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-cyan-400 shadow-xl">
                <img src="/managers/kg-circular.png" alt="KG Logo" className="w-full h-full object-cover" />
              </div>
              <div className="text-center">
                <h2 className="text-white font-bold text-2xl">{c.officeTitle}</h2>
                <p className="text-blue-200 text-sm mt-1">{c.officeSubtitle}</p>
                <p className="text-cyan-300 font-semibold text-lg mt-1">303-665-9757</p>
              </div>
              <a
                href="tel:3036659757"
                className="mt-2 w-full bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-600 text-blue-900 font-bold py-3 px-8 rounded-xl transition-all shadow-lg text-center text-base"
              >
                📞 {c.callOffice}
              </a>
            </div>
          </div>

          {/* ── Managers ── */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <span>👥</span> {c.managersTitle}
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {managers.map((m) => (
                <a
                  key={m.name}
                  href={m.tel}
                  className="flex items-center gap-4 bg-slate-700 hover:bg-slate-600 active:bg-slate-800 rounded-2xl p-4 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden ring-2 ring-cyan-400 shadow-md">
                    <img src={m.photo} alt={m.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-white font-bold text-base">{m.name}</p>
                    <p className="text-cyan-300 text-sm mt-0.5">{m.display}</p>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 bg-cyan-500 hover:bg-cyan-400 rounded-full flex items-center justify-center shadow">
                    <span className="text-lg">📞</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      <PageFooter />
      </div>
    );
  };

  // ── Registration Screen ───────────────────────────────────────────────────────
  const renderRegistration = () => {
    const r = translations.registration[lang];

    const validate = () => {
      const errors = {};
      if (!userInfo.name.trim()) errors.name = r.errors.name;
      if (!userInfo.phone.trim() || !/^\+?[\d\s\-()]{7,}$/.test(userInfo.phone.trim())) errors.phone = r.errors.phone;
      if (!userInfo.role) errors.role = r.errors.role;
      return errors;
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const errors = validate();
      if (Object.keys(errors).length > 0) {
        setFormErrors(errors);
        return;
      }
      setFormErrors({});
      setFormSubmitted(true);
    };

    const inputBase = 'w-full bg-white border-2 rounded-xl px-4 py-3 text-gray-800 text-sm focus:outline-none transition-colors';
    const inputOk   = 'border-gray-200 focus:border-blue-700';
    const inputErr  = 'border-red-400 focus:border-red-500 bg-red-50';

    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
        <SubPageNav title={r.navTitle} />
        <div className="px-4 pt-8 pb-12 max-w-md mx-auto">
          {!formSubmitted ? (
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header card */}
              <div className="bg-blue-900 px-6 py-8 text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl">🎯</span>
                </div>
                <h1 className="text-white font-bold text-2xl">{r.heading}</h1>
                <p className="text-blue-200 text-sm mt-2">{r.subheading}</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} noValidate className="px-6 py-7 space-y-5">

                {/* Full Name */}
                <div>
                  <label className="block text-blue-900 font-semibold text-sm mb-1.5">
                    👤 {r.namePlaceholder}
                  </label>
                  <input
                    type="text"
                    value={userInfo.name}
                    onChange={(e) => {
                      setUserInfo({ ...userInfo, name: e.target.value });
                      if (formErrors.name) setFormErrors({ ...formErrors, name: undefined });
                    }}
                    placeholder={r.namePlaceholder}
                    className={`${inputBase} ${formErrors.name ? inputErr : inputOk}`}
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                      <span>⚠</span> {formErrors.name}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-blue-900 font-semibold text-sm mb-1.5">
                    📞 {r.phonePlaceholder}
                  </label>
                  <input
                    type="tel"
                    value={userInfo.phone}
                    onChange={(e) => {
                      setUserInfo({ ...userInfo, phone: e.target.value });
                      if (formErrors.phone) setFormErrors({ ...formErrors, phone: undefined });
                    }}
                    placeholder={r.phonePlaceholder}
                    className={`${inputBase} ${formErrors.phone ? inputErr : inputOk}`}
                  />
                  {formErrors.phone && (
                    <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                      <span>⚠</span> {formErrors.phone}
                    </p>
                  )}
                </div>

                {/* Role */}
                <div>
                  <label className="block text-blue-900 font-semibold text-sm mb-1.5">
                    🪪 {r.roleLabel}
                  </label>
                  <select
                    value={userInfo.role}
                    onChange={(e) => {
                      setUserInfo({ ...userInfo, role: e.target.value });
                      if (formErrors.role) setFormErrors({ ...formErrors, role: undefined });
                    }}
                    className={`${inputBase} ${formErrors.role ? inputErr : inputOk} appearance-none cursor-pointer`}
                  >
                    <option value="">{r.roleDefault}</option>
                    {r.roles.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  {formErrors.role && (
                    <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                      <span>⚠</span> {formErrors.role}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-500 text-blue-900 font-bold py-3.5 rounded-xl transition-all shadow-lg text-base mt-2"
                >
                  {r.startBtn} →
                </button>
              </form>
            </div>
          ) : (
            /* Success state */
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden text-center">
              <div className="bg-blue-900 px-6 py-10">
                <div className="w-20 h-20 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-4xl">✅</span>
                </div>
                <h2 className="text-white font-bold text-2xl">{r.successHeading}</h2>
                <p className="text-blue-200 text-sm mt-2">{r.successMessage}</p>
              </div>
              <div className="px-6 py-6 bg-slate-50 space-y-3">
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-left space-y-2">
                  <p className="text-xs text-gray-400 uppercase font-semibold tracking-wide">Info guardada</p>
                  <p className="text-blue-900 font-semibold text-sm">👤 {userInfo.name}</p>
                  <p className="text-blue-900 font-semibold text-sm">📞 {userInfo.phone}</p>
                  <p className="text-blue-900 font-semibold text-sm">
                    🪪 {translations.registration[lang].roles.find(r => r.value === userInfo.role)?.label}
                  </p>
                </div>
                <button
                  onClick={goHome}
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 rounded-xl transition-colors shadow"
                >
                  {r.backHome}
                </button>
              </div>
            </div>
          )}
        </div>
        <PageFooter />
      </div>
    );
  };

  // ── Resources Screen ─────────────────────────────────────────────────────────
  const renderResources = () => {
    const res = t.resources;
    return (
      <div className="min-h-screen bg-slate-50 pb-20">
        <SubPageNav title={res.navTitle} />
        <div className="p-6 max-w-2xl mx-auto space-y-3">
          {res.items.map((item, idx) => (
            <button
              key={idx}
              className="w-full bg-white rounded-xl shadow-md p-5 flex items-center gap-4 hover:shadow-lg hover:scale-105 transition-all border border-gray-100 text-left"
            >
              <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="text-2xl">{item.icon}</span>
              </div>
              <div className="flex-grow">
                <p className="text-blue-900 font-semibold text-sm leading-snug">{item.title}</p>
                <p className="text-gray-500 text-xs mt-0.5">{item.description}</p>
              </div>
              <ChevronRight className="text-blue-300 flex-shrink-0" size={18} />
            </button>
          ))}
        </div>
        <PageFooter />
      </div>
    );
  };

  // ── Splash Screen render ─────────────────────────────────────────────────────
  if (showSplash) {
    return (
      <div className={`fixed inset-0 z-50 flex items-center justify-center bg-blue-900 ${splashHiding ? 'splash-hide' : ''}`}>
        <img
          src="/splash-logo.png"
          alt="KG Masterclass"
          className="splash-logo w-64 max-w-xs object-contain"
        />
      </div>
    );
  }

  // ── Router ───────────────────────────────────────────────────────────────────
  switch (currentScreen) {
    case 'registration': return renderRegistration();
    case 'kgfs':         return renderKGFS();
    case 'cleaning':     return renderCleaning();
    case 'safety':       return renderTopics(t.safety.navTitle,    '⚠️', t.safety.topics);
    case 'equipment':    return renderTopics(t.equipment.navTitle, '🔧', t.equipment.topics);
    case 'chemicals':    return renderChemicals();
    case 'standards':    return renderStandards();
    case 'resources':    return renderResources();
    case 'contact':      return renderContact();
    default:             return renderHome();
  }
}
