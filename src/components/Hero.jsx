import React, { useEffect, useRef } from 'react';
import { startMatrixRain } from '../utils/matrixRain';
import '../styles/Hero.css';

const TUX_IMG = '/img/pinguim-linux-tux-871x1024-953411487.png';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cleanup = startMatrixRain(canvasRef.current);
    return cleanup;
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        id="matrix-canvas"
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100%', height: '100%',
          opacity: 0.07,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <section className="hero" id="hero">
        <div className="hero__radial" />

        <img className="hero__tux" src={TUX_IMG} alt="Tux, o pingüim do Linux" />

        <h1 className="hero__title">LINUXCISMO</h1>
        <p className="hero__subtitle">A Verdadeira Via do Terminal Sagrado</p>

        <p className="hero__tagline">
          <span className="prompt">root@cosmos:~$</span> em um universo de sistemas proprietários,
          <br />nós escolhemos o caminho da liberdade, do código aberto e da linha de comando.
          <br /><span className="prompt">// sudo iluminar-me --force</span>
        </p>

        <div className="hero__cta">
          <a href="#converter" className="btn"><span>Iniciar Conversão</span></a>
          <a href="#dogmas" className="btn btn-gold"><span>Os Sagrados Dogmas</span></a>
        </div>

        <div className="hero__scroll-hint">▼ scroll para iluminação ▼</div>
      </section>
    </>
  );
}
