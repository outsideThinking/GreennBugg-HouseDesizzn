function Cta({ data }) {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <div className="cta-buttons">
          {data.buttons.map((button) => (
            <a key={button.label} href={button.href} className={`btn-${button.variant}`}>
              {button.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cta;
