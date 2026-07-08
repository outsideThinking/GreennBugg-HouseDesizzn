import SectionTitle from './SectionTitle.jsx';
import { ServiceCard } from './Services.jsx';

function WhyChooseUs({ data }) {
  return (
    <section id={data.id} className="container section-padding">
      <SectionTitle title={data.title} accent={data.accent} />
      <div className="why-grid">
        {data.items.map((item) => (
          <ServiceCard key={item.title} item={item} compact />
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
