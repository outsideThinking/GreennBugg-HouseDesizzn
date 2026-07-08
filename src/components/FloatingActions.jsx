import { iconMap } from '../App.jsx';

function FloatingActions({ data, showBackTop }) {
  const Whatsapp = iconMap.whatsapp;
  const ArrowUp = iconMap.arrowUp;

  return (
    <>
      <a href={data.whatsappUrl} className="float-wa" aria-label="Contact on WhatsApp">
        <Whatsapp size={32} />
      </a>
      <button
        type="button"
        className={`back-top ${showBackTop ? 'visible' : ''}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUp size={24} />
      </button>
    </>
  );
}

export default FloatingActions;
