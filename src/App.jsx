import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronRight, ArrowLeft, Building2, Sparkles, Shield, Wrench, Droplets, Star, FolderOpen, ShieldCheck, Lightbulb, Users2, ClipboardCheck, Handshake, Briefcase, SprayCan, ShowerHead, UtensilsCrossed, AppWindow, Grid3x3, Gauge, GraduationCap, Landmark } from 'lucide-react';

function ImageSlider({ images }) {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCurrent(i => (i + 1) % images.length), 4000);
    return () => clearInterval(timer);
  }, [images.length]);
  const prev = () => setCurrent(i => (i - 1 + images.length) % images.length);
  const next = () => setCurrent(i => (i + 1) % images.length);
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-md bg-black" style={{ aspectRatio: '16/9' }}>
      {images.map((src, idx) => (
        <img key={idx} src={src} alt={`Slide ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${idx === current ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white text-xl leading-none transition-colors">‹</button>
      <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white text-xl leading-none transition-colors">›</button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button key={idx} onClick={() => setCurrent(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${idx === current ? 'w-5 bg-white' : 'w-2 bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
}

// ── Quiz Questions (bilingual) ────────────────────────────────────────────────
const quizData = [
  { correct: 2,
    en: { q: 'What color are the microfiber cloths (rags) designated for restrooms?', opts: ['Blue','Green','Pink'] },
    es: { q: '¿De qué color son los paños de microfibra (trapos) designados para los baños?', opts: ['Azul','Verde','Rosa'] },
  },
  { correct: 1,
    en: { q: 'BLUE mops are specifically used for:', opts: ['Food preparation areas','Offices, hallways, reception, and conference rooms','Inside restrooms only'] },
    es: { q: 'Los mops de color AZUL se usan específicamente en:', opts: ['Áreas de preparación de alimentos','Oficinas, pasillos, recepción y salas de conferencia','Solo dentro de los baños'] },
  },
  { correct: 2,
    en: { q: 'When should you replace a vacuum filter bag?', opts: ['When it is completely full','At half capacity','When it reaches 2/3 capacity'] },
    es: { q: '¿Cuándo debes reemplazar la bolsa del filtro de la aspiradora?', opts: ['Cuando esté completamente llena','A la mitad de capacidad','Cuando llegue a 2/3 de capacidad'] },
  },
  { correct: 2,
    en: { q: 'What should you do with dirty mops at the end of your shift?', opts: ['Store them wet in the closet','Leave them in the sink','Place them in the textile collection area for professional laundering'] },
    es: { q: '¿Qué debes hacer con los mops sucios al final de tu turno?', opts: ['Guardarlos mojados en el clóset','Dejarlos en el fregadero','Colocarlos en el área de recolección textil para lavado profesional'] },
  },
  { correct: 1,
    en: { q: 'Which chemical product is used to clean windows and mirrors without leaving streaks?', opts: ['NABC','Glance / Klearview','Oxivir'] },
    es: { q: '¿Qué producto químico se usa para limpiar ventanas y espejos sin dejar rayas?', opts: ['NABC','Glance / Klearview','Oxivir'] },
  },
  { correct: 2,
    en: { q: 'How long must NABC remain on a surface to guarantee complete disinfection?', opts: ['2 minutes','5 minutes','10 minutes'] },
    es: { q: '¿Por cuánto tiempo debe permanecer el NABC en la superficie para garantizar la desinfección completa?', opts: ['2 minutos','5 minutos','10 minutos'] },
  },
  { correct: 2,
    en: { q: 'What product should you use to remove heavy calcium deposits, scale, and rust?', opts: ['Neutral dish soap','Assurance','CLR'] },
    es: { q: '¿Qué producto debes usar para eliminar depósitos de calcio, sarro y óxido?', opts: ['Jabón neutro para platos','Assurance','CLR'] },
  },
  { correct: 1,
    en: { q: 'What are Victoria Bay Liquid Enzymes used for?', opts: ['Polishing metal','Eliminating organic odors in drains and restrooms','Cleaning glass'] },
    es: { q: '¿Para qué se usan los Victoria Bay Liquid Enzymes?', opts: ['Pulir metales','Eliminar olores orgánicos en desagües y baños','Limpiar vidrios'] },
  },
  { correct: 1,
    en: { q: 'What should you do if a chemical splashes onto your skin?', opts: ['Apply neutralizing cream','Rinse with plenty of running water for at least 15 minutes','Wipe it off with a dry cloth'] },
    es: { q: '¿Qué debes hacer si un químico te salpica la piel?', opts: ['Aplicar crema neutralizante','Enjuagar con abundante agua corriente por al menos 15 minutos','Limpiarlo con un paño seco'] },
  },
  { correct: 1,
    en: { q: 'According to uniform standards, what type of footwear is mandatory?', opts: ['Any comfortable athletic shoes','Closed-toe, waterproof, and non-slip shoes','Open-toe sandals or flip-flops'] },
    es: { q: 'Según los estándares de uniforme, ¿qué tipo de calzado es obligatorio?', opts: ['Cualquier zapato deportivo cómodo','Zapatos de punta cerrada, impermeables y antideslizantes','Sandalias o chanclas de punta abierta'] },
  },
  { correct: 1,
    en: { q: 'What should you use to reach high cleaning areas?', opts: ['A sturdy chair or box','Only approved ladders','The edge of the cleaning cart'] },
    es: { q: '¿Qué debes usar para alcanzar áreas de limpieza en altura?', opts: ['Una silla o caja resistente','Solo escaleras aprobadas','El borde del carrito de limpieza'] },
  },
  { correct: 1,
    en: { q: 'How should biological waste (blood, vomit, etc.) be disposed of?', opts: ['In the regular trash bag','In properly labeled red Biohazard bags','Flushed down the toilet with extra water'] },
    es: { q: '¿Cómo deben desecharse los residuos biológicos (sangre, vómito, etc.)?', opts: ['En la bolsa de basura regular','En bolsas rojas de biohazard debidamente etiquetadas','Tirarlo por el inodoro con suficiente agua'] },
  },
  { correct: 1,
    en: { q: 'According to OSHA, when must you place "Caution Wet Floor" signs?', opts: ['Only when the floor is very wet','Whenever you are mopping or if a spill occurs','Only if someone is walking nearby'] },
    es: { q: 'Según OSHA, ¿cuándo debes colocar señales de "Caution Wet Floor"?', opts: ['Solo cuando el piso esté muy mojado','Siempre que estés trapeando o si ocurre un derrame','Solo si alguien está caminando cerca'] },
  },
  { correct: 1,
    en: { q: 'When dusting an office, in which direction should you start?', opts: ['From the bottom up','From the top down','From the center toward the corners'] },
    es: { q: 'Al desempolvar una oficina, ¿en qué dirección debes empezar?', opts: ['De abajo hacia arriba','De arriba hacia abajo','Desde el centro hacia las esquinas'] },
  },
  { correct: 1,
    en: { q: 'What would you use to restore the shine of chrome fixtures?', opts: ['Pure CLR','Dawn dish soap with warm water','High-strength disinfectant'] },
    es: { q: '¿Qué usarías para restaurar el brillo de los accesorios de cromo?', opts: ['CLR puro','Dawn con agua tibia','Desinfectante de alta resistencia'] },
  },
  { correct: 1,
    en: { q: 'When should you change the water in your mop bucket?', opts: ['Once per shift','As soon as the water looks cloudy or dirty','After cleaning every three rooms'] },
    es: { q: '¿Cuándo debes cambiar el agua en tu balde de trapeador?', opts: ['Una vez por turno','En cuanto el agua se vea turbia o sucia','Después de limpiar cada tres cuartos'] },
  },
  { correct: 1,
    en: { q: 'When cleaning an office, what should you do with documents found on desks?', opts: ['Organize and stack them neatly','Never touch, move, or read them','Move them to clean underneath and put them back'] },
    es: { q: 'Al limpiar una oficina, ¿qué debes hacer con los documentos en los escritorios?', opts: ['Organizarlos y apilarlos cuidadosamente','Nunca tocarlos, moverlos ni leerlos','Moverlos para limpiar debajo y volver a colocarlos'] },
  },
  { correct: 1,
    en: { q: 'In what year was KG Facility Solutions founded?', opts: ['1990','1995','2000'] },
    es: { q: '¿En qué año fue fundada KG Facility Solutions?', opts: ['1990','1995','2000'] },
  },
  { correct: 2,
    en: { q: 'Which of the following is NOT a Core Value of KGFS?', opts: ['Integrity','Accountability','Competition'] },
    es: { q: '¿Cuál de los siguientes NO es un Core Value de KGFS?', opts: ['Integridad','Responsabilidad','Competencia'] },
  },
  { correct: 1,
    en: { q: 'What should you do if you are going to be late for your shift?', opts: ['Send a message at the end of the day','Notify your supervisor before the shift begins','Just show up as soon as possible'] },
    es: { q: '¿Qué debes hacer si vas a llegar tarde a tu turno?', opts: ['Enviar un mensaje al final del día','Notificar a tu supervisor antes de que comience el turno','Llegar lo antes posible sin avisar'] },
  },
];

export default function KGMasterClass() {
  const [showSplash, setShowSplash] = useState(true);
  const [splashHiding, setSplashHiding] = useState(false);
  const [currentScreen, setCurrentScreen] = useState(
    () => localStorage.getItem('currentScreen') || 'home'
  );
  const [lang, setLang] = useState('en');
  const [selectedChemical, setSelectedChemical] = useState(null);
  const [openSafetyTopic, setOpenSafetyTopic] = useState(null);
  const [openSafetyItem, setOpenSafetyItem] = useState(null);
  const [openResourceItem, setOpenResourceItem] = useState(null);
  const [userInfo, setUserInfo] = useState({ name: '', phone: '', email: '', role: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [quizAnswers, setQuizAnswers] = useState(Array(20).fill(null));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizScore, setQuizScore] = useState(null);
  const [quizSubmitting, setQuizSubmitting] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [pullY, setPullY] = useState(0);
  const pullStartY = useRef(0);
  const pullTimerRef = useRef(null);
  const pullActiveRef = useRef(false);
  const safetyRefs = useRef([]);

  // ── Scroll listener for parallax ──────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Pull-to-refresh: hold 3 seconds while pulled down ────────────────────────
  useEffect(() => {
    const cancel = () => {
      clearTimeout(pullTimerRef.current);
      pullTimerRef.current = null;
      pullActiveRef.current = false;
      setPullY(0);
    };

    const onStart = (e) => {
      pullStartY.current = e.touches[0].clientY;
    };

    const onMove = (e) => {
      const delta = e.touches[0].clientY - pullStartY.current;
      if (delta <= 40) { if (pullActiveRef.current) cancel(); return; }
      const scrollEls = document.querySelectorAll('.overflow-y-auto');
      const atTop = Array.from(scrollEls).some(el => el.scrollTop <= 2);
      if (!atTop) { if (pullActiveRef.current) cancel(); return; }
      setPullY(Math.min(delta * 0.4, 60));
      if (!pullActiveRef.current) {
        pullActiveRef.current = true;
        pullTimerRef.current = setTimeout(() => { window.location.reload(); }, 3000);
      }
    };

    const onEnd = () => { cancel(); };

    document.addEventListener('touchstart', onStart, { passive: true });
    document.addEventListener('touchmove', onMove, { passive: true });
    document.addEventListener('touchend', onEnd);
    return () => {
      document.removeEventListener('touchstart', onStart);
      document.removeEventListener('touchmove', onMove);
      document.removeEventListener('touchend', onEnd);
    };
  }, []);

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
            { label: 'Standard',              text: 'Clean company-issued KG shirt, an apron, and durable work pants. Wear a reflective vest if your position requires you to. Always wear closed-toe, non-slip shoes for safety.' },
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
        items: [
          { title: 'Microfiber Cloths (Rags)', points: [
            { label: 'Usage', text: 'Use the color-coded system to prevent cross-contamination:', subPoints: [
              { label: 'Blue',  color: '#60a5fa', text: 'Designated for glass surfaces, windows, and mirrors.' },
              { label: 'Green', color: '#4ade80', text: 'For general surfaces such as desks, tables, counters, and furniture.' },
              { label: 'Pink',  color: '#f9a8d4', text: 'Designated exclusively for restrooms and bathroom surfaces.' },
            ]},
            { label: 'Maintenance', text: 'At the end of your shift, place all used cloths in the designated laundry bin.' },
            { label: 'Care',        text: 'Ensure you remove any large debris before depositing them for centralized washing.' },
          ]},
          { title: 'Mop Heads', points: [
            { label: 'Usage', text: 'Select the correct mop color for your assigned area and secure it firmly to the handle before applying chemicals.', subPoints: [
              { label: 'Blue',  color: '#60a5fa', text: 'Use for low-risk areas such as offices, hallways, receptions, and conference rooms.' },
              { label: 'Green', color: '#4ade80', text: 'Reserved for general cleaning areas or as determined by specific facility protocols.' },
              { label: 'Pink',  color: '#f9a8d4', text: 'Exclusive for restrooms and high-risk sanitary areas.' },
            ]},
            { label: 'Maintenance', text: 'Once the job is finished, place dirty mop heads in the textile collection area for professional laundering.' },
            { label: 'Care',        text: 'Never store damp mops in closed closets; leave them in the collection area to allow for proper airflow.' },
          ]},
          { title: 'Backpack & Upright Vacuums', points: [
            { label: 'Usage — Backpack', text: 'Adjust the harness to your hips and keep the power cord visible behind you at all times.' },
            { label: 'Usage — Upright',  text: 'Adjust the head height based on the carpet thickness to protect the motor.' },
            { label: 'Maintenance',      text: 'Check the filter bag and replace it if it is 2/3 full to maintain strong suction power.' },
            { label: 'Care',             text: 'Regularly clean the rotating brush (beater bar) to remove hair or strings that may block the movement.' },
          ]},
          { title: 'Auto Scrubber Machines', points: [
            { label: 'Usage',       text: 'Fill the solution tank with the exact chemical and water mixture as specified in the equipment manual. Operate at a steady speed to ensure the vacuum system picks up all moisture in a single pass.' },
            { label: 'Maintenance', text: 'Completely empty and rinse the recovery tank after every use to prevent sediment buildup and bad odors.' },
            { label: 'Care',        text: 'Remove the pads or brushes and clean the squeegee blade to guarantee perfect drying for the next shift.' },
          ]},
        ],
        tutorials: {
          title: 'Learn More: Equipment Tutorials',
          videos: [
            { title: 'Backpack Operation',    desc: 'Adjusting the ergonomic harness and using specialized attachments.',                          url: 'https://www.youtube.com/watch?v=GvJoW9uHZmI', id: 'GvJoW9uHZmI' },
            { title: 'Backpack Maintenance',  desc: 'Step-by-step filter replacement and suction optimization.',                                   url: 'https://www.youtube.com/watch?v=Szig0xS7pjI', id: 'Szig0xS7pjI' },
            { title: 'Upright Vacuum',        desc: 'Brush roll cleaning and motor intake filter care.',                                           url: 'https://www.youtube.com/watch?v=Cfj9t1pXgxI', id: 'Cfj9t1pXgxI' },
            { title: 'Auto Scrubber',         desc: 'Floor preparation, solution tank setup, and squeegee adjustment.',                            url: 'https://www.youtube.com/watch?v=VF_ZH5xeq5A', id: 'VF_ZH5xeq5A' },
          ],
        },
      },

      chemicals: {
        navTitle: 'Chemicals',
        descriptions: {
          nabc:       'NABC (Non-Acid Disinfectant Bathroom Cleaner): A hospital-grade disinfectant and bathroom cleaner that effectively kills bacteria and viruses while neutralizing odors. Due to its neutral pH and pleasant scent, it is technically safe for all hard, non-porous surfaces. To use, spray the surface evenly, allow it to remain wet for 10 minutes to ensure full disinfection, and wipe clean with the appropriate microfiber cloth.',
          klearview:  'Glance / Klearview: A streak-free glass and surface cleaner specifically formulated for windows, mirrors, and other reflective surfaces. This professional-grade solution is designed to remove fingerprints, dust, and grime without leaving residues, ensuring a crystal-clear finish. To use, spray the product directly onto the glass or reflective surface and wipe immediately with a clean, lint-free microfiber cloth using a consistent motion to avoid streaking.',
          topclean:   'Top Clean: A neutral pH floor cleaner designed for daily maintenance of finished floors without dulling or damaging the protective coating. It effectively removes soil and prevents film build-up, leaving surfaces clean and shiny. To use, dilute as directed, apply with a mop or autoscrubber, and allow to air dry; no rinsing is required.',
          nutrarinse: 'Nutra Rinse: A high-performance neutralizer and conditioner specifically used to remove ice melt residue, salt, and dried floor stripper. It helps eliminate white powdery streaks and restores the floor\'s natural appearance. To use, dilute with water, apply to the affected area, and mop or vacuum thoroughly to neutralize the surface.',
          assurance:  'Assurance: A heavy-duty degreaser and multi-purpose cleaner formulated to break down tough grease, oils, and stubborn soils on various surfaces. It is ideal for industrial or high-traffic areas requiring deep cleaning. To use, apply to the surface, allow it to penetrate the grime for a few minutes, and scrub or wipe clean with a cloth or mop.',
          oxivir:     'Oxivir: A fast-acting, hydrogen peroxide-based disinfectant cleaner that provides broad-spectrum sanitization and disinfection. It is safe for most hard surfaces and is ideal for high-touch areas due to its short dwell time and low toxicity. To use, spray the surface until wet, allow it to sit for the recommended contact time, and wipe with a clean cloth.',
          ajax:       'Ajax with Bleach: A powerful scouring powder designed to scrub away tough stains, grease, and soap scum while disinfecting with the power of bleach. It is best suited for durable surfaces like porcelain, ceramic tile, and stainless steel in restrooms or kitchens. To use, wet the surface, sprinkle the powder, scrub gently with a sponge or brush, and rinse thoroughly with water.',
          clr:        'CLR (Calcium, Lime & Rust Remover): A specialized acidic cleaner used to dissolve tough calcium and lime deposits as well as surface rust stains. It is highly effective for fixtures, showerheads, and surfaces exposed to hard water. To use, apply to the stained area, let it work for a few minutes, scrub if necessary, and rinse well.',
          enzymes:    'Victoria Bay Liquid Enzymes: A biological treatment containing live cultures that digest organic waste and eliminate odors at the source. It is ideal for floor drains, restrooms, and carpets where organic matter causes persistent smells. To use, apply directly to the source of the odor or waste and allow the enzymes to work naturally without immediate rinsing.',
          stainless:  'Stainless Steel Polish: A professional-grade polish that cleans, protects, and enhances the luster of stainless steel surfaces. It creates a protective barrier that resists fingerprints, water spots, and streaks. To use, apply a small amount to a clean, dry microfiber cloth, wipe with the grain of the metal, and buff to a high shine.',
        },
        section1: {
          title: 'How to Use & Where to Use',
        },
        section2: {
          title: 'Chemical Safety',
          topics: [
            { title: 'Chemical Safety', points: [
              { label: 'Protect Yourself', text: 'Always wear your required Personal Protective Equipment (PPE), such as gloves and safety goggles, before handling any product.' },
              { label: 'Ventilation', text: 'Ensure your workspace has proper airflow to avoid breathing in strong chemical vapors.' },
              { label: 'Never Mix', text: 'Do not combine different chemicals. This can create toxic gases that are extremely dangerous to your health.' },
            ]},
            { title: 'Storage', points: [
              { label: 'Original Containers', text: 'Always keep chemicals in their original factory bottles with legible labels.' },
              { label: 'Proper Location', text: 'Store products in cool, dry, and well-ventilated areas, far away from any food.' },
              { label: 'Access Control', text: 'Ensure chemicals are stored in locked cabinets or areas where only authorized staff can enter.' },
            ]},
            { title: 'Emergency Procedures', points: [
              { label: 'Top Priority', text: 'If a serious accident occurs or you feel you are in danger, stay calm and call 911 immediately.' },
              { label: 'Eye or Skin Contact', text: 'If you are splashed by a chemical, do not wait; flush the affected area with plenty of running water for at least 15 minutes straight.' },
              { label: 'Check the SDS', text: 'Always refer to the Safety Data Sheet (SDS) for the specific product to find first-aid instructions while help is on the way.' },
              { label: 'Golden Rule', text: 'Never try to mix one chemical with another to "clean" a spill or contact; use only water for rinsing and seek medical attention immediately.' },
            ]},
            { title: 'Safety Data Sheet (SDS)', points: [
              { label: 'Your Reference Guide', text: 'Use SDS sheets to learn about the specific hazards of products like NABC or Oxivir.' },
              { label: 'Key Information', text: 'These documents tell you exactly what ingredients are in the product and what to do in case of accidental contact.' },
              { label: 'Quick Location', text: 'Memorize where the SDS manual is kept at your job site so you can check it immediately if you have any questions.' },
            ]},
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
        appsDesc: [
          'Photo evidence with geolocation.',
          'Shift scheduling and attendance management.',
          'HR, payroll, and employee benefits.',
          'Quality control inspections.',
        ],
        items: [
          { icon: '📱', title: 'My Applications', description: 'Access your work apps and platforms' },
          {
            icon: '💵', title: 'How to obtain my pay stubs from TriNet', description: 'Step-by-step guide to access your pay stubs',
            steps: [
              'Open the app and go to the "Money" tab at the bottom.',
              'Tap on "Pay".',
              'Select the specific date of the paycheck you want to view.',
              'Tap "View Statement" to see the full PDF detail.',
            ],
          },
          {
            icon: '📖', title: 'How to get the Employee Handbook on Trinet?', description: 'Step-by-step guide to download your handbook',
            steps: [
              'Go to the "Menu" (three lines or "More" icon).',
              'Look for the "Company" or "Documents" section.',
              'Tap on "Employee Handbook" or "Company Documents".',
            ],
            note: 'Here you can read all KG Facility Solutions policies anytime.',
          },
          {
            icon: '📄', title: 'How to download my W2 on Tri-Net?', description: 'Access and download your tax documents',
            steps: [
              'In the "Money" tab, select "Taxes".',
              'Tap on "Statements".',
              'Select the year and tap the download icon or "View PDF" to save it to your phone.',
            ],
          },
          {
            icon: '☎️', title: 'Contact Trinet', description: 'Get support directly from Trinet',
            phone: 'tel:8006380461', phoneLabel: 'Call TriNet Support',
            scheduleTitle: 'Monday – Friday',
            schedule: [
              { zone: 'Eastern',  hours: '6:00 a.m. – Midnight' },
              { zone: 'Central',  hours: '5:00 a.m. – 11:00 p.m.' },
              { zone: 'Mountain', hours: '4:00 a.m. – 10:00 p.m.' },
              { zone: 'Pacific',  hours: '3:00 a.m. – 9:00 p.m.' },
            ],
          },
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
        emailPlaceholder: 'Email address',
        startBtn:     'Start Quiz',
        errors: {
          name:  'Please enter your full name.',
          phone: 'Please enter a valid phone number.',
          email: 'Please enter a valid email address.',
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
        emailPlaceholder: 'Correo electrónico',
        startBtn:     'Iniciar Quiz',
        errors: {
          name:  'Por favor ingresa tu nombre completo.',
          phone: 'Por favor ingresa un número de teléfono válido.',
          email: 'Por favor ingresa un correo electrónico válido.',
          role:  'Por favor selecciona tu rol.',
        },
        successHeading:  '¡Todo listo!',
        successMessage:  'Tu información fue guardada. ¡Mucho éxito en el quiz!',
        backHome:        'Volver al Inicio',
      },
    },
    quiz: {
      en: {
        navTitle: 'Take a Quiz',
        questionOf: (n, t) => `Question ${n} of ${t}`,
        prev: 'Previous',
        next: 'Next',
        submit: 'Submit Quiz',
        submitNote: 'Answer all questions to submit',
        unanswered: 'Please answer all questions before submitting.',
        sending: 'Sending your results…',
        resultTitle: 'Quiz Complete!',
        scoreLabel: 'Your Score',
        high: 'Excellent! Outstanding performance.',
        mid: 'Good job! Keep reviewing the material.',
        low: 'Keep studying — you\'ll improve!',
        correct: 'Correct',
        incorrect: 'Incorrect',
        retake: 'Retake Quiz',
        backHome: 'Back to Home',
        emailSent: '✓ Results sent to your email.',
        emailError: 'Could not send email, but your results were recorded.',
        adminSubject: (name) => `Quiz Result — ${name}`,
        userSubject: 'Your KG Masterclass Quiz Results',
      },
      es: {
        navTitle: 'Tomar Quiz',
        questionOf: (n, t) => `Pregunta ${n} de ${t}`,
        prev: 'Anterior',
        next: 'Siguiente',
        submit: 'Enviar Quiz',
        submitNote: 'Responde todas las preguntas para enviar',
        unanswered: 'Por favor responde todas las preguntas antes de enviar.',
        sending: 'Enviando tus resultados…',
        resultTitle: '¡Quiz Completado!',
        scoreLabel: 'Tu Puntaje',
        high: '¡Excelente! Rendimiento sobresaliente.',
        mid: '¡Buen trabajo! Sigue repasando el material.',
        low: 'Sigue estudiando — ¡mejorarás!',
        correct: 'Correcto',
        incorrect: 'Incorrecto',
        retake: 'Repetir Quiz',
        backHome: 'Volver al Inicio',
        emailSent: '✓ Resultados enviados a tu correo.',
        emailError: 'No se pudo enviar el email, pero tus resultados fueron registrados.',
        adminSubject: (name) => `Resultado Quiz — ${name}`,
        userSubject: 'Tus Resultados del Quiz KG Masterclass',
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
            { label: 'Estándar',               text: 'Camisa KG de la empresa limpia, un delantal y pantalón de trabajo resistente. Usa un chaleco reflectivo si tu posición lo requiere. Usa siempre zapatos cerrados y antideslizantes por seguridad.' },
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
        items: [
          { title: 'Trapos de Microfibra', points: [
            { label: 'Uso', text: 'Usa el sistema de colores para evitar la contaminación cruzada:', subPoints: [
              { label: 'Azul',   color: '#60a5fa', text: 'Designado para superficies de vidrio, ventanas y espejos.' },
              { label: 'Verde',  color: '#4ade80', text: 'Para superficies generales como escritorios, mesas, mostradores y muebles.' },
              { label: 'Rosado', color: '#f9a8d4', text: 'Designado exclusivamente para baños y superficies sanitarias.' },
            ]},
            { label: 'Mantenimiento', text: 'Al final de tu turno, coloca todos los trapos usados en el contenedor de lavandería designado.' },
            { label: 'Cuidado',       text: 'Asegúrate de retirar los residuos grandes antes de depositarlos para el lavado centralizado.' },
          ]},
          { title: 'Cabezales de Trapeador', points: [
            { label: 'Uso', text: 'Selecciona el color de trapeador correcto para tu área asignada y asegúralo firmemente al mango antes de aplicar químicos.', subPoints: [
              { label: 'Azul',   color: '#60a5fa', text: 'Úsalo en áreas de bajo riesgo como oficinas, pasillos, recepciones y salas de conferencias.' },
              { label: 'Verde',  color: '#4ade80', text: 'Reservado para áreas de limpieza general o según los protocolos específicos de la instalación.' },
              { label: 'Rosado', color: '#f9a8d4', text: 'Exclusivo para baños y áreas sanitarias de alto riesgo.' },
            ]},
            { label: 'Mantenimiento', text: 'Una vez terminado el trabajo, coloca los cabezales sucios en el área de recolección textil para lavado profesional.' },
            { label: 'Cuidado',       text: 'Nunca guardes trapeadores húmedos en closets cerrados; déjalos en el área de recolección para permitir una ventilación adecuada.' },
          ]},
          { title: 'Aspiradoras de Mochila y Verticales', points: [
            { label: 'Uso — Mochila',  text: 'Ajusta el arnés a tus caderas y mantén el cable de alimentación visible detrás de ti en todo momento.' },
            { label: 'Uso — Vertical', text: 'Ajusta la altura del cabezal según el grosor de la alfombra para proteger el motor.' },
            { label: 'Mantenimiento',  text: 'Revisa la bolsa de filtro y reemplázala si está 2/3 llena para mantener una succión potente.' },
            { label: 'Cuidado',        text: 'Limpia regularmente el cepillo giratorio (batidor) para eliminar cabello o hilos que puedan bloquear el movimiento.' },
          ]},
          { title: 'Máquinas Auto Scrubber', points: [
            { label: 'Uso',           text: 'Llena el tanque con la mezcla exacta de químico y agua según el manual. Opera a velocidad constante para que el sistema de vacío recoja toda la humedad en un solo paso.' },
            { label: 'Mantenimiento', text: 'Vacía y enjuaga completamente el tanque de recuperación después de cada uso para evitar sedimentos y malos olores.' },
            { label: 'Cuidado',       text: 'Retira los almohadillas o cepillos y limpia la escobilla de secado para garantizar un secado perfecto en el siguiente turno.' },
          ]},
        ],
        tutorials: {
          title: 'Aprende Más: Tutoriales de Equipos',
          videos: [
            { title: 'Operación de Mochila',      desc: 'Ajuste del arnés ergonómico y uso de accesorios especializados.',                              url: 'https://www.youtube.com/watch?v=GvJoW9uHZmI', id: 'GvJoW9uHZmI' },
            { title: 'Mantenimiento de Mochila',  desc: 'Reemplazo del filtro paso a paso y optimización de succión.',                                  url: 'https://www.youtube.com/watch?v=Szig0xS7pjI', id: 'Szig0xS7pjI' },
            { title: 'Aspiradora Vertical',       desc: 'Limpieza del rodillo y cuidado del filtro de entrada del motor.',                              url: 'https://www.youtube.com/watch?v=Cfj9t1pXgxI', id: 'Cfj9t1pXgxI' },
            { title: 'Auto Scrubber',             desc: 'Preparación del piso, configuración del tanque y ajuste de la escobilla.',                     url: 'https://www.youtube.com/watch?v=VF_ZH5xeq5A', id: 'VF_ZH5xeq5A' },
          ],
        },
      },

      chemicals: {
        navTitle: 'Químicos',
        descriptions: {
          nabc:       'NABC (Non-Acid Disinfectant Bathroom Cleaner): Desinfectante y limpiador de baños de grado hospitalario que elimina eficazmente bacterias y virus mientras neutraliza olores. Gracias a su pH neutro y aroma agradable, es técnicamente seguro para todas las superficies duras no porosas. Para usarlo, rocía la superficie de manera uniforme, déjala húmeda durante 10 minutos para garantizar la desinfección completa y limpia con el paño de microfibra adecuado.',
          klearview:  'Glance / Klearview: Limpiador de vidrios y superficies sin rayas, formulado específicamente para ventanas, espejos y otras superficies reflectantes. Esta solución de grado profesional elimina huellas dactilares, polvo y suciedad sin dejar residuos, garantizando un acabado cristalino. Para usarlo, rocía el producto directamente sobre el vidrio o superficie reflectante y limpia de inmediato con un paño de microfibra limpio y sin pelusa con un movimiento uniforme para evitar rayas.',
          topclean:   'Top Clean: Limpiador de pisos con pH neutro diseñado para el mantenimiento diario de pisos con acabado sin opacar ni dañar el revestimiento protector. Elimina eficazmente la suciedad y previene la acumulación de película, dejando las superficies limpias y brillantes. Para usarlo, diluye según las instrucciones, aplica con un trapeador o fregadora automática y deja secar al aire; no es necesario enjuagar.',
          nutrarinse: 'Nutra Rinse: Neutralizador y acondicionador de alto rendimiento utilizado específicamente para eliminar residuos de sal y deshielo, así como restos de decapante de pisos. Ayuda a eliminar las rayas blancas en polvo y restaura la apariencia natural del piso. Para usarlo, diluye con agua, aplica en el área afectada y trapea o aspira a fondo para neutralizar la superficie.',
          assurance:  'Assurance: Desengrasante y limpiador multiusos de alta potencia formulado para disolver grasa, aceites y suciedad difícil en diversas superficies. Es ideal para áreas industriales o de alto tráfico que requieren limpieza profunda. Para usarlo, aplica sobre la superficie, deja actuar unos minutos para penetrar la suciedad y friega o limpia con un paño o trapeador.',
          oxivir:     'Oxivir: Limpiador desinfectante de acción rápida a base de peróxido de hidrógeno que proporciona sanitización y desinfección de amplio espectro. Es seguro para la mayoría de las superficies duras y es ideal para áreas de alto contacto gracias a su corto tiempo de contacto y baja toxicidad. Para usarlo, rocía la superficie hasta humedecerla, déjala reposar el tiempo de contacto recomendado y limpia con un paño limpio.',
          ajax:       'Ajax con Cloro: Polvo limpiador de alta potencia diseñado para eliminar manchas difíciles, grasa y residuos de jabón mientras desinfecta con la fuerza del cloro. Es ideal para superficies resistentes como porcelana, cerámica y acero inoxidable en baños o cocinas. Para usarlo, humedece la superficie, espolvorea el producto, friega suavemente con una esponja o cepillo y enjuaga bien con agua.',
          clr:        'CLR (Removedor de Calcio, Sarro y Óxido): Limpiador ácido especializado para disolver depósitos difíciles de calcio y sarro, así como manchas superficiales de óxido. Es muy eficaz en griferías, alcachofas de ducha y superficies expuestas a agua dura. Para usarlo, aplica en el área manchada, deja actuar unos minutos, friega si es necesario y enjuaga bien.',
          enzymes:    'Victoria Bay Enzimas Líquidas: Tratamiento biológico con cultivos vivos que digieren residuos orgánicos y eliminan olores en su origen. Es ideal para desagües de pisos, baños y alfombras donde la materia orgánica genera olores persistentes. Para usarlo, aplica directamente en el origen del olor o residuo y deja que las enzimas actúen de forma natural sin enjuagar de inmediato.',
          stainless:  'Pulidor de Acero Inoxidable: Pulidor de grado profesional que limpia, protege y realza el brillo de las superficies de acero inoxidable. Crea una barrera protectora que resiste huellas dactilares, manchas de agua y rayas. Para usarlo, aplica una pequeña cantidad en un paño de microfibra limpio y seco, limpia siguiendo el veteado del metal y pule hasta obtener un brillo intenso.',
        },
        section1: {
          title: 'Cómo Usar y Dónde Usar',
        },
        section2: {
          title: 'Seguridad con Químicos',
          topics: [
            { title: 'Seguridad con Químicos', points: [
              { label: 'Protégete', text: 'Usa siempre el EPP requerido (guantes y gafas de seguridad) antes de manipular cualquier producto.' },
              { label: 'Ventilación', text: 'Asegúrate de que tu área de trabajo tenga buena circulación de aire para evitar inhalar vapores químicos fuertes.' },
              { label: 'Nunca mezcles', text: 'No combines diferentes químicos. Esto puede generar gases tóxicos extremadamente peligrosos para tu salud.' },
            ]},
            { title: 'Almacenamiento', points: [
              { label: 'Envases originales', text: 'Guarda siempre los químicos en sus botellas originales de fábrica con etiquetas legibles.' },
              { label: 'Ubicación adecuada', text: 'Almacena los productos en áreas frescas, secas y bien ventiladas, lejos de cualquier alimento.' },
              { label: 'Control de acceso', text: 'Asegúrate de que los químicos estén en gabinetes o áreas con llave a los que solo pueda acceder el personal autorizado.' },
            ]},
            { title: 'Procedimientos de Emergencia', points: [
              { label: 'Prioridad máxima', text: 'Si ocurre un accidente grave o sientes que estás en peligro, mantén la calma y llama al 911 de inmediato.' },
              { label: 'Contacto con ojos o piel', text: 'Si un químico te salpica, no esperes; enjuaga el área afectada con abundante agua corriente durante al menos 15 minutos seguidos.' },
              { label: 'Consulta la SDS', text: 'Revisa siempre la Hoja de Datos de Seguridad (SDS) del producto específico para encontrar instrucciones de primeros auxilios mientras llega la ayuda.' },
              { label: 'Regla de oro', text: 'Nunca intentes mezclar un químico con otro para "limpiar" un derrame o contacto; usa solo agua para enjuagar y busca atención médica de inmediato.' },
            ]},
            { title: 'Hoja de Datos de Seguridad (SDS)', points: [
              { label: 'Tu guía de referencia', text: 'Usa las hojas SDS para conocer los riesgos específicos de productos como NABC u Oxivir.' },
              { label: 'Información clave', text: 'Estos documentos te indican exactamente qué ingredientes tiene el producto y qué hacer en caso de contacto accidental.' },
              { label: 'Ubicación rápida', text: 'Memoriza dónde se guarda el manual SDS en tu lugar de trabajo para consultarlo de inmediato si tienes alguna pregunta.' },
            ]},
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
        appsDesc: [
          'Registro de evidencia fotográfica con geolocalización.',
          'Gestión de turnos y asistencia.',
          'Recursos humanos, nómina y beneficios.',
          'Inspecciones de control de calidad.',
        ],
        items: [
          { icon: '📱', title: 'Mis Aplicaciones', description: 'Accede a tus apps y plataformas de trabajo' },
          {
            icon: '💵', title: 'Cómo Obtener Mis Recibos de Pago en TriNet', description: 'Guía paso a paso para acceder a tus recibos de pago',
            steps: [
              'Abre la app y ve a la pestaña "Money" en la parte inferior.',
              'Toca "Pay".',
              'Selecciona la fecha específica del cheque que deseas ver.',
              'Toca "View Statement" para ver el PDF completo.',
            ],
          },
          {
            icon: '📖', title: '¿Cómo obtener el Handbook de empleado en Trinet?', description: 'Guía paso a paso para descargar tu handbook',
            steps: [
              'Ve al "Menu" (tres líneas o ícono "More").',
              'Busca la sección "Company" o "Documents".',
              'Toca "Employee Handbook" o "Company Documents".',
            ],
            note: 'Aquí puedes leer todas las políticas de KG Facility Solutions en cualquier momento.',
          },
          {
            icon: '📄', title: '¿Cómo descargar mi W2 en Tri-Net?', description: 'Accede y descarga tus documentos de impuestos',
            steps: [
              'En la pestaña "Money", selecciona "Taxes".',
              'Toca "Statements".',
              'Selecciona el año y toca el ícono de descarga o "View PDF" para guardarlo en tu teléfono.',
            ],
          },
          {
            icon: '☎️', title: 'Contactar a Trinet', description: 'Obtén soporte directamente de Trinet',
            phone: 'tel:8006380461', phoneLabel: 'Llamar a Soporte de TriNet',
            scheduleTitle: 'Lunes – Viernes',
            schedule: [
              { zone: 'Eastern',  hours: '6:00 a.m. – Medianoche' },
              { zone: 'Central',  hours: '5:00 a.m. – 11:00 p.m.' },
              { zone: 'Mountain', hours: '4:00 a.m. – 10:00 p.m.' },
              { zone: 'Pacific',  hours: '3:00 a.m. – 9:00 p.m.' },
            ],
          },
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

  // ── Section Title — sticky below nav, solid bg, divider line ────────────────
  const PageHero = ({ gradient, Icon, svgSrc, title }) => (
    <div className="sticky top-0 z-10 bg-slate-50 border-b border-gray-200 px-4 py-3 flex justify-center">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 ${gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}>
          {svgSrc
            ? <img src={svgSrc} className="w-5 h-5 object-contain" alt="" />
            : Icon && <Icon size={19} className="text-white" />
          }
        </div>
        {title && <h1 className="text-blue-900 font-bold text-lg leading-tight">{title}</h1>}
      </div>
    </div>
  );

  // ── Sub-page Nav — white bar: back left, logo center, lang toggle right ───────
  const SubPageNav = ({ onBack }) => (
    <div className="w-full bg-white shadow-sm flex-shrink-0">
      <div className="py-2.5 px-3 flex items-center relative">
        <button onClick={onBack ?? goHome} className="hover:bg-gray-100 p-2 rounded transition flex-shrink-0 text-gray-700">
          <ArrowLeft size={20} />
        </button>
        <div className="absolute left-0 right-0 flex justify-center pointer-events-none">
          <button onClick={goHome} className="pointer-events-auto">
            <img src="/kg-logo.png" alt="KG Masterclass" className="h-12 object-contain" />
          </button>
        </div>
        <div className="ml-auto flex-shrink-0"><LangToggle dark /></div>
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
      <div className="relative pt-14 pb-20 text-center overflow-hidden">

        {/* Background with parallax */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/janitor-cart.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.4}px)`,
            willChange: 'transform',
          }}
        />

        {/* White gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/50" />

        {/* Lang toggle */}
        <div className="absolute top-5 right-5 z-10">
          <LangToggle dark />
        </div>

        {/* Logo + subtitle with parallax */}
        <div
          className="relative z-10 px-6"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
            willChange: 'transform',
          }}
        >
          <img src="/kg-logo.png" alt="KG Masterclass" className="h-24 mx-auto object-contain drop-shadow-lg" />
          <p className="text-blue-900/70 text-xs mt-3 tracking-widest uppercase font-semibold">{t.subtitle}</p>
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
      <div className="h-screen flex flex-col bg-slate-50">
        <SubPageNav title={k.navTitle} />
        <div className="flex-1 overflow-y-auto pb-20">
        <PageHero gradient="bg-blue-900" Icon={Building2} title={k.navTitle} />

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
            <div className="grid grid-cols-2 gap-3">
              {k.values.map(({ label, Icon }, idx) => {
                const valueColors = [
                  { bg: 'bg-blue-900',    icon: 'text-white' },
                  { bg: 'bg-sky-500',     icon: 'text-white' },
                  { bg: 'bg-emerald-600', icon: 'text-white' },
                  { bg: 'bg-violet-600',  icon: 'text-white' },
                  { bg: 'bg-orange-500',  icon: 'text-white' },
                  { bg: 'bg-red-500',     icon: 'text-white' },
                ];
                const color = valueColors[idx % valueColors.length];
                return (
                  <div key={idx} className="flex flex-col items-center gap-2.5 p-4">
                    <div className={`w-10 h-10 ${color.bg} rounded-xl flex items-center justify-center shadow-md`}>
                      <Icon size={20} className={color.icon} />
                    </div>
                    <p className="text-blue-900 font-semibold text-sm">{label}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
        <PageFooter />
        </div>
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

  const cleaningImages = {
    schools: ['/school-cleaning-1.jpg', '/school-cleaning-2.jpg', '/school-cleaning-3.jpg'],
    banking: ['/bank-cleaning-1.jpg', '/bank-cleaning-2.jpg', '/bank-cleaning-3.jpg'],
  };

  const getYouTubeId = (url) => {
    const match = url.match(/youtu\.be\/([^?&]+)/);
    return match ? match[1] : null;
  };

  const renderCleaningDetail = (subId) => {
    const detail = t.cleaningDetails[subId];
    if (!detail) return null;
    return (
      <div className="h-screen flex flex-col bg-slate-50">
        <SubPageNav
          title={detail.navTitle}
          onBack={() => navigateTo('cleaning')}
        />
        <div className="flex-1 overflow-y-auto pb-20">
        {(() => { const SubIcon = cleaningSubIcons[subId]; return <PageHero gradient="bg-sky-500" Icon={SubIcon} title={detail.navTitle} />; })()}

        <div className="max-w-2xl mx-auto px-5 pt-6 space-y-6">

          {/* ── Media (slider or video) ── */}
          {cleaningImages[subId] ? (
            <ImageSlider images={cleaningImages[subId]} />
          ) : cleaningVideos[subId] ? (() => {
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
          <div className="space-y-3">
            {detail.tips.map((tip, idx) => {
              const [bold, ...rest] = tip.split(':');
              const hasColon = tip.includes(':');
              return (
                <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 px-5 py-5 flex flex-col items-center text-center gap-3 hover:shadow-md hover:border-sky-200 transition-all">
                  <span className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                    <span className="text-white text-xs font-bold">✓</span>
                  </span>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {hasColon
                      ? <><strong className="text-blue-900">{bold}:</strong>{rest.join(':')}</>
                      : tip}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
        <PageFooter />
        </div>
      </div>
    );
  };

  // ── Cleaning Screen ──────────────────────────────────────────────────────────
  const renderCleaning = () => {
    const c = t.cleaning;
    return (
      <div className="h-screen flex flex-col bg-slate-50">
        <SubPageNav title={c.navTitle} />
        <div className="flex-1 overflow-y-auto pb-20">
        <PageHero gradient="bg-sky-500" Icon={Sparkles} title={c.navTitle} />
        <div className="p-6 max-w-2xl mx-auto">
          <p className="text-gray-600 text-sm mb-6 text-center">{c.intro}</p>
          <div className="grid grid-cols-2 gap-4">
            {c.subCategories.map((sub) => {
              const SubIcon = cleaningSubIcons[sub.id];
              const cardColors = {
                offices:          { icon: 'from-blue-800 to-blue-600',    card: 'bg-blue-50   border-blue-100',   text: 'text-blue-900'   },
                bathrooms:        { icon: 'from-cyan-600 to-cyan-400',    card: 'bg-cyan-50   border-cyan-100',   text: 'text-cyan-900'   },
                kitchens:         { icon: 'from-orange-500 to-orange-400',card: 'bg-orange-50 border-orange-100', text: 'text-orange-900' },
                windows:          { icon: 'from-sky-600 to-sky-400',      card: 'bg-sky-50    border-sky-100',    text: 'text-sky-900'    },
                floors:           { icon: 'from-emerald-700 to-emerald-500', card: 'bg-emerald-50 border-emerald-100', text: 'text-emerald-900' },
                pressure_washing: { icon: 'from-indigo-700 to-indigo-500',card: 'bg-indigo-50 border-indigo-100', text: 'text-indigo-900' },
                schools:          { icon: 'from-violet-700 to-violet-500',card: 'bg-violet-50 border-violet-100', text: 'text-violet-900' },
                banking:          { icon: 'from-slate-700 to-slate-500',  card: 'bg-slate-100 border-slate-200',  text: 'text-slate-900'  },
              };
              const c2 = cardColors[sub.id] || { icon: 'from-blue-800 to-blue-600', card: 'bg-white border-gray-100', text: 'text-blue-900' };
              return (
                <button
                  key={sub.id}
                  onClick={() => navigateTo(`cleaning-${sub.id}`)}
                  className={`${c2.card} rounded-2xl shadow-sm p-5 flex flex-col items-center gap-3 hover:shadow-md hover:scale-105 transition-all border`}
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${c2.icon} rounded-2xl flex items-center justify-center shadow-md`}>
                    {sub.id === 'pressure_washing'
                      ? <img src="/pw-icon.svg" alt="Pressure Washing" className="w-9 h-9 object-contain" />
                      : SubIcon && <SubIcon size={24} className="text-white" />
                    }
                  </div>
                  <p className={`${c2.text} font-semibold text-sm text-center`}>{sub.title}</p>
                </button>
              );
            })}
          </div>
        </div>
        <PageFooter />
        </div>
      </div>
    );
  };

  // ── Safety Detail Screen ─────────────────────────────────────────────────────
  const safetyImages = {
    uniform:    '/safety/uniform.jpg',
    osha:       '/safety/osha.jpg',
    biohazards: '/safety/biohazards.jpg',
    height:     '/safety/height.jpg',
    tripping:   '/safety/tripping.jpg',
    ppe:        '/safety/ppe.jpg',
  };

  const renderSafety = () => {
    const s = t.safety;
    const icons = { uniform: '👔', osha: '📋', biohazards: '☣️', height: '🪜', tripping: '⚠️', ppe: '🥽' };
    return (
      <div className="h-screen flex flex-col bg-slate-50">
        <SubPageNav title={s.navTitle} />
        <div className="flex-1 overflow-y-auto pb-20">
          <PageHero gradient="bg-red-500" Icon={Shield} title={s.navTitle} />
          <div className="p-4 max-w-2xl mx-auto space-y-3">
            {s.topics.map((topic, idx) => {
              const isOpen = openSafetyItem === idx;
              const detail = t.safetyDetails[topic.id];
              return (
                <div key={idx} ref={el => { safetyRefs.current[idx] = el; }} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => {
                      const next = isOpen ? null : idx;
                      setOpenSafetyItem(next);
                      if (next !== null) {
                        setTimeout(() => {
                          safetyRefs.current[next]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }, 50);
                      }
                    }}
                    className={`w-full p-4 flex items-center gap-3 transition-colors text-left ${isOpen ? 'bg-pink-100' : 'hover:bg-red-50'}`}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-400 rounded-xl flex items-center justify-center flex-shrink-0 shadow text-lg">
                      {icons[topic.id]}
                    </div>
                    <p className="text-red-900 font-semibold flex-grow text-sm">{topic.title}</p>
                    <span className={`text-red-400 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>
                      <ChevronRight size={18} />
                    </span>
                  </button>
                  {isOpen && detail && (
                    <div className="border-t border-red-100 pb-4">
                      {/* Image or placeholder */}
                      {safetyImages[topic.id] ? (
                        <img
                          src={safetyImages[topic.id]}
                          alt={topic.title}
                          className="w-full object-cover"
                          style={{ maxHeight: '200px', objectFit: 'cover' }}
                        />
                      ) : (
                        <div className="mx-4 mt-3 rounded-xl border-2 border-dashed border-red-200 bg-red-50 flex items-center justify-center gap-2 py-6">
                          <span className="text-2xl">🖼️</span>
                          <p className="text-red-300 font-semibold text-sm">Image coming soon</p>
                        </div>
                      )}
                      {/* Points */}
                      <div className="px-4 pt-3 space-y-3">
                        {detail.points.map((point, pIdx) => (
                          <div key={pIdx} className="flex gap-3 items-start">
                            <span className="w-5 h-5 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                              <span className="text-white text-xs font-bold">✓</span>
                            </span>
                            <p className="text-gray-700 text-sm leading-relaxed">
                              <strong className="text-red-900">{point.label}:</strong> {point.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <PageFooter />
        </div>
      </div>
    );
  };

  const renderSafetyDetail = (topicId) => {
    const detail = t.safetyDetails[topicId];
    if (!detail) return null;
    return (
      <div className="h-screen flex flex-col bg-slate-50">
        <SubPageNav
          title={detail.navTitle}
          icon="🛡️"
          onBack={() => navigateTo('safety')}
        />
        <div className="flex-1 overflow-y-auto pb-20">
        <PageHero gradient="bg-red-500" Icon={Shield} title={detail.navTitle} />

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
          <div className="space-y-3">
              {detail.points.map((point, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 px-5 py-5 flex flex-col items-center text-center gap-3 hover:shadow-md hover:border-red-200 transition-all">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                      <span className="text-white text-xs font-bold">✓</span>
                    </span>
                    <span className="text-red-400 text-xs font-bold uppercase tracking-widest">{idx + 1} / {detail.points.length}</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong className="text-blue-900">{point.label}:</strong> {point.text}
                  </p>
                </div>
              ))}
          </div>

        </div>
        <PageFooter />
        </div>
        </div>
      </div>
    );
  };

  // ── Equipment Screen ──────────────────────────────────────────────────────────
  const equipmentImages = [
    { image: '/equipo/rags.jpg',             imgPosition: 'center' },
    { image: '/equipo/mops.jpg',             imgPosition: 'center' },
    { image: '/equipo/vacuums.jpg',          imgPosition: 'center' },
    { image: '/equipo/auto-scrubbers.jpg',   imgPosition: 'center' },
  ];

  const renderEquipment = () => {
    const e = t.equipment;
    return (
      <div className="h-screen flex flex-col bg-slate-50">
        <SubPageNav title={e.navTitle} />
        <div className="flex-1 overflow-y-auto pb-20">
          <PageHero gradient="bg-orange-500" Icon={Wrench} title={e.navTitle} />
          <div className="p-4 max-w-2xl mx-auto space-y-4">
            {e.items.map((item, idx) => {
              const { image, imgPosition } = equipmentImages[idx];
              return (
                <div key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden flex border border-gray-100" style={{ minHeight: '200px' }}>
                  {/* Left: text */}
                  <div className="flex-1 p-4 space-y-2.5">
                    <h3 className="text-orange-700 font-bold text-sm leading-snug border-b border-orange-100 pb-2">{item.title}</h3>
                    {item.points.map((point, pIdx) => (
                      <div key={pIdx}>
                        <p className="text-orange-500 font-bold text-xs uppercase tracking-wide">{point.label}</p>
                        <p className="text-gray-600 text-xs leading-relaxed mt-0.5">{point.text}</p>
                        {point.subPoints && (
                          <div className="mt-1.5 space-y-1">
                            {point.subPoints.map((sp, spIdx) => (
                              <div key={spIdx} className="flex gap-1.5 items-start">
                                <div className="w-2 h-2 rounded-full mt-1 flex-shrink-0" style={{ backgroundColor: sp.color }} />
                                <p className="text-gray-600 text-xs leading-relaxed">
                                  <span className="font-semibold">{sp.label}:</span> {sp.text}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  {/* Right: image */}
                  <div className="w-2/5 flex-shrink-0">
                    <img
                      src={image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: imgPosition }}
                    />
                  </div>
                </div>
              );
            })}

            {/* ── Tutorials Section ── */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-600 to-orange-400 px-4 py-3 flex items-center gap-2">
                <span className="text-white text-lg">▶️</span>
                <h3 className="text-white font-bold text-sm tracking-wide">{e.tutorials.title}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3 p-3">
                {e.tutorials.videos.map((video, idx) => (
                  <a
                    key={idx}
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="relative">
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                        alt={video.title}
                        className="w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/25 flex items-center justify-center hover:bg-black/40 transition-colors">
                        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center shadow">
                          <span className="text-white text-xs ml-0.5">▶</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 bg-orange-50">
                      <p className="text-orange-800 font-bold text-xs leading-snug">{video.title}</p>
                      <p className="text-gray-500 text-xs leading-snug mt-0.5">{video.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <PageFooter />
        </div>
      </div>
    );
  };

  // ── Generic Topics Screen (Safety / Equipment) ────────────────────────────────
  const renderTopics = (navTitle, icon, topics, onTopicClick, heroGradient, HeroIcon) => (
    <div className="h-screen flex flex-col bg-slate-50">
      <SubPageNav title={navTitle} icon={icon} />
      <div className="flex-1 overflow-y-auto pb-20">
      {heroGradient && HeroIcon && <PageHero gradient={heroGradient} Icon={HeroIcon} title={navTitle} />}

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
      <div className="h-screen flex flex-col bg-slate-50">
        <SubPageNav title={c.navTitle} />
        <div className="flex-1 overflow-y-auto pb-20">
        <PageHero gradient="bg-emerald-600" svgSrc="/spray-bottle.svg" title={c.navTitle} />
        <div className="p-4 max-w-2xl mx-auto space-y-6">
          {/* Section 1 — Product grid */}
          <div>
            <h3 className="text-emerald-800 font-bold text-base uppercase tracking-wide mb-3 px-1 text-center">
              {c.section1.title}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {chemicalProducts.map((product) => (
                <button
                  key={product.id}
                  onClick={() => setSelectedChemical(product)}
                  className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all bg-gray-100"
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
                    style={{ height: '30%', backgroundColor: 'rgba(4, 120, 87, 0.92)' }}
                  >
                    <p className="text-white font-bold text-sm text-center leading-tight px-2">{product.name}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Section 2 — Chemical Safety list */}
          <div>
            <h3 className="text-emerald-800 font-bold text-base uppercase tracking-wide mb-3 px-1 text-center">
              {c.section2.title}
            </h3>
            <div className="space-y-3">
              {c.section2.topics.map((topic, idx) => {
                const isOpen = openSafetyTopic === idx;
                return (
                  <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <button
                      onClick={() => setOpenSafetyTopic(isOpen ? null : idx)}
                      className={`w-full p-5 flex items-center gap-4 transition-colors text-left ${isOpen ? 'bg-emerald-100' : 'hover:bg-emerald-50'}`}
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-400 rounded-xl flex items-center justify-center flex-shrink-0 shadow">
                        <span className="text-white font-bold text-sm">{idx + 1}</span>
                      </div>
                      <p className="text-emerald-900 font-semibold flex-grow">{topic.title}</p>
                      <span className={`text-emerald-500 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>
                        <ChevronRight size={18} />
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 space-y-3 border-t border-emerald-100">
                        {topic.points.map((point, pIdx) => (
                          <div key={pIdx} className="pt-3 flex gap-3">
                            <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm leading-relaxed">
                              <span className="font-semibold text-emerald-800">{point.label}: </span>
                              {point.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
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
              <div className="modal-content bg-emerald-800 px-5 py-3 text-center">
                <h3 className="text-white font-bold text-lg">{selectedChemical.name}</h3>
              </div>
              <div className="modal-content bg-emerald-700 px-5 py-4">
                <p className="text-emerald-50 text-sm leading-relaxed">{selectedChemical.description}</p>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    );
  };

  // ── Standards Screen ─────────────────────────────────────────────────────────
  const renderStandards = () => {
    const s = t.standards;
    return (
      <div className="h-screen flex flex-col bg-slate-50">
        <SubPageNav title={s.navTitle} />
        <div className="flex-1 overflow-y-auto pb-20">
        <PageHero gradient="bg-violet-600" Icon={Star} title={s.navTitle} />
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
      <div className="h-screen flex flex-col bg-gradient-to-b from-slate-900 to-slate-800">
        <SubPageNav title={c.navTitle} />
        <div className="flex-1 overflow-y-auto pb-8">
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
      if (!userInfo.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInfo.email.trim())) errors.email = r.errors.email;
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
      setQuizAnswers(Array(20).fill(null));
      setCurrentQuestion(0);
      setQuizScore(null);
      navigateTo('quiz');
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

                {/* Email */}
                <div>
                  <label className="block text-blue-900 font-semibold text-sm mb-1.5">
                    ✉️ {r.emailPlaceholder}
                  </label>
                  <input
                    type="email"
                    value={userInfo.email}
                    onChange={(e) => {
                      setUserInfo({ ...userInfo, email: e.target.value });
                      if (formErrors.email) setFormErrors({ ...formErrors, email: undefined });
                    }}
                    placeholder={r.emailPlaceholder}
                    className={`${inputBase} ${formErrors.email ? inputErr : inputOk}`}
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                      <span>⚠</span> {formErrors.email}
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

  // ── Brevo Email Sender ────────────────────────────────────────────────────────
  const sendBrevoEmails = async (answers, score) => {
    const BREVO_KEY = 'mOzRAQckVyfb9p5I';
    const SENDER    = { name: 'KG Facility Solutions Team', email: 'alirioc@kgfsco.com' };
    const ADMIN     = 'alirioc@kgfsco.com';
    const pct       = Math.round((score / 20) * 100);
    const now       = new Date().toLocaleString('en-US', { timeZone: 'America/Denver' });
    const roleLabel = translations.registration[lang].roles.find(r => r.value === userInfo.role)?.label || userInfo.role;

    const rows = quizData.map((q, i) => {
      const qLang  = q[lang];
      const sel    = answers[i];
      const ok     = sel === q.correct;
      return `<tr style="background:${ok ? '#f0fdf4' : '#fff1f2'}">
        <td style="padding:6px 10px;font-size:12px;color:#374151"><b>Q${i+1}.</b> ${qLang.q}</td>
        <td style="padding:6px 10px;font-size:12px;color:#374151">${sel !== null ? qLang.opts[sel] : '—'}</td>
        <td style="padding:6px 10px;font-size:12px;color:#374151">${qLang.opts[q.correct]}</td>
        <td style="padding:6px 10px;font-size:12px;font-weight:bold;color:${ok ? '#16a34a' : '#dc2626'}">${ok ? '✓' : '✗'}</td>
      </tr>`;
    }).join('');

    const adminHtml = `<div style="font-family:sans-serif;max-width:700px;margin:auto">
      <div style="background:#1e3a8a;padding:24px;text-align:center">
        <h1 style="color:#fff;margin:0;font-size:20px">KG Masterclass — Quiz Result</h1>
      </div>
      <div style="padding:20px;background:#f8fafc">
        <p><b>Name:</b> ${userInfo.name}</p>
        <p><b>Phone:</b> ${userInfo.phone}</p>
        <p><b>Email:</b> ${userInfo.email}</p>
        <p><b>Role:</b> ${roleLabel}</p>
        <p><b>Date:</b> ${now} (MT)</p>
        <p style="font-size:22px;font-weight:bold;color:${pct>=80?'#16a34a':pct>=60?'#d97706':'#dc2626'}">
          Score: ${score}/20 (${pct}%)
        </p>
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-top:16px">
          <thead><tr style="background:#1e3a8a">
            <th style="padding:8px 10px;color:#fff;font-size:12px;text-align:left">Question</th>
            <th style="padding:8px 10px;color:#fff;font-size:12px;text-align:left">Answer Given</th>
            <th style="padding:8px 10px;color:#fff;font-size:12px;text-align:left">Correct Answer</th>
            <th style="padding:8px 10px;color:#fff;font-size:12px;text-align:left">Result</th>
          </tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>`;

    const userHtml = `<div style="font-family:sans-serif;max-width:500px;margin:auto">
      <div style="background:#1e3a8a;padding:24px;text-align:center">
        <h1 style="color:#fff;margin:0;font-size:20px">KG Masterclass Quiz</h1>
      </div>
      <div style="padding:24px;background:#f8fafc;text-align:center">
        <p style="font-size:16px">Hi <b>${userInfo.name}</b>, thank you for completing the quiz!</p>
        <p style="font-size:40px;font-weight:bold;color:${pct>=80?'#16a34a':pct>=60?'#d97706':'#dc2626'}">${pct}%</p>
        <p style="font-size:14px;color:#6b7280">${score} out of 20 correct</p>
        <p style="margin-top:16px;font-size:14px">${pct>=80?'Excellent work! 🎉':pct>=60?'Good job! Keep reviewing the material.':'Keep studying — you\'ll improve!'}</p>
        <p style="margin-top:24px;font-size:12px;color:#9ca3af">KG Facility Solutions Team</p>
      </div>
    </div>`;

    const post = async (to, subject, html) => {
      const res = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: { 'api-key': BREVO_KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify({ sender: SENDER, to: [{ email: to }], subject, htmlContent: html }),
      });
      if (!res.ok) throw new Error(await res.text());
    };

    await post(ADMIN, `Quiz Result — ${userInfo.name} (${pct}%)`, adminHtml);
    if (userInfo.email) await post(userInfo.email, 'Your KG Masterclass Quiz Results', userHtml);
  };

  // ── Quiz Screen ───────────────────────────────────────────────────────────────
  const renderQuiz = () => {
    const qz  = translations.quiz[lang];
    const q   = quizData[currentQuestion];
    const qL  = q[lang];
    const answered  = quizAnswers.filter(a => a !== null).length;
    const allDone   = answered === 20;

    const handleAnswer = (optIdx) => {
      const updated = [...quizAnswers];
      updated[currentQuestion] = optIdx;
      setQuizAnswers(updated);
    };

    const handleSubmit = async () => {
      if (!allDone) { alert(qz.unanswered); return; }
      setQuizSubmitting(true);
      const score = quizAnswers.reduce((acc, ans, i) => acc + (ans === quizData[i].correct ? 1 : 0), 0);
      setQuizScore(score);
      try { await sendBrevoEmails(quizAnswers, score); }
      catch (e) { console.error('Brevo error:', e); }
      setQuizSubmitting(false);
      navigateTo('quiz-result');
    };

    const optLabels = ['A', 'B', 'C', 'D'];

    return (
      <div className="h-screen flex flex-col bg-slate-50">
        <SubPageNav onBack={() => navigateTo('registration')} />
        <div className="flex-1 overflow-y-auto pb-6">
          {/* Progress bar */}
          <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-blue-900 font-bold text-sm">{qz.questionOf(currentQuestion + 1, 20)}</span>
              <span className="text-gray-500 text-xs">{answered}/20 {lang === 'en' ? 'answered' : 'respondidas'}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-900 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / 20) * 100}%` }}
              />
            </div>
          </div>

          {/* Dots navigation */}
          <div className="flex flex-wrap gap-1.5 justify-center px-4 pt-4">
            {quizData.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentQuestion(i)}
                className={`w-7 h-7 rounded-full text-xs font-bold transition-colors ${
                  i === currentQuestion
                    ? 'bg-blue-900 text-white'
                    : quizAnswers[i] !== null
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >{i + 1}</button>
            ))}
          </div>

          {/* Question card */}
          <div className="px-4 pt-4 max-w-xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-4">
              <p className="text-blue-900 font-bold text-base leading-snug">{qL.q}</p>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {qL.opts.map((opt, i) => {
                const selected = quizAnswers[currentQuestion] === i;
                return (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    className={`w-full flex items-center gap-3 p-4 rounded-2xl border-2 transition-all text-left ${
                      selected
                        ? 'border-blue-900 bg-blue-50 shadow-md'
                        : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50'
                    }`}
                  >
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm ${
                      selected ? 'bg-blue-900 text-white' : 'bg-gray-100 text-gray-600'
                    }`}>{optLabels[i]}</span>
                    <span className={`text-sm leading-snug ${selected ? 'text-blue-900 font-semibold' : 'text-gray-700'}`}>{opt}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="bg-white border-t border-gray-200 px-4 py-3 flex gap-3">
          <button
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
            className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold text-sm disabled:opacity-40 hover:border-blue-300 transition-colors"
          >{qz.prev}</button>

          {currentQuestion < 19 ? (
            <button
              onClick={() => setCurrentQuestion(Math.min(19, currentQuestion + 1))}
              className="flex-1 py-3 rounded-xl bg-blue-900 text-white font-bold text-sm hover:bg-blue-800 transition-colors"
            >{qz.next}</button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!allDone || quizSubmitting}
              className={`flex-1 py-3 rounded-xl font-bold text-sm transition-colors ${
                allDone && !quizSubmitting
                  ? 'bg-yellow-400 text-blue-900 hover:bg-yellow-300 shadow-lg'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >{quizSubmitting ? qz.sending : qz.submit}</button>
          )}
        </div>
      </div>
    );
  };

  // ── Quiz Result Screen ────────────────────────────────────────────────────────
  const renderQuizResult = () => {
    const qz  = translations.quiz[lang];
    const pct = quizScore !== null ? Math.round((quizScore / 20) * 100) : 0;
    const color = pct >= 80 ? 'text-green-600' : pct >= 60 ? 'text-yellow-500' : 'text-red-500';
    const ring  = pct >= 80 ? 'border-green-500' : pct >= 60 ? 'border-yellow-400' : 'border-red-400';
    const msg   = pct >= 80 ? qz.high : pct >= 60 ? qz.mid : qz.low;

    return (
      <div className="h-screen flex flex-col bg-slate-50">
        <SubPageNav onBack={goHome} />
        <div className="flex-1 overflow-y-auto pb-6">
          <div className="max-w-md mx-auto px-4 pt-8 space-y-5">
            {/* Score circle */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 text-center">
              <p className="text-gray-500 text-sm mb-4">{qz.resultTitle}</p>
              <div className={`w-36 h-36 rounded-full border-8 ${ring} flex flex-col items-center justify-center mx-auto mb-4`}>
                <span className={`text-4xl font-black ${color}`}>{pct}%</span>
                <span className="text-gray-400 text-xs">{quizScore}/20</span>
              </div>
              <p className="text-blue-900 font-semibold text-base">{msg}</p>
            </div>

            {/* Answer summary */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100">
                <p className="text-blue-900 font-bold text-sm">{lang === 'en' ? 'Answer Review' : 'Revisión de Respuestas'}</p>
              </div>
              <div className="divide-y divide-gray-100">
                {quizData.map((q, i) => {
                  const qL = q[lang];
                  const ok = quizAnswers[i] === q.correct;
                  return (
                    <div key={i} className={`px-4 py-3 ${ok ? 'bg-green-50' : 'bg-red-50'}`}>
                      <p className="text-gray-700 text-xs font-semibold mb-1">Q{i+1}. {qL.q}</p>
                      <p className={`text-xs font-bold ${ok ? 'text-green-700' : 'text-red-600'}`}>
                        {ok ? '✓' : '✗'} {qL.opts[quizAnswers[i] ?? 0]}
                        {!ok && <span className="text-gray-500 font-normal"> → {qL.opts[q.correct]}</span>}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pb-4">
              <button
                onClick={() => { setQuizAnswers(Array(20).fill(null)); setCurrentQuestion(0); setQuizScore(null); navigateTo('quiz'); }}
                className="w-full py-3 rounded-xl border-2 border-blue-900 text-blue-900 font-bold text-sm hover:bg-blue-50 transition-colors"
              >{qz.retake}</button>
              <button
                onClick={goHome}
                className="w-full py-3 rounded-xl bg-blue-900 text-white font-bold text-sm hover:bg-blue-800 transition-colors shadow"
              >{qz.backHome}</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // ── Resources Screen ─────────────────────────────────────────────────────────
  const appsList = [
    { img: '/apps/timestamp.jpg', name: 'Timestamp Camera', android: 'https://play.google.com/store/apps/details?id=com.jeyluta.timestampcamerafree', ios: 'https://apps.apple.com/us/app/timestamp-camera-basic/id840110184' },
    { img: '/apps/zoho.jpg',      name: 'Zoho Shifts',       android: 'https://play.google.com/store/apps/details?id=com.zoho.shifts',              ios: 'https://apps.apple.com/us/app/zoho-shifts/id1517003168' },
    { img: '/apps/trinet.jpg',    name: 'TriNet Mobile',     android: 'https://play.google.com/store/apps/details?id=com.trinet.hrpmobile',         ios: 'https://apps.apple.com/us/app/trinet-mobile/id589217167' },
    { img: '/apps/orangeqc.jpg',  name: 'OrangeQC',          android: 'https://play.google.com/store/apps/details?id=com.orangeqc.native',          ios: 'https://apps.apple.com/us/app/orangeqc/id324039524' },
  ];

  const renderResources = () => {
    const res = t.resources;
    return (
      <div className="h-screen flex flex-col bg-slate-50">
        <SubPageNav title={res.navTitle} />
        <div className="flex-1 overflow-y-auto pb-20">
        <PageHero gradient="bg-slate-500" Icon={FolderOpen} title={res.navTitle} />
        <div className="p-4 max-w-2xl mx-auto space-y-3">
          {res.items.map((item, idx) => {
            const isOpen = openResourceItem === idx;
            const isApps = idx === 0;
            return (
              <div key={idx} className={`rounded-2xl shadow-sm overflow-hidden border transition-colors ${isOpen ? 'bg-blue-900 border-blue-800' : 'bg-white border-gray-100'}`}>
                <button
                  onClick={() => setOpenResourceItem(isOpen ? null : idx)}
                  className="w-full p-4 flex items-center gap-4 transition-colors text-left"
                >
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 shadow-md ${isOpen ? 'bg-white/20' : 'bg-blue-900'}`}>
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <div className="flex-grow">
                    <p className={`font-semibold text-sm leading-snug ${isOpen ? 'text-white' : 'text-blue-900'}`}>{item.title}</p>
                    <p className={`text-xs mt-0.5 ${isOpen ? 'text-blue-200' : 'text-gray-500'}`}>{item.description}</p>
                  </div>
                  <span className={`transition-transform duration-300 ${isOpen ? 'text-white rotate-90' : 'text-slate-400'}`}>
                    <ChevronRight size={18} />
                  </span>
                </button>

                {/* My Applications */}
                {isOpen && isApps && (
                  <div className="bg-white border-t border-slate-100 p-3 space-y-3">
                    {appsList.map((app, aIdx) => (
                      <div key={aIdx} className="bg-slate-50 rounded-xl p-3 flex items-start gap-3 border border-slate-100">
                        <img src={app.img} alt={app.name} className="w-12 h-12 rounded-xl object-cover flex-shrink-0 shadow-sm border border-slate-200" />
                        <div className="flex-1 min-w-0">
                          <p className="text-blue-900 font-bold text-sm">{app.name}</p>
                          <p className="text-gray-500 text-xs mt-0.5 mb-2.5">{res.appsDesc[aIdx]}</p>
                          <div className="flex gap-2.5">
                            <a href={app.android} target="_blank" rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-white rounded-lg px-3 py-1.5 hover:opacity-90 transition-opacity"
                              style={{ backgroundColor: '#1a7f37' }}
                              onClick={e => e.stopPropagation()}
                            >
                              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white flex-shrink-0"><path d="M3.18 23.76c.37.21.8.22 1.17.04l11.29-6.52-2.5-2.5-9.96 8.98zm-1.1-19.2C2 4.84 2 5.08 2 5.34v13.32c0 .26 0 .5.08.72l.06.06 7.46-7.46v-.18L2.14 4.5l-.06.06zM20.1 10.4l-2.62-1.51-2.83 2.83 2.83 2.83 2.65-1.53c.75-.44.75-1.18-.03-1.62zm-16.92 11l9.96-8.98-2.5-2.5L1.25 21.5l1.93 1.9z"/></svg>
                              <span className="font-bold text-xs">Android</span>
                            </a>
                            <a href={app.ios} target="_blank" rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-white rounded-lg px-3 py-1.5 hover:opacity-90 transition-opacity"
                              style={{ backgroundColor: '#1d4ed8' }}
                              onClick={e => e.stopPropagation()}
                            >
                              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white flex-shrink-0"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                              <span className="font-bold text-xs">iPhone</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Steps-based items */}
                {isOpen && item.steps && (
                  <div className="bg-white border-t border-blue-800 px-4 py-4 space-y-3">
                    {item.steps.map((step, sIdx) => (
                      <div key={sIdx} className="flex gap-3 items-start">
                        <span className="w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">{sIdx + 1}</span>
                        </span>
                        <p className="text-gray-700 text-sm leading-relaxed pt-0.5">
                          <span className="font-semibold text-blue-900">Step {sIdx + 1}:</span> {step}
                        </p>
                      </div>
                    ))}
                    {item.note && (
                      <div className="mt-2 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3">
                        <p className="text-blue-800 text-sm leading-relaxed">
                          <span className="font-semibold">Note: </span>{item.note}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Contact Trinet */}
                {isOpen && item.phone && (
                  <div className="bg-white border-t border-blue-800 px-4 py-4 space-y-4">
                    <a
                      href={item.phone}
                      onClick={e => e.stopPropagation()}
                      className="flex items-center justify-center gap-2 w-full bg-blue-900 text-white font-bold text-sm py-3 rounded-xl hover:bg-blue-800 transition-colors shadow"
                    >
                      <span className="text-lg">📞</span>
                      {item.phoneLabel}
                    </a>
                    <div className="bg-slate-50 rounded-xl border border-slate-100 p-3">
                      <p className="text-blue-900 font-semibold text-xs mb-2 text-center">{item.scheduleTitle}</p>
                      {item.schedule.map((s, sIdx) => (
                        <div key={sIdx} className="flex justify-between items-center py-1.5 border-b border-slate-100 last:border-0">
                          <span className="text-gray-600 text-xs font-medium">{s.zone}</span>
                          <span className="text-blue-900 text-xs font-semibold">{s.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <PageFooter />
        </div>
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
  let screen;
  switch (currentScreen) {
    case 'registration': screen = renderRegistration(); break;
    case 'quiz':         screen = renderQuiz(); break;
    case 'quiz-result':  screen = renderQuizResult(); break;
    case 'kgfs':         screen = renderKGFS(); break;
    case 'cleaning':              screen = renderCleaning(); break;
    case 'cleaning-offices':      screen = renderCleaningDetail('offices'); break;
    case 'cleaning-bathrooms':    screen = renderCleaningDetail('bathrooms'); break;
    case 'cleaning-kitchens':     screen = renderCleaningDetail('kitchens'); break;
    case 'cleaning-windows':      screen = renderCleaningDetail('windows'); break;
    case 'cleaning-floors':       screen = renderCleaningDetail('floors'); break;
    case 'cleaning-pressure_washing': screen = renderCleaningDetail('pressure_washing'); break;
    case 'cleaning-schools':      screen = renderCleaningDetail('schools'); break;
    case 'cleaning-banking':      screen = renderCleaningDetail('banking'); break;
    case 'safety':            screen = renderSafety(); break;
    case 'safety-uniform':    screen = renderSafetyDetail('uniform'); break;
    case 'safety-osha':       screen = renderSafetyDetail('osha'); break;
    case 'safety-biohazards': screen = renderSafetyDetail('biohazards'); break;
    case 'safety-height':     screen = renderSafetyDetail('height'); break;
    case 'safety-tripping':   screen = renderSafetyDetail('tripping'); break;
    case 'safety-ppe':        screen = renderSafetyDetail('ppe'); break;
    case 'equipment':    screen = renderEquipment(); break;
    case 'chemicals':    screen = renderChemicals(); break;
    case 'standards':    screen = renderStandards(); break;
    case 'resources':    screen = renderResources(); break;
    case 'contact':      screen = renderContact(); break;
    default:             screen = renderHome();
  }

  return (
    <>
      {pullY > 0 && (
        <div
          className="fixed top-0 left-0 right-0 flex justify-center z-[9999] pointer-events-none"
          style={{ transform: `translateY(${pullY - 28}px)`, transition: 'transform 0.1s' }}
        >
          <div className="w-8 h-8 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center">
            <svg
              className="text-blue-500 animate-spin"
              width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
            >
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
          </div>
        </div>
      )}
      {screen}
    </>
  );
}
