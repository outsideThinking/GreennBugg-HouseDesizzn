function Cta({ data }) {
  return (
    <section className="cta-section">
      <div className="container">

        <h2>
          Looking for the Best Architecture & Interior Design Company in Noida, Bihar & Across India?
        </h2>

        <p>
          Greenn Bugg House Deziign provides professional Residential
          Architecture, Commercial Architecture, Interior Design,
          Villa Design, Construction Consultancy and 3D Visualization
          services. Whether you are planning a new home, office,
          commercial building or renovation project, our expert
          architects and designers are ready to turn your vision
          into reality.
        </p>

        <div className="cta-buttons">
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

      </div>
    </section>
  );
}

export default Cta;