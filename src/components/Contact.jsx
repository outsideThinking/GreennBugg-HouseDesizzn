import { iconMap } from '../App.jsx';
import SectionTitle from './SectionTitle.jsx';

function Contact({ data }) {
  return (
    <section id={data.id} className="container section-padding">
      <SectionTitle title={data.title} accent={data.accent} />
      <div className="contact-grid">
        <div className="contact-info">
          {data.details.map((detail) => {
            const Icon = iconMap[detail.icon];
            return (
              <p key={detail.text}>
                {Icon && <Icon size={20} />}
                <span>{detail.text}</span>
              </p>
            );
          })}
        </div>
        <div className="map-placeholder">{data.mapText}</div>
      </div>
    </section>
  );
}

export default Contact;
