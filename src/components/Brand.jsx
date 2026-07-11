import { siteData } from '../data.js';

function Brand({ light = false }) {
  const { first, accent, last } = siteData.navigation.brand;

  return (
    <a
      href="#home"
      className={`logo ${light ? 'logo-light' : ''}`}
      aria-label="Greenn Bugg House Deziign - Home"
      title="Greenn Bugg House Deziign"
    >
      {first}
      <span>{accent}</span> {last}
    </a>
  );
}

export default Brand;