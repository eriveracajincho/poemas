const poems = [
  {
    title: "Lo que nunca dije",
    body:
`Aprendí tu nombre de memoria
antes de aprender a nombrar esto que siento.
Te miro hablar y guardo cada gesto
como quien guarda flores en un libro,
sabiendo que algún día se harán polvo
pero queriendo que duren, de todos modos.

Nunca te lo dije.
Tal vez porque decirlo
era arriesgar el único lugar
donde todavía cabía yo, cerca de ti:
el silencio.`
  },
  {
    title: "Geografía imposible",
    body:
`Tú vives en un país que no me nombra,
uno donde mi voz no tiene mapa.
Yo aprendí tu idioma sin que me lo pidieras,
memoricé tus calles, tus horarios,
el modo en que te ríes de costado.

Pero hay fronteras que no se cruzan
por más que uno insista con el cuerpo.
Y yo me quedo aquí, del otro lado,
saludando un país que no responde.`
  },
  {
    title: "Inventario",
    body:
`Tengo una lista de las cosas tuyas
que no me pertenecen y ya extraño:
tu manera de decir mi nombre a medias,
el café que pediste sin pensarlo,
una foto en la que ni siquiera miras
hacia donde estoy yo, parado, esperando.

Voy guardando estos restos como quien junta
las monedas que sobran de un viaje que no hizo.
No sé para qué sirven.
Solo sé que son míos, aunque tú no lo seas.`
  },
  {
    title: "Lo que el amor no correspondido enseña",
    body:
`Que se puede querer sin ser querido
y seguir de pie, aunque cueste.
Que no todo lo que se siembra
está destinado a dar cosecha en la misma tierra.

Que hay amores que solo sirven
para enseñarnos a amar mejor al siguiente,
como un idioma que se aprende
para nunca volver a usarlo con quien lo enseñó.

Duele, sí.
Pero también, de a poco,
deja algo parecido a la sabiduría.`
  },
  {
    title: "Despedida",
    body:
`Me voy a ir soltando tu nombre
como quien suelta una cuerda
que ya no sostiene nada del otro lado.

No te guardo rencor,
ni siquiera el peso entero de la pena:
solo esto, un gracias pequeño
por haber sido el motivo
de tantos poemas que nunca leerás.

Que te vaya bien, donde sea que vayas.
Yo me quedo aquí,
aprendiendo a caminar
sin esperarte en cada esquina.

Adiós.`
  }
];

let current = 0;
const titleEl = document.getElementById('title');
const bodyEl = document.getElementById('body');
const counterEl = document.getElementById('counter');
const dotsEl = document.getElementById('dots');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const stageEl = document.querySelector('.stage');

function buildDots() {
  dotsEl.innerHTML = '';
  poems.forEach((p, i) => {
    const d = document.createElement('div');
    d.className = 'dot' + (i === poems.length - 1 ? ' farewell-dot' : '');
    dotsEl.appendChild(d);
  });
}

function render(animate) {
  const isLast = current === poems.length - 1;
  stageEl.classList.toggle('farewell', isLast);
  counterEl.textContent = (isLast ? 'despedida' : (current + 1) + ' de ' + (poems.length - 1));

  function paint() {
    titleEl.textContent = poems[current].title;
    bodyEl.textContent = poems[current].body;
    [...dotsEl.children].forEach((d, i) => d.classList.toggle('active', i === current));
    prevBtn.disabled = current === 0;
    nextBtn.textContent = isLast ? 'de nuevo ↺' : 'siguiente →';
    bodyEl.classList.remove('fading');
    titleEl.style.opacity = 1;
  }

  if (animate) {
    bodyEl.classList.add('fading');
    titleEl.style.opacity = 0;
    setTimeout(paint, 350);
  } else {
    paint();
  }
}

prevBtn.addEventListener('click', () => {
  if (current > 0) { current--; render(true); }
});
nextBtn.addEventListener('click', () => {
  if (current < poems.length - 1) { current++; render(true); }
  else { current = 0; render(true); }
});

buildDots();
render(false);

// pétalos flotantes
const petalContainer = document.getElementById('petals');
const symbols = ['❀', '♡', '❁'];
for (let i = 0; i < 14; i++) {
  const p = document.createElement('span');
  p.className = 'petal';
  p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  p.style.left = Math.random() * 100 + '%';
  p.style.fontSize = (12 + Math.random() * 14) + 'px';
  p.style.animationDuration = (10 + Math.random() * 14) + 's';
  p.style.animationDelay = (Math.random() * 12) + 's';
  petalContainer.appendChild(p);
}