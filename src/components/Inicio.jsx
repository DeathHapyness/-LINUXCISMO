import React from 'react';
import '../styles/Inicio.css';

export default function Inicio() {
  return (
    <section className="section-wrapper">
      <span className="section-label">História do Linux</span>
      <h1 className="section-title">A Evolução do <span>Linux</span></h1>

      <p className="history-intro">
        A História do Linux começou em 1991 com o início de um projeto pessoal de um estudante finlandês chamado Linus Torvalds com o intuito de criar um novo núcleo de sistema operacional.
        Desde então, o núcleo Linux resultante foi marcado por um crescimento constante ao longo de sua história. A partir do lançamento inicial de seu código-fonte em 1991, cresceu de um pequeno grupo de arquivos em C sob uma proibitiva licença de distribuição comercial, em 1991, a possuir mais de 370 megabytes de fonte sob a licença GPL.
      </p>

      <div className="history-detail">
        <h2>Eventos que levaram à criação</h2>
        <p>
          O sistema operativo Unix foi concebido e implementado por Ken Thompson e Dennis Ritchie (ambos dos AT&T Bell Laboratories) em 1969 e primeiramente lançado em 1970. Sua disponibilidade e portabilidade fizeram com que fosse amplamente adotado, copiado e modificado por instituições acadêmicas e negócios. Seu design influenciou autores de outros sistemas.[carece de fontes]

        Em 1983, Richard Stallman começou o Projeto GNU com o objetivo de criar um Sistema operacional tipo Unix gratuito e livre. Como parte desse trabalho, ele escreveu a GNU General Public License (GPL). No começo dos anos 1990, havia software quase suficiente para se criar um sistema operacional completo. Entretanto, o núcleo GNU, chamado de Hurd, não conseguiu atrair atenção suficiente dos desenvolvedores, deixando o GNU incompleto.

        Outro projeto de sistema operacional livre, inicialmente lançado em 1977, foi o Berkeley Software Distribution (BSD). Foi desenvolvido pela Universidade da Califórnia em Berkeley a partir da versão 6 do Unix da AT&T. Uma vez que o BSD continha código do Unix do qual a AT&T era proprietária, a AT&T entrou com um processo (USL v. BSDi) no começo dos anos 1990 contra a Universidade da Califórnia. Isso limitou fortemente o desenvolvimento e adoção do BSD.

        Em 1985, a Intel lançou o 80386, o primeiro microprocessador x86 com conjunto de instruções de 32-bit e MMU com paginação.

        Em 1986, Maurice J. Bach, of AT&T Bell Labs, publicou The Design of the UNIX Operating System.[6] Essa descrição definitiva cobria principalmente o núcleo System V versão 2, com algumas novas características da versão 3 e do BSD.

        O MINIX, um sistema operacional tipo Unix pensada para uso acadêmico, foi lançado por Andrew S. Tanenbaum em 1987. Se bem o código-fonte do sistema estava disponível, modificações e redistribuições não era permitidas. Ademais, o design do MINIX de 16-bit não se adaptou muito bem às características da cada vez mais barata e popular arquitetura de 32-bit do Intel 386 para computadores pessoais.

        Esses fatores e a falta de uma adoção ampla de um kernel livre deram o impulso para que Torvalds iniciasse seu projeto. Ele declarou que se o núcleo GNU ou o núcleo 386BSD estivessem disponíveis naquela época, ele possivelmente não teria escrito o seu próprio.
        </p>
      </div>

      <div className="history-detail">
        <h2>A criação do Linux</h2>
        <p>
        Em 1991, em Helsinki, Linus Torvalds começou o projeto que mais tarde se tornaria o núcleo Linux. Era inicialmente um emulador de terminal, o qual Torvalds usava para acessar os grandes servidores UNIX da universidade. Ele escreveu um programa especificamente para o hardware que estava usando e independente de um sistema operacional porque queria usar as funções de seu novo computador com um processador 80386. O desenvolvimento foi feito no MINIX usando o GNU C compiler, o qual é ainda hoje a escolha principal para compilar o Linux (embora o código possa ser construído com outros compiladores, como o Intel C Compiler).[carece de fontes]

        Como Torvalds escreveu em seu livro Just for Fun, ele eventualmente percebeu que havia escrito o núcleo de um sistema operacional. No dia 25 de agosto de 1991, ele anunciou esse sistema em um post no newsgroup "comp.os.minix." da Usenet:
      
      <div className="quote">
        <p>Olá a todos que estão usando minix -</p>

        <p>
          Eu estou fazendo um sistema operacional livre (é apenas um hobby, não será grande e profissional como o gnu) para os clones AT 386(486). Está sendo desenvolvido desde abril e está quase pronto. Gostaria de receber qualquer feedback sobre o que as pessoas gostam/não gostam no minix, uma vez que o meu SO se parece um pouco com ele (mesmo layout físico de sistema de arquivos (devido a razões práticas) entre outras coisas.

        </p>

        <p>
           No momento eu o portei para bash(1.08) e gcc(1.40), e as coisas parecem funcionar. Isso implica que irei conseguir algo prático dentro de poucos meses e gostaria de saber quais características a maioria das pessoas gostaria que tivesse. Quaisquer sugestões são bem-vindas, mas não prometo que eu vá implementá-las :-)
            Linus (torvalds@kruuna.helsinki.fi)
        </p>

        <p>
         Linus (torvalds@kruuna.helsinki.fi)
        PS. Sim — ele não tem nenhum código minix, e possui um fs multitarefa. Ele NÃO é portável (usa troca de contexto 386, etc), e provavelmente nunca será compatível com nada além de discos rígidos AT, uma vez que isso é tudo o que eu tenho :-(.
        </p>
        <span className="author">— Linus Torvalds</span>
      </div>
        </p>
      </div>

      <div className="history-detail">
        <h2>O nome</h2>
        <p>
          Linus Torvalds queria chamar seu invento de Freax, um portmanteau de "freak", "free", and "x" (como uma alusão ao Unix). Durante o começo de seu trabalho no sistema, ele guardou os arquivos sob o nome de "Freax" por cerca de um ano. Torvalds já havia considerado o nome "Linux," mas inicialmente o descartou por ser demasiadamente egocêntrico.
          Com o intuito de facilitar o desenvolvimento, foi feito o upload dos arquivos para o FTP server (ftp.funet.fi) da FUNET em setembro de 1991. Ari Lemmke, que trabalhava junto com Torvalds na Universidade de Helsinki e era um dos administradores voluntários do servidor FTP naquela época, não achava que "Freax" fosse um bom nome. Então, deu ao projeto o nome de "Linux" no servidor sem consultar Torvalds. Mais tarde, contudo, Torvalds consentiu o nome "Linux".
        </p>
      </div>

      <div className="history-detail">
        <h2>Mascote oficial</h2>
        <p>
          Torvalds anunciou em 1996 que haveria um mascote para o Linux, um pinguim. Isso deve-se ao fato de que quando se estava por escolher um mascote, Torvalds mencionou que ele havia sido bicado por um pequeno pinguim em uma visita ao Zoológico & Aquário Nacional de Camberra, Austrália. Larry Ewing foi o responsável pelo esboço original do hoje bem conhecido mascote, baseado em sua descrição. O nome "Tux" foi sugerido por James Hughes como um derivativo de Torvalds' UniX.
        </p>
        <h3>
      Ver Mascote:{" "}
      <a
        href="https://sempreupdate.com.br/por-que-a-mascote-do-linux-e-um-pinguim-a-historia-por-tras-do-tux/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tux
      </a>
    </h3>
      </div>

      <div className="history-detail">
        <h2>Comunidade</h2>
        <p>
            A maior parte do trabalho no Linux é feita pela comunidade: os milhares de
            programadores em todo o mundo que usam Linux e enviam suas sugestões de
            aprimoramento aos mantenedores.

            Várias companhias também ajudaram não apenas no desenvolvimento dos núcleos,
            mas também com a escrita do corpo do software auxiliar, que é distribuído
            junto com o Linux.

            É lançado tanto por projetos organizados como o{" "}
            <a
              href="https://www.debian.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="distro-link"
            >
              Debian
            </a>
            , quanto por projetos conectados diretamente a companhias como o{" "}
            <a 
            href="https://getfedora.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="distro-link"
            >
              Fedora
            </a>{" "}
            e o{" "}
            <a href="https://www.opensuse.org/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="distro-link">
              openSUSE
            </a>
            .

            <p>
              Os membros dos respectivos projetos encontram-se em várias conferências e
              eventos, com o objetivo de intercambiar ideias. Um dos maiores desses eventos
              é o{" "}
              <a
                href="https://en.wikipedia.org/wiki/LinuxTag"
                target="_blank"
                rel="noopener noreferrer"
                className="distro-link"
              >
                LinuxTag
              </a>{" "}
              na Alemanha (atualmente em Berlim), onde cerca de 10.000 pessoas se reúnem
              anualmente, com o intuito de discutir sobre o Linux e sobre projetos
              associados a ele.
            </p>
        </p>
      </div>
      <h1 className="section-title">Detalhes</h1>

      <div className="history-grid">
        <article className="history-card">
          <div className="history-card__year">1991</div>
          <h2 className="history-card__title">Anúncio inicial</h2>
          <p className="history-card__text">
            Linus Torvalds anunciou um novo kernel em um grupo de notícias. A primeira
            versão foi liberada como código aberto e rapidamente atraiu interesse de
            programadores ao redor do mundo.
          </p>
        </article>

        <article className="history-card">
          <div className="history-card__year">1992</div>
          <h2 className="history-card__title">Mudança para GPL</h2>
          <p className="history-card__text">
            A adoção da licença GNU General Public License permitiu que o Linux fosse
            usado, estudado e modificado livremente, o que fortaleceu sua comunidade
            e a integração com o software GNU.
          </p>
        </article>

        <article className="history-card">
          <div className="history-card__year">1994</div>
          <h2 className="history-card__title">Primeira versão estável</h2>
          <p className="history-card__text">
            O Linux 1.0 foi lançado oficialmente e trouxe suporte a arquiteturas de
            processador mais amplas, estabelecendo o kernel como uma alternativa
            viável ao Unix proprietário.
          </p>
        </article>

        <article className="history-card">
          <div className="history-card__year">2003</div>
          <h2 className="history-card__title">Fundação Linux</h2>
          <p className="history-card__text">
            A Linux Foundation foi criada para coordenar o desenvolvimento do kernel e
            apoiar a infraestrutura do ecossistema de código aberto num nível corporativo.
          </p>
        </article>

        <article className="history-card">
          <div className="history-card__year">2008</div>
          <h2 className="history-card__title">Android e mobilidade</h2>
          <p className="history-card__text">
            O Android foi lançado usando o kernel Linux como base. A partir daí,
            bilhões de dispositivos móveis passaram a depender do Linux.
          </p>
        </article>

        <article className="history-card">
          <div className="history-card__year">2020+</div>
          <h2 className="history-card__title">Nuvem e contêineres</h2>
          <p className="history-card__text">
            O Linux se tornou fundamental para servidores em nuvem, infraestrutura de
            contêineres e edge computing, mantendo-se como a espinha dorsal de muitas
            tecnologias modernas.
          </p>
        </article>
      </div>
    </section>
  );
}
