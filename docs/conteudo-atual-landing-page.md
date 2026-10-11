# Conteúdo atual da Landing Page — Imperador do Turismo

Este documento registra o conteúdo encontrado nos componentes renderizados por app/page.tsx, na ordem em que aparecem no arquivo. Os textos foram mantidos sem reescrita.

Classificação usada neste documento:

- Conteúdo visível na página: texto renderizado normalmente ou revelado pelas animações e interações da página.
- Conteúdo demonstrativo: texto renderizado, mas marcado no código como demonstração.
- Conteúdo oculto ou desativado: texto que depende de menu, acordeão ou flag para aparecer, ou que existe no código sem ser renderizado no estado atual.
- Texto usado apenas no WhatsApp: mensagem pré-preenchida no link, não exibida como texto da página.

## Ordem das seções

1. Navbar
2. Hero
3. Philosophy
4. Featured Products
5. Technology
6. Gallery
7. Collection
8. Testimonials
9. About Founder
10. Cadastur
11. FAQ
12. Footer

## 1. Navbar

- Nome da seção: Navbar
- Componente: Header
- Arquivo: components/header.tsx
- ID: não existe.
- Conteúdo visível na página:
  - Texto alternativo do logotipo: “Imperador do Turismo”
  - Rótulo acessível do link do logotipo: “Imperador do Turismo — início”
  - Links de navegação:
    - “Início” — destino: #
    - “Passeios” — destino: #products
    - “Experiências” — destino: #technology
    - “Galeria” — destino: #gallery
    - “Sobre nós” — destino: #about
  - Botão/link: “Reservar passeio”
- Conteúdo oculto ou condicional:
  - O menu móvel fica oculto até a abertura e repete os links “Início”, “Passeios”, “Experiências”, “Galeria”, “Sobre nós” e “Reservar passeio”.
  - Rótulo acessível do botão do menu móvel: “Toggle menu”
- Texto usado apenas no WhatsApp:
  - “Olá! Encontrei o Imperador do Turismo pelo site e gostaria de reservar um passeio.”

## 2. Hero

- Nome da seção: Hero
- Componente: HeroSection
- Arquivo: components/sections/hero-section.tsx
- ID: a seção não possui ID. O título possui o ID hero-title.
- Etiqueta: “Paraíba, Brasil”
- Título: “João Pessoa”
- Descrição: “Viva o melhor do litoral paraibano com passeios feitos para ficar na memória.”
- Botões:
  - “Explorar passeios” — destino: #products
- Imagens e textos alternativos:
  - “Vista aérea da orla de João Pessoa e do mar azul da Paraíba”

## 3. Philosophy

- Nome da seção: Philosophy
- Componente: PhilosophySection
- Arquivo: components/sections/philosophy-section.tsx
- ID: products
- Título: “Conheça um destino. Viva várias experiências.”
- Textos sobre as imagens:
  - “Experiências no mar”
  - “Aventuras por terra”
- Etiqueta: “João Pessoa por terra e pelo mar”
- Parágrafo: “Experiências selecionadas para quem quer conhecer paisagens incríveis, viver novas aventuras e aproveitar melhor cada dia da viagem.”
- Imagens e textos alternativos:
  - “Passeio de barco chegando às piscinas naturais no litoral paraibano”
  - “Passeio de buggy e quadriciclo pelo litoral da Paraíba”
- Conteúdo animado:
  - O título perde opacidade durante a rolagem e as duas etiquetas entram com as imagens. Todo o conteúdo acima é renderizado pela seção.

## 4. Featured Products

- Nome da seção: Featured Products
- Componente: FeaturedProductsSection
- Arquivo: components/sections/featured-products-section.tsx
- ID: technology
- Título: “Escolha como você quer viver essa experiência”
- Descrição: “De praias paradisíacas a roteiros históricos, encontre o passeio que combina com o seu momento e aproveite João Pessoa com mais praticidade.”
- Cards:
  - Separador visual entre duração e preço: “•” (marcado com aria-hidden=true).
  1. Categoria: “Litoral”
     - Título: “Litoral Sul 1”
     - Duração: “Aprox. 7 horas”
     - Preço: “R$ 150 / pessoa”
     - Texto alternativo da imagem: “Litoral Sul 1”
     - Link: “Reservar pelo WhatsApp”
  2. Categoria: “Litoral”
     - Título: “Litoral Norte Completo”
     - Duração: “Aprox. 7 horas”
     - Preço: “R$ 200 / pessoa”
     - Texto alternativo da imagem: “Litoral Norte Completo”
     - Link: “Reservar pelo WhatsApp”
  3. Categoria: “Piscinas naturais”
     - Título: “Piscinas Naturais do Seixas”
     - Duração: “Aprox. 3 horas”
     - Preço: “R$ 100 / pessoa”
     - Texto alternativo da imagem: “Piscinas Naturais do Seixas”
     - Link: “Reservar pelo WhatsApp”
  4. Categoria: “Aventura”
     - Título: “Buggy Litoral Sul”
     - Duração: “Aprox. 7 horas”
     - Preço: “A partir de R$ 600”
     - Texto alternativo da imagem: “Buggy Litoral Sul”
     - Link: “Reservar pelo WhatsApp”
  5. Categoria: “Experiência exclusiva”
     - Título: “Combo Casal ou Dupla”
     - Duração: “Dia inteiro”
     - Preço: “R$ 400 / duas pessoas”
     - Texto alternativo da imagem: “Combo Casal ou Dupla”
     - Link: “Reservar pelo WhatsApp”
  6. Categoria: “Cultura”
     - Título: “City Tour João Pessoa”
     - Duração: “Meio período”
     - Preço: “R$ 100 / pessoa”
     - Texto alternativo da imagem: “City Tour João Pessoa”
     - Link: “Reservar pelo WhatsApp”
- Mensagem/aviso: “Valores, roteiros e disponibilidade podem variar conforme a data, a maré, as condições climáticas, a capacidade dos veículos e a operação dos parceiros. Consulte nossa equipe antes de confirmar a reserva.”
- Textos usados apenas no WhatsApp: as seis mensagens resolvidas estão registradas em “Mensagens do WhatsApp”.

## 5. Technology

- Nome da seção: Technology
- Componente: TechnologySection
- Arquivo: components/sections/technology-section.tsx
- ID: não existe.
- Título: “O melhor da Paraíba começa aqui.”
- Imagens e textos alternativos:
  - “Falésias verdes da Praia de Tambaba”
  - “Praia de Carapibus com mar calmo”
  - “Vista aérea do litoral da Paraíba ao pôr do sol”
  - “Fortaleza de Santa Catarina em Cabedelo”
  - “Farol do Cabo Branco, ponto mais oriental das Américas”
- Conteúdo animado:
  - O título desaparece progressivamente durante a rolagem. As quatro imagens laterais começam fora da área visível, com opacidade zero, e são reveladas pela animação.

## 6. Gallery

- Nome da seção: Gallery
- Componente: GallerySection
- Arquivo: components/sections/gallery-section.tsx
- ID: gallery
- Textos visíveis: não há títulos, parágrafos, botões, links ou legendas visuais.
- Imagens e textos alternativos:
  - “Praia de Coqueirinho com falésias coloridas”
  - “Praia de Tambaba e suas falésias verdes”
  - “Praia de Carapibus com mar calmo”
  - “Mirante das falésias da Praia de Tabatinga”
  - “Banco de areia de Areia Vermelha em Cabedelo”
  - “Fortaleza de Santa Catarina em Cabedelo”
  - “Centro Histórico de João Pessoa”
  - “Farol do Cabo Branco em João Pessoa”

## 7. Collection

- Nome da seção: Collection
- Componente: CollectionSection
- Arquivo: components/sections/collection-section.tsx
- ID: accessories
- Título: “Explore outros destinos do Nordeste”
- Cards:
  1. Categoria: “Litoral”
     - Título: “Litoral Sul 2”
     - Descrição: “Praias tranquilas, falésias, mirantes e o encontro do rio com o mar.”
     - Preço: “R$ 150”
     - Duração: não informada no card.
     - Texto alternativo da imagem: “Litoral Sul 2”
     - Link: “Reservar pelo WhatsApp”
  2. Categoria: “Piscinas naturais”
     - Título: “Areia Vermelha”
     - Descrição: “Banco de areia com piscinas naturais de águas cristalinas na maré baixa.”
     - Preço: “R$ 100”
     - Duração: não informada no card.
     - Texto alternativo da imagem: “Areia Vermelha”
     - Link: “Reservar pelo WhatsApp”
  3. Categoria: “Cultura”
     - Título: “Cabaceiras — Roliúde Nordestina”
     - Descrição: “Cenários de cinema, construções históricas e a cultura do Cariri Paraibano.”
     - Preço: “R$ 300”
     - Duração: não informada no card.
     - Texto alternativo da imagem: “Cabaceiras — Roliúde Nordestina”
     - Link: “Reservar pelo WhatsApp”
  4. Categoria: “Interestadual”
     - Título: “Recife e Olinda”
     - Descrição: “Duas cidades históricas do Nordeste em um único dia de passeio.”
     - Preço: “R$ 160”
     - Duração: não informada no card.
     - Texto alternativo da imagem: “Recife e Olinda”
     - Link: “Reservar pelo WhatsApp”
  5. Categoria: “Interestadual”
     - Título: “Porto de Galinhas”
     - Descrição: “Águas cristalinas, piscinas naturais e praias paradisíacas.”
     - Preço: “R$ 160”
     - Duração: não informada no card.
     - Texto alternativo da imagem: “Porto de Galinhas”
     - Link: “Reservar pelo WhatsApp”
  6. Categoria: “Interestadual”
     - Título: “Pipa”
     - Descrição: “Falésias, mirantes e mar azul no Rio Grande do Norte.”
     - Preço: “R$ 160”
     - Duração: não informada no card.
     - Texto alternativo da imagem: “Pipa”
     - Link: “Reservar pelo WhatsApp”
- Conteúdo responsivo:
  - Os mesmos seis textos de cards aparecem em um carrossel móvel e em uma grade para desktop; apenas uma das duas versões é exibida de acordo com a largura da tela.
- Textos usados apenas no WhatsApp: as seis mensagens resolvidas estão registradas em “Mensagens do WhatsApp”.

## 8. Testimonials

- Nome da seção: Testimonials
- Componente: TestimonialsSection
- Arquivo: components/sections/testimonials-section.tsx
- ID: não existe.
- Etiqueta: “Depoimentos”
- Título: “Veja o que dizem nossos viajantes.”
- Conteúdo demonstrativo visível: a constante SHOW_DEMO_TESTIMONIALS está definida como true, portanto os três depoimentos demonstrativos são renderizados.
- Depoimentos:
  1. Texto: “O atendimento foi próximo desde o primeiro contato e recebemos todas as orientações necessárias para aproveitar o passeio.”
     - Nome: “Depoimento demonstrativo”
     - Passeio: “Litoral Sul”
  2. Texto: “Foi uma experiência tranquila, bem organizada e com paisagens incríveis durante todo o passeio.”
     - Nome: “Depoimento demonstrativo”
     - Passeio: “Piscinas Naturais”
  3. Texto: “Conseguimos conhecer vários pontos da cidade com praticidade e aproveitar muito melhor o nosso dia.”
     - Nome: “Depoimento demonstrativo”
     - Passeio: “City Tour João Pessoa”
- Texto alternativo das três imagens de avatar: “Avatar demonstrativo neutro, sem identificação de cliente real”

## 9. About Founder

- Nome da seção: About Founder
- Componente: AboutFounderSection
- Arquivo: components/sections/about-founder-section.tsx
- ID: about
- Etiqueta: “Quem está por trás do Imperador”
- Título: “Prazer, eu sou Júlio César.”
- Parágrafos:
  - “O Imperador do Turismo nasceu da minha conexão com João Pessoa, com o litoral paraibano e com as pessoas que chegam até aqui querendo aproveitar cada momento da viagem.”
  - “Hoje, ajudo casais, famílias e grupos a encontrarem passeios que realmente combinem com o estilo de viagem que desejam viver.”
  - “Mais do que indicar destinos, meu objetivo é oferecer informações claras, atendimento próximo e orientação desde o primeiro contato até o dia do passeio.”
- Mensagem em destaque: “Você escolhe como deseja conhecer João Pessoa. O Imperador ajuda a cuidar do caminho.”
- Destaques numerados:
  - “01” — “Atendimento direto e personalizado”
  - “02” — “Conhecimento dos destinos e roteiros locais”
  - “03” — “Orientação antes da confirmação do passeio”
- Botão/link: “Falar com Júlio pelo WhatsApp”
- Imagem e texto alternativo: “Júlio César, responsável pelo Imperador do Turismo”
- Texto usado apenas no WhatsApp:
  - “Olá, Júlio! Encontrei o Imperador do Turismo pelo site e gostaria de receber ajuda para escolher um passeio.”

## 10. Cadastur

- Nome da seção: Cadastur
- Componente: CadasturSection
- Arquivo: components/sections/cadastur-section.tsx
- ID: não existe.
- Etiqueta: “Agência regularizada”
- Título: “Viaje com mais confiança.”
- Parágrafo: “O Imperador do Turismo é uma agência cadastrada no Cadastur, sistema oficial de cadastro dos prestadores de serviços turísticos do Ministério do Turismo.”
- Link da imagem: abre /images/cadastur/cadastur.png em uma nova aba.
- Rótulo acessível do link: “Abrir o certificado Cadastur em tamanho ampliado”
- Imagem e texto alternativo: “Certificado Cadastur do Imperador do Turismo”
- Mensagem/informação: “Cadastro nº 67.630.354/0001-90 — válido de 14/07/2026 a 14/07/2028.”

## 11. FAQ

- Nome da seção: FAQ
- Componente: FaqSection
- Arquivo: components/sections/faq-section.tsx
- ID: faq
- Etiqueta: “Dúvidas”
- Título: “Perguntas frequentes”
- Descrição: “Encontre respostas para as principais dúvidas antes de escolher seu passeio.”
- Perguntas e respostas:
  1. Pergunta: “Como funciona a reserva?”
     - Resposta: “Escolha o passeio desejado e fale com nossa equipe pelo WhatsApp, informando a data da viagem e a quantidade de pessoas. Confirmaremos a disponibilidade, o roteiro, os horários e todas as orientações antes da reserva.”
  2. Pergunta: “Como funciona o pagamento?”
     - Resposta: “Depois da confirmação da disponibilidade, nossa equipe informará pelo WhatsApp as formas e as condições de pagamento disponíveis para o passeio escolhido.”
  3. Pergunta: “Posso cancelar?”
     - Resposta: “As condições de cancelamento podem variar conforme o passeio, a antecedência e o parceiro responsável pela operação. Todas as regras serão informadas antes da confirmação da reserva.”
  4. Pergunta: “O transporte está incluído?”
     - Resposta: “A inclusão do transporte e o local de saída dependem do passeio escolhido. Nossa equipe confirmará essas informações durante o atendimento pelo WhatsApp.”
  5. Pergunta: “Existem taxas extras?”
     - Resposta: “Alguns passeios podem possuir despesas opcionais ou taxas cobradas diretamente no local. Antes da reserva, informaremos claramente o que está ou não incluído no valor.”
  6. Pergunta: “Quanto tempo dura cada passeio?”
     - Resposta: “A duração depende do roteiro escolhido. Existem passeios de aproximadamente 3 horas, meio período, 7 horas e opções de bate e volta. A duração aparece em cada passeio e também será confirmada no atendimento.”
  7. Pergunta: “O que devo levar?”
     - Resposta: “Recomendamos levar documento pessoal, protetor solar, água, roupas confortáveis, traje de banho e os itens pessoais necessários. Orientações específicas serão enviadas antes do passeio.”
- Conteúdo oculto ou condicional:
  - Todas as respostas são renderizadas nos acordeões, mas começam recolhidas e com aria-hidden=true. Cada resposta aparece quando a respectiva pergunta é acionada.
  - IDs gerados para as perguntas: faq-question-0 a faq-question-6.
  - IDs gerados para as respostas: faq-answer-0 a faq-answer-6.

## 12. Footer

- Nome da seção: Footer
- Componente: FooterSection
- Arquivo: components/sections/footer-section.tsx
- ID: não existe.
- Marca:
  - Texto alternativo do logotipo: “Imperador do Turismo”
  - Rótulo acessível do link do logotipo: “Imperador do Turismo — início”
  - Parágrafo: “Passeios terrestres e náuticos em João Pessoa e região. Experiências para conhecer o melhor da Paraíba com praticidade, segurança e atendimento próximo.”
- Coluna “Explore”:
  - “Passeios” — destino: #products
  - “Experiências” — destino: #technology
  - “Galeria” — destino: #gallery
  - “Outros destinos” — destino: #accessories
- Coluna “About”:
  - “Sobre nós” — destino: #about
  - “Litoral Sul” — destino: #products
  - “Litoral Norte” — destino: #products
  - “Piscinas naturais” — destino: #products
- Coluna “Service”:
  - “Falar no WhatsApp”
  - “Reservar passeio”
  - “Tirar dúvidas”
  - “Instagram” — destino: https://instagram.com/imperadordoturismo
- Barra inferior:
  - “2026 Imperador do Turismo. Todos os direitos reservados.”
  - “Instagram” — destino: #
  - “Twitter” — destino: #
  - “YouTube” — destino: #
- Imagem de fundo e texto alternativo: “Catamarã navegando diante da orla de João Pessoa ao entardecer”
- Textos usados apenas no WhatsApp:
  - Link “Falar no WhatsApp”: “Olá! Encontrei o Imperador do Turismo pelo site e gostaria de mais informações sobre os passeios.”
  - Link “Reservar passeio”: “Olá! Encontrei o Imperador do Turismo pelo site e gostaria de reservar um passeio.”
  - Link “Tirar dúvidas”: “Olá! Encontrei o Imperador do Turismo pelo site e gostaria de tirar algumas dúvidas sobre os passeios.”

## Passeios e informações comerciais

### Featured Products

1. “Litoral Sul 1”
   - Categoria: “Litoral”
   - Duração: “Aprox. 7 horas”
   - Preço: “R$ 150 / pessoa”
2. “Litoral Norte Completo”
   - Categoria: “Litoral”
   - Duração: “Aprox. 7 horas”
   - Preço: “R$ 200 / pessoa”
3. “Piscinas Naturais do Seixas”
   - Categoria: “Piscinas naturais”
   - Duração: “Aprox. 3 horas”
   - Preço: “R$ 100 / pessoa”
4. “Buggy Litoral Sul”
   - Categoria: “Aventura”
   - Duração: “Aprox. 7 horas”
   - Preço: “A partir de R$ 600”
5. “Combo Casal ou Dupla”
   - Categoria: “Experiência exclusiva”
   - Duração: “Dia inteiro”
   - Preço: “R$ 400 / duas pessoas”
6. “City Tour João Pessoa”
   - Categoria: “Cultura”
   - Duração: “Meio período”
   - Preço: “R$ 100 / pessoa”

### Collection

1. “Litoral Sul 2”
   - Categoria: “Litoral”
   - Descrição: “Praias tranquilas, falésias, mirantes e o encontro do rio com o mar.”
   - Preço: “R$ 150”
2. “Areia Vermelha”
   - Categoria: “Piscinas naturais”
   - Descrição: “Banco de areia com piscinas naturais de águas cristalinas na maré baixa.”
   - Preço: “R$ 100”
3. “Cabaceiras — Roliúde Nordestina”
   - Categoria: “Cultura”
   - Descrição: “Cenários de cinema, construções históricas e a cultura do Cariri Paraibano.”
   - Preço: “R$ 300”
4. “Recife e Olinda”
   - Categoria: “Interestadual”
   - Descrição: “Duas cidades históricas do Nordeste em um único dia de passeio.”
   - Preço: “R$ 160”
5. “Porto de Galinhas”
   - Categoria: “Interestadual”
   - Descrição: “Águas cristalinas, piscinas naturais e praias paradisíacas.”
   - Preço: “R$ 160”
6. “Pipa”
   - Categoria: “Interestadual”
   - Descrição: “Falésias, mirantes e mar azul no Rio Grande do Norte.”
   - Preço: “R$ 160”

### Informações e avisos comerciais

- “Valores, roteiros e disponibilidade podem variar conforme a data, a maré, as condições climáticas, a capacidade dos veículos e a operação dos parceiros. Consulte nossa equipe antes de confirmar a reserva.”
- “O Imperador do Turismo é uma agência cadastrada no Cadastur, sistema oficial de cadastro dos prestadores de serviços turísticos do Ministério do Turismo.”
- “Cadastro nº 67.630.354/0001-90 — válido de 14/07/2026 a 14/07/2028.”

## Perguntas frequentes

1. “Como funciona a reserva?”
   - “Escolha o passeio desejado e fale com nossa equipe pelo WhatsApp, informando a data da viagem e a quantidade de pessoas. Confirmaremos a disponibilidade, o roteiro, os horários e todas as orientações antes da reserva.”
2. “Como funciona o pagamento?”
   - “Depois da confirmação da disponibilidade, nossa equipe informará pelo WhatsApp as formas e as condições de pagamento disponíveis para o passeio escolhido.”
3. “Posso cancelar?”
   - “As condições de cancelamento podem variar conforme o passeio, a antecedência e o parceiro responsável pela operação. Todas as regras serão informadas antes da confirmação da reserva.”
4. “O transporte está incluído?”
   - “A inclusão do transporte e o local de saída dependem do passeio escolhido. Nossa equipe confirmará essas informações durante o atendimento pelo WhatsApp.”
5. “Existem taxas extras?”
   - “Alguns passeios podem possuir despesas opcionais ou taxas cobradas diretamente no local. Antes da reserva, informaremos claramente o que está ou não incluído no valor.”
6. “Quanto tempo dura cada passeio?”
   - “A duração depende do roteiro escolhido. Existem passeios de aproximadamente 3 horas, meio período, 7 horas e opções de bate e volta. A duração aparece em cada passeio e também será confirmada no atendimento.”
7. “O que devo levar?”
   - “Recomendamos levar documento pessoal, protetor solar, água, roupas confortáveis, traje de banho e os itens pessoais necessários. Orientações específicas serão enviadas antes do passeio.”

As respostas acima são conteúdo visível sob interação: ficam recolhidas no estado inicial do acordeão.

## Depoimentos

Os três depoimentos abaixo são conteúdo demonstrativo. Estão atualmente visíveis porque SHOW_DEMO_TESTIMONIALS está definido como true.

1. “O atendimento foi próximo desde o primeiro contato e recebemos todas as orientações necessárias para aproveitar o passeio.”
   - “Depoimento demonstrativo”
   - “Litoral Sul”
2. “Foi uma experiência tranquila, bem organizada e com paisagens incríveis durante todo o passeio.”
   - “Depoimento demonstrativo”
   - “Piscinas Naturais”
3. “Conseguimos conhecer vários pontos da cidade com praticidade e aproveitar muito melhor o nosso dia.”
   - “Depoimento demonstrativo”
   - “City Tour João Pessoa”

Texto alternativo demonstrativo usado nos três avatares: “Avatar demonstrativo neutro, sem identificação de cliente real”

## Mensagens do WhatsApp

As mensagens desta seção não aparecem como texto visível na landing page. Elas são usadas apenas como texto pré-preenchido nos links do WhatsApp.

- Número configurado para todos os links: 5583998048936

### Mensagens padrão em uso

- Geral: “Olá! Encontrei o Imperador do Turismo pelo site e gostaria de mais informações sobre os passeios.”
- Reserva: “Olá! Encontrei o Imperador do Turismo pelo site e gostaria de reservar um passeio.”
- Dúvidas: “Olá! Encontrei o Imperador do Turismo pelo site e gostaria de tirar algumas dúvidas sobre os passeios.”
- Atendimento com Júlio: “Olá, Júlio! Encontrei o Imperador do Turismo pelo site e gostaria de receber ajuda para escolher um passeio.”

### Mensagens resolvidas para os passeios

- “Olá! Encontrei o Imperador do Turismo pelo site e gostaria de consultar disponibilidade para o passeio Litoral Sul 1.”
- “Olá! Encontrei o Imperador do Turismo pelo site e gostaria de consultar disponibilidade para o passeio Litoral Norte Completo.”
- “Olá! Encontrei o Imperador do Turismo pelo site e gostaria de consultar disponibilidade para o passeio Piscinas Naturais do Seixas.”
- “Olá! Encontrei o Imperador do Turismo pelo site e gostaria de consultar disponibilidade para o passeio Buggy Litoral Sul.”
- “Olá! Encontrei o Imperador do Turismo pelo site e gostaria de consultar disponibilidade para o passeio Combo Casal ou Dupla.”
- “Olá! Encontrei o Imperador do Turismo pelo site e gostaria de consultar disponibilidade para o passeio City Tour João Pessoa.”
- “Olá! Encontrei o Imperador do Turismo pelo site e gostaria de consultar disponibilidade para o passeio Litoral Sul 2.”
- “Olá! Encontrei o Imperador do Turismo pelo site e gostaria de consultar disponibilidade para o passeio Areia Vermelha.”
- “Olá! Encontrei o Imperador do Turismo pelo site e gostaria de consultar disponibilidade para o passeio Cabaceiras — Roliúde Nordestina.”
- “Olá! Encontrei o Imperador do Turismo pelo site e gostaria de consultar disponibilidade para o passeio Recife e Olinda.”
- “Olá! Encontrei o Imperador do Turismo pelo site e gostaria de consultar disponibilidade para o passeio Porto de Galinhas.”
- “Olá! Encontrei o Imperador do Turismo pelo site e gostaria de consultar disponibilidade para o passeio Pipa.”

### Mensagem padrão existente, mas não usada na landing page atual

- Recomendação: “Olá! Gostaria de receber ajuda para escolher um passeio. Minha viagem será no dia [DATA] e estaremos em [QUANTIDADE] pessoas.”

## Conteúdos demonstrativos ou pendentes de substituição

### Conteúdo demonstrativo atualmente exibido

- Nome repetido nos três cards: “Depoimento demonstrativo”
- Depoimento: “O atendimento foi próximo desde o primeiro contato e recebemos todas as orientações necessárias para aproveitar o passeio.”
- Depoimento: “Foi uma experiência tranquila, bem organizada e com paisagens incríveis durante todo o passeio.”
- Depoimento: “Conseguimos conhecer vários pontos da cidade com praticidade e aproveitar muito melhor o nosso dia.”
- Texto alternativo dos avatares: “Avatar demonstrativo neutro, sem identificação de cliente real”
- O comentário do código determina: “ALTERAR PARA FALSE OU SUBSTITUIR POR DEPOIMENTOS REAIS ANTES DE PUBLICAR O SITE.”

### Links visíveis com destino pendente

- Na barra inferior do Footer, “Instagram” usa o destino #.
- Na barra inferior do Footer, “Twitter” usa o destino #.
- Na barra inferior do Footer, “YouTube” usa o destino #.

O link “Instagram” da coluna “Service” não usa o destino pendente; ele aponta para https://instagram.com/imperadordoturismo.

## Textos encontrados no código, mas não exibidos atualmente

- Mensagem de recomendação definida em lib/site.ts, mas não referenciada por nenhum componente importado em app/page.tsx: “Olá! Gostaria de receber ajuda para escolher um passeio. Minha viagem será no dia [DATA] e estaremos em [QUANTIDADE] pessoas.”
- O menu móvel replica “Início”, “Passeios”, “Experiências”, “Galeria”, “Sobre nós” e “Reservar passeio”, mas permanece oculto enquanto isMenuOpen é false.
- As respostas do FAQ permanecem visualmente recolhidas e marcadas com aria-hidden=true até a abertura de cada item.
- Não há depoimentos desativados no estado atual: SHOW_DEMO_TESTIMONIALS está definido como true.

## Conferência dos componentes importados em app/page.tsx

Foram revisados os 12 componentes importados diretamente e, quando aplicável, as fontes auxiliares components/fade-image.tsx e lib/site.ts:

1. Header — components/header.tsx
2. HeroSection — components/sections/hero-section.tsx
3. PhilosophySection — components/sections/philosophy-section.tsx
4. FeaturedProductsSection — components/sections/featured-products-section.tsx
5. TechnologySection — components/sections/technology-section.tsx
6. GallerySection — components/sections/gallery-section.tsx
7. CollectionSection — components/sections/collection-section.tsx
8. TestimonialsSection — components/sections/testimonials-section.tsx
9. AboutFounderSection — components/sections/about-founder-section.tsx
10. CadasturSection — components/sections/cadastur-section.tsx
11. FaqSection — components/sections/faq-section.tsx
12. FooterSection — components/sections/footer-section.tsx

Todos os textos visíveis, demonstrativos, condicionais, acessíveis e exclusivos das mensagens do WhatsApp encontrados nesses arquivos foram incluídos nas categorias acima.
