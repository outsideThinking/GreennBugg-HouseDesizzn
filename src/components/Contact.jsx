import { iconMap } from '../App.jsx';
import SectionTitle from './SectionTitle.jsx';

function Contact({ data }) {
  return (
    <section id={data.id} className="container section-padding">

      <SectionTitle
        title="Contact Greenn Bugg House Deziign"
        accent="Let's Build Your Dream Space"
      />

      <div className="contact-description">
        <h2>
          Contact the Best Architecture & Interior Design Company in Noida,
          Bihar & Across India
        </h2>

        <p>
          Looking for experienced architects or interior designers?
          Greenn Bugg House Deziign specializes in Residential Architecture,
          Commercial Architecture, Interior Design, Villa Design,
          Construction Consultancy and 3D Visualization.
          Contact us today for a free consultation and let's bring your
          dream project to life.
        </p>
      </div>

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

        <div className="map-placeholder">
          {data.mapText}
        </div>

      </div>

    </section>
  );
}

export default Contact;