
const cur = document.getElementById('cursor');
const trail = document.getElementById('cursor-trail');
let mx = 0, my = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cur.style.left = mx + 'px'; cur.style.top = my + 'px';
  setTimeout(() => { trail.style.left = mx + 'px'; trail.style.top = my + 'px'; }, 65);
});

document.querySelectorAll('button,.tab,.chip,.kpi-card,.sum-card,.card').forEach(el => {
  el.addEventListener('mouseenter', () => { cur.style.width = '18px'; cur.style.height = '18px'; trail.style.width = '52px'; trail.style.height = '52px'; });
  el.addEventListener('mouseleave', () => { cur.style.width = '10px'; cur.style.height = '10px'; trail.style.width = '36px'; trail.style.height = '36px'; });
});

/* =========================
FONDO
========================= */

const canvas = document.getElementById('cosmos');
const ctx = canvas.getContext('2d');
let W, H, pts = [];

function resize() { W = canvas.width = innerWidth; H = canvas.height = innerHeight; }
resize();
window.addEventListener('resize', () => { resize(); init(); });

class P {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * W; this.y = Math.random() * H;
    this.vx = (Math.random() - .5) * .22; this.vy = (Math.random() - .5) * .22;
    this.r = Math.random() * 1.4 + .3; this.a = Math.random() * .65 + .1;
    this.gold = Math.random() < .65;
  }
}

function init() { pts = Array.from({ length: 130 }, () => new P()); }
init();

function drawConns() {
  for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
    const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.sqrt(dx * dx + dy * dy);
    if (d < 115) { const a = ((115 - d) / 115) * .07; ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.strokeStyle = `rgba(212,168,67,${a})`; ctx.lineWidth = .5; ctx.stroke(); }
  }
}

function loop() {
  ctx.clearRect(0, 0, W, H); drawConns();
  pts.forEach(p => {
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0 || p.x > W || p.y < 0 || p.y > H) p.reset();
    ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.gold ? `rgba(212,168,67,${p.a})` : `rgba(74,159,255,${p.a})`;
    ctx.fill();
  });
  requestAnimationFrame(loop);
}
loop();

/* =========================
RENDER TARJETAS DESDE DATA
========================= */
function getStatusReal(ini) {

  const id = ini.id;

  // 🔥 CASOS ESPECIALES (PRIORIDAD ALTA)
  if (id.includes("IN-35") || id.includes("IN-61")) return "❌ Cancelada";
  if (id.includes("IN-59")) return "⏸️ Pausada (IVANTI)";
  if (id.includes("IN-52")) return "⚠️ En pausa (OCR NOVA)";
  if (id.includes("IN-57")) return "🚨 Bloqueada (Aranda)";
  if (id.includes("IN-111")) return "🚀 Programa en ejecución";

  // 🔥 PRODUCCIÓN
  if (ini.avance === 100) return "✅ Producción";

  // 🔥 PRE-PRODUCCIÓN
  if (ini.avance >= 90) return "🚀 Pre-producción";

  // 🔥 EJECUCIÓN
  if (ini.avance >= 60) return "⚙️ En ejecución";

  // 🔥 DESARROLLO
  if (ini.avance >= 30) return "🧩 En desarrollo";

  // 🔥 LEVANTAMIENTO
  return "📊 Levantamiento";
}
function getStatusClass(ini) {
  const s = getStatusReal(ini);

  if (s.includes("Producción")) return "st-prod";
  if (s.includes("Pre-producción")) return "st-pre";
  if (s.includes("ejecución")) return "st-ejec";
  if (s.includes("desarrollo")) return "st-dev";
  if (s.includes("Levantamiento")) return "st-lev";
  if (s.includes("Pausada")) return "st-pause";
  if (s.includes("Bloqueada")) return "st-block";
  if (s.includes("Cancelada")) return "st-cancel";

  return "";
}
function renderCard(ini) {
  const barClass = { r: 'br', o: 'bo', y: 'by', g: 'bg' }[ini.nivel];

  const alertHTML = ini.alerta
    ? `<div class="c-alert ${ini.alerta.tipo}">${ini.alerta.texto}</div>` : '';

  const tagsHTML = (ini.tags || []).map(t => `<span class="tag">${t}</span>`).join('');

  const doneHTML = (ini.statusDone || []).map(s =>
    `<div class="s-item done"><span class="s-ico">✔</span>${s}</div>`).join('');

  const todoHTML = (ini.statusTodo || []).map(s =>
    `<div class="s-item todo"><span class="s-ico">⏳</span>${s}</div>`).join('');

  return `
    <div class="card t-${ini.nivel}" data-lvl="${ini.nivel}">
      <div class="cg"></div>
      <div class="card-top">
        <span class="c-id">${ini.id}<br>${ini.gerenciaLabel}</span>
        <span class="c-pri ${ini.prioridadClass}">${ini.prioridad}</span>
      </div>
      <div class="c-title">${ini.titulo}</div>
      <div class="c-status-badge ${getStatusClass(ini)}">
      ${getStatusReal(ini)}
      </div>
      <div>
      -
      </div>

      <div class="c-area">${ini.area}</div>
      <div class="c-prog">
        <div class="c-prog-head">
          <span class="c-prog-lbl">Avance</span>
          <span class="c-prog-pct">${ini.avance}%</span>
        </div>
        <div class="bar-bg">
          <div class="bar ${barClass}" data-w="${ini.avance}"></div>
        </div>
      </div>
      <div class="c-tags">${tagsHTML}</div>
      ${alertHTML}
      <button class="c-expand" onclick="tc(this)">▼ Ver estado detallado</button>
      <div class="c-status">${doneHTML}${todoHTML}</div>
      <div class="c-foot">
        <div class="c-who">
          <div class="avatar">${ini.developer.iniciales}</div>${ini.developer.nombre}
        </div>
        <span class="c-imp ${ini.impactoClass}">${ini.impacto}</span>
      </div>
    </div>`;
}
function calcularKPIs() {

  const total = INICIATIVAS.length;

  const automatizacion = INICIATIVAS.filter(i => i.tipo === 'auto').length;

  const producto = INICIATIVAS.filter(i => i.tipo === 'prod').length;

  const casiProduccion = INICIATIVAS.filter(i => i.avance >= 80 && i.avance < 100).length;

  const ejecucionActiva = INICIATIVAS.filter(i => i.avance === 100).length;

  const kpis = document.querySelectorAll('.kpi-n');

  kpis[0].innerText = total;
  kpis[1].innerText = automatizacion;
  kpis[2].innerText = producto;
  kpis[3].innerText = casiProduccion;
  kpis[4].innerText = ejecucionActiva;

}
function renderAllCards() {
  // Mapeo: panel-tipo · nivel → id del grid en el HTML
  const grids = {
    'auto-r': 'grid-auto-r',
    'auto-o': 'grid-auto-o',
    'auto-y': 'grid-auto-y',
    'auto-g': 'grid-auto-g',
    'auto-done': 'grid-auto-done',

    'prod-r': 'grid-prod-r',
    'prod-o': 'grid-prod-o',
    'prod-g': 'grid-prod-g',
    'prod-done': 'grid-prod-done',
  };

  // Limpiar grids
  Object.values(grids).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = '';
  });

  // Poblar cada grid
  INICIATIVAS.forEach(ini => {

    // 👇 SI ESTÁ FINALIZADA
    if (ini.avance === 100) {
      const gridId = `${ini.tipo}-done`;
      const grid = document.getElementById(`grid-${gridId}`);
      if (grid) grid.insertAdjacentHTML('beforeend', renderCard(ini));
      return;
    }

    const key = `${ini.tipo}-${ini.nivel}`;
    const gridId = grids[key];
    if (!gridId) return;

    const grid = document.getElementById(gridId);
    if (!grid) return;

    grid.insertAdjacentHTML('beforeend', renderCard(ini));
  });

  // Reasignar eventos hover al cursor (las nuevas tarjetas)
  document.querySelectorAll('.card').forEach(el => {
    el.addEventListener('mouseenter', () => { cur.style.width = '18px'; cur.style.height = '18px'; trail.style.width = '52px'; trail.style.height = '52px'; });
    el.addEventListener('mouseleave', () => { cur.style.width = '10px'; cur.style.height = '10px'; trail.style.width = '36px'; trail.style.height = '36px'; });
  });
}

/* =========================
INTRO + KPIs
========================= */

setTimeout(() => {
  document.getElementById('intro').classList.add('gone');
  animateBars();
}, 2700);

function animateCounter(el) {
  const t = parseInt(el.dataset.count);
  if (!t) return;
  let s = 0;
  const iv = setInterval(() => { s++; el.textContent = s; if (s >= t) clearInterval(iv); }, 1800 / t);
}

setTimeout(() => { document.querySelectorAll('[data-count]').forEach(animateCounter); }, 1500);

/* =========================
TABS
========================= */

function switchTab(t) {
  document.querySelectorAll('.tab').forEach((el, i) => el.classList.toggle('on', i === (t === 'auto' ? 0 : 1)));
  document.querySelectorAll('.panel').forEach(el => el.classList.remove('on'));
  document.getElementById('panel-' + t).classList.add('on');

  document.getElementById('fa').style.display = t === 'auto' ? 'flex' : 'none';
  document.getElementById('fp').style.display = t === 'prod' ? 'flex' : 'none';

  aplicarFiltros();
  calcularEstados(t);
  calcularTotal(t);
  renderBarraTop(t);
  setTimeout(animateBars, 80);
}

/* =========================
FILTRO NIVEL
========================= */

let nivelActivo = 'all';

function fc(panel, lvl, btn) {
  nivelActivo = lvl;
  document.querySelectorAll('#panel-' + panel + ' .chip').forEach(c => c.classList.remove('on'));
  btn.classList.add('on');
  aplicarFiltros();
}

/* =========================
BUSCADOR + GERENCIA
========================= */

const mapa = {
  soluciones: 'soluciones financieras',
  compras: 'compras',
  servicios: 'servicios generales',
  aseguramiento: 'aseguramiento',
  contabilidad: 'contabilidad',
  mercadeo: 'mercadeo',
  gestion: 'gestion humana',
  arquitectura: 'arquitectura'
};

function aplicarFiltros() {
  const txt = document.getElementById('buscador').value.toLowerCase();
  const ger = document.getElementById('filtroGerencia').value;
  let cnt = 0;

  document.querySelectorAll('.panel.on .card').forEach(card => {
    const texto = card.innerText.toLowerCase();
    const area = card.querySelector('.c-area').innerText.toLowerCase();
    const okTexto = texto.includes(txt);
    const okGer = ger === 'all' || area.includes(mapa[ger]);
    const okNivel = nivelActivo === 'all' || card.dataset.lvl === nivelActivo;
    const show = okTexto && okGer && okNivel;
    card.style.display = show ? 'block' : 'none';
    if (show) cnt++;
  });

  document.getElementById('contadorResultados').textContent = cnt ? cnt + ' resultados' : '';
}

function buscaAvanzado() { aplicarFiltros(); }

function limpiarBusqueda() {
  document.getElementById('buscador').value = '';
  document.getElementById('filtroGerencia').value = 'all';
  nivelActivo = 'all';
  document.querySelectorAll('.chip').forEach((c, i) => c.classList.toggle('on', i === 0));
  aplicarFiltros();
}

/* =========================
CARDS EXPAND
========================= */

function tc(btn) {
  const card = btn.closest('.card');
  const exp = card.classList.toggle('expanded');
  btn.textContent = exp ? '▲ Ocultar estado' : '▼ Ver estado detallado';
}

/* =========================
BARRAS PROGRESO
========================= */

function animateBars() {
  document.querySelectorAll('.panel.on .bar').forEach(bar => {
    const w = bar.dataset.w;
    bar.style.width = '0%';
    requestAnimationFrame(() => requestAnimationFrame(() => { bar.style.width = w + '%'; }));
  });
}

/* =========================
ANIMACIONES SCROLL
========================= */

const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
}, { threshold: .07 });

function observeReveal() {
  document.querySelectorAll('.reveal,.sec-hd').forEach((el, i) => {
    el.style.transitionDelay = (i * .04) + 's';
    obs.observe(el);
  });
}

/* =========================
DATOS PARA GRÁFICAS
(se derivan automáticamente de INICIATIVAS)
========================= */

const iniciativas = INICIATIVAS.map(i => ({
  nombre: i.titulo,
  tipo: i.tipo,
  gerencia: i.gerencia,
  avance: i.avance
}));

function toggleGraficas() {
  const graficas = document.getElementById('seccionGraficas');
  const btn = document.getElementById('btnGraficas');
  if (graficas.style.display === 'none') {
    graficas.style.display = 'block'; btn.innerText = '📉Ocultar gráficas';
  } else {
    graficas.style.display = 'none'; btn.innerText = '📊Ver gráficas';
  }
}

const colores = {
  "Soluciones Financieras": "#4a9fff",
  "Contabilidad": "#d4a843",
  "Mercadeo": "#00d4ff",
  "Gobierno y Aseguramiento": "#22cc88",
  "Servicios Generales": "#f07830",
  "Compras y Logística": "#ff5c8a",
  "Arquitectura": "#8c7bff",
  "Gestión Humana": "#9aa8c4"
};

/* CANTIDAD DE INICIATIVAS */
const conteoGerencias = {};
iniciativas.forEach(i => { conteoGerencias[i.gerencia] = (conteoGerencias[i.gerencia] || 0) + 1; });

function calcularTotal(panel) {
  const total = iniciativas.filter(i => !panel || i.tipo === panel).length;
  document.getElementById('estadoTotal').innerText = panel ? iniciativas.filter(i => i.tipo === panel).length : total;
}

const ordenCantidad = Object.entries(conteoGerencias).sort((a, b) => b[1] - a[1]);
const labels = ordenCantidad.map(g => g[0]);
const data = ordenCantidad.map(g => g[1]);
const backgroundColors = labels.map(g => colores[g]);

/* GRAFICA 1 */
Chart.register(ChartDataLabels);
new Chart(document.getElementById('graficaIniciativas').getContext('2d'), {
  type: 'bar',
  data: { labels, datasets: [{ label: 'Cantidad de iniciativas', data, backgroundColor: backgroundColors }] },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      datalabels: { color: '#fff', anchor: 'end', align: 'top', font: { size: 14, weight: 'bold' } }
    },
    scales: { y: { beginAtZero: true } }
  }
});

/* PROMEDIO AVANCE GERENCIA */
const avanceGerencias = {};
iniciativas.forEach(i => {
  if (!avanceGerencias[i.gerencia]) avanceGerencias[i.gerencia] = { total: 0, cantidad: 0 };
  avanceGerencias[i.gerencia].total += i.avance;
  avanceGerencias[i.gerencia].cantidad++;
});
const avanceOrdenado = Object.entries(avanceGerencias)
  .map(([g, v]) => [g, v.total / v.cantidad]).sort((a, b) => b[1] - a[1]);
const labelsAvance = avanceOrdenado.map(g => g[0]);
const dataAvance = avanceOrdenado.map(g => g[1].toFixed(1));

/* GRAFICA 2 */
new Chart(document.getElementById('graficaAvanceGerencia').getContext('2d'), {
  type: 'bar',
  data: { labels: labelsAvance, datasets: [{ label: 'Promedio avance %', data: dataAvance, backgroundColor: labelsAvance.map(g => colores[g]) }] },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      datalabels: { color: '#fff', anchor: 'end', align: 'top', formatter: v => v + '%', font: { weight: 'bold' } }
    },
    scales: { y: { beginAtZero: true, max: 100 } }
  },
  plugins: [ChartDataLabels]
});

/* =========================
AVANCE GLOBAL PORTAFOLIO
========================= */

function calcularAvanceGlobal() {
  const promedio = Math.round(iniciativas.reduce((s, i) => s + i.avance, 0) / iniciativas.length);
  document.getElementById('avanceGlobal').innerText = promedio + '%';
  setTimeout(() => { document.getElementById('barraGlobal').style.width = promedio + '%'; }, 400);
}
calcularAvanceGlobal();

/* =========================
ESTADOS DEL PORTAFOLIO
========================= */

function calcularEstados(panel) {
  let levantamiento = 0, desarrollo = 0, validacion = 0, espera = 0, produccion = 0;
  iniciativas.filter(i => i.tipo === panel).forEach(i => {
    if (i.avance < 30) levantamiento++;
    else if (i.avance <= 50) desarrollo++;
    else if (i.avance <= 80) validacion++;
    else if (i.avance <= 99) espera++;
    else produccion++;
  });
  document.getElementById('estadoAnalisis').innerText = levantamiento;
  document.getElementById('estadoDesarrollo').innerText = desarrollo;
  document.getElementById('estadoValidacion').innerText = validacion;
  document.getElementById('estadoEspera').innerText = espera;
  document.getElementById('estadoProduccion').innerText = produccion;
}



function animarEstados() {
  const total = iniciativas.length;
  const a = +document.getElementById('estadoAnalisis').innerText;
  const d = +document.getElementById('estadoDesarrollo').innerText;
  const v = +document.getElementById('estadoValidacion').innerText;
  const e = +document.getElementById('estadoEspera').innerText;
  const p = +document.getElementById('estadoProduccion').innerText;
  document.getElementById('barTotal').style.width = '100%';
  document.getElementById('barAnalisis').style.width = (a / total * 100) + '%';
  document.getElementById('barDev').style.width = (d / total * 100) + '%';
  document.getElementById('barValidacion').style.width = (v / total * 100) + '%';
  document.getElementById('barEspera').style.width = (e / total * 100) + '%';
  document.getElementById('barProd').style.width = (p / total * 100) + '%';
}
setTimeout(animarEstados, 400);

/* =========================
% POR ÁREA
========================= */
function renderBarraTop(panel = 'auto') {

  const data = INICIATIVAS.filter(i => i.tipo === panel);
  if (!data.length) return;

  const promedio = Math.round(
    data.reduce((s, i) => s + i.avance, 0) / data.length
  );

  const barra = document.getElementById('barraTop');
  const texto = document.getElementById('porcentajeTop');
  const icono = document.getElementById('iconoTipo');

  // limpiar clases
  barra.classList.remove('barra-auto', 'barra-prod');

  if (panel === 'auto') {
    barra.classList.add('barra-auto');
    icono.innerText = '⚙';
  } else {
    barra.classList.add('barra-prod');
    icono.innerText = '🚀';
  }

  texto.innerText = promedio + '%';

  setTimeout(() => {
    barra.style.width = promedio + '%';
  }, 100);
}


calcularEstados('auto');
calcularTotal('auto');

/* =========================
INIT — renderizar tarjetas y arrancar animaciones
========================= */

window.addEventListener('load', () => {
  renderAllCards();
  calcularKPIs();
  document.querySelectorAll('.card').forEach((c, i) => c.style.animationDelay = (i * .04) + 's');
  observeReveal();
  setTimeout(animateBars, 300);
  renderBarraTop('auto');
});