import React from 'react';
import '../styles/Footer.css';

const LINKS = [
  { label: 'Dogmas',     href: '#dogmas'     },
  { label: 'Profetas',   href: '#profetas'   },
  { label: 'Escrituras', href: '#escrituras' },
  { label: 'Revelações', href: '#blog'       },
  { label: 'Fórum',      href: '#'           },
  { label: 'IRC',        href: '#'           },
];

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer__brand">
        LINUX<span>CISMO</span>
      </span>

      <ul className="footer__links">
        {LINKS.map(l => (
          <li key={l.label}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>

      <p className="footer__copy">
        © 2026 Igreja do Terminal Sagrado — Licença GNU GPL v3<br />
        "Free as in freedom, não como em cerveja grátis"<br />
        Feito com amor, caffeine e muitos commits às 3h da manhã.
      </p>
    </footer>
  );
}
