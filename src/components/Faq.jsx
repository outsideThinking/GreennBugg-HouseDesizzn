import { useState } from 'react';
import { iconMap } from '../App.jsx';
import SectionTitle from './SectionTitle.jsx';

function Faq({ data }) {
  const [openItems, setOpenItems] = useState([0]);
  const ChevronDown = iconMap.chevronDown;

  const toggleItem = (index) => {
    setOpenItems((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index]
    );
  };

  return (
    <section id={data.id} className="bg-soft section-padding">
      <div className="container">
        <SectionTitle title={data.title} accent={data.accent} />
        {data.items.map((item, index) => {
          const isOpen = openItems.includes(index);
          return (
            <div className={`faq-item ${isOpen ? 'active' : ''}`} key={item.question}>
              <button
                className="faq-question"
                type="button"
                aria-expanded={isOpen}
                onClick={() => toggleItem(index)}
              >
                <span>{item.question}</span>
                <ChevronDown size={18} />
              </button>
              <div className="faq-answer">{item.answer}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Faq;
