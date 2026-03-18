import React, { useRef } from 'react';
import '../styles/Navbar.css';

const NAV_LINKS = [
  { label: 'Dogmas',      href: '#dogmas'     },
  { label: 'Profetas',    href: '#profetas'   },
  { label: 'Escrituras',  href: '#escrituras' },
  { label: 'Revelações',  href: '#blog'       },
  { label: 'Converter',   href: '#converter'  },
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

  return (
    <nav className="navbar">
      <a className="navbar__brand" href="#hero">
        LINUX<span>CISMO</span>
      </a>
      <ul className="navbar__links">
        {NAV_LINKS.map((link, i) => (
          <li key={link.href}>
            <a
              href={link.href}
              ref={el => (linkRefs.current[i] = el)}
              onMouseEnter={() => glitchText(linkRefs.current[i], link.label)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
