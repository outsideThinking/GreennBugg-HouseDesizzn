import { useState } from 'react';
import { iconMap } from '../App.jsx';
import Brand from './Brand.jsx';

function Navbar({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const MenuIcon = iconMap.menu;

  return (
    <nav>
      <div className="container nav-container">
        <Brand />
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          {data.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="hamburger"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <MenuIcon size={28} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
