import SectionTitle from './SectionTitle.jsx';

function Process({ data }) {
  return (
    <section id={data.id} className="bg-soft section-padding">
      <div className="container">
        <SectionTitle title={data.title} accent={data.accent} />
        <div className="process-list">
          {data.steps.map((step, index) => (
            <div className="process-step" key={step}>
              <span className="step-num">{String(index + 1).padStart(2, '0')}</span>
              {step}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
