import SectionTitle from './SectionTitle.jsx';

function Testimonials({ data }) {
  return (
    <section id={data.id} className="container section-padding">
      <SectionTitle title={data.title} accent={data.accent} />
      <div className="testimonial-grid">
        {data.items.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.quote}>
            <div className="stars" aria-label={`${testimonial.rating} star rating`}>
              {'★'.repeat(testimonial.rating)}
            </div>
            <p>"{testimonial.quote}"</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
