import { iconMap } from '../App.jsx';
import Brand from './Brand.jsx';

function Footer({ data }) {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <Brand light />
          <p className="footer-tagline">{data.tagline}</p>
          <div className="social-icons">
            {data.socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a key={link.label} href={link.href} aria-label={link.label}>
                  {Icon && <Icon size={22} />}
                </a>
              );
            })}
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          {data.quickLinks.map((link) => {
            const isPdf = link.href.endsWith('.pdf');
            return (
              <a key={link.label} href={link.href} target={isPdf ? '_blank' : undefined} rel={isPdf ? 'noreferrer' : undefined}>
                {link.label}
              </a>
            );
          })}
        </div>
        <div>
          <h4>Contact</h4>
          {data.contact.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div>
          <p>{data.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
