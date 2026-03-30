import React from 'react';
import '../styles/Distros.css';

const BASE_DISTROS = [
  {
    name: 'Debian',
    role: 'Base de muitas distribuições estáveis.',
    description:
      'Debian serve de alicerce para Ubuntu, Mint e muitas outras. Sua estabilidade, política de software livre e extensa coleção de pacotes tornam-no fundamental para servidores, desktops e projetos comunitários.',
    detail:
      'Por trás de incontáveis “derivadas”, Debian mantém um ciclo de lançamentos conservador e um compromisso com liberdade e confiabilidade.',
    imageLabel: 'Logo Debian',
    image: '/img/Distros/debian-linux-logo-4268290860.png',
    link: 'https://www.debian.org/',
  },
  {
    name: 'CentOS',
    role: 'Base de infraestrutura corporativa.',
    description:
      'CentOS é conhecido por sua compatibilidade com o ecossistema RHEL e por ser a base de servidores em datacenters, ambientes de produção e serviços web.',
    detail:
      'Ao fornecer uma plataforma estável e compatível com Red Hat, CentOS sustenta aplicações empresariais, bancos de dados e microsserviços críticos.',
    imageLabel: 'Logo CentOS',
    image: 'public/img/Distros/centos-8-908415679.png',
    link: 'https://www.centos.org/',
  },
  {
    name: 'Ubuntu',
    role: 'Base desktop e servidor popular.',
    description:
      'Ubuntu traz uma experiência acessível para usuários novos e avançados, enquanto serve como base para distros como Pop!_OS, Linux Mint e Zorin OS.',
    detail:
      'Sua ampla adoção, suporte de hardware e foco em usabilidade fazem do Ubuntu um dos pilares mais influentes do universo Linux.',
    imageLabel: 'Logo Ubuntu',
    image: 'public/img/Distros/47f12466-og_+ubuntu-1354603985.png',
    link: 'https://ubuntu.com/',
  },
  {
    name: 'Arch',
    role: 'Base para distros minimalistas e avançadas.',
    description:
      'Arch inspira projetos como Manjaro, EndeavourOS e Garuda com seu modelo rolling release e filosofia KISS.',
    detail:
      'Seu ciclo contínuo, repositórios atualizados e foco em aprendizado tornam Arch um ponto de partida para sistemas personalizados e vanguardistas.',
    imageLabel: 'Logo Arch',
    image: 'public/img/Distros/Logo-Arch-Linux-52510365.jpg',
    link: 'https://archlinux.org/',
  },
];

const INDIE_DISTROS = [
  {
    name: 'Solus',
    description:
      'Solus é uma distro independente que foca em produtividade e uma experiência limpa com o ambiente Budgie.',
    imageLabel: 'Solus icon',
    image: 'public/img/Distros/Solus-2998302444.png',
    link: 'https://getsol.us/',
  },
  {
    name: 'NixOS',
    description:
      'NixOS usa uma abordagem declarativa para configurar o sistema, oferecendo controle absoluto sobre pacotes e dependências.',
    imageLabel: 'NixOS icon',
    image: 'public/img/Distros/cooking-and-baking-linux-distributions-in-nix-3664467207.png',
    link: 'https://nixos.org/',
  },
  {
    name: 'Void',
    description:
      'Void é independente, leve e usa o gerenciador de pacotes xbps, apoiando tanto glibc quanto musl para maior flexibilidade.',
    imageLabel: 'Void icon',
    image: 'public/img/Distros/void-linux-2643324414.png',
    link: 'https://voidlinux.org/',
  },
];

export default function Distros() {
  return (
    <section id="distros" className="distros">
      <div className="section-wrapper" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <span className="section-label">ls -la /var/www/revelacoes/</span>
        <h2 className="section-title">
          Distribuições <span>Linux</span>
        </h2>

        <p className="section-description">
          O Linux é o núcleo, mas são as distribuições que transformam o sistema em uma experiência completa. Aqui você encontra as distribuições que servem de base para outras e também algumas opções indie cheias de personalidade.
        </p>

        <div className="distros__section">
          <h3 className="distros__section-title">Bases para outras distros</h3>
          <div className="distros__grid">
            {BASE_DISTROS.map((distro) => (
              <article key={distro.name} className="distro-card">
                <div className="distro-card__image" aria-label={distro.imageLabel}>
                  {distro.image ? (
                    <img src={distro.image} alt={distro.imageLabel} />
                  ) : (
                    <span>{distro.name}</span>
                  )}
                </div>
                <h3>{distro.name}</h3>
                <span className="distro-card__tagline">{distro.role}</span>
                <p>{distro.description}</p>
                <p className="distro-card__detail">{distro.detail}</p>
                <a
                  href={distro.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="distro-card__link"
                >
                  Saiba mais
                </a>
              </article>
            ))}
          </div>
        </div>

        <div className="distros__section">
          <h3 className="distros__section-title">Distros indie e independentes</h3>
          <div className="distros__grid distros__grid--indie">
            {INDIE_DISTROS.map((distro) => (
              <article key={distro.name} className="distro-card distro-card--indie">
                <div className="distro-card__image" aria-label={distro.imageLabel}>
                  {distro.image ? (
                    <img src={distro.image} alt={distro.imageLabel} />
                  ) : (
                    <span>{distro.name}</span>
                  )}
                </div>
                <h3>{distro.name}</h3>
                <p>{distro.description}</p>
                <a
                  href={distro.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="distro-card__link"
                >
                  Saiba mais
                </a>
              </article>
            ))}
          </div>
        </div>

        <div className="distros__footer">
          <h3>Por que cada distribuição importa?</h3>
          <p>
            Distribuições base sustentam ecossistemas inteiros. As distros indie mostram como o Linux continua diverso, com abordagens novas para configurações, desempenho e design. Juntas, elas fazem do Linux uma plataforma viva e em constante evolução.
          </p>
        </div>
      </div>
    </section>
  );
}
            