import { iconMap } from '../App.jsx';
import SectionTitle from './SectionTitle.jsx';

function ServiceCard({ item, compact = false }) {
  const Icon = iconMap[item.icon];

  return (
    <div className={`service-card ${compact ? 'service-card-compact' : ''}`}>
      {Icon && <Icon size={42} strokeWidth={1.8} />}
      <h4>{item.title}</h4>
    </div>
  );
}

function FeaturedServices({ data }) {
  const ArrowRight = iconMap.arrowRight;

  return (
    <div className="featured-services">
      <div className="featured-services-heading">
        <h3>{data.title}</h3>
        <p>{data.subtitle}</p>
      </div>
      <div className="featured-service-grid">
        {data.cards.map((card) => {
          const Icon = iconMap[card.icon];
          return (
            <article className={`featured-service-card tone-${card.tone}`} key={`${card.title}-${card.subtitle}`}>
              <div className="featured-service-top">
                <span className="featured-service-icon">{Icon && <Icon size={30} strokeWidth={1.9} />}</span>
              </div>
              <div className="featured-service-body">
                <h4>{card.title}</h4>
                {card.subtitle && <p>{card.subtitle}</p>}
              </div>
              <a className="featured-service-action" href={card.href}>
                {ArrowRight && <ArrowRight size={15} strokeWidth={3} />}
                <span>{card.action}</span>
              </a>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function Services({ data }) {
  return (
    <section id={data.id} className="container section-padding">
      <SectionTitle title={data.title} accent={data.accent} />
      {data.featured && <FeaturedServices data={data.featured} />}
      <div className="service-grid">
        {data.items.map((item) => (
          <ServiceCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

export { ServiceCard };
export default Services;
