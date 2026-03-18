import React from 'react';
import { PROPHETS } from '../data/data';
import '../styles/Prophets.css';

function ProphetCard({ name, title, img }) {  
  return (
    <div className="prophet-card">
      <img
        src={img}                             
        alt={name}
        className="prophet-card__img"
      />
      <h3 className="prophet-card__name">{name}</h3>
      <span className="prophet-card__role">{title}</span>
    </div>
  );
}

export default function Prophets() {
  return (
    <section id="profetas" className="prophets">
      <div className="section-wrapper" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <span className="section-label">ls /home/profetas/</span>
        <h2 className="section-title">
          Os Grandes <span>Profetas</span>
        </h2>
        <div className="prophets__grid">
          {PROPHETS.map(p => (
            <ProphetCard key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}