#  LINUXCISMO — A Verdadeira Via do Terminal Sagrado 

![Tux](public/img/pinguim-linux-tux-871x1024-953411487.png)

Site oficial da Igreja do Terminal Sagrado.  
Feito com React + Vite + CSS puro.

---

## Requisitos

- Node.js **v20 LTS**
- npm 8+

> ⚠️ Não use Node 25 ou versões ímpares — são experimentais e podem quebrar dependências.

Se precisar gerenciar versões do Node:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 20
nvm use 20
```

---

## Instalação e uso

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev

# 3. Build para produção
npm run build

# 4. Preview do build
npm run preview
```

---

## Estrutura do Projeto

```
linuxcismo/
├── public/
│   └── img/
│       └── *.jpg / *.png        ← imagens estáticas (profetas, tux, etc.)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Dogmas.jsx
│   │   ├── Prophets.jsx
│   │   ├── Scriptures.jsx
│   │   ├── Blog.jsx
│   │   ├── Convert.jsx
│   │   └── Footer.jsx
│   ├── styles/
│   │   ├── global.css           ← variáveis CSS, reset, classes utilitárias
│   │   ├── Navbar.css
│   │   ├── Hero.css
│   │   ├── Dogmas.css
│   │   ├── Prophets.css
│   │   ├── Scriptures.css
│   │   ├── Blog.css
│   │   ├── Convert.css
│   │   └── Footer.css
│   ├── data/
│   │   └── data.js              ← todo conteúdo estático (dogmas, profetas, posts...)
│   ├── utils/
│   │   └── matrixRain.js        ← lógica da animação Matrix no canvas
│   ├── App.jsx                  ← componente raiz
│   └── main.jsx                 ← entrypoint React
├── index.html
├── vite.config.js
└── package.json
```

---

## Imagens

Coloque as imagens em `public/img/` e referencie como string no `data.js`:

```js
export const PROPHETS = [
  {
    name: 'Linus Torvalds',
    title: 'O Criador Supremo',
    img: '/img/linus.jpg',   // ← relativo a public/
  },
]
```

> Não use `import` para imagens em `public/`. Só use string direta.  
> Para imagens em `src/assets/`, aí sim use `import`.

---

## Tecnologias

| Tecnologia | Uso |
|---|---|
| React 19 | Componentes e UI |
| Vite | Bundler e dev server |
| CSS puro | Um arquivo por componente |
| JavaScript | Lógica de canvas (matrixRain.js) |

---

## Licença

GNU GPL v3 — Free as in freedom 🐧

> "Free as in freedom, não como em cerveja grátis"