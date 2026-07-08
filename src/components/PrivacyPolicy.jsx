import SectionTitle from './SectionTitle.jsx';

function PrivacyPolicy({ data }) {
  return (
    <section id={data.id} className="privacy-section bg-soft section-padding">
      <div className="container">
        <SectionTitle title={data.title} accent={data.accent} />
        <p className="privacy-updated">{data.updated}</p>
        <div className="privacy-grid">
          {data.items.map((item) => (
            <article className="privacy-item" key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
