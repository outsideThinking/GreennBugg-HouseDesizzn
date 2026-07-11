import { iconMap } from '../App.jsx';

function Hero({ data }) {
  const ArrowDown = iconMap.arrowDown;

  return (
    <section id="home" className="hero">
      <div className="container hero-content">

        <h1>
          Best Architecture & Interior Design Company in Noida, Bihar & Across India
        </h1>

        <p>
          Greenn Bugg House Deziign provides professional Residential
          Architecture, Commercial Architecture, Interior Design,
          Villa Design, Construction Consultancy and 3D Visualization
          services. We create modern, sustainable and functional spaces
          for homes, offices, apartments and commercial projects across India.
        </p>

        <div className="hero-keywords">
          <span>Residential Architecture</span>
          <span>Commercial Architecture</span>
          <span>Interior Design</span>
          <span>Villa Design</span>
          <span>Construction Consultancy</span>
          <span>3D Visualization</span>
        </div>

        <div className="hero-buttons">
          {data.buttons.map((button) => (
            <a
              key={button.label}
              href={button.href}
              className={`btn-${button.variant}`}
            >
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