import { useState } from 'react';
import SectionTitle from './SectionTitle.jsx';

function Projects({ data }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const filteredProjects =
    activeFilter === 'all' ? data.items : data.items.filter((project) => project.category === activeFilter);

  return (
    <section id={data.id} className="bg-soft section-padding">
      <div className="container">
        <SectionTitle title={data.title} accent={data.accent} />
        <div className="project-filter" aria-label="Project category filter">
          {data.filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="project-grid">
          {filteredProjects.map((project) => (
            <article className="project-item" key={project.name}>
              <img src={project.image} alt={project.name} loading="lazy" />
              <div className="overlay">{project.name}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
