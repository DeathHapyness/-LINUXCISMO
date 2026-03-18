import React, { useState } from 'react';
import '../styles/Convert.css';

export default function Convert() {
  const [email, setEmail] = useState('');
  const [converted, setConverted] = useState(false);

  function handleConvert() {
    if (!email.trim()) return;
    setConverted(true);
    setEmail('');
  }

  return (
    <section id="converter" className="convert">
      <div className="section-wrapper" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <span className="section-label">sudo linuxcismo --install-faith</span>
        <h2 className="section-title">
          Juntar-se à <span>Ordem</span>
        </h2>

        <div className="convert__box">
          <p>
            Deixa para trás o mundo do software proprietário. Aceita o Tux em teu coração.
            Inscreve teu email sagrado e recebe as revelações semanais do terminal.
          </p>

          <div className="convert__input-group">
            <input
              className="convert__input"
              type="email"
              placeholder="usuario@sagrado-terminal.org"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleConvert()}
            />
            <button className="convert__submit" onClick={handleConvert}>
              Converter
            </button>
          </div>

          <p className="convert__note">
            // Ao se inscrever, você concorda com a GPL v3 e promete nunca mais usar o Bloco de Notas.
          </p>

          {converted && (
            <p className="convert__success">
              [OK] Conversão iniciada. Kernel da fé instalado com sucesso. Bem-vindo, irmão.
            </p>
          )}
        </div>

        <div className="terminal-block">
          <div className="terminal-bar">
            <div className="t-dot" /><div className="t-dot" /><div className="t-dot" />
            <span className="terminal-title-bar">ritual-de-conversao.sh</span>
          </div>
          <code className="terminal-code">
            <span className="t-cmd">$</span> <span className="t-string">sudo</span> apt install linuxcismo-faith<br />
            <span className="t-comment"># Lendo lista de pacotes... Pronto</span><br />
            <span className="t-comment"># Construindo árvore de dependências... Pronto</span><br />
            <span className="t-output">Os seguintes pacotes serão instalados:</span><br />
            <span className="t-output">&nbsp;&nbsp;libfaith-torvalds gnu-soul tux-spirit vim-enlightenment</span><br />
            <span className="t-cmd">$</span> Após essa operação, 42 MB de espaço em disco serão utilizados.<br />
            <span className="t-cmd">$</span> Você quer continuar? [S/n] <span className="cursor-blink" />
          </code>
        </div>
      </div>
    </section>
  );
}
