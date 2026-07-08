export const siteData = {
  navigation: {
    brand: {
      first: 'Greenn',
      accent: ' Bugg',
      last: 'House Deziign'
    },
    links: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Projects', href: '#projects' },
      { label: 'Why Us', href: '#why' },
      { label: 'Process', href: '#process' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: 'https://forms.gle/YzrXXFGKcUQnARjq9' }
    ]
  },
  floatingActions: {
    whatsappUrl: 'https://wa.me/6203740886?text=Your%20Message'
  },
  hero: {
    title: 'Designing Spaces That Inspire.',
    description:
      'We create timeless architecture, elegant interiors, and innovative commercial spaces that combine beauty, functionality, and sustainability.',
    buttons: [
      { label: 'Book Free Consultation', href: 'https://forms.gle/YzrXXFGKcUQnARjq9', variant: 'primary' },
      { label: 'View Portfolio', href: '#projects', variant: 'secondary' }
    ],
    scrollLabel: 'Scroll'
  },
  about: {
    id: 'about',
    title: 'Who We Are',
    description:
      'Greenn Bugg House Deziign is a professional architecture and interior design studio dedicated to creating functional, elegant, and innovative spaces. Our mission is to transform ideas into beautifully designed environments that improve everyday living.',
    stats: [
      { value: 1000, suffix: '+', label: 'Projects Completed' },
      { value: 300, suffix: '+', label: 'Happy Clients' },
      { value: 5, suffix: '+', label: 'Years Experience' },
      { value: 10, suffix: '+', label: 'Design Awards' }
    ]
  },
  services: {
    id: 'services',
    title: 'Our',
    accent: 'Services',
    previewImage: {
      src: '/services-preview.jpeg',
      alt: 'Explore our home design services'
    },
    items: [
      { title: 'Residential Architecture', icon: 'architecture' },
      { title: 'Commercial Architecture', icon: 'commercial' },
      { title: 'Luxury Villa Design', icon: 'crown' },
      { title: 'Interior Design', icon: 'interior' },
      { title: 'Restaurant Design', icon: 'restaurant' },
      { title: 'Office Design', icon: 'office' },
      { title: 'Landscape Design', icon: 'landscape' },
      { title: 'Renovation', icon: 'renovation' },
      { title: '3D Visualization', icon: 'cube' },
      { title: 'Walkthrough Animation', icon: 'walkthrough' },
      { title: 'Construction Consultancy', icon: 'construction' },
      { title: 'Project Management', icon: 'project' }
    ]
  },
  projects: {
    id: 'projects',
    title: 'Project',
    accent: 'Showcase',
    filters: [
      { label: 'All', value: 'all' },
      { label: 'Residence', value: 'residence' },
      { label: 'Commercial', value: 'commercial' },
      { label: 'Interior', value: 'interior' }
    ],
    items: [
      {
        name: 'Premium Café Kiosk',
        category: 'residence',
        image:
          '/public/ChatGPT Image Mar 14, 2026, 11_35_31 AM.png'
      },
      {
        name: 'Grand Architectural Facade',
        category: 'residence',
        image:
          '/public/1753858781549.jpg.jpeg'
      },
      {
        name: 'Farmhouse',
        category: 'residence',
        image:
          '/public/CLASSIC HOUSE DESIGN.jpg.jpeg'
      },
      {
        name: 'Restaurant',
        category: 'commercial',
        image:
          '/public/DHARMENDRA JII.png'
      },
      {
        name: 'Modern Zen Entrance Design',
        category: 'commercial',
        image:
          '/public/MANOJ SIR TERRACE GARDEN 1.png'
      },
      {
        name: 'Office Interior',
        category: 'interior',
        image:
          '/public/RECEPTION.jpg.jpeg'
      },
      {
        name: 'Modern 3D Floor Plan',
        category: 'interior',
        image:
          '/public/SANKALP JI 3D FLOOR PLAN.png'
      },
      {
        name: 'Luxury Duplex Residence',
        category: 'interior',
        image:
          '/public/RISHU JII.png'
      },
      {
        name: 'Premium House Design',
        category: 'commercial',
        image:
          '/public/G+1 classical house design.jpg.jpeg'
      },
      {
        name: 'Elevation Design',
        category: 'residence',
        image:
          '/public/MR.VIJAY SINGH 1.png'
      }
    ]
  },
  whyChooseUs: {
    id: 'why',
    title: 'Why',
    accent: 'Choose Us',
    items: [
      { title: 'Creative Design', icon: 'creative' },
      { title: 'Experienced Architects', icon: 'architect' },
      { title: 'Affordable Solutions', icon: 'affordable' },
      { title: 'On-Time Delivery', icon: 'clock' },
      { title: 'Premium Quality', icon: 'quality' },
      { title: 'Client Satisfaction', icon: 'satisfaction' },
      { title: 'Smart Planning', icon: 'planning' },
      { title: 'Sustainable Design', icon: 'sustainable' }
    ]
  },
  process: {
    id: 'process',
    title: 'Our',
    accent: 'Process',
    steps: ['Consultation', 'Planning', 'Design', '3D Visualization', 'Execution', 'Completion']
  },
  testimonials: {
    id: 'testimonials',
    title: 'What',
    accent: 'Clients Say',
    items: [
      { rating: 5, quote: 'Professional team and outstanding design.' },
      { rating: 5, quote: 'They understood our vision perfectly.' },
      { rating: 5, quote: 'Highly recommended for luxury homes.' }
    ]
  },
  faq: {
    id: 'faq',
    title: 'Frequently Asked',
    accent: 'Questions',
    items: [
      {
        question: 'How long does a project take?',
        answer: 'Typical projects range from 4 to 12 months depending on scope.'
      },
      {
        question: 'Do you provide 3D designs?',
        answer: 'Yes, we deliver high-quality 3D visualizations for every project.'
      },
      {
        question: 'Can you renovate existing buildings?',
        answer: 'Absolutely, we specialize in both new builds and renovations.'
      },
      {
        question: 'Do you work outside the city?',
        answer: 'Yes, we serve clients nationally and internationally.'
      },
      {
        question: 'How much does an architect charge?',
        answer: 'Fees vary; we offer competitive and transparent pricing.'
      },
      {
        question: 'Can I customize my design?',
        answer: 'Every design is fully tailored to your preferences.'
      }
    ]
  },
  cta: {
    title: 'Ready to Build Your Dream Project?',
    description: "Let's discuss your ideas today.",
    buttons: [
      { label: 'Contact Us', href: 'https://forms.gle/YzrXXFGKcUQnARjq9', variant: 'gold' },
      { label: 'Get Free Quote', href: '#', variant: 'outlineLight' }
    ]
  },
  contact: {
    id: 'contact',
    title: 'Get in',
    accent: 'Touch',
    details: [
      { icon: 'mapPin', text: 'Umanagar, near skmch HP Petrol pump Muzaffarpur, 842004' },
      { icon: 'mapPin', text: 'H-Block, sector-63, Noida 201301' },
      { icon: 'phone', text: '+91 6203740886' },
      { icon: 'phone', text: '+91 7827398853' },
      { icon: 'mail', text: 'rohitprakash7061@gmail.com' },
      { icon: 'clock', text: 'Mon-Sat 10AM-7PM' },
      { icon: 'map', text: 'Google Map' }
    ],
    mapText: 'Map placeholder'
  },
  privacyPolicy: {
    id: 'privacy-policy',
    title: 'Privacy',
    accent: 'Policy',
    updated: 'Last updated: July 6, 2026',
    pdf: {
      href: '/privacy-policy.pdf'
    },
    items: [
      {
        title: 'Information We Collect',
        text:
          'We may collect your name, phone number, email address, project location, and design requirements when you contact us for consultation, quotation, or project support.'
      },
      {
        title: 'How We Use Your Information',
        text:
          'We use your information to respond to enquiries, prepare design proposals, share project updates, schedule meetings, and improve our architecture and interior design services.'
      },
      {
        title: 'Data Sharing',
        text:
          'We do not sell your personal information. We may share relevant details only with trusted project partners, consultants, vendors, or service providers when required to deliver your project.'
      },
      {
        title: 'Data Security',
        text:
          'We take reasonable steps to protect your information from unauthorized access, misuse, or disclosure, but no digital communication or storage method can be guaranteed as completely secure.'
      },
      {
        title: 'Your Choices',
        text:
          'You may ask us to update, correct, or delete your personal information by contacting us through the phone number or email address listed on this website.'
      },
      {
        title: 'Contact Us',
        text:
          'For privacy-related questions, contact Greenn Bugg House Deziign at rohitprakash7061@gmail.com or +91 6203740886.'
      }
    ]
  },
  footer: {
    tagline: 'Designing Spaces That Inspire',
    socialLinks: [
      { label: 'Facebook', href: 'https://www.facebook.com/share/1BG2zyaMYK/', icon: 'facebook' },
      { label: 'Instagram', href: 'https://www.instagram.com/greenn_bugg_house_deziign?igsh=bTBqMTIxeTdud3k3', icon: 'instagram' },
      { label: 'LinkedIn', href: '#', icon: 'linkedin' },
      { label: 'YouTube', href: '#', icon: 'youtube' },
      { label: 'WhatsApp', href: '#', icon: 'whatsapp' }
    ],
    quickLinks: [
      { label: 'Services', href: '#services' },
      { label: 'Projects', href: '#projects' },
      { label: 'Privacy Policy', href: '/privacy-policy.pdf' },
      { label: 'Terms', href: '#' }
    ],
    contact: ['+91 6203740886', '+91 7827398853', 'deziigngreenbugghouse@gmail.com'],
    copyright: 'Copyright 2022 Greenn Bugg House Deziign'
  }
};
