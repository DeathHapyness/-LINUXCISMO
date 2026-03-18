/**
 * data.js
 * All static content for the Linuxcismo site.
 */
export const DOGMAS = [
  {
    num: 'I',
    title: 'Não Usarás Windows',
    text: 'O sistema proprietário é o falso ídolo. Quem instalar o Windows sem arrependimento será condenado a telas azuis eternas no loop infinito do inferno.',
  },
  {
    num: 'II',
    title: 'Sudo é Sagrado',
    text: 'Antes de executar qualquer sudo rm -rf, consulta os oráculos do man page. O poder absoluto requer sabedoria absoluta — e um backup recente.',
  },
  {
    num: 'III',
    title: 'Btw, Eu Uso Arch',
    text: 'Proclama tua distribuição a todo ser que tiver ouvidos. A confissão da distro é o primeiro sacramento. Arch é o paraíso. Debian é o purgatório.',
  },
  {
    num: 'IV',
    title: 'Honrarás o Vim',
    text: 'Vim é o editor sagrado. Aquele que souber sair do Vim sem ajuda do StackOverflow terá assegurado seu lugar no paraíso do shell eterno.',
  },
  {
    num: 'V',
    title: 'O Terminal é o Caminho',
    text: 'Qualquer tarefa feita via interface gráfica pode e deve ser feita via terminal. Quem usar o mouse desnecessariamente fará penitência compilando o kernel.',
  },
  {
    num: 'VI',
    title: 'GPL é Lei Divina',
    text: 'O código aberto é a graça divina. Copyleft é o testamento sagrado. Quem fechar o código de software livre carregará o peso de mil dependências quebradas.',
  },
  {
    num: 'VII',
    title: 'Nunca rm -rf /',
    text: 'Este mandamento existe como aviso, não como tentação. Aquele que executou e sobreviveu é um mártir. Aquele que executou sem sudo é considerado um santo.',
  },
  {
    num: 'VIII',
    title: 'Documentarás teu Código',
    text: 'Um comentário por função é o mínimo que o Senhor Torvalds exige. Código sem comentário é heresia. README vazio é pecado mortal.',
  },
  {
    num: 'IX',
    title: 'Backup é Fé',
    text: 'Faz backup antes de acreditar que deu certo. Faz backup antes de dormir. Faz backup da alma. Os que não fazem backup choram em silêncio.',
  },
  {
    num: 'X',
    title: 'Não Cobiçarás o MacOS',
    text: 'O Mac é Linux com maquiagem cara e jardim murado. Bonito por fora, proprietário por dentro. O linuxcista resistirá à sedução da maçã.',
  },
];

export const PROPHETS = [
  {
    name: 'Linus Torvalds',
    title: 'O Criador Supremo',
    img: '/img/Linus-Torvalds.jpg',
  },
  {
    name: 'Richard Stallman',
    title: 'O Profeta GNU',
    img: '/img/2012-12-14-stallman.webp',
  },
  {
    name: 'Ken Thompson',
    title: 'Pai do Unix Primordial',
    img: '/img/thompson01.jpg',
  },
  {
    name: 'Dennis Ritchie',
    title: 'Criador do C Sagrado',
    img: '/img/banner.png',
  },
];

export const SCRIPTURES = [
  {
    ref: '// GÊNESIS DO TERMINAL : 1:1',
    quote:
      '"No princípio, Torvalds criou o kernel e o userspace. E o kernel era livre e o código aberto pairava sobre as superfícies dos repositórios."',
    source: '— Livro do Genesis do Terminal, Cap. 1, v. 1',
  },
  {
    ref: '// EVANGELHO SEGUNDO GREP : 4:17',
    quote:
      '"E disse o Senhor: Aquele que souber usar o grep, o awk e o sed terá domínio sobre todos os logs do reino, e nenhuma mensagem de erro lhe será obscura."',
    source: '— Evangelho segundo grep, Cap. 4, v. 17',
  },
  {
    ref: '// EPÍSTOLA AOS DEVS : 9:42',
    quote:
      '"Se o teu programa funciona na tua máquina mas não no servidor, eis que é um problema de ambiente. Usa Docker e não peques mais."',
    source: '— Epístola aos Devs, Cap. 9, v. 42',
  },
  {
    ref: '// APOCALIPSE DE SYSTEMD : 6:66',
    quote:
      '"E vi um grande número de processos, que ninguém podia contar, de todas as distros e sistemas. Gritavam: Failed to start unit. See journalctl for details."',
    source: '— Apocalipse de Systemd, Cap. 6, v. 66',
  },
];

export const POSTS = [
  {
    tag: 'Doutrina',
    title: 'Por Que o apt-get é Superior a Ir ao Supermercado',
    excerpt:
      'Em uma revelação ocorrida às 3h da manhã durante uma sessão de compilação, o profeta comprovou que instalar pacotes via terminal é mais eficiente do que qualquer sistema de compras mundano.',
    date: '2025-11-23',
    author: 'root@linuxcismo',
  },
  {
    tag: 'Milagres',
    title: 'Convertido Instala Arch Linux pela Primeira Vez sem Consultar a Wiki',
    excerpt:
      'Testemunho emocionante de um devoto que, após 40 dias de meditação e leitura do man page, conseguiu instalar o Arch do zero usando apenas memória e fé.',
    date: '2025-12-01',
    author: 'arch_believer',
  },
  {
    tag: 'Heresia',
    title: 'Denúncia: Colega Usa Notepad++ no Windows para Editar Scripts Bash',
    excerpt:
      'A comunidade Linuxcista está em choque. Um suposto devoto foi flagrado editando scripts bash em máquina Windows. O conselho sagrado delibera a excomunhão.',
    date: '2025-12-10',
    author: 'inquisidor_vim',
  },
  {
    tag: 'Tutorial Sagrado',
    title: 'Como Explicar para sua Família o que é Linux no Natal',
    excerpt:
      'Guia completo para o devoto que precisa evangelizar parentes durante o almoço de natal, com analogias aprovadas pelo Conselho e como lidar com o tio que prefere Mac.',
    date: '2025-12-24',
    author: 'evangelista_tux',
  },
  {
    tag: 'Filosofia',
    title: 'O Livre-Arbítrio Existe? Uma Análise do Init System',
    excerpt:
      'Se o PID 1 controla todos os processos, então temos livre-arbítrio? Uma profunda análise filosófica sobre systemd, free will e por que o Linus tem razão sobre tudo.',
    date: '2026-01-07',
    author: 'filosofo_bash',
  },
  {
    tag: 'Liturgia',
    title: 'Os Rituais Matinais do Linuxcista Devoto',
    excerpt:
      'Acorda, abre o terminal, roda sudo apt update && sudo apt upgrade, e contemplate as atualizações sagradas. Um guia para começar o dia com fé, caffeine e neofetch.',
    date: '2026-02-14',
    author: 'neofetch_monk',
  },
];
