import React from 'react';
import { SCRIPTURES } from '../data/data';
import '../styles/Scriptures.css';

function ScriptureItem({ ref: _ref, ...props }) {
  return (
    <div className="scripture-item">
      <span className="scripture-item__ref">{props.reff}</span>
      <blockquote className="scripture-item__quote">{props.quote}</blockquote>
      <cite className="scripture-item__source">{props.source}</cite>
    </div>
  );
}

export default function Scriptures() {
  return (
    <section id="escrituras" className="scriptures">
      <div className="section-wrapper" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <span className="section-label">grep -r "sabedoria" /livro_do_terminal.txt</span>
        <h2 className="section-title">
          As Sagradas <span>Escrituras</span>
        </h2>

        <div className="prayer-box">
          <h3 className="prayer-box__title">✦ ORAÇÃO DO LINUXCISTA ✦</h3>
          <p className="prayer-box__text">
            Ó Linus que estás nos repositórios,<br />
            santificado seja teu kernel.<br />
            Venha a nós o teu pull request,<br />
            seja feito o teu merge no main como é feito no dev.<br />
            O pão nosso de cada dia, dai-nos hoje o apt update,<br />
            perdoai os nossos segfaults assim como nós perdoamos<br />
            os que nos commitam código sem testar.<br />
            Não nos deixeis cair em proprietary software,<br />
            mas livrai-nos do Windows.<br />
            <br />
            <em>Amém. Fork eternamente.</em>
          </p>
        </div>

        <div>
          {SCRIPTURES.map((s, i) => (
            <div key={i} className="scripture-item">
              <span className="scripture-item__ref">{s.ref}</span>
              <blockquote className="scripture-item__quote">{s.quote}</blockquote>
              <cite className="scripture-item__source">{s.source}</cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
