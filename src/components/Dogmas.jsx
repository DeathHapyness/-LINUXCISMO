import React from 'react';
import { DOGMAS } from '../data/data';
import '../styles/Dogmas.css';

function DogmaCard({ num, title, text }) {
  return (
    <div className="dogma-card">
      <span className="dogma-card__num">{num}</span>
      <h3 className="dogma-card__title">{title}</h3>
      <p className="dogma-card__text">{text}</p>
    </div>
  );
}

export default function Dogmas() {
  return (
    <section id="dogmas" className="dogmas">
      <div className="section-wrapper" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <span className="section-label">cat /etc/linuxcismo/dogmas.txt</span>
        <h2 className="section-title">
          Os Dez <span>Mandamentos</span> do Terminal
        </h2>

        <div className="terminal-block">
          <div className="terminal-bar">
            <div className="t-dot" /><div className="t-dot" /><div className="t-dot" />
            <span className="terminal-title-bar">sagradas-escrituras.sh</span>
          </div>
          <code className="terminal-code">
            <span className="t-comment"># Executando os mandamentos sagrados...</span><br />
            <span className="t-cmd">$</span> <span className="t-string">sudo</span> chmod +x mandamentos.sh && ./mandamentos.sh<br />
            <span className="t-output">[OK] Mandamentos carregados com sucesso.</span><br />
            <span className="t-output">[OK] Kernel da Fé compilado.</span><br />
            <span className="t-output">[AVISO] Windows detectado nas proximidades. Rezar imediatamente.</span>
          </code>
        </div>

        <div className="dogmas__grid">
          {DOGMAS.map(d => (
            <DogmaCard key={d.num} {...d} />
          ))}
        </div>
      </div>
    </section>
  );
}
