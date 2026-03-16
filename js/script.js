/* =========================
CURSOR
========================= */

const cur = document.getElementById('cursor');
const trail = document.getElementById('cursor-trail');

let mx = 0, my = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;

  cur.style.left = mx + 'px';
  cur.style.top = my + 'px';

  setTimeout(() => {
    trail.style.left = mx + 'px';
    trail.style.top = my + 'px';
  }, 65);
});

document.querySelectorAll('button,.tab,.chip,.kpi-card,.sum-card,.card')
  .forEach(el => {

    el.addEventListener('mouseenter', () => {
      cur.style.width = '18px';
      cur.style.height = '18px';
      trail.style.width = '52px';
      trail.style.height = '52px';
    });

    el.addEventListener('mouseleave', () => {
      cur.style.width = '10px';
      cur.style.height = '10px';
      trail.style.width = '36px';
      trail.style.height = '36px';
    });

  });


/* =========================
FONDO COSMOS
========================= */

const canvas = document.getElementById('cosmos');
const ctx = canvas.getContext('2d');

let W, H;
let pts = [];

function resize() {
  W = canvas.width = innerWidth;
  H = canvas.height = innerHeight;
}

resize();

window.addEventListener('resize', () => {
  resize();
  init();
});

class P {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * W;
    this.y = Math.random() * H;
    this.vx = (Math.random() - .5) * .22;
    this.vy = (Math.random() - .5) * .22;
    this.r = Math.random() * 1.4 + .3;
    this.a = Math.random() * .65 + .1;
    this.gold = Math.random() < .65;
  }
}

function init() {
  pts = Array.from({ length: 130 }, () => new P());
}

init();

function drawConns() {
  for (let i = 0; i < pts.length; i++) {
    for (let j = i + 1; j < pts.length; j++) {

      const dx = pts[i].x - pts[j].x;
      const dy = pts[i].y - pts[j].y;

      const d = Math.sqrt(dx * dx + dy * dy);

      if (d < 115) {

        const a = ((115 - d) / 115) * .07;

        ctx.beginPath();
        ctx.moveTo(pts[i].x, pts[i].y);
        ctx.lineTo(pts[j].x, pts[j].y);
        ctx.strokeStyle = `rgba(212,168,67,${a})`;
        ctx.lineWidth = .5;
        ctx.stroke();

      }
    }
  }
}

function loop() {

  ctx.clearRect(0, 0, W, H);

  drawConns();

  pts.forEach(p => {

    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > W || p.y < 0 || p.y > H) {
      p.reset();
    }

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

    ctx.fillStyle = p.gold
      ? `rgba(212,168,67,${p.a})`
      : `rgba(74,159,255,${p.a})`;

    ctx.fill();

  });

  requestAnimationFrame(loop);

}

loop();


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

  const iv = setInterval(() => {

    s++;
    el.textContent = s;

    if (s >= t) {
      clearInterval(iv);
    }

  }, 1800 / t);

}

setTimeout(() => {
  document.querySelectorAll('[data-count]').forEach(animateCounter);
}, 1500);


/* =========================
TABS
========================= */

function switchTab(t) {

  document.querySelectorAll('.tab')
    .forEach((el, i) => el.classList.toggle('on', i === (t === 'auto' ? 0 : 1)));

  document.querySelectorAll('.panel')
    .forEach(el => el.classList.remove('on'));

  document.getElementById('panel-' + t).classList.add('on');

  document.getElementById('fa').style.display = t === 'auto' ? 'flex' : 'none';
  document.getElementById('fp').style.display = t === 'prod' ? 'flex' : 'none';

  aplicarFiltros();

  calcularEstados(t);
  calcularTotal(t);

  setTimeout(animateBars, 80);

}


/* =========================
FILTRO NIVEL
========================= */

let nivelActivo = 'all';

function fc(panel, lvl, btn) {

  nivelActivo = lvl;

  document.querySelectorAll('#panel-' + panel + ' .chip')
    .forEach(c => c.classList.remove('on'));

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

  document.querySelectorAll('.panel.on .card')
    .forEach(card => {

      const texto = card.innerText.toLowerCase();
      const area = card.querySelector('.c-area').innerText.toLowerCase();

      const okTexto = texto.includes(txt);

      const okGer =
        ger === 'all' ||
        area.includes(mapa[ger]);

      const okNivel =
        nivelActivo === 'all' ||
        card.dataset.lvl === nivelActivo;

      const show = okTexto && okGer && okNivel;

      card.style.display = show ? 'block' : 'none';

      if (show) cnt++;

    });

  document.getElementById('contadorResultados')
    .textContent = cnt ? cnt + " resultados" : "";

}

function buscaAvanzado() {
  aplicarFiltros();
}

function limpiarBusqueda() {

  document.getElementById('buscador').value = '';
  document.getElementById('filtroGerencia').value = 'all';

  nivelActivo = 'all';

  document.querySelectorAll('.chip')
    .forEach((c, i) => c.classList.toggle('on', i === 0));

  aplicarFiltros();

}


/* =========================
CARDS EXPAND
========================= */

function tc(btn) {

  const card = btn.closest('.card');

  const exp = card.classList.toggle('expanded');

  btn.textContent =
    exp ? '▲ Ocultar estado' : '▼ Ver estado detallado';

}


/* =========================
BARRAS PROGRESO
========================= */

function animateBars() {

  document.querySelectorAll('.panel.on .bar')
    .forEach(bar => {

      const w = bar.dataset.w;

      bar.style.width = '0%';

      requestAnimationFrame(() => {

        requestAnimationFrame(() => {
          bar.style.width = w + '%';
        });

      });

    });

}


/* =========================
ANIMACIONES SCROLL
========================= */

const obs = new IntersectionObserver(entries => {

  entries.forEach(e => {

    if (e.isIntersecting) {
      e.target.classList.add('visible');
      obs.unobserve(e.target);
    }

  });

}, { threshold: .07 });

function observeReveal() {

  document.querySelectorAll('.reveal,.sec-hd')
    .forEach((el, i) => {

      el.style.transitionDelay = (i * .04) + 's';

      obs.observe(el);

    });

}
const iniciativas = [

  { nombre: "Desarrollo automatizado de herramientas Comware", tipo: "auto", gerencia: "Soluciones Financieras", avance: 15 },
  { nombre: "Asistente SWAT", tipo: "auto", gerencia: "Soluciones Financieras", avance: 40 },
  { nombre: "Portal Integrado de Reportes Mensuales y Anuales", tipo: "auto", gerencia: "Compras y Logística", avance: 20 },
  { nombre: "Planificación digital y control de cargas operativas", tipo: "auto", gerencia: "Servicios Generales", avance: 55 },
  { nombre: "Canal móvil de solicitudes administrativas", tipo: "auto", gerencia: "Servicios Generales", avance: 70 },
  { nombre: "Automatización Matriz Compromiso Contractual", tipo: "auto", gerencia: "Gobierno y Aseguramiento", avance: 90 },
  { nombre: "Automatización Auditorias Casos", tipo: "auto", gerencia: "Gobierno y Aseguramiento", avance: 40 },
  { nombre: "Enlace Cuentas por Pagar Invoway Sap", tipo: "auto", gerencia: "Contabilidad", avance: 60 },
  { nombre: "Identificación Responsabilidades tributarias Municipios", tipo: "auto", gerencia: "Contabilidad", avance: 35 },
  { nombre: "Chatbot Pág Web Omnicanal", tipo: "auto", gerencia: "Mercadeo", avance: 95 },
  { nombre: "Presentación de informes gerenciales", tipo: "auto", gerencia: "Mercadeo", avance: 30 },
  { nombre: "Indicadores Gestión Procesos", tipo: "auto", gerencia: "Gobierno y Aseguramiento", avance: 40 },
  { nombre: "Evaluación Financiera de Oportunidades", tipo: "auto", gerencia: "Soluciones Financieras", avance: 65 },
  { nombre: "Informe Flujo de Caja consolidado", tipo: "auto", gerencia: "Soluciones Financieras", avance: 20 },

  { nombre: "Ecosistema Digital 360", tipo: "auto", gerencia: "Contabilidad", avance: 15 },
  { nombre: "Informe Inteligente Alcances", tipo: "auto", gerencia: "Arquitectura", avance: 12 },
  { nombre: "Optimización Reclutamiento", tipo: "auto", gerencia: "Soluciones Financieras", avance: 12 },
  { nombre: "Liquidaciones Nómina", tipo: "auto", gerencia: "Contabilidad", avance: 15 },

  { nombre: "Automatización Radicación Incapacidades", tipo: "prod", gerencia: "Soluciones Financieras", avance: 15 },
  { nombre: "Onboarding Digital Carnets", tipo: "prod", gerencia: "Soluciones Financieras", avance: 12 },
  { nombre: "Afiliaciones Laborales", tipo: "prod", gerencia: "Soluciones Financieras", avance: 12 },
  { nombre: "Estimativo Salarial", tipo: "prod", gerencia: "Arquitectura", avance: 10 },
  { nombre: "Lectura análisis pliegos", tipo: "prod", gerencia: "Arquitectura", avance: 10 },
  { nombre: "Automatización Legalizaciones", tipo: "prod", gerencia: "Contabilidad", avance: 15 },
  { nombre: "Dimensionamiento RH", tipo: "prod", gerencia: "Arquitectura", avance: 30 },
  { nombre: "Estimativo Salarial Inteligente", tipo: "prod", gerencia: "Arquitectura", avance: 8 },
  { nombre: "Dashboard Activos", tipo: "prod", gerencia: "Compras y Logística", avance: 18 },
  { nombre: "Cartilla Bienvenida Personal", tipo: "prod", gerencia: "Gestión Humana", avance: 20 },
  { nombre: "Descriptivos Técnicos Base", tipo: "prod", gerencia: "Arquitectura", avance: 20 },
  { nombre: "Plataforma Clientes Prospectos", tipo: "prod", gerencia: "Mercadeo", avance: 40 },
  { nombre: "Flujos Contables Legalizaciones", tipo: "prod", gerencia: "Soluciones Financieras", avance: 10 }

];

function toggleGraficas() {

  const graficas = document.getElementById("seccionGraficas");
  const btn = document.getElementById("btnGraficas");

  if (graficas.style.display === "none") {

    graficas.style.display = "block";
    btn.innerText = "📉Ocultar gráficas";

  } else {

    graficas.style.display = "none";
    btn.innerText = "📊Ver gráficas";

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


/* =========================
CANTIDAD DE INICIATIVAS
========================= */

const conteoGerencias = {};

iniciativas.forEach(i => {

  if (!conteoGerencias[i.gerencia]) {
    conteoGerencias[i.gerencia] = 0;
  }

  conteoGerencias[i.gerencia]++;

});

function calcularTotal(panel) {

  const total = iniciativas.filter(i => i.tipo === panel).length;

  document.getElementById("estadoTotal").innerText = total;

}

calcularTotal();

const ordenCantidad = Object.entries(conteoGerencias)
  .sort((a, b) => b[1] - a[1]);

const labels = ordenCantidad.map(g => g[0]);
const data = ordenCantidad.map(g => g[1]);
const backgroundColors = labels.map(g => colores[g]);


/* =========================
GRAFICA 1
========================= */

Chart.register(ChartDataLabels);

const ctxGrafica = document
  .getElementById("graficaIniciativas")
  .getContext("2d");

new Chart(ctxGrafica, {

  type: "bar",

  data: {
    labels: labels,
    datasets: [{
      label: "Cantidad de iniciativas",
      data: data,
      backgroundColor: backgroundColors
    }]
  },

  options: {

    responsive: true,

    plugins: {

      legend: { display: false },

      datalabels: {
        color: "#fff",
        anchor: "end",
        align: "top",
        font: { size: 14, weight: "bold" }
      }

    },

    scales: {
      y: { beginAtZero: true }
    }

  }

});


/* =========================
PROMEDIO AVANCE GERENCIA
========================= */

const avanceGerencias = {};

iniciativas.forEach(i => {

  if (!avanceGerencias[i.gerencia]) {

    avanceGerencias[i.gerencia] = { total: 0, cantidad: 0 };

  }

  avanceGerencias[i.gerencia].total += i.avance;
  avanceGerencias[i.gerencia].cantidad++;

});


const avanceOrdenado = Object.entries(avanceGerencias)
  .map(([g, v]) => [g, v.total / v.cantidad])
  .sort((a, b) => b[1] - a[1]);

const labelsAvance = avanceOrdenado.map(g => g[0]);
const dataAvance = avanceOrdenado.map(g => g[1].toFixed(1));


/* =========================
GRAFICA 2
========================= */

const ctxAvance = document
  .getElementById("graficaAvanceGerencia")
  .getContext("2d");

new Chart(ctxAvance, {

  type: "bar",

  data: {
    labels: labelsAvance,
    datasets: [{
      label: "Promedio avance %",
      data: dataAvance,
      backgroundColor: labelsAvance.map(g => colores[g])
    }]
  },

  options: {

    responsive: true,

    plugins: {

      legend: { display: false },

      datalabels: {
        color: "#fff",
        anchor: "end",
        align: "top",
        formatter: value => value + "%",
        font: { weight: "bold" }
      }

    },

    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }

  },

  plugins: [ChartDataLabels]

});

/* =========================
AVANCE GLOBAL PORTAFOLIO
========================= */

function calcularAvanceGlobal() {

  let total = 0;

  iniciativas.forEach(i => {
    total += i.avance;
  });

  const promedio = Math.round(total / iniciativas.length);

  document.getElementById("avanceGlobal").innerText = promedio + "%";

  const barra = document.getElementById("barraGlobal");

  setTimeout(() => {
    barra.style.width = promedio + "%";
  }, 400);

}

calcularAvanceGlobal();
/* =========================
ESTADOS DEL PORTAFOLIO
========================= */

function calcularEstados(panel) {

  let levantamiento = 0;
  let desarrollo = 0;
  let validacion = 0;
  let espera = 0;
  let produccion = 0;

  iniciativas
    .filter(i => i.tipo === panel)
    .forEach(i => {

      if (i.avance < 30) levantamiento++;

      else if (i.avance <= 50) desarrollo++;

      else if (i.avance <= 80) validacion++;

      else if (i.avance <= 100) espera++;

      else produccion++;

    });

  document.getElementById("estadoAnalisis").innerText = levantamiento;
  document.getElementById("estadoDesarrollo").innerText = desarrollo;
  document.getElementById("estadoValidacion").innerText = validacion;
  document.getElementById("estadoEspera").innerText = espera;
  document.getElementById("estadoProduccion").innerText = produccion;

}

calcularEstados("auto");
calcularTotal("auto");

function animarEstados() {

  const total = iniciativas.length;

  const a = parseInt(document.getElementById("estadoAnalisis").innerText);
  const d = parseInt(document.getElementById("estadoDesarrollo").innerText);
  const v = parseInt(document.getElementById("estadoValidacion").innerText);
  const e = parseInt(document.getElementById("estadoEspera").innerText);
  const p = parseInt(document.getElementById("estadoProduccion").innerText);

  document.getElementById("barTotal").style.width = "100%";
  document.getElementById("barAnalisis").style.width = (a / total * 100) + "%";
  document.getElementById("barDev").style.width = (d / total * 100) + "%";
  document.getElementById("barValidacion").style.width = (v / total * 100) + "%";
  document.getElementById("barEspera").style.width = (e / total * 100) + "%";
  document.getElementById("barProd").style.width = (p / total * 100) + "%";

}

setTimeout(animarEstados, 400);

window.addEventListener('load', () => {

  document.querySelectorAll('.card')
    .forEach((c, i) => c.style.animationDelay = (i * .04) + 's');

  observeReveal();

});