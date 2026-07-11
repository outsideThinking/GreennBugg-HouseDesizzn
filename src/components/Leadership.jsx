import { useEffect, useRef, useState } from 'react';
import {
  Building2,
  ClipboardList,
  HardHat,
  Layers,
  ShieldCheck,
  Users,
  Linkedin,
  Instagram,
  Mail
} from 'lucide-react';
import './Leadership.css';

const iconMap = {
  Building2,
  Layers,
  HardHat,
  ClipboardList,
  Users,
  ShieldCheck,
  Mail,
  Linkedin,
  Instagram,
  linkedin: Linkedin,
  instagram: Instagram,
  mail: Mail
};

function Leadership({ data }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={data.id}
      ref={sectionRef}
      className={`leadership-section container ${isVisible ? 'visible' : ''}`}
    >
      <div className="leadership-grid">
        <div className="leadership-panel fade-up">
          <span className="section-subtitle">Leadership</span>
          <h2 className="section-heading">{data.sectionHeading}</h2>

          <article className="leadership-card glass-card">
            <div className="leader-photo-frame">
              <img
                className="leader-photo"
                src={data.ceo.image}
                alt={data.ceo.alt}
                loading="lazy"
              />
              <div className="photo-glow" aria-hidden="true" />
            </div>

            <div className="leader-info">
              <h3>{data.ceo.name}</h3>
              <p className="leader-title">
                {data.ceo.title}
                <br />
                <span className="title-accent">{data.ceo.titleAccent}</span>
              </p>
              <p className="leader-bio">{data.ceo.bio}</p>

              <div className="social-row">
                {data.ceo.social.map((social) => {
                  const SocialIcon = iconMap[social.icon];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="social-link"
                      aria-label={social.label}
                    >
                      <SocialIcon />
                    </a>
                  );
                })}
              </div>

              <a href={data.cta.href} className="leader-button" aria-label={data.cta.label}>
                {data.cta.label}
              </a>
            </div>
          </article>
        </div>

        <div className="team-panel fade-up">
          <span className="section-subtitle">Team Overview</span>
          <h3 className="team-heading">Our Expert Team</h3>
          <div className="team-grid">
            {data.teamCards.map((card, index) => {
              const CardIcon = iconMap[card.icon] || Users;
              return (
                <article
                  key={card.title}
                  className="team-card"
                  style={{ transitionDelay: `${index * 70}ms` }}
                >
                  <div className="team-card-icon">
                    <CardIcon />
                  </div>
                  <div className="team-card-copy">
                    <p className="team-card-value">{card.value}</p>
                    <h4>{card.title}</h4>
                    <p>{card.description}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="team-summary">
            <span>{data.summary.value}</span>
            <p>{data.summary.label}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Leadership;
