import { iconMap } from '../App.jsx';

function Hero({ data }) {
  const ArrowDown = iconMap.arrowDown;

  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <div className="hero-buttons">
          {data.buttons.map((button) => (
            <a key={button.label} href={button.href} className={`btn-${button.variant}`}>
              {button.label}
            </a>
          ))}
        </div>
        <div className="scroll-indicator">
          <span>{data.scrollLabel}</span>
          <ArrowDown size={18} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
