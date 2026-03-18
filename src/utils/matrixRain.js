/**
 * matrixRain.js
 */

const CHARS =
  'アイウエオカキクケコサシスセソタチツテトナニヌネノ' +
  '01010111000LINUXROOT#!/bin/bash$sudo';

export function startMatrixRain(canvas) {
  const ctx = canvas.getContext('2d');
  const fontSize = 12;
  let animId;
  let drops = [];

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    const cols = Math.floor(canvas.width / fontSize);
    // keep existing drops, extend if needed
    while (drops.length < cols) drops.push(Math.random() * canvas.height / fontSize | 0);
    drops = drops.slice(0, cols);
  }

  function draw() {
    ctx.fillStyle = 'rgba(5, 13, 5, 0.04)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00ff41';
    ctx.font = `${fontSize}px "Share Tech Mono", monospace`;

    for (let i = 0; i < drops.length; i++) {
      const char = CHARS[Math.floor(Math.random() * CHARS.length)];
      ctx.fillText(char, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
    animId = requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize);
  animId = requestAnimationFrame(draw);

  // Return cleanup
  return () => {
    cancelAnimationFrame(animId);
    window.removeEventListener('resize', resize);
  };
}
