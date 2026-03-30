import '../styles/Navbar.css';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
const NAV_LINKS = [
  { label: 'Dogmas',      href: '#dogmas'     },
  { label: 'Profetas',    href: '#profetas'   },
  { label: 'Escrituras',  href: '#escrituras' },
  { label: 'Revelações',  href: '#blog'       },
  { label: 'Converter',   href: '#converter'  },
  { label: 'O Inicio',    href: '/inicio', route: true },
  { label: 'Distros',      href: '/distros', route: true },
];

const GLITCH_CHARS = '!@#$%^&*0123456789';

function glitchText(el, original) {
  let i = 0;
  const interval = setInterval(() => {
    el.textContent = original
      .split('')
      .map((c, idx) =>
        idx < i ? c : GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
      )
      .join('');
    if (i >= original.length) {
      clearInterval(interval);
      el.textContent = original;
    }
    i++;
  }, 40);
}

export default function Navbar() {
  const linkRefs = useRef([]);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    
    <nav className="navbar">
      <button
        className="navbar__hamburger"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <Link className="navbar__brand" to="/">
        LINUX<span>CISMO</span>
      </Link>
      <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
        {NAV_LINKS.map((link, i) => (
          <li key={link.href}>
            {link.route ? (
              <Link
                to={link.href}
                ref={el => (linkRefs.current[i] = el)}
                onMouseEnter={() => glitchText(linkRefs.current[i], link.label)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                href={link.href}
                ref={el => (linkRefs.current[i] = el)}
                onMouseEnter={() => glitchText(linkRefs.current[i], link.label)}
              >
                {link.label}
              </a>
            )}
          </li>
         ))}
      </ul>
    </nav>
  );
}
