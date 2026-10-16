# Projeto Iara Games

Bem vindo(a) ao repositório do Iara Games, projeto desenvolvido no curso de graduação de Web Design na FIAP.

O objetivo é desenvolver habilidades em HTML5, CSS3, JavaScript, React, Design, UX/UI, versionamento de código e boas práticas de desenvolvimento colaborativo, com entregas por Sprints (Scrum).


## Índice

- [Contexto e Proposta](#contexto-e-proposta)
- [Evolução do Projeto](#evolução-do-projeto)
- [Referências e Inspirações](#referências-e-inspirações)
- [Arquitetura da Informação](#arquitetura-da-informação)
- [Design](#design)
- [User Experience](#user-experience)
- [Persona](#persona)
- [Funcionalidades Atuais](#funcionalidades-atuais)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como instalar e rodar o projeto](#como-instalar-e-rodar-o-projeto)
- [Links do Projeto](#links-do-projeto)
- [Membros](#membros)


## Contexto e Proposta

O Iara Games é uma iniciativa focada no fortalecimento da indústria brasileira de jogos digitais, dando visibilidade a desenvolvedores independentes.

Em um mercado dominado por grandes empresas internacionais, a plataforma surge como um espaço dedicado à valorização da produção nacional. O nome "Iara", inspirado no folclore brasileiro, reforça a conexão entre tecnologia, entretenimento e identidade cultural.

A proposta é criar um ecossistema digital para:

- Descoberta de jogos brasileiros
- Valorização de desenvolvedores independentes
- Comercialização de jogos digitais

Nesta fase, o projeto piloto é voltado à distribuição de jogos para download, sem suporte, por enquanto, a cloud gaming ou multiplayer online.


## Evolução do Projeto

### Sprint 01

- Definição da proposta e valor
- Criação da identidade visual
- Estruturação inicial da plataforma
- Arquitetura da Informação e Sitemap

### Sprint 02

O projeto evoluiu de um conceito para uma aplicação mais prática e centrada no usuário:

- Definição de persona principal (Lucas Andrade)
- Aplicação de princípios ESG (economia criativa, consumo consciente e impacto social positivo)
- Desenvolvimento de novas páginas: Área do Usuário (Login / Cadastro) e Suporte
- Criação de formulários com foco em usabilidade e acessibilidade
- Estruturação com HTML semântico e grids
- Padronização da navegação entre páginas
- Refinamento da interface e consistência visual

### Sprint 05

**Implementação de JavaScript**

Nesta etapa, desenvolvemos novas funcionalidades em JavaScript para tornar a Iara Games mais interativa, funcional e dinâmica:

- **Criação de Conta:** cadastro para diferentes perfis, permitindo que o usuário escolha entre Jogador e Desenvolvedor.
- **Filtros da Loja:** filtros para facilitar a navegação e permitir que o usuário encontre jogos de acordo com suas preferências.
- **Botão de Voltar ao Topo:** botão na página Home que permite ao usuário retornar rapidamente ao início da página.

### Sprint 06 (atual)

**Migração para React**

Nesta etapa, a página inicial (Loja) foi migrada de HTML, CSS e JavaScript puro para React, com foco em organização de pastas e reaproveitamento de código:

- Criação do projeto com Vite e estrutura de pastas em componentes, dados e páginas
- Cards de jogos gerados por um único componente reutilizável a partir de arquivos de dados, no lugar de HTML repetido
- Filtro por gênero e ordenação por preço em Novidades controlados por estado (`useState`)
- Botão de voltar ao topo controlado por `useState` e `useEffect`
- Menus, dropdowns e carrosséis com React-Bootstrap, substituindo o JavaScript do Bootstrap
- Hospedagem da área na Vercel


## Referências e Inspirações

O projeto foi inspirado em plataformas consolidadas como:

- Steam
- Epic Games Store
- itch.io
- Nuuvem

Com foco em:

- Padrões de navegação
- Organização de conteúdo
- Experiência do usuário


## Arquitetura da Informação

A estrutura foi definida para garantir clareza e eficiência na navegação, com as seguintes áreas principais:

- Loja
- Biblioteca
- Fórum
- Suporte
- Área do usuário

O Sitemap foi desenvolvido para representar hierarquias e conexões entre páginas, facilitando a navegação e organização do sistema.


## Design

O design combina:

- Estética contemporânea de plataformas de games
- Elementos da cultura brasileira

**Características principais:**

- Dark mode como base
- Ilustrações orgânicas e tropicais
- Cards de jogos com foco em imagem, preço e ação
- Destaque para storytelling na home

**Paleta de cores:**

- Azul petróleo (#0D1C2B): base
- Verde (#45BE93): ações
- Turquesa (#0DCBEB): destaque
- Amarelo (#FFD662): pontos estratégicos
- Off-white (#F2F2EF): equilíbrio e contraste

**Tipografia:**

- Bebas Neue: títulos e botões
- Roboto: textos
- Bahiana: logotipo


## User Experience

A experiência foi projetada para ser:

- Simples
- Intuitiva
- Acessível

**Principais melhorias da Sprint 02:**

- Interface mais consistente entre páginas
- Formulários com labels claros, feedback visual e organização lógica
- Separação de ações (Login vs Cadastro) para evitar confusão
- Estrutura modular com hierarquia clara

**Acessibilidade:**

- Alto contraste
- Boa legibilidade
- Espaçamento adequado
- Consistência visual
- `aria-label` em links e botões que têm apenas ícone
- Aplicação de boas práticas baseadas em WCAG


## Persona

### Lucas Andrade

22 anos, Florianópolis

Estudante de TI / Freelancer

Renda: R$1.500 a R$3.000

**Objetivos:**

- Descobrir jogos brasileiros autênticos
- Apoiar desenvolvedores nacionais
- Ter uma experiência simples e confiável

**Dores:**

- Falta de visibilidade para jogos brasileiros
- Dificuldade em encontrar jogos com identidade
- Pouca valorização do cenário nacional

**Como a Iara resolve:**

- Curadoria de jogos brasileiros
- Plataforma 100% digital
- Sistema transparente de avaliações
- Comunidade ativa e inclusiva


## Funcionalidades Atuais

### Versão React (página inicial / Loja)

- Menu de navegação responsivo, com popup de acesso (entrar e criar conta)
- Hero com vídeo de fundo, com versões para desktop e mobile
- Seções Mais comprados, Ofertas imperdíveis e Mais avaliados em carrosséis
- Cards de jogos com estrelas, preço, desconto e exibição de "Free" para jogos gratuitos
- Explorar por categoria
- Novidades com filtro por gênero (um ou mais) e ordenação por relevância, maior preço e menor preço
- Mensagem informativa quando nenhum jogo corresponde aos filtros
- Botão de voltar ao topo
- Interface responsiva baseada em grid

### Versão HTML, CSS e JavaScript (demais páginas)

- Navegação entre páginas principais
- Área de Login e Cadastro, com diferenciação de perfil (Jogador/Desenvolvedor)
- Página de Suporte com formulário
- Estrutura de Fórum, loja e biblioteca (front-end)


## Tecnologias Utilizadas

- Figma
- HTML
- CSS
- JavaScript
- React (criado com Vite)
- Bootstrap e React-Bootstrap
- Bootstrap Icons e Phosphor Icons
- ESLint
- Git e GitHub
- Vercel (hospedagem)


## Estrutura do Projeto

```
raiz do repositório/
├── public/
│   ├── images/          Imagens do projeto (capas, logo, categorias)
│   └── videos/          Vídeos do hero (desktop e mobile)
├── src/
│   ├── components/      Componentes reutilizáveis
│   │   ├── BackToTop.jsx
│   │   ├── Categories.jsx
│   │   ├── Footer.jsx
│   │   ├── GameCard.jsx
│   │   ├── GameSection.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── News.jsx
│   │   └── SearchBar.jsx
│   ├── data/            Dados separados da interface
│   │   ├── filtros.js   Opções de ordenação e gênero
│   │   └── jogos.js     Jogos e categorias
│   ├── pages/
│   │   └── Home.jsx     Monta a página inicial
│   ├── styles/
│   │   └── style.css    Estilos globais
│   ├── App.jsx
│   └── main.jsx         Ponto de entrada e imports globais
├── index.html
├── package.json
└── vite.config.js
```


## Como instalar e rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) na versão 20.19 ou superior (ou 22.12 ou superior), que já inclui o npm
- [Git](https://git-scm.com/)

Para conferir as versões instaladas:

```bash
node -v
npm -v
git --version
```

### 1. Clonar o repositório

```bash
git clone [LINK-DO-REPOSITORIO]
cd [NOME-DO-REPOSITORIO]
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Rodar em modo de desenvolvimento

```bash
npm run dev
```

O terminal mostrará um endereço local, normalmente `http://localhost:5173`. Abra no navegador.

A página atualiza sozinha a cada alteração salva nos arquivos.

### 4. Gerar a versão de produção

```bash
npm run build
```

Os arquivos otimizados são criados na pasta `dist`.

### 5. Visualizar a versão de produção localmente (opcional)

```bash
npm run preview
```

### Resumo dos comandos

| Comando           | O que faz                                          |
| ----------------- | -------------------------------------------------- |
| `npm install`     | Instala as dependências listadas no package.json   |
| `npm run dev`     | Inicia o servidor de desenvolvimento               |
| `npm run build`   | Gera a versão de produção na pasta dist            |
| `npm run preview` | Serve localmente a versão gerada pelo build        |
| `npm run lint`    | Verifica o código com o ESLint                     |

### Problemas comuns

- **Erro ao rodar `npm install` ou `npm run dev`:** confira a versão do Node com `node -v` e atualize se estiver abaixo da exigida.
- **Comando não encontrado ou pasta errada:** os comandos do npm precisam ser executados na pasta onde está o `package.json`.
- **Imagens ou vídeos não carregam em produção:** confira se os nomes dos arquivos em `public` estão idênticos aos usados no código, incluindo maiúsculas e minúsculas, pois o servidor de hospedagem diferencia.

### Hospedagem

O projeto é publicado na Vercel, conectada a este repositório.

A Vercel detecta o Vite automaticamente, executa `npm run build` e publica a pasta `dist`. Cada push na branch principal gera um novo deploy.


## Links do Projeto

- [Vídeo Pitch no Youtube](https://www.youtube.com/watch?v=1nLc02NSIe0)
- [Página inicial hospedada na Vercel](https://iaragames-react.vercel.app/)


## Membros

- Leticia Magialis
- Laura Zapata
- Matheus Felipe
- Arthur Ramos
- Renato Fideliz
