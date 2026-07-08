import { useEffect, useRef, useState } from 'react';
import SectionTitle from './SectionTitle.jsx';

function AnimatedStat({ stat }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const increment = Math.ceil(stat.value / 20);
        let current = 0;
        const timer = window.setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            window.clearInterval(timer);
          }
          setCount(current);
        }, 40);
        observer.unobserve(node);
      },
      { threshold: 0.5 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [stat.value]);

  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-number">
        {count}
        {count === stat.value ? stat.suffix : ''}
      </div>
      <div>{stat.label}</div>
    </div>
  );
}

function About({ data }) {
  return (
    <section id={data.id} className="container about-section">
      <SectionTitle title={data.title} />
      <p className="about-copy">{data.description}</p>
      <div className="stats-grid">
        {data.stats.map((stat) => (
          <AnimatedStat key={stat.label} stat={stat} />
        ))}
      </div>
    </section>
  );
}

export default About;
