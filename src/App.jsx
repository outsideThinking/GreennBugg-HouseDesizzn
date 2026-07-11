import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Award,
  BadgeCheck,
  Blocks,
  BriefcaseBusiness,
  Brain,
  Building2,
  Calculator,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Compass,
  Clock,
  Crown,
  Facebook,
  Film,
  Gem,
  Hammer,
  HardHat,
  Instagram,
  KeyRound,
  Landmark,
  Leaf,
  Linkedin,
  Mail,
  Map,
  MapPin,
  Menu,
  MessageCircle,
  Paintbrush,
  PenTool,
  Phone,
  PlayCircle,
  Smile,
  Trees,
  Utensils,
  Youtube
} from 'lucide-react';
import { siteData } from './data.js';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Projects from './components/Projects.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Process from './components/Process.jsx';
import Testimonials from './components/Testimonials.jsx';
import Faq from './components/Faq.jsx';
import Cta from './components/Cta.jsx';
import Contact from './components/Contact.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import Leadership from './components/Leadership.jsx';
import Footer from './components/Footer.jsx';
import FloatingActions from './components/FloatingActions.jsx';

export const iconMap = {
  architecture: Building2,
  commercial: Landmark,
  crown: Crown,
  interior: Paintbrush,
  restaurant: Utensils,
  office: BriefcaseBusiness,
  landscape: Trees,
  renovation: Hammer,
  cube: Blocks,
  walkthrough: Film,
  construction: HardHat,
  project: CheckCircle2,
  creative: PenTool,
  architect: BadgeCheck,
  affordable: CircleDollarSign,
  clock: Clock,
  quality: Gem,
  satisfaction: Smile,
  planning: Brain,
  sustainable: Leaf,
  mapPin: MapPin,
  phone: Phone,
  mail: Mail,
  map: Map,
  arrowDown: ArrowDown,
  arrowRight: ArrowRight,
  arrowUp: ArrowUp,
  calculator: Calculator,
  compass: Compass,
  menu: Menu,
  chevronDown: ChevronDown,
  whatsapp: MessageCircle,
  facebook: Facebook,
  instagram: Instagram,
  key: KeyRound,
  linkedin: Linkedin,
  youtube: Youtube,
  award: Award,
  play: PlayCircle
};

function App() {
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <FloatingActions data={siteData.floatingActions} showBackTop={showBackTop} />
      <Navbar data={siteData.navigation} />
      <main>
        <Hero data={siteData.hero} />
        <About data={siteData.about} />
        <Leadership data={siteData.leadership} />
        <Services data={siteData.services} />
        <Projects data={siteData.projects} />
        <WhyChooseUs data={siteData.whyChooseUs} />
        <Process data={siteData.process} />
        <Testimonials data={siteData.testimonials} />
        <Faq data={siteData.faq} />
        <Cta data={siteData.cta} />
        <Contact data={siteData.contact} />
        <PrivacyPolicy data={siteData.privacyPolicy} />
      </main>
      <Footer data={siteData.footer} />
    </>
  );
}

export default App;
