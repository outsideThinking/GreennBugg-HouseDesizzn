import { siteData } from '../data.js';

function Brand({ light = false }) {
  const { first, accent, last } = siteData.navigation.brand;

  return (
    <a href="#home" className={`logo ${light ? 'logo-light' : ''}`} aria-label="Go to home">
      {first}
      <span>{accent}</span> {last}
    </a>
  );
}

export default Brand;
