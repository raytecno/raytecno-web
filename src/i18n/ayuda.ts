/**
 * ayuda.ts — Textos del bloque "Ayuda en cada pantalla" (modo ?)
 *
 * @file src/i18n/ayuda.ts
 *
 * Noviembre 2026. Lo pinta components/AyudaContextual.astro, hoy en la página
 * de Tecnología. Solo funciones ya disponibles: lo que el dossier de la
 * ayuda da como "lo que viene" (revisión de propuestas, guías paso a paso,
 * más pantallas) no se anuncia aquí. Sin la comparativa con otros
 * productos ni nombres de clientes.
 */
import type { Lang } from '@/config/pages';

export interface AyudaTranslations {
  sello: string;
  titulo: string;
  tituloEnfasis: string;
  lead: string;
  /** Maqueta del panel: textos de ejemplo */
  maqueta: {
    campo: string;
    valor: string;
    pista: string;
    panelTitulo: string;
    queEs: string;
    queEsTexto: string;
    empresa: string;
    empresaTexto: string;
    notas: string;
    notasTexto: string;
    pregunta: string;
  };
  pasosTitulo: string;
  pasos: { tecla: string; titulo: string; texto: string }[];
  capasTitulo: string;
  capas: { capa: string; titulo: string; texto: string; quien: string }[];
  iaTitulo: string;
  iaTexto: string;
  iaPreguntas: { pregunta: string; respuesta: string }[];
  iaNota: string;
  ventajas: { titulo: string; texto: string }[];
}

const es: AyudaTranslations = {
  sello: 'Ayuda en cada pantalla',
  titulo: 'La ayuda que conoce tu empresa…',
  tituloEnfasis: '…y a ti.',
  lead:
    'En casi todos los programas la ayuda es un manual aparte que nadie abre y que no dice cómo se trabaja en tu casa. En RayGold está en la propia pantalla: se pulsa ?, se toca el campo que no se entiende y aparece qué es, para qué sirve, qué poner y qué vigilar. La empresa la corrige con su forma de trabajar, cada persona se apunta sus notas y una IA contesta con los datos reales de esa pantalla.',
  maqueta: {
    campo: 'Tipo de artículo',
    valor: 'Conjunto',
    pista: 'Pasa el ratón: lo que tiene ayuda se ilumina · Esc para salir',
    panelTitulo: 'Tipo de artículo',
    queEs: 'Qué es',
    queEsTexto: 'Cómo se vende la pieza: suelta, por pares o como conjunto. Decide el stock y el precio.',
    empresa: 'Escrito por la empresa',
    empresaTexto: 'En nuestra casa, un conjunto es anillo, pendientes y colgante.',
    notas: 'Mis notas · solo las ves tú',
    notasTexto: 'Si es por encargo, preguntar antes a taller.',
    pregunta: 'Pregúntale a la IA…',
  },
  pasosTitulo: 'Cómo se usa',
  pasos: [
    { tecla: '?', titulo: 'Pulsa ? o F1', texto: 'La pantalla entra en modo ayuda y no reacciona a los toques: no se graba ni se borra nada sin querer.' },
    { tecla: '◎', titulo: 'Pasa el ratón', texto: 'Lo que tiene explicación se ilumina: el campo, el botón, la columna o la tarjeta.' },
    { tecla: '☝', titulo: 'Toca', texto: 'Se abre el panel con qué es, para qué sirve, qué poner y qué vigilar.' },
    { tecla: 'Esc', titulo: 'Sal con Esc', texto: 'La pantalla vuelve a funcionar como siempre.' },
  ],
  capasTitulo: 'Tres capas en el mismo panel',
  capas: [
    { capa: 'Capa 1', titulo: 'RayGold', texto: 'Qué hace el programa con ese dato: en el precio, en el stock, en fabricación. Sale de un manual revisado escrito leyendo el propio programa, no de la IA en cada clic, así que nunca dice algo distinto a lo que hace.', quien: 'Lo ven todos' },
    { capa: 'Capa 2', titulo: 'La empresa', texto: 'Con el lápiz, la empresa corrige o completa cualquier explicación con su forma de trabajar. Desde ese momento es la explicación oficial, y cada empresa tiene la suya.', quien: 'Lo ven todos en la empresa' },
    { capa: 'Capa 3', titulo: 'Tú', texto: 'Tus notas en cada campo y en cada botón: trucos, casos, a quién preguntar. Si una sirve para todos, un botón la propone a la empresa.', quien: 'Solo las ves tú' },
  ],
  iaTitulo: 'Una IA que contesta con los números de verdad',
  iaTexto:
    'Debajo de cada explicación hay una caja para preguntar lo que el manual no cubre. La IA se apoya en el manual, en lo escrito por la empresa y en tus notas y, en las pantallas de fabricación, ve los datos reales de lo que tienes abierto. Solo consulta: no cambia nada y no inventa cifras.',
  iaPreguntas: [
    { pregunta: '¿Por qué Pulido sale a 26,54 la hora?', respuesta: 'Coste del año de la sección entre sus horas, con la parte fija y la variable.' },
    { pregunta: '¿De dónde salen los minutos de esta línea?', respuesta: 'De la familia del artículo, su tramo de peso y la tabla de tiempos estándar.' },
    { pregunta: '¿Por qué «Traer tasas» no ha traído nada?', respuesta: 'Porque las tasas del ejercicio están en borrador y hay que activarlas.' },
  ],
  iaNota: 'Y solo enseña lo que cada uno puede ver: los enlaces a otras pantallas y las cifras de costes salen únicamente a quien tiene esas pantallas en su menú.',
  ventajas: [
    { titulo: 'Menos formación', texto: 'La persona nueva tiene la explicación en el sitio exacto, con la forma de trabajar de la empresa.' },
    { titulo: 'Menos errores', texto: 'Antes de pulsar sabe qué se graba, qué se pisa y qué no se puede deshacer.' },
    { titulo: 'Más conocimiento', texto: 'Lo que sabe cada uno queda en el programa, no se va con él cuando cambia de trabajo.' },
  ],
};

const en: AyudaTranslations = {
  sello: 'Help on every screen',
  titulo: 'Help that knows your business…',
  tituloEnfasis: '…and you.',
  lead:
    'In most software, help is a separate manual nobody opens, and it never says how things are done in your company. In RayGold it lives on the screen itself: press ?, touch the field you do not understand and you get what it is, what it is for, what to enter and what to watch out for. The company adapts it to how it works, each person keeps their own notes, and an AI answers with the real data on that screen.',
  maqueta: {
    campo: 'Item type',
    valor: 'Set',
    pista: 'Hover: anything with help lights up · Esc to exit',
    panelTitulo: 'Item type',
    queEs: 'What it is',
    queEsTexto: 'How the piece is sold: single, in pairs or as a set. It drives stock and price.',
    empresa: 'Written by the company',
    empresaTexto: 'Here, a set is a ring, earrings and a pendant.',
    notas: 'My notes · only you see them',
    notasTexto: 'If it is made to order, check with the workshop first.',
    pregunta: 'Ask the AI…',
  },
  pasosTitulo: 'How it works',
  pasos: [
    { tecla: '?', titulo: 'Press ? or F1', texto: 'The screen switches to help mode and ignores clicks: nothing gets saved or deleted by accident.' },
    { tecla: '◎', titulo: 'Hover', texto: 'Anything with an explanation lights up: the field, the button, the column or the card.' },
    { tecla: '☝', titulo: 'Touch', texto: 'The panel opens with what it is, what it is for, what to enter and what to watch out for.' },
    { tecla: 'Esc', titulo: 'Exit with Esc', texto: 'The screen goes back to working as usual.' },
  ],
  capasTitulo: 'Three layers in the same panel',
  capas: [
    { capa: 'Layer 1', titulo: 'RayGold', texto: 'What the program does with that data: in pricing, in stock, in manufacturing. It comes from a reviewed manual written by reading the program itself, not from the AI on every click, so it never says something different from what the software does.', quien: 'Everyone sees it' },
    { capa: 'Layer 2', titulo: 'The company', texto: 'With the pencil, the company corrects or completes any explanation with the way it works. From then on it is the official explanation, and each company has its own.', quien: 'Everyone in the company sees it' },
    { capa: 'Layer 3', titulo: 'You', texto: 'Your notes on every field and every button: tips, cases, who to ask. If one is useful to everyone, a button proposes it to the company.', quien: 'Only you see them' },
  ],
  iaTitulo: 'An AI that answers with the real numbers',
  iaTexto:
    'Below every explanation there is a box to ask what the manual does not cover. The AI relies on the manual, on what the company has written and on your notes and, on manufacturing screens, it sees the real data of what you have open. It only reads: it changes nothing and never makes up figures.',
  iaPreguntas: [
    { pregunta: 'Why is Polishing at 26.54 an hour?', respuesta: 'The section’s yearly cost divided by its hours, with the fixed and variable parts.' },
    { pregunta: 'Where do the minutes on this line come from?', respuesta: 'From the item’s family, its weight band and the standard times table.' },
    { pregunta: 'Why did “Fetch rates” bring nothing?', respuesta: 'Because this year’s rates are still in draft and need to be activated.' },
  ],
  iaNota: 'And it only shows what each person is allowed to see: links to other screens and cost figures appear only to people who have those screens in their menu.',
  ventajas: [
    { titulo: 'Less training', texto: 'New staff get the explanation exactly where they need it, with the company’s own way of working.' },
    { titulo: 'Fewer mistakes', texto: 'Before clicking, they know what gets saved, what gets overwritten and what cannot be undone.' },
    { titulo: 'More know-how', texto: 'What each person knows stays in the program instead of leaving with them.' },
  ],
};

const fr: AyudaTranslations = {
  sello: 'Aide sur chaque écran',
  titulo: 'L’aide qui connaît votre entreprise…',
  tituloEnfasis: '…et vous.',
  lead:
    'Dans presque tous les logiciels, l’aide est un manuel à part que personne n’ouvre et qui ne dit pas comment on travaille chez vous. Dans RayGold, elle est sur l’écran même : on appuie sur ?, on touche le champ qu’on ne comprend pas et on voit ce que c’est, à quoi il sert, quoi saisir et à quoi faire attention. L’entreprise l’adapte à sa façon de travailler, chacun y note ses remarques et une IA répond avec les données réelles de cet écran.',
  maqueta: {
    campo: 'Type d’article',
    valor: 'Parure',
    pista: 'Survolez : ce qui a une aide s’allume · Échap pour sortir',
    panelTitulo: 'Type d’article',
    queEs: 'Ce que c’est',
    queEsTexto: 'Comment la pièce se vend : seule, par paire ou en parure. Cela détermine le stock et le prix.',
    empresa: 'Écrit par l’entreprise',
    empresaTexto: 'Chez nous, une parure, c’est une bague, des boucles d’oreilles et un pendentif.',
    notas: 'Mes notes · vous seul les voyez',
    notasTexto: 'Si c’est sur commande, demander d’abord à l’atelier.',
    pregunta: 'Demandez à l’IA…',
  },
  pasosTitulo: 'Comment ça marche',
  pasos: [
    { tecla: '?', titulo: 'Appuyez sur ? ou F1', texto: 'L’écran passe en mode aide et ne réagit plus aux clics : rien n’est enregistré ni effacé par erreur.' },
    { tecla: '◎', titulo: 'Survolez', texto: 'Ce qui a une explication s’allume : le champ, le bouton, la colonne ou la carte.' },
    { tecla: '☝', titulo: 'Touchez', texto: 'Le panneau s’ouvre avec ce que c’est, à quoi il sert, quoi saisir et à quoi faire attention.' },
    { tecla: 'Échap', titulo: 'Sortez avec Échap', texto: 'L’écran fonctionne de nouveau comme d’habitude.' },
  ],
  capasTitulo: 'Trois niveaux dans le même panneau',
  capas: [
    { capa: 'Niveau 1', titulo: 'RayGold', texto: 'Ce que fait le logiciel de cette donnée : dans le prix, le stock, la fabrication. Cela vient d’un manuel revu, écrit en lisant le logiciel lui-même, et non de l’IA à chaque clic : il ne dit donc jamais autre chose que ce que fait le programme.', quien: 'Tout le monde le voit' },
    { capa: 'Niveau 2', titulo: 'L’entreprise', texto: 'Avec le crayon, l’entreprise corrige ou complète n’importe quelle explication selon sa façon de travailler. Elle devient l’explication officielle, et chaque entreprise a la sienne.', quien: 'Toute l’entreprise le voit' },
    { capa: 'Niveau 3', titulo: 'Vous', texto: 'Vos notes sur chaque champ et chaque bouton : astuces, cas, à qui demander. Si l’une sert à tous, un bouton la propose à l’entreprise.', quien: 'Vous seul les voyez' },
  ],
  iaTitulo: 'Une IA qui répond avec les vrais chiffres',
  iaTexto:
    'Sous chaque explication, une case permet de demander ce que le manuel ne couvre pas. L’IA s’appuie sur le manuel, sur ce qu’a écrit l’entreprise et sur vos notes et, sur les écrans de fabrication, elle voit les données réelles de ce que vous avez ouvert. Elle ne fait que consulter : elle ne modifie rien et n’invente aucun chiffre.',
  iaPreguntas: [
    { pregunta: 'Pourquoi le polissage revient-il à 26,54 de l’heure ?', respuesta: 'Le coût annuel de la section divisé par ses heures, avec la partie fixe et la partie variable.' },
    { pregunta: 'D’où viennent les minutes de cette ligne ?', respuesta: 'De la famille de l’article, de sa tranche de poids et de la table des temps standard.' },
    { pregunta: 'Pourquoi « Récupérer les taux » n’a rien ramené ?', respuesta: 'Parce que les taux de l’exercice sont encore en brouillon et doivent être activés.' },
  ],
  iaNota: 'Et elle ne montre que ce que chacun a le droit de voir : les liens vers d’autres écrans et les chiffres de coûts n’apparaissent qu’à ceux qui ont ces écrans dans leur menu.',
  ventajas: [
    { titulo: 'Moins de formation', texto: 'Le nouvel arrivant a l’explication à l’endroit exact, avec la façon de travailler de l’entreprise.' },
    { titulo: 'Moins d’erreurs', texto: 'Avant de cliquer, il sait ce qui s’enregistre, ce qui s’écrase et ce qui ne peut pas être annulé.' },
    { titulo: 'Plus de savoir-faire', texto: 'Ce que sait chacun reste dans le logiciel au lieu de partir avec lui.' },
  ],
};

const ca: AyudaTranslations = {
  sello: 'Ajuda a cada pantalla',
  titulo: 'L’ajuda que coneix la teva empresa…',
  tituloEnfasis: '…i a tu.',
  lead:
    'Gairebé a tots els programes l’ajuda és un manual a part que ningú no obre i que no diu com es treballa a casa teva. A RayGold és a la mateixa pantalla: es prem ?, es toca el camp que no s’entén i apareix què és, per a què serveix, què s’hi ha de posar i què cal vigilar. L’empresa la corregeix amb la seva manera de treballar, cada persona s’hi apunta les seves notes i una IA respon amb les dades reals d’aquella pantalla.',
  maqueta: {
    campo: 'Tipus d’article',
    valor: 'Conjunt',
    pista: 'Passa el ratolí: el que té ajuda s’il·lumina · Esc per sortir',
    panelTitulo: 'Tipus d’article',
    queEs: 'Què és',
    queEsTexto: 'Com es ven la peça: sola, per parells o com a conjunt. Decideix l’estoc i el preu.',
    empresa: 'Escrit per l’empresa',
    empresaTexto: 'A casa nostra, un conjunt és anell, arracades i penjoll.',
    notas: 'Les meves notes · només les veus tu',
    notasTexto: 'Si és per encàrrec, preguntar abans al taller.',
    pregunta: 'Pregunta-ho a la IA…',
  },
  pasosTitulo: 'Com es fa servir',
  pasos: [
    { tecla: '?', titulo: 'Prem ? o F1', texto: 'La pantalla entra en mode ajuda i no reacciona als tocs: no es desa ni s’esborra res sense voler.' },
    { tecla: '◎', titulo: 'Passa el ratolí', texto: 'El que té explicació s’il·lumina: el camp, el botó, la columna o la targeta.' },
    { tecla: '☝', titulo: 'Toca', texto: 'S’obre el panell amb què és, per a què serveix, què s’hi ha de posar i què cal vigilar.' },
    { tecla: 'Esc', titulo: 'Surt amb Esc', texto: 'La pantalla torna a funcionar com sempre.' },
  ],
  capasTitulo: 'Tres capes al mateix panell',
  capas: [
    { capa: 'Capa 1', titulo: 'RayGold', texto: 'Què fa el programa amb aquella dada: en el preu, en l’estoc, en fabricació. Surt d’un manual revisat escrit llegint el mateix programa, no de la IA a cada clic, així que mai no diu una cosa diferent del que fa.', quien: 'Ho veuen tots' },
    { capa: 'Capa 2', titulo: 'L’empresa', texto: 'Amb el llapis, l’empresa corregeix o completa qualsevol explicació amb la seva manera de treballar. Des d’aquell moment és l’explicació oficial, i cada empresa té la seva.', quien: 'Ho veuen tots a l’empresa' },
    { capa: 'Capa 3', titulo: 'Tu', texto: 'Les teves notes a cada camp i a cada botó: trucs, casos, a qui preguntar. Si una serveix per a tothom, un botó la proposa a l’empresa.', quien: 'Només les veus tu' },
  ],
  iaTitulo: 'Una IA que respon amb els números de debò',
  iaTexto:
    'Sota cada explicació hi ha una caixa per preguntar el que el manual no cobreix. La IA es basa en el manual, en el que ha escrit l’empresa i en les teves notes i, a les pantalles de fabricació, veu les dades reals del que tens obert. Només consulta: no canvia res i no s’inventa xifres.',
  iaPreguntas: [
    { pregunta: 'Per què Polit surt a 26,54 l’hora?', respuesta: 'Cost de l’any de la secció entre les seves hores, amb la part fixa i la variable.' },
    { pregunta: 'D’on surten els minuts d’aquesta línia?', respuesta: 'De la família de l’article, el seu tram de pes i la taula de temps estàndard.' },
    { pregunta: 'Per què «Portar taxes» no ha portat res?', respuesta: 'Perquè les taxes de l’exercici estan en esborrany i cal activar-les.' },
  ],
  iaNota: 'I només mostra el que cadascú pot veure: els enllaços a altres pantalles i les xifres de costos només surten a qui té aquestes pantalles al seu menú.',
  ventajas: [
    { titulo: 'Menys formació', texto: 'La persona nova té l’explicació al lloc exacte, amb la manera de treballar de l’empresa.' },
    { titulo: 'Menys errors', texto: 'Abans de prémer sap què es desa, què se sobreescriu i què no es pot desfer.' },
    { titulo: 'Més coneixement', texto: 'El que sap cadascú queda al programa, no se’n va amb ell quan canvia de feina.' },
  ],
};

const ptbr: AyudaTranslations = {
  sello: 'Ajuda em cada tela',
  titulo: 'A ajuda que conhece a sua empresa…',
  tituloEnfasis: '…e você.',
  lead:
    'Em quase todos os programas a ajuda é um manual à parte que ninguém abre e que não diz como se trabalha na sua casa. No RayGold ela está na própria tela: aperta-se ?, toca-se o campo que não se entende e aparece o que é, para que serve, o que colocar e o que vigiar. A empresa a ajusta ao seu jeito de trabalhar, cada pessoa anota as suas notas e uma IA responde com os dados reais daquela tela.',
  maqueta: {
    campo: 'Tipo de produto',
    valor: 'Conjunto',
    pista: 'Passe o mouse: o que tem ajuda se ilumina · Esc para sair',
    panelTitulo: 'Tipo de produto',
    queEs: 'O que é',
    queEsTexto: 'Como a peça é vendida: avulsa, em pares ou como conjunto. Define o estoque e o preço.',
    empresa: 'Escrito pela empresa',
    empresaTexto: 'Aqui, um conjunto é anel, brincos e pingente.',
    notas: 'Minhas notas · só você vê',
    notasTexto: 'Se for sob encomenda, perguntar antes à oficina.',
    pregunta: 'Pergunte à IA…',
  },
  pasosTitulo: 'Como se usa',
  pasos: [
    { tecla: '?', titulo: 'Aperte ? ou F1', texto: 'A tela entra em modo ajuda e não reage aos cliques: nada é gravado nem apagado sem querer.' },
    { tecla: '◎', titulo: 'Passe o mouse', texto: 'O que tem explicação se ilumina: o campo, o botão, a coluna ou o cartão.' },
    { tecla: '☝', titulo: 'Toque', texto: 'Abre-se o painel com o que é, para que serve, o que colocar e o que vigiar.' },
    { tecla: 'Esc', titulo: 'Saia com Esc', texto: 'A tela volta a funcionar como sempre.' },
  ],
  capasTitulo: 'Três camadas no mesmo painel',
  capas: [
    { capa: 'Camada 1', titulo: 'RayGold', texto: 'O que o programa faz com aquele dado: no preço, no estoque, na fabricação. Vem de um manual revisado, escrito lendo o próprio programa, e não da IA a cada clique, então nunca diz algo diferente do que o sistema faz.', quien: 'Todos veem' },
    { capa: 'Camada 2', titulo: 'A empresa', texto: 'Com o lápis, a empresa corrige ou completa qualquer explicação com o seu jeito de trabalhar. A partir daí é a explicação oficial, e cada empresa tem a sua.', quien: 'Todos na empresa veem' },
    { capa: 'Camada 3', titulo: 'Você', texto: 'As suas notas em cada campo e em cada botão: truques, casos, a quem perguntar. Se uma serve para todos, um botão a propõe à empresa.', quien: 'Só você vê' },
  ],
  iaTitulo: 'Uma IA que responde com os números de verdade',
  iaTexto:
    'Embaixo de cada explicação há uma caixa para perguntar o que o manual não cobre. A IA se apoia no manual, no que a empresa escreveu e nas suas notas e, nas telas de fabricação, vê os dados reais do que você tem aberto. Só consulta: não muda nada e não inventa números.',
  iaPreguntas: [
    { pregunta: 'Por que o Polimento sai a 26,54 a hora?', respuesta: 'Custo do ano da seção dividido pelas suas horas, com a parte fixa e a variável.' },
    { pregunta: 'De onde vêm os minutos desta linha?', respuesta: 'Da família do produto, da sua faixa de peso e da tabela de tempos-padrão.' },
    { pregunta: 'Por que «Trazer taxas» não trouxe nada?', respuesta: 'Porque as taxas do exercício estão em rascunho e precisam ser ativadas.' },
  ],
  iaNota: 'E só mostra o que cada um pode ver: os links para outras telas e os números de custos só aparecem para quem tem essas telas no seu menu.',
  ventajas: [
    { titulo: 'Menos treinamento', texto: 'A pessoa nova tem a explicação no lugar exato, com o jeito de trabalhar da empresa.' },
    { titulo: 'Menos erros', texto: 'Antes de clicar, sabe o que é gravado, o que é sobrescrito e o que não dá para desfazer.' },
    { titulo: 'Mais conhecimento', texto: 'O que cada um sabe fica no programa, e não vai embora com ele quando muda de emprego.' },
  ],
};

const ayuda: Record<Lang, AyudaTranslations> = { es, en, fr, ca, 'pt-br': ptbr };

export function getAyudaTranslations(lang: Lang): AyudaTranslations {
  return ayuda[lang] ?? es;
}
