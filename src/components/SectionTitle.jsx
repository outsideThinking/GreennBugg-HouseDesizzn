function SectionTitle({ title, accent }) {
  return (
    <h2 className="section-title">
      {title} {accent && <span className="gold-accent">{accent}</span>}
    </h2>
  );
}

export default SectionTitle;
