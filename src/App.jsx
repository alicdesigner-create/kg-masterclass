import React, { useState, useEffect, useCallback } from 'react';
import { ChevronRight, ArrowLeft, Building2, Sparkles, Shield, Wrench, Droplets, Star, FolderOpen, ShieldCheck, Lightbulb, Users2, ClipboardCheck, Handshake, Briefcase, SprayCan, ShowerHead, UtensilsCrossed, AppWindow, Grid3x3, Gauge, GraduationCap, Landmark } from 'lucide-react';

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
    chemicals: SprayCan,
    standards: Star,
    resources: FolderOpen,
  };

  const cleaningSubIcons = {
    offices:          Building2,
    bathrooms:        ShowerHead,
    kitchens:         UtensilsCrossed,
    windows:          AppWindow,
    floors:           Grid3x3,
    pressure_washing: Gauge,
    schools:          GraduationCap,
    banking:          Landmark,
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
        { id: 'chemicals', title: 'Chemicals',          description: 'Chemical handling and safety' },
        { id: 'equipment', title: 'Equipment',          description: 'Tools and equipment guide' },
        { id: 'safety',    title: 'Safety at work',     description: 'Workplace safety protocols' },
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
          { label: 'Integrity',       Icon: ShieldCheck    },
          { label: 'Innovation',      Icon: Lightbulb      },
          { label: 'Inclusiveness',   Icon: Users2         },
          { label: 'Accountability',  Icon: ClipboardCheck },
          { label: 'Relationships',   Icon: Handshake      },
          { label: 'Professionalism', Icon: Briefcase      },
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
          { id: 'floors',           title: 'Floor Care',          icon: '🧹' },
          { id: 'pressure_washing', title: 'Pressure Washing',    icon: '💦' },
          { id: 'schools',          title: 'Schools Cleaning',    icon: '🏫' },
          { id: 'banking',          title: 'Banking Cleaning',    icon: '🏦' },
        ],
      },

      cleaningDetails: {
        offices: {
          navTitle: 'Office Cleaning',
          tipsLabel: 'Pro Tips',
          tips: [
            'Dust High-to-Low: Start at the top so debris falls to the floor.',
            'Rag-First Spray: Spray the cloth, not the screen or keyboard.',
            'Lift & Wipe: Clean under desk items; never wipe around them.',
            'Key Touchpoints: Focus NABC on switches, handles, and buttons.',
            'Liner Check: Wipe bin interiors before replacing bags to stop odors.',
          ],
        },
        bathrooms: {
          navTitle: 'Bathroom Cleaning',
          tipsLabel: 'Pro Tips',
          tips: [
            'Sink Seams: Detail the gap between the countertop and the sink rim to remove hidden grime.',
            'Low Areas: Clean deep behind toilets and under urinals to eliminate odors and stains.',
            'Corner Scan: Clear all hair and dust buildup from corners during every floor cycle.',
            'Partition Dusting: Dust the tops and edges of toilet partitions daily to prevent gray buildup.',
            'Chrome Recovery: Use Dawn with warm water on chrome to remove oxidation and excess of polish.',
          ],
        },
        kitchens: {
          navTitle: 'Kitchen Cleaning',
          tipsLabel: 'Pro Tips',
          tips: [
            'Bin Access: Move trash containers to clean the floor and walls behind them daily.',
            'Wall Inspection: Wipe down food splatters and grease from walls near prep and waste areas.',
            'Touchpoints: Disinfect refrigerator handles, microwave buttons, and coffee stations daily.',
            'Drain Care: Pour hot water down drains and apply Enzymes if required to prevent odors and buildup.',
            'Surface Joints: Clear all crumbs and debris from table seams and edges, especially on wooden surfaces.',
          ],
        },
        windows: {
          navTitle: 'Window Cleaning',
          tipsLabel: 'Pro Tips',
          tips: [
            'Edge Detailing: Wipe the frame and corners first to prevent water from dripping onto clean glass.',
            'Vertical vs. Horizontal: Wipe inside vertically and outside horizontally to identify which side has streaks.',
            'Touch-up Check: Use a dry cloth to buff out any remaining ghosting or fingerprints in natural light.',
            'No Direct Sun: Avoid cleaning in direct sunlight to prevent the solution from drying too fast and leaving spots.',
            'Bottom Track: Vacuum or wipe the window tracks daily to prevent dirt buildup and jamming.',
          ],
        },
        floors: {
          navTitle: 'Floor Care',
          tipsLabel: 'Pro Tips',
          tips: [
            'Chemical Balance: Do not use too much cleaner; excess chemical causes streaks and sticky residue.',
            'Water Quality: Change the mop water as soon as it looks cloudy to avoid dulling the floor.',
            'Corner Sweeping: Use a broom or vacuum attachment to pull dirt from corners before mopping.',
            'Stain Treatment: Address spills immediately with Top Clean to prevent permanent staining.',
            'Edge Vacuuming: Pay extra attention to carpet edges along walls where dust and hair accumulate.',
          ],
        },
        pressure_washing: {
          navTitle: 'Pressure Washing',
          tipsLabel: 'Pro Tips',
          tips: [
            'Personal Protection: Use sunscreen, sunglasses, a hat, and long sleeves to protect your skin outdoors.',
            'Freeze Prevention: Do not pressure wash if temperatures are below 32°F, as water will freeze on surfaces.',
            'Machine Check: Inspect equipment daily for leaks or hose wear to prevent malfunctions and accidents.',
            'Stay Hydrated: Drink water constantly; maintaining hydration is critical during outdoor physical labor.',
            'Surrounding Safety: Clear the area of obstacles and cover sensitive outlets or delicate plants before starting.',
          ],
        },
        schools: {
          navTitle: 'Schools Cleaning',
          tipsLabel: 'Pro Tips',
          tips: [
            'Desk Undersides: Check and remove gum or stickers from the bottom of student desks and chairs.',
            'High-Touch Sanitizing: Focus on pencil sharpeners, water fountains, and computer keyboards daily.',
            'Back-to-Front Mopping: Always mop from the back of the classroom toward the door to avoid footprints.',
            'Locker Grills: Dust the top and ventilation slats of lockers where lint and debris quickly gather.',
            'Visual Check: Look for safety hazards like loose carpet edges or broken furniture and report them immediately.',
          ],
        },
        banking: {
          navTitle: 'Banking Cleaning',
          tipsLabel: 'Pro Tips',
          tips: [
            'Badge Security: Never transfer your access badge or credentials to anyone; they are for your use only.',
            'Alarm Protocol: Always verify that the bank alarm is fully armed and the facility is secure before leaving.',
            'Professional Image: Always wear your full uniform to ensure you are easily identified in a financial institution.',
            'Quality Time: Invest the full time required for proper cleaning; never rush security or high-standard areas.',
            'Sensitive Privacy: Never touch, move, or read documents on desks; treat all trash as strictly confidential.',
            'Key Control: Do not take any bank keys off-site; they must remain in the designated secure area after your shift.',
          ],
        },
      },

      safety: {
        navTitle: 'Safety at Work',
        topics: [
          { id: 'uniform',    title: 'Uniform Requirements',              description: 'Proper work attire and safety gear' },
          { id: 'osha',       title: 'OSHA Requirements',                 description: 'Compliance and safety standards' },
          { id: 'biohazards', title: 'Biohazards',                        description: 'Identifying and handling biohazards' },
          { id: 'height',     title: 'Height Safety',                     description: 'Ladder and height safety protocols' },
          { id: 'tripping',   title: 'Tripping Hazards',                  description: 'Identifying and preventing accidents' },
          { id: 'ppe',        title: 'PPE (Personal Protective Equipment)', description: 'Proper use and care of safety equipment' },
        ],
      },

      safetyDetails: {
        uniform: {
          navTitle: 'Uniform Requirements',
          points: [
            { label: 'Standard',              text: 'Clean company-issued shirt and durable work pants. Wear a reflective vest if your position requires you to.' },
            { label: 'Footwear',              text: 'Mandatory closed-toe, waterproof, non-slip shoes.' },
            { label: 'Personal Presentation', text: 'Maintain a professional appearance by being well-groomed. Ensure your uniform is clean, wrinkle-free, and tucked in. Personal hygiene must be managed daily to reflect the high standards of our service and respect for the client\'s environment.' },
            { label: 'Safety',                text: 'No dangling jewelry or loose clothing to prevent snagging.' },
          ],
        },
        osha: {
          navTitle: 'OSHA Requirements',
          points: [
            { label: 'Compliance',         text: 'Follow all federal safety standards and site-specific protocols.' },
            { label: 'SDS',                text: 'Know the location of Safety Data Sheets for all chemicals on-site.' },
            { label: 'Signage',            text: 'Always use "Caution Wet Floor" signs when mopping or if spills occur.' },
            { label: 'Chemical Labeling',  text: 'Ensure all spray bottles have their respective labels and are properly identified. Never use unlabeled containers or hand-written markings that do not meet OSHA Hazard Communication standards.' },
          ],
        },
        biohazards: {
          navTitle: 'Biohazards',
          points: [
            { label: 'Identification', text: 'Treat all body fluids as infectious (blood, vomit, etc.).' },
            { label: 'Disposal',       text: 'Use labeled red biohazard bags for contaminated waste.' },
            { label: 'Handling',       text: 'Never push trash down with hands or feet; use a tool or replace the bag.' },
          ],
        },
        height: {
          navTitle: 'Height Safety',
          points: [
            { label: 'Equipment',  text: 'Use only approved ladders; never use chairs, crates, or trash cans.' },
            { label: 'Technique',  text: 'Maintain three points of contact. Ensure the ladder is on a flat, stable surface.' },
            { label: 'Limits',     text: 'Do not overreach; move the ladder to stay centered.' },
          ],
        },
        tripping: {
          navTitle: 'Tripping Hazards',
          points: [
            { label: 'Organization', text: 'Keep vacuum cords close to the wall and out of main walkways.' },
            { label: 'Storage',      text: 'Park cleaning carts to the side of hallways, never blocking exits.' },
            { label: 'Response',     text: 'Clean up any liquid spills or debris immediately.' },
          ],
        },
        ppe: {
          navTitle: 'PPE (Personal Protective Equipment)',
          points: [
            { label: 'Hand Protection', text: 'Wear nitrile or latex gloves for all cleaning tasks.' },
            { label: 'Eye Protection',  text: 'Use safety goggles when pouring or spraying chemicals.' },
            { label: 'Respiratory',     text: 'Use masks in dusty areas or when using strong disinfectants.' },
          ],
        },
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
        { id: 'chemicals', title: 'Químicos',                   description: 'Manejo y seguridad de químicos' },
        { id: 'equipment', title: 'Equipos',                    description: 'Guía de herramientas y equipos' },
        { id: 'safety',    title: 'Seguridad en el trabajo',    description: 'Protocolos de seguridad laboral' },
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
          { label: 'Integridad',        Icon: ShieldCheck    },
          { label: 'Innovación',        Icon: Lightbulb      },
          { label: 'Inclusión',         Icon: Users2         },
          { label: 'Responsabilidad',   Icon: ClipboardCheck },
          { label: 'Relaciones',        Icon: Handshake      },
          { label: 'Profesionalismo',   Icon: Briefcase      },
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
          { id: 'floors',           title: 'Cuidado de Pisos',          icon: '🧹' },
          { id: 'pressure_washing', title: 'Limpieza a Presión',        icon: '💦' },
          { id: 'schools',          title: 'Limpieza de Escuelas',      icon: '🏫' },
          { id: 'banking',          title: 'Limpieza de Bancos',        icon: '🏦' },
        ],
      },

      cleaningDetails: {
        offices: {
          navTitle: 'Limpieza de Oficinas',
          tipsLabel: 'Consejos Pro',
          tips: [
            'De Arriba Abajo: Comienza por arriba para que el polvo caiga al suelo.',
            'Paño Primero: Rocía el trapo, no la pantalla ni el teclado.',
            'Levanta y Limpia: Limpia debajo de los objetos del escritorio; nunca alrededor.',
            'Puntos de Contacto: Usa NABC en interruptores, manijas y botones.',
            'Revisión de Bolsas: Limpia el interior del basurero antes de colocar la bolsa nueva.',
          ],
        },
        bathrooms: {
          navTitle: 'Limpieza de Baños',
          tipsLabel: 'Consejos Pro',
          tips: [
            'Juntas del Lavabo: Detalla la unión entre el mármol y el lavabo para eliminar suciedad oculta.',
            'Zonas Bajas: Limpia detrás de los inodoros y bajo los urinarios para eliminar olores y manchas.',
            'Revisión de Esquinas: Limpia acumulación de cabello y polvo en esquinas en cada ciclo.',
            'Polvo en Divisiones: Limpia diariamente las partes superiores y bordes de los cubículos.',
            'Recuperación de Cromo: Usa Dawn con agua tibia para eliminar oxidación y exceso de pulidor.',
          ],
        },
        kitchens: {
          navTitle: 'Limpieza de Cocinas',
          tipsLabel: 'Consejos Pro',
          tips: [
            'Acceso al Basurero: Mueve los contenedores para limpiar el piso y las paredes detrás de ellos.',
            'Inspección de Paredes: Limpia salpicaduras de comida y grasa en paredes cerca de las áreas de trabajo.',
            'Puntos de Contacto: Desinfecta manijas del refrigerador, botones del microondas y cafeteras diariamente.',
            'Cuidado del Drenaje: Vierte agua caliente y aplica Enzimas si es necesario para prevenir olores.',
            'Juntas de Superficie: Limpia migajas y residuos en las uniones de mesas, especialmente en superficies de madera.',
          ],
        },
        windows: {
          navTitle: 'Limpieza de Ventanas',
          tipsLabel: 'Consejos Pro',
          tips: [
            'Detalle de Bordes: Limpia el marco y las esquinas primero para evitar goteos sobre el vidrio limpio.',
            'Vertical vs. Horizontal: Limpia por dentro en vertical y por fuera en horizontal para identificar el lado con rayas.',
            'Revisión Final: Usa un paño seco para pulir manchas o huellas a la luz natural.',
            'Sin Sol Directo: Evita limpiar con luz solar directa para que el líquido no seque muy rápido.',
            'Riel Inferior: Aspira o limpia los rieles de la ventana diariamente para evitar acumulación.',
          ],
        },
        floors: {
          navTitle: 'Cuidado de Pisos',
          tipsLabel: 'Consejos Pro',
          tips: [
            'Balance Químico: No uses demasiado limpiador; el exceso causa rayas y residuo pegajoso.',
            'Calidad del Agua: Cambia el agua del trapeador cuando se vea turbia para no opacar el piso.',
            'Barrer Esquinas: Usa escoba o accesorio de aspiradora para sacar suciedad de esquinas antes de trapear.',
            'Tratamiento de Manchas: Atiende derrames de inmediato con Top Clean para evitar manchas permanentes.',
            'Aspirado de Bordes: Presta atención especial a los bordes de alfombra junto a las paredes.',
          ],
        },
        pressure_washing: {
          navTitle: 'Limpieza a Presión',
          tipsLabel: 'Consejos Pro',
          tips: [
            'Protección Personal: Usa bloqueador solar, lentes, gorra y manga larga para proteger tu piel al aire libre.',
            'Prevención de Congelamiento: No uses lavado a presión si la temperatura es menor de 0°C.',
            'Revisión del Equipo: Inspecciona diariamente fugas o desgaste en mangueras para prevenir accidentes.',
            'Mantente Hidratado: Toma agua constantemente; la hidratación es crítica durante trabajo físico al exterior.',
            'Seguridad del Área: Despeja obstáculos y cubre tomas eléctricas o plantas delicadas antes de comenzar.',
          ],
        },
        schools: {
          navTitle: 'Limpieza de Escuelas',
          tipsLabel: 'Consejos Pro',
          tips: [
            'Debajo del Escritorio: Revisa y retira chicles o calcomanías del fondo de los pupitres y sillas.',
            'Desinfección de Alto Contacto: Enfócate en sacapuntas, fuentes de agua y teclados de computadora diariamente.',
            'Trapeado de Atrás Adelante: Siempre trapea desde el fondo del salón hacia la puerta para evitar huellas.',
            'Rejillas de Casilleros: Limpia la parte superior y las ranuras de ventilación donde se acumula pelusa.',
            'Revisión Visual: Busca peligros como bordes de alfombra sueltos o muebles rotos y repórtalos de inmediato.',
          ],
        },
        banking: {
          navTitle: 'Limpieza de Bancos',
          tipsLabel: 'Consejos Pro',
          tips: [
            'Seguridad del Gafete: Nunca entregues tu gafete de acceso a nadie; es de uso exclusivo tuyo.',
            'Protocolo de Alarma: Verifica siempre que la alarma del banco esté activada antes de salir.',
            'Imagen Profesional: Usa siempre tu uniforme completo para ser fácilmente identificado en la institución.',
            'Tiempo de Calidad: Invierte el tiempo completo necesario; nunca hagas las cosas de prisa en áreas de seguridad.',
            'Privacidad Sensible: Nunca toques, muevas ni leas documentos en escritorios; trata toda la basura como confidencial.',
            'Control de Llaves: No saques llaves del banco fuera del edificio; deben quedarse en el área designada.',
          ],
        },
      },

      safety: {
        navTitle: 'Seguridad en el Trabajo',
        topics: [
          { id: 'uniform',    title: 'Requisitos de Uniforme',              description: 'Vestimenta adecuada y equipo de seguridad' },
          { id: 'osha',       title: 'Requisitos OSHA',                     description: 'Cumplimiento y estándares de seguridad' },
          { id: 'biohazards', title: 'Biohazards',                          description: 'Identificar y manejar materiales peligrosos biológicos' },
          { id: 'height',     title: 'Seguridad en Alturas',                description: 'Protocolos de seguridad con escaleras y alturas' },
          { id: 'tripping',   title: 'Riesgos de Tropiezo',                 description: 'Identificar y prevenir accidentes' },
          { id: 'ppe',        title: 'EPP (Equipo de Protección Personal)', description: 'Uso y cuidado del equipo de seguridad' },
        ],
      },

      safetyDetails: {
        uniform: {
          navTitle: 'Requisitos de Uniforme',
          points: [
            { label: 'Estándar',               text: 'Camisa de la empresa limpia y pantalón de trabajo resistente. Usa un chaleco reflectivo si tu posición lo requiere.' },
            { label: 'Calzado',                text: 'Zapatos cerrados, impermeables y antideslizantes obligatorios.' },
            { label: 'Presentación Personal',  text: 'Mantén una apariencia profesional cuidando tu imagen. Asegúrate de que tu uniforme esté limpio, sin arrugas y bien puesto. La higiene personal debe atenderse diariamente para reflejar los altos estándares de nuestro servicio y el respeto por el entorno del cliente.' },
            { label: 'Seguridad',              text: 'Sin joyería colgante ni ropa suelta para evitar enganches.' },
          ],
        },
        osha: {
          navTitle: 'Requisitos OSHA',
          points: [
            { label: 'Cumplimiento',         text: 'Sigue todos los estándares federales de seguridad y protocolos del sitio.' },
            { label: 'SDS',                  text: 'Conoce la ubicación de las Hojas de Datos de Seguridad de todos los químicos.' },
            { label: 'Señalización',         text: 'Usa siempre señales de "Precaución Piso Mojado" al trapear o ante derrames.' },
            { label: 'Etiquetado Químico',   text: 'Asegúrate de que todos los atomizadores tengan su etiqueta correspondiente y estén correctamente identificados. Nunca uses envases sin etiqueta ni marcas escritas a mano que no cumplan con los estándares de Comunicación de Peligros de OSHA.' },
          ],
        },
        biohazards: {
          navTitle: 'Biohazards',
          points: [
            { label: 'Identificación', text: 'Trata todos los fluidos corporales como infecciosos (sangre, vómito, etc.).' },
            { label: 'Eliminación',    text: 'Usa bolsas rojas de biohazard etiquetadas para desechos contaminados.' },
            { label: 'Manejo',         text: 'Nunca empujes la basura con manos o pies; usa una herramienta o cambia la bolsa.' },
          ],
        },
        height: {
          navTitle: 'Seguridad en Alturas',
          points: [
            { label: 'Equipo',     text: 'Usa solo escaleras aprobadas; nunca uses sillas, cajones o basureros.' },
            { label: 'Técnica',    text: 'Mantén tres puntos de contacto. Asegura que la escalera esté en superficie plana y estable.' },
            { label: 'Límites',    text: 'No te estires demasiado; mueve la escalera para mantenerte centrado.' },
          ],
        },
        tripping: {
          navTitle: 'Riesgos de Tropiezo',
          points: [
            { label: 'Organización', text: 'Mantén los cables de la aspiradora pegados a la pared y fuera de los pasillos.' },
            { label: 'Almacenamiento', text: 'Estaciona los carritos de limpieza al lado del pasillo, nunca bloqueando salidas.' },
            { label: 'Respuesta',    text: 'Limpia de inmediato cualquier derrame de líquidos o escombros.' },
          ],
        },
        ppe: {
          navTitle: 'EPP (Equipo de Protección Personal)',
          points: [
            { label: 'Protección de Manos', text: 'Usa guantes de nitrilo o látex en todas las tareas de limpieza.' },
            { label: 'Protección Ocular',   text: 'Usa gafas de seguridad al verter o rociar químicos.' },
            { label: 'Respiratorio',        text: 'Usa mascarillas en áreas con polvo o al usar desinfectantes fuertes.' },
          ],
        },
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
  const SubPageNav = ({ title, icon, onBack }) => (
    <div className="sticky top-0 z-10 shadow-lg">
      <div className="bg-blue-900 text-white py-3 px-4 flex items-center relative">
        <button onClick={onBack ?? goHome} className="hover:bg-blue-800 p-2 rounded transition flex-shrink-0">
          <ArrowLeft size={22} />
        </button>
        <div className="absolute left-0 right-0 flex items-center justify-center gap-2 pointer-events-none">
          {icon && <span className="text-lg">{icon}</span>}
          <h2 className="font-bold text-base">{title}</h2>
        </div>
        <div className="ml-auto flex-shrink-0"><LangToggle /></div>
      </div>
      <div className="bg-white border-b border-gray-100 py-2.5 text-center">
        <img src="/kg-logo.png" alt="KG Masterclass" className="h-11 mx-auto object-contain" />
      </div>
    </div>
  );

  // ── Home Screen ──────────────────────────────────────────────────────────────
  const categoryAccents = {
    kgfs:      'bg-blue-900',
    cleaning:  'bg-sky-500',
    chemicals: 'bg-emerald-600',
    equipment: 'bg-orange-500',
    safety:    'bg-red-500',
    standards: 'bg-violet-600',
    resources: 'bg-slate-500',
  };

  const renderHome = () => (
    <div className="min-h-screen bg-slate-50 pb-52">

      {/* ── Hero ── */}
      <div
        className="relative pt-14 pb-20 text-center"
        style={{
          backgroundImage: 'url("/janitor-cart.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/95 via-blue-900/88 to-blue-800/70" />

        {/* Lang toggle */}
        <div className="absolute top-5 right-5 z-10">
          <LangToggle />
        </div>

        {/* Logo + subtitle */}
        <div className="relative z-10 px-6">
          <div className="bg-white rounded-3xl px-8 py-5 mx-auto inline-block shadow-2xl">
            <img src="/kg-logo.png" alt="KG Masterclass" className="h-20 mx-auto object-contain" />
          </div>
          <p className="text-white/70 text-xs mt-4 tracking-widest uppercase font-semibold">{t.subtitle}</p>
        </div>

        {/* Curved bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-slate-50" style={{ borderRadius: '2rem 2rem 0 0' }} />
      </div>

      {/* ── Categories ── */}
      <div className="px-4 pt-2 pb-6">
        <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-4 px-1">
          {lang === 'en' ? 'Select a category' : 'Selecciona una categoría'}
        </p>
        <div className="space-y-3">
          {t.categories.map(({ id, title, description }) => {
            const Icon = categoryIcons[id];
            const accent = categoryAccents[id] || 'bg-blue-900';
            return (
              <button
                key={id}
                onClick={() => navigateTo(id)}
                className="w-full bg-white rounded-2xl shadow-sm hover:shadow-md active:scale-95 transition-all text-left border border-gray-100 overflow-hidden group"
              >
                <div className="flex items-center gap-4 px-4 py-4">
                  <div className={`flex-shrink-0 w-12 h-12 ${accent} rounded-2xl flex items-center justify-center shadow-md transition-opacity group-hover:opacity-90`}>
                    {id === 'chemicals'
                      ? <img src="/spray-bottle.svg" alt="Chemicals" className="w-7 h-7 object-contain" />
                      : <Icon size={22} className="text-white" />
                    }
                  </div>
                  <div className="flex-grow min-w-0">
                    <h3 className="text-blue-900 font-bold text-base leading-tight">{title}</h3>
                    <p className="text-gray-400 text-xs mt-0.5">{description}</p>
                  </div>
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-slate-100 group-hover:bg-blue-50 transition-colors flex items-center justify-center">
                    <ChevronRight className="text-blue-900" size={14} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Fixed Footer ── */}
      <div className="fixed bottom-0 left-0 right-0 bg-blue-900 px-4 py-2 text-center shadow-2xl">
        <button
          onClick={() => { setFormSubmitted(false); setFormErrors({}); navigateTo('registration'); }}
          className="bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-500 text-blue-900 font-bold py-2 px-8 rounded-xl transition-all w-full shadow-lg text-sm mb-1.5"
        >
          🎯 {t.takeQuiz}
        </button>
        <p className="text-white text-xs mb-1 font-semibold">{t.needMoreInfo}</p>
        <button
          onClick={() => navigateTo('contact')}
          className="bg-cyan-500 hover:bg-cyan-600 text-blue-900 font-bold py-1.5 px-8 rounded-xl transition-colors w-full shadow text-xs"
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
            <img src="/kg-logo-mean1.png" alt="KG Logo" className="h-28 object-contain" />
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

  // ── Cleaning Detail Screen ───────────────────────────────────────────────────
  const cleaningVideos = {
    offices:          'https://youtu.be/7plGAX-Iz6I',
    bathrooms:        'https://youtu.be/s5VSezTEs4Y',
    kitchens:         'https://youtu.be/dzPdmqC8Inc',
    windows:          'https://youtu.be/b3WzpEF5djI',
    floors:           'https://youtu.be/qZuChjwZ_BI',
    pressure_washing: 'https://youtu.be/Px41NCJM2TA',
  };

  const getYouTubeId = (url) => {
    const match = url.match(/youtu\.be\/([^?&]+)/);
    return match ? match[1] : null;
  };

  const renderCleaningDetail = (subId) => {
    const detail = t.cleaningDetails[subId];
    if (!detail) return null;
    return (
      <div className="min-h-screen bg-slate-50 pb-20">
        <SubPageNav
          title={detail.navTitle}
          onBack={() => navigateTo('cleaning')}
        />

        <div className="max-w-2xl mx-auto px-5 pt-6 space-y-6">

          {/* ── Video ── */}
          {cleaningVideos[subId] ? (() => {
            const videoId = getYouTubeId(cleaningVideos[subId]);
            return (
              <a
                href={cleaningVideos[subId]}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl overflow-hidden shadow-md relative group"
              >
                <img
                  src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                  alt="Video thumbnail"
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl ml-1">▶</span>
                  </div>
                </div>
              </a>
            );
          })() : (
            <div className="rounded-2xl overflow-hidden border-2 border-dashed border-blue-200 bg-blue-50 flex flex-col items-center justify-center gap-3 py-14">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-3xl">▶️</span>
              </div>
              <p className="text-blue-400 font-semibold text-sm">Video coming soon</p>
            </div>
          )}

          {/* ── Tips ── */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <ul className="divide-y divide-gray-50">
              {detail.tips.map((tip, idx) => {
                const [bold, ...rest] = tip.split(':');
                const hasColon = tip.includes(':');
                return (
                  <li key={idx} className="flex flex-col items-center text-center gap-2 px-5 py-4">
                    <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-white text-xs font-bold">✓</span>
                    </span>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {hasColon
                        ? <><strong className="text-blue-900">{bold}:</strong>{rest.join(':')}</>
                        : tip}
                    </p>
                  </li>
                );
              })}
            </ul>
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
            {c.subCategories.map((sub) => {
              const SubIcon = cleaningSubIcons[sub.id];
              return (
                <button
                  key={sub.id}
                  onClick={() => navigateTo(`cleaning-${sub.id}`)}
                  className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center gap-3 hover:shadow-lg hover:scale-105 transition-all border border-gray-100"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-800 to-blue-900 rounded-full flex items-center justify-center shadow-md">
                    {sub.id === 'pressure_washing'
                      ? <img src="/pw-icon.svg" alt="Pressure Washing" className="w-9 h-9 object-contain" />
                      : SubIcon && <SubIcon size={24} className="text-white" />
                    }
                  </div>
                  <p className="text-blue-900 font-semibold text-sm text-center">{sub.title}</p>
                </button>
              );
            })}
          </div>
        </div>
        <PageFooter />
      </div>
    );
  };

  // ── Safety Detail Screen ─────────────────────────────────────────────────────
  const renderSafetyDetail = (topicId) => {
    const detail = t.safetyDetails[topicId];
    if (!detail) return null;
    return (
      <div className="min-h-screen bg-slate-50 pb-20">
        <SubPageNav
          title={detail.navTitle}
          icon="🛡️"
          onBack={() => navigateTo('safety')}
        />

        <div className="max-w-2xl mx-auto px-5 pt-6 space-y-6">

          {/* ── Image Placeholder ── */}
          <div className="rounded-2xl overflow-hidden border-2 border-dashed border-blue-200 bg-blue-50 flex flex-col items-center justify-center gap-3 py-14">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-3xl">🖼️</span>
            </div>
            <p className="text-blue-400 font-semibold text-sm">Image coming soon</p>
          </div>

          {/* ── Detail Points ── */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <ul className="divide-y divide-gray-50">
              {detail.points.map((point, idx) => (
                <li key={idx} className="flex flex-col items-center text-center gap-2 px-5 py-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-white text-xs font-bold">✓</span>
                  </span>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong className="text-blue-900">{point.label}:</strong> {point.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

        </div>
        <PageFooter />
      </div>
    );
  };

  // ── Generic Topics Screen (Safety / Equipment) ────────────────────────────────
  const renderTopics = (navTitle, icon, topics, onTopicClick) => (
    <div className="min-h-screen bg-slate-50 pb-20">
      <SubPageNav title={navTitle} icon={icon} />

      <div className="p-6 max-w-2xl mx-auto space-y-3">
        {topics.map((topic, idx) => (
          <button
            key={idx}
            onClick={onTopicClick ? () => onTopicClick(topic.id) : undefined}
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
    case 'cleaning':              return renderCleaning();
    case 'cleaning-offices':      return renderCleaningDetail('offices');
    case 'cleaning-bathrooms':    return renderCleaningDetail('bathrooms');
    case 'cleaning-kitchens':     return renderCleaningDetail('kitchens');
    case 'cleaning-windows':      return renderCleaningDetail('windows');
    case 'cleaning-floors':       return renderCleaningDetail('floors');
    case 'cleaning-pressure_washing': return renderCleaningDetail('pressure_washing');
    case 'cleaning-schools':      return renderCleaningDetail('schools');
    case 'cleaning-banking':      return renderCleaningDetail('banking');
    case 'safety':            return renderTopics(t.safety.navTitle, '🛡️', t.safety.topics, (id) => navigateTo(`safety-${id}`));
    case 'safety-uniform':    return renderSafetyDetail('uniform');
    case 'safety-osha':       return renderSafetyDetail('osha');
    case 'safety-biohazards': return renderSafetyDetail('biohazards');
    case 'safety-height':     return renderSafetyDetail('height');
    case 'safety-tripping':   return renderSafetyDetail('tripping');
    case 'safety-ppe':        return renderSafetyDetail('ppe');
    case 'equipment':    return renderTopics(t.equipment.navTitle, '🔧', t.equipment.topics);
    case 'chemicals':    return renderChemicals();
    case 'standards':    return renderStandards();
    case 'resources':    return renderResources();
    case 'contact':      return renderContact();
    default:             return renderHome();
  }
}
