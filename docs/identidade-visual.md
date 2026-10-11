# Identidade visual da landing page

## Escopo e critério da auditoria

Este documento descreve a identidade que chega de fato à página inicial renderizada por `app/page.tsx`. Foram cruzados:

- `app/layout.tsx` e o CSS que ele realmente importa: `app/globals.css`;
- `components/header.tsx`, `components/fade-image.tsx` e todas as seções importadas por `app/page.tsx`;
- variáveis CSS, utilitários Tailwind CSS 4 e estilos inline;
- cores, transparências, sombras, tamanhos e estados escritos diretamente no código.

`styles/globals.css` não é importado pela aplicação. Os componentes de `components/ui/` também não são importados pela landing page. Por isso, os dois conjuntos foram auditados para confirmar o escopo, mas seus valores não compõem a identidade visual efetiva descrita abaixo.

As tabelas usam estas marcações:

- **Usado**: aparece em um elemento renderizado ou em um estado alcançável da landing page.
- **Declarado, não usado**: existe no CSS ou no código, mas nenhum elemento da landing o consome.
- **Inativo**: dependeria de uma configuração que a página não habilita, como a classe `.dark`.

## Resumo da identidade efetiva

A página usa uma estética editorial e minimalista baseada em:

- Inter como única família tipográfica visível;
- fundos brancos amplos;
- azul-marinho profundo como texto, botão e fundo de seção;
- azul acinzentado para textos secundários;
- superfícies quase brancas e bordas frias;
- imagens grandes, cartões com cantos de 16 px e composições “bento” que animam até 24 px;
- CTAs em formato de cápsula;
- quase nenhuma sombra: somente o cabeçalho flutuante, após o scroll;
- ritmo vertical espaçoso e gutters responsivos de 24, 48 e 80 px.

## Tipografia

### Fontes realmente usadas

| Família | Status | Onde é aplicada |
| --- | --- | --- |
| **Inter** | **Usado** | Globalmente em `body`, por meio de `font-sans`; portanto, navegação, títulos, textos, preços, botões, labels e rodapé usam Inter. |
| `Inter Fallback`, `system-ui`, `sans-serif` | **Usado como fallback** | Entram apenas se a Inter não puder ser carregada. `Inter Fallback` é gerada pelo `next/font` e ajustada metricamente. |
| JetBrains Mono | Declarado, não usado | Declarada em `--font-mono`, mas a landing não usa `font-mono`, `code` ou outro elemento monoespaçado. |
| PP Editorial New | Declarado, não usado | Declarada em `--font-display`, não é carregada e nenhuma seção usa `font-display`. |
| Times New Roman | Declarado, não usado | É apenas fallback de `--font-display`, token que não é consumido. |
| Geist / Geist Mono | Fora do bundle da página | Aparecem somente em `styles/globals.css`, arquivo não importado. |

`app/layout.tsx` carrega a Inter variável do Google, com faixa de peso `100–900`, expõe `--font-inter` e adiciona `font-sans` ao `body`. `app/globals.css` configura o sans padrão como `'Inter', 'Inter Fallback', system-ui, sans-serif`. Na prática, toda a interface usa a mesma família; as diferenças de hierarquia vêm de tamanho, peso, tracking e entrelinha.

### Pesos efetivos

| Peso | Classe/valor | Função real |
| --- | --- | --- |
| 400 | padrão herdado | Parágrafos, navegação secundária, descrições, avisos e links do rodapé. |
| 500 | `font-medium` | Marca, CTAs, títulos editoriais, títulos de destinos, preços, labels sobre fotos e valores da grade de atributos. É o peso dominante da identidade. |
| 600 | `font-semibold` | Títulos dos cards de passeios e o texto grande com revelação por scroll. |

Não há uso efetivo de 700, itálico ou família serifada.

### Escala e hierarquia tipográfica

Breakpoints usados pelo Tailwind:

- `md`: a partir de 768 px;
- `lg`: a partir de 1024 px.

| Nível / aplicação | Mobile | `md` | `lg` | Peso | Entrelinha e tracking |
| --- | ---: | ---: | ---: | ---: | --- |
| Título cenográfico atrás do bento (“Conheça um destino...”) | `12vw` | `10vw` | `8vw` | 500 | `0.95`; tracking `-0.05em` |
| Headline sobre imagem (“O melhor da Paraíba...”) | 48 px | 48 px | 72 px | 500 | `1.25`; tracking `-0.025em` |
| Texto de revelação da história | 30 px | 36 px | 48 px | 600 | `1.375` |
| Título principal de seção centralizado | 30 px | 36 px | 48 px | 500 | padrão do tamanho; tracking `-0.025em` |
| Título de seção simples | 30 px | 36 px | 36 px | 500 | padrão do tamanho; tracking `-0.025em` |
| Manifestos / taglines longas | 24 px | 30 px | 40 px | 400 | `1.625` no mobile; `1.375` no `lg` |
| Texto editorial introdutório | 30 px | 30 px | 30 px | 400 | `1.625` |
| Valor da grade de atributos | 36 px | 36 px | 36 px | 500 | 40 px, padrão de `text-4xl` |
| Preço destacado no grid desktop | 24 px | 24 px | 24 px | 500 | 32 px |
| Título de card principal | 20 px | 20 px | 20 px | 600 | 28 px |
| Marca e títulos menores | 18 px | 18 px | 18 px | 500 | 28 px; marca do header com tracking `-0.025em` |
| Corpo e navegação | 14 px | 14 px | 14 px | 400 ou 500 | 20 px; textos longos podem usar `1.625` |
| Label / metadado | 12 px | 12 px | 12 px | 400 | 16 px; caixa alta e tracking `0.1em` |
| Corpo base herdado | 16 px | 16 px | 16 px | 400 | 24 px |

Observações sobre a hierarquia real:

- A página não troca de família para títulos: mantém Inter e cria contraste com escala ampla, pouco peso e tracking negativo.
- Labels de categoria usam consistentemente `12 px`, caixa alta, tracking de `0.1em` e a cor secundária.
- Os grandes textos institucionais usam peso 400, deixando o tamanho e o espaço em branco criarem a ênfase.
- Os títulos comerciais dos cards são mais densos, em 500 ou 600.

## Paleta consolidada

### Cores sólidas realmente usadas

Valores repetidos por aliases diferentes foram consolidados em uma única entrada.

| Nome consolidado | HEX | RGB | Origem efetiva | Função |
| --- | --- | --- | --- | --- |
| **Branco / Canvas** | `#FFFFFF` | `rgb(255, 255, 255)` | `--background`; também `text-white` e `bg-white` | Fundo geral e das seções, texto sobre fotografia, fundo do CTA sobre o hero e base dos overlays claros. |
| **Azul-marinho / Ink** | `#0B2540` | `rgb(11, 37, 64)` | `--foreground` | Texto principal, marca, títulos, preços, botão escuro, fundo da seção imersiva e cor final do texto revelado. |
| **Névoa / Surface** | `#F1F5F8` | `rgb(241, 245, 248)` | `--secondary` | Placeholder/fundo discreto de cards de imagem na coleção. |
| **Azul ardósia / Muted Ink** | `#5C7185` | `rgb(92, 113, 133)` | `--muted-foreground` | Descrições, navegação do header após scroll, labels, avisos, texto de apoio e rodapé. |
| **Gelo / Border** | `#E2E8EE` | `rgb(226, 232, 238)` | `--border` | Divisórias do menu mobile, grade editorial e rodapé. |
| **Cinza de revelação** | `#E4E4E7` | `rgb(228, 228, 231)` | valor direto em `technology-section.tsx` | Estado ainda não revelado das palavras no texto animado. |

Três matizes adicionais aparecem somente dentro da sombra composta do header. Eles não funcionam como cores de superfície ou conteúdo, mas são valores diretos e efetivamente renderizados:

| Nome | HEX | RGB / alpha aplicado | Função |
| --- | --- | --- | --- |
| **Azul de sombra** | `#0E3F7E` | `rgba(14, 63, 126, 0.04)` | Contorno de 1 px e três camadas externas da sombra do header. |
| **Ardósia de sombra A** | `#2A3345` | `rgba(42, 51, 69, 0.04)` | Camada curta de 1 px da sombra do header. |
| **Ardósia de sombra B** | `#2A3346` | `rgba(42, 51, 70, 0.04)` | Duas camadas intermediárias da sombra do header. |

Os dois tons ardósia diferem por apenas um nível no canal azul, mas foram mantidos aqui porque ambos existem no efeito real. Nos tokens recomendados, as seis declarações são reunidas em um único token de sombra para não espalhar essa microvariação pela paleta de uso geral.

### Transparências e overlays realmente usados

| Nome | Valor | Aplicação |
| --- | --- | --- |
| Header translúcido | `rgba(255, 255, 255, 0.80)` | Fundo do header após 50 px de scroll, combinado a `backdrop-filter: blur(12px)`. |
| Navegação clara atenuada | `rgba(255, 255, 255, 0.70)` | Links do header enquanto ele está sobre o hero. |
| Hover do CTA claro | `rgba(255, 255, 255, 0.90)` | Hover do botão branco antes do scroll. |
| Pílula sobre fotografia | `rgba(255, 255, 255, 0.20)` | Labels “Experiências no mar” e “Aventuras por terra”, também com blur de 12 px. |
| Overlay fotográfico escuro | `rgba(11, 37, 64, 0.40)` | Véu sobre a imagem da seção “O melhor da Paraíba começa aqui”. |
| Gradiente de saída | branco 100% → branco 60% → transparente | Fusão da imagem “Sobre” com o fundo da página, de baixo para cima. |
| Transparente | `rgba(0, 0, 0, 0)` | Estado inicial do header e término do gradiente. |

As transparências geradas por Tailwind podem ser implementadas pelo navegador com `color-mix`; os valores RGBA acima representam o resultado visual com a paleta ativa.

### Cores declaradas, mas ausentes da landing

Estas cores **não devem ser tratadas como parte da paleta real** apenas porque existem em `app/globals.css`:

| Valor consolidado | Tokens declarados | Motivo da exclusão |
| --- | --- | --- |
| `#FFFFFF` | `--card`, `--popover`, `--primary-foreground`, `--accent-foreground`, `--destructive-foreground` etc. | Duplicam o canvas; esses aliases não são chamados pelos componentes da landing. |
| `#0B2540` | `--card-foreground`, `--popover-foreground`, `--primary`, `--secondary-foreground`, `--ring` | Duplicam o ink; somente `--foreground` participa diretamente da composição. `--ring` apenas define uma cor-base global, sem um ring visual específico na landing. |
| `#F1F5F8` | `--muted`, `--input` | Duplicam a surface; as classes correspondentes não são usadas na landing. |
| `#0E7490` | `--accent` | Declarado, não usado. |
| `#DC2626` | `--destructive` | Declarado, não usado. |
| `#0A0A0A`, `#525252`, `#737373`, `#A3A3A3`, `#D4D4D4`, `#262626` | charts e sidebar | Componentes correspondentes não são renderizados. |

A paleta `.dark` inteira está **inativa**: o `ThemeProvider` existe, mas não é montado em `app/layout.tsx`, e nenhuma classe `.dark` é aplicada ao documento. Ela contém `#0A0A0A`, `#FAFAFA`, `#171717`, `#262626`, `#A3A3A3`, `#737373`, `#525252` e `#DC2626`, mas nenhum desses valores define a aparência atual da landing.

## Aplicação de cores por elemento

### Fundos

- Página, seções, menu mobile e área textual: **Branco / Canvas**.
- Seção imersiva com galeria bento: **Azul-marinho / Ink**.
- Placeholders de imagens da coleção: **Névoa / Surface**.
- Header no topo: transparente; após scroll: branco a 80% com blur.

### Texto

- Títulos, marca, preços e texto principal: **Azul-marinho / Ink**.
- Descrições, categorias, avisos e rodapé: **Azul ardósia / Muted Ink**.
- Texto sobre imagens: branco; links do header sobre o hero começam em branco a 70%.
- Texto de revelação: **Cinza de revelação** antes da ativação e **Ink** depois.

### Botões e links

- CTA sobre o hero: fundo branco, texto ink; hover com branco a 90%.
- CTA do header após scroll e CTA mobile: fundo ink, texto branco/canvas; no desktop, hover reduz a opacidade do elemento inteiro para 80%.
- Links textuais de reserva: ink, sublinhado com offset de 4 px; hover reduz opacidade para 70%.
- Links de navegação e rodapé: muted ink; hover muda para ink.

Não há botão usando `--accent`; o azul-petróleo `#0E7490` não aparece na interface atual.

### Bordas

- Cor única: **Gelo / Border** (`#E2E8EE`).
- Espessura: 1 px, padrão das classes `border-t`, `border-b` e `border-r`.
- Usos: menu mobile, células da grade de atributos e separadores do rodapé.

### Imagens e overlays

- Labels sobre imagens: branco, fundo branco a 20%, blur de 12 px e formato pill.
- Headline sobre imagem: branco sobre overlay ink a 40%.
- Imagem da seção “Sobre”: gradiente branco na parte inferior para integrar foto e canvas.
- Cards de passeio: zoom de `1` para `1.05` no hover.
- Imagens com `FadeImage`: surgem de opacidade `0` e escala `1.02` para opacidade `1` e escala `1`, em 700 ms com easing `ease-out`.

## Espaçamento e composição

### Base

O Tailwind usa uma unidade-base de **4 px**. A landing seleciona principalmente múltiplos amplos dessa unidade.

| Padrão | Mobile | `md` | `lg` | Onde aparece |
| --- | ---: | ---: | ---: | --- |
| Gutter horizontal da página | 24 px | 48 px | 80 px | Títulos, grids, textos e rodapé. É o padrão mais consistente do layout. |
| Espaço vertical de seção padrão | 80 px | 112 px | 128–144 px | Cabeçalhos de seção e blocos institucionais. |
| Espaço vertical de seção ampla | 96 px | 128 px | 160 px | História e manifesto “Sobre”. |
| Gap de grid compacto | 16 px | 16 px | 16 px | Cards principais e bento de duas imagens. |
| Gap de galeria/carrossel | 24 px | 24 px | 24 px | Galeria horizontal e coleção mobile. |
| Gap de coleção desktop | — | 32 px | 32 px | Grade de outros destinos. |
| Gap de colunas do rodapé | 48 px | 48 px | 48 px | Agrupamentos de links. |

Escala completa de espaçamentos explícitos realmente encontrada:

`8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192 e 224 px`.

Uso recorrente dentro de componentes:

- 8 px entre label e conteúdo;
- 12 px entre metadados;
- 16 px antes de CTA e entre cards compactos;
- 24 px entre imagem e conteúdo, em gaps de galeria e em labels posicionados sobre fotos;
- 32 px antes de textos editoriais ou dentro das células de atributos.

As animações bento de hero e tecnologia interpolam `gap` e `padding` de **0 a 16 px**. As seções sticky adicionam áreas de scroll de `200vh`, usadas como duração espacial da animação, não como espaçamento de conteúdo.

### Larguras de leitura

- Header: `90%` da viewport, limitado a 768 px.
- Textos curtos: limites de 576 a 672 px.
- Headings e história: limites de 768 a 896 px.
- Manifesto final: limite de 1024 px.
- Cards mobile da coleção: 75 vw.
- Galeria: 85 vw no mobile, 60 vw no `md` e 45 vw no `lg`.

Esses limites reforçam texto centralizado com linhas relativamente curtas e fotografia dominante.

## Arredondamento

| Raio | Status e aplicação |
| --- | --- |
| **0 px** | `--radius: 0rem` é o valor semântico global, mas as classes derivadas `rounded-sm/md/lg/xl` não são usadas pela landing. Não representa os cards visíveis. |
| **16 px** | `rounded-2xl`; cards de passeio, imagens da galeria, blocos de experiência e cantos inferiores do menu mobile. É o raio fixo padrão. |
| **0–24 px** | Raio interpolado por scroll nas composições bento do hero e da seção imersiva. O estado final usa 24 px. |
| **9999 px / pill** | `rounded-full`; header após scroll, CTAs e labels sobre imagens. |

## Sombras e profundidade

A landing evita sombras em cards e imagens. A única sombra é aplicada ao header depois que a página passa de 50 px de scroll:

```css
box-shadow:
  rgba(14, 63, 126, 0.04) 0 0 0 1px,
  rgba(42, 51, 69, 0.04) 0 1px 1px -0.5px,
  rgba(42, 51, 70, 0.04) 0 3px 3px -1.5px,
  rgba(42, 51, 70, 0.04) 0 6px 6px -3px,
  rgba(14, 63, 126, 0.04) 0 12px 12px -6px,
  rgba(14, 63, 126, 0.04) 0 24px 24px -12px;
```

É uma sombra fria de seis camadas, todas com 4% de opacidade. Visualmente funciona mais como contorno e separação atmosférica do que como elevação forte. Ela é combinada a fundo branco translúcido e blur de 12 px.

## Exemplos práticos

### Cabeçalho flutuante após scroll

```css
.site-header {
  color: #0B2540;
  background: rgba(255, 255, 255, 0.80);
  border-radius: 9999px;
  backdrop-filter: blur(12px);
  box-shadow: var(--brand-shadow-floating-nav);
}
```

### Título de seção

```css
.section-title {
  color: #0B2540;
  font-family: var(--brand-font-sans);
  font-size: 1.875rem;
  font-weight: 500;
  letter-spacing: -0.025em;
}

@media (min-width: 48rem) {
  .section-title { font-size: 2.25rem; }
}

@media (min-width: 64rem) {
  .section-title { font-size: 3rem; }
}
```

### Card de passeio

```css
.tour-card__image {
  overflow: hidden;
  border-radius: 1rem;
  background: #F1F5F8;
}

.tour-card__eyebrow {
  color: #5C7185;
  font-size: 0.75rem;
  line-height: 1rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.tour-card__title {
  color: #0B2540;
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;
}
```

### CTA principal

```css
.cta-primary {
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  color: #FFFFFF;
  background: #0B2540;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  transition: opacity 150ms ease;
}

.cta-primary:hover {
  opacity: 0.8;
}
```

### Label sobre fotografia

```css
.photo-label {
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  color: #FFFFFF;
  background: rgba(255, 255, 255, 0.20);
  backdrop-filter: blur(12px);
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
}
```

## Tokens CSS recomendados

O conjunto abaixo preserva apenas a identidade efetivamente usada e remove aliases duplicados de card, popover, charts, sidebar e estados inexistentes.

```css
:root {
  /* Tipografia: carregar Inter antes de usar */
  --brand-font-sans: "Inter", "Inter Fallback", system-ui, sans-serif;

  --brand-weight-regular: 400;
  --brand-weight-medium: 500;
  --brand-weight-semibold: 600;

  --brand-text-label: 0.75rem;
  --brand-text-body-sm: 0.875rem;
  --brand-text-body: 1rem;
  --brand-text-title-sm: 1.25rem;
  --brand-text-statement: 2.5rem;
  --brand-text-display: 4.5rem;

  --brand-leading-label: 1rem;
  --brand-leading-body-sm: 1.25rem;
  --brand-leading-body: 1.5;
  --brand-leading-snug: 1.375;
  --brand-leading-relaxed: 1.625;

  --brand-tracking-tight: -0.025em;
  --brand-tracking-tighter: -0.05em;
  --brand-tracking-label: 0.1em;

  /* Paleta sólida, sem aliases duplicados */
  --brand-color-canvas: #FFFFFF;
  --brand-color-ink: #0B2540;
  --brand-color-surface: #F1F5F8;
  --brand-color-muted-ink: #5C7185;
  --brand-color-border: #E2E8EE;
  --brand-color-reveal-pending: #E4E4E7;
  --brand-color-on-image: #FFFFFF;

  /* Overlays */
  --brand-overlay-header: rgba(255, 255, 255, 0.80);
  --brand-overlay-photo-label: rgba(255, 255, 255, 0.20);
  --brand-overlay-photo-dark: rgba(11, 37, 64, 0.40);
  --brand-text-on-image-muted: rgba(255, 255, 255, 0.70);

  /* Escala espacial observada */
  --brand-space-1: 0.5rem;   /* 8 px */
  --brand-space-2: 0.75rem;  /* 12 px */
  --brand-space-3: 1rem;     /* 16 px */
  --brand-space-4: 1.5rem;   /* 24 px */
  --brand-space-5: 2rem;     /* 32 px */
  --brand-space-6: 3rem;     /* 48 px */
  --brand-space-7: 5rem;     /* 80 px */
  --brand-space-8: 7rem;     /* 112 px */
  --brand-space-9: 10rem;    /* 160 px */

  --brand-page-gutter: 1.5rem;
  --brand-section-space: 5rem;

  /* Forma e profundidade */
  --brand-radius-card: 1rem;
  --brand-radius-bento: 1.5rem;
  --brand-radius-pill: 9999px;
  --brand-backdrop-blur: 12px;

  --brand-shadow-floating-nav:
    rgba(14, 63, 126, 0.04) 0 0 0 1px,
    rgba(42, 51, 69, 0.04) 0 1px 1px -0.5px,
    rgba(42, 51, 70, 0.04) 0 3px 3px -1.5px,
    rgba(42, 51, 70, 0.04) 0 6px 6px -3px,
    rgba(14, 63, 126, 0.04) 0 12px 12px -6px,
    rgba(14, 63, 126, 0.04) 0 24px 24px -12px;

  /* Movimento recorrente */
  --brand-duration-fast: 150ms;
  --brand-duration-ui: 300ms;
  --brand-duration-image: 700ms;
  --brand-ease-out: cubic-bezier(0, 0, 0.2, 1);
}

@media (min-width: 48rem) {
  :root {
    --brand-page-gutter: 3rem;
    --brand-section-space: 7rem;
  }
}

@media (min-width: 64rem) {
  :root {
    --brand-page-gutter: 5rem;
    --brand-section-space: 10rem;
  }
}
```

### Mapeamento opcional para Tailwind CSS 4

```css
@theme inline {
  --font-sans: var(--brand-font-sans);

  --color-background: var(--brand-color-canvas);
  --color-foreground: var(--brand-color-ink);
  --color-secondary: var(--brand-color-surface);
  --color-muted-foreground: var(--brand-color-muted-ink);
  --color-border: var(--brand-color-border);

  --radius-2xl: var(--brand-radius-card);
}
```

Esse mapeamento cobre todas as cores semânticas que a landing usa. Tokens adicionais só devem ser criados quando um componente real passar a exigi-los.

## Valores deliberadamente não promovidos a tokens

- `#0E7490` (`accent`) e `#DC2626` (`destructive`): declarados, mas sem aplicação visual.
- Tema escuro: inativo na arquitetura atual.
- Cores de charts e sidebar: componentes não renderizados.
- PP Editorial New, JetBrains Mono e Geist: não usados na landing.
- Helpers `.grain-overlay`, `.text-stroke`, `.clip-diagonal*` e animações globais de reveal/float: definidos em `app/globals.css`, mas não aplicados pelos componentes atuais.
- `--radius: 0rem`: não descreve o arredondamento visível; os componentes usam `rounded-2xl`, `rounded-full` e raio inline de até 24 px.

Manter esses valores fora do kit reutilizável evita transportar dívida de tema e estilos de scaffold que não participam da identidade final.
