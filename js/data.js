
const INICIATIVAS = [

    // ╔═══════════════════════════════════════════════════╗
    //   AUTOMATIZACIÓN  ·  NIVEL 1  🔴  (Rojo)
    // ╚═══════════════════════════════════════════════════╝

    {
        id: "AUT-1115",
        gerenciaLabel: "Arquitectura · CC 10695",
        tipo: "auto",
        nivel: "r",
        prioridad: "Muy Alta",
        prioridadClass: "pr-muy-alta",
        titulo: "Informe Inteligente — Resumen de Alcances (RFP)",
        area: "Arquitectura / Tercerización — Jefrey Roman",
        avance: 18,
        tags: ["Formulario IA", "Word/PDF Export", "SharePoint", "Power App"],
        alerta: null,
        statusDone: [
            "Problema operativo identificado en análisis manual de pliegos y RFP",
            "Alcance de la solución definido (formulario inteligente)",
            "Flujo funcional de la herramienta conceptualizado",
            "Sistemas involucrados identificados (App web / Power App, SharePoint, generación Word/PDF)",
            "Reunión agendada para levantamiento de información con el área solicitante"
        ],

        statusTodo: [
            "Realizar levantamiento detallado de preguntas guía con Arquitectura",
            "Definir modelo de clasificación técnica del alcance",
            "Diseñar interfaz del formulario inteligente",
            "Desarrollar prototipo inicial (MVP)",
            "Realizar pruebas piloto con RFP reales",
            "Implementar almacenamiento y generación automática de documentos (Word/PDF)"
        ],
        developer: { iniciales: "JR", nombre: "J. Roman" },
        impacto: "Muy Alto",
        impactoClass: "imp-ma",
        gerencia: "Arquitectura"
    },

    {
        id: "IN-130",
        gerenciaLabel: "Contabilidad · CC 10687",
        tipo: "auto",
        nivel: "r",
        prioridad: "Muy Alta",
        prioridadClass: "pr-critica",
        titulo: "Ecosistema Digital 360 — Transformación Operativa Integrada",
        area: "Contabilidad y Control Interno — Jefrey Román",
        avance: 30,
        tags: ["SAP", "Aranda", "Jira", "Invoway", "Nova", "IA", "Portales"],
        alerta: {
            tipo: "ar",
            texto: "🔴 Iniciativa más grande del portafolio. Integra 5 sistemas + portales internos + IA. Empezar de inmediato."
        },
        statusDone: [
            "Problema identificado",
            "Sistemas definidos",
            "Levantamiento inicial",
            "Clasificación de ideas",
            "Reunión ampliada"
        ],
        statusTodo: [
            "Levantamiento por áreas",
            "Arquitectura",
            "Modelo de datos",
            "Desarrollo"
        ],
        developer: { iniciales: "JR", nombre: "J. Roman" },
        impacto: "Muy Alto",
        impactoClass: "imp-ma",
        gerencia: "Contabilidad"
    },

    {
        id: "IN-65 · IN-699",
        gerenciaLabel: "Soluciones Financieras · CC 10729",
        tipo: "auto",
        nivel: "r",
        prioridad: "Muy Alta",
        prioridadClass: "pr-critica",
        titulo: "Asistente SWAT — Plataforma Centralizada de IA Interna",
        area: "Soluciones Financieras — Nicolás Durán",
        avance: 50,
        tags: ["4 Asistentes IA", "Arquitectura Modular", "APIs ERP", "Transversal"],
        alerta: {
            tipo: "ar",
            texto: "🔴 Impacto transversal. 4 asistentes: Transversal, Arquitectura, Contabilidad y RRHH."
        },
        statusDone: [
            "Arquitectura conceptual definida",
            "Asistente de arquitectura desarrollado",
            "Integración del asistente en NOVA completada",
            "Interfaz interactiva implementada",
            "Validación inicial con el área solicitante",
            "Levantamiento de requerimientos del asistente de gestión humana"
        ],
        statusTodo: [
            "Ajustes en procesamiento de archivos",
            "Desarrollo de asistentes restantes",
            "Integración con sistemas corporativos",
            "Definición final de arquitectura modular",
            "Pruebas completas del ecosistema"
        ],
        developer: { iniciales: "ND", nombre: "N. Durán" },
        impacto: "Muy Alto",
        impactoClass: "imp-ma",
        gerencia: "Soluciones Financieras"
    },

    {
        id: "IN-42 · AUT-692",
        gerenciaLabel: "Mercadeo · CC 10683",
        tipo: "auto",
        nivel: "r",
        prioridad: "Muy Alta",
        prioridadClass: "pr-muy-alta",
        titulo: "Automatización Presentación de Informes Gerenciales — Junta",
        area: "Gerencia de Mercadeo — Nicolás Durán",
        avance: 40,
        tags: ["CRM", "Excel Financiero", "Auto-PowerPoint", "Dashboard"],
        alerta: null,
        statusDone: [
            "Problema identificado y alcance definido",
            "Fuentes de información identificadas (CRM y Excel financiero)",
            "Reunión técnica realizada para analizar integración con SAP"
        ],
        statusTodo: [
            "Definir modelo de consolidación de datos",
            "Diseñar estructura de indicadores comerciales y financieros",
            "Diseñar plantilla automática de informe gerencial",
            "Desarrollar automatización de generación de informes"
        ],
        developer: { iniciales: "ND", nombre: "N. Durán" },
        impacto: "Muy Alto",
        impactoClass: "imp-ma",
        gerencia: "Mercadeo"
    },

    {
        id: "IN-37 · IN-113",
        gerenciaLabel: "Soluciones Financieras · CC 10729",
        tipo: "auto",
        nivel: "r",
        prioridad: "Muy Alta",
        prioridadClass: "pr-muy-alta",
        titulo: "Informe Flujo de Caja Consolidado",
        area: "Soluciones Financieras — Angie Hernandez",
        avance: 100,
        tags: ["NOVA", "Modelo Financiero", ">$500M", "Análisis Prob."],
        alerta: {
            tipo: "ok",
            texto: "✅ FASE 1 FINALIZADA — EN PRODUCCIÓN"
        },
        statusDone: [
            "Fase 1 (cotizaciones) finalizada",
            "Agente IA funcional",
            "Procesamiento de PDFs",
            "Generación de resúmenes",
            "Validación con cliente",
            "Listo para producción"
        ],
        statusTodo: [
            "Desarrollo Fase 2 (flujo de caja consolidado)"
        ],
        developer: { iniciales: "AH", nombre: "A. Hernandez" },
        impacto: "Muy Alto",
        impactoClass: "imp-ma",
        gerencia: "Soluciones Financieras"
    },

    {
        id: "IN-41 · AUT-698",
        gerenciaLabel: "Aseguramiento · CC 10692",
        tipo: "auto",
        nivel: "r",
        prioridad: "Muy Alta",
        prioridadClass: "pr-muy-alta",
        titulo: "Indicadores de Gestión ISO — Automatización de Procesos",
        area: "Gerencia Aseguramiento — Juan David Rodríguez",
        avance: 50,
        tags: ["ISO", "Tablero Consolidado", "Alertas Auto", "Fórmulas Dinámicas"],
        alerta: null,
        statusDone: [
            "Levantamiento realizado",
            "Proceso AS-IS documentado",
            "PDR en construcción",
            "Inicio desarrollo frontend"
        ],
        statusTodo: [
            "Diseño técnico completo",
            "Modelo de indicadores",
            "Backend",
            "Integración",
            "Pruebas",
            "Producción"
        ],
        developer: { iniciales: "JD", nombre: "J. Rodríguez" },
        impacto: "Muy Alto",
        impactoClass: "imp-ma",
        gerencia: "Gobierno y Aseguramiento"
    },

    // ╔═══════════════════════════════════════════════════╗
    //   AUTOMATIZACIÓN  ·  NIVEL 2  🟠  (Naranja)
    // ╚═══════════════════════════════════════════════════╝

    {
        id: "AUT-690",
        gerenciaLabel: "Soluciones Financieras · CC 10729",
        tipo: "auto",
        nivel: "o",
        prioridad: "Alta",
        prioridadClass: "pr-alta",
        titulo: "Evaluación Financiera de Oportunidades",
        area: "Soluciones Financieras — Saritha Gonzalez",
        avance: 88,
        tags: ["NOVA IA", "Análisis Financiero", "n8n", "Comparativos"],
        alerta: null,
        statusDone: [
            "Flujo en n8n completamente funcional",
            "Procesamiento de múltiples archivos",
            "Extracción de datos financieros consolidada",
            "Rediseño del flujo en subprocesos",
            "Generación de estructuras de resumen ejecutivo"
        ],
        statusTodo: [
            "Validación final con usuario",
            "Ajuste de estructura Excel",
            "Integración con SharePoint",
            "Despliegue"
        ],
        developer: { iniciales: "SG", nombre: "S. Gonzalez" },
        impacto: "Alto",
        impactoClass: "imp-a",
        gerencia: "Soluciones Financieras"
    },

    {
        id: "IN-54 · AUT-710",
        gerenciaLabel: "Contabilidad · CC 10687",
        tipo: "auto",
        nivel: "o",
        prioridad: "Muy Alta",
        prioridadClass: "pr-muy-alta",
        titulo: "Enlace Cuentas por Pagar Invoway ↔ SAP",
        area: "Contabilidad y Control Interno — Saritha González",
        alerta: {
            tipo: "ao",
            texto: "⚠️ Bloqueo por dependencia técnica con Invoway (en espera de definición)"
        },
        avance: 65,
        tags: ["Invoway API", "SAP", "Archivo Plano", "Cargue Masivo"],
        alerta: null,
        statusDone: [
            "Flujo de automatización diseñado",
            "Campos requeridos por SAP identificados",
            "Reunión técnica realizada con equipo SAP",
            "Flujo de integración con NOVA en pruebas",
            "Ajustes técnicos en procesamiento de archivos"
        ],
        statusTodo: [
            "Validar viabilidad técnica de integración con Invoway",
            "Definir arquitectura final de integración (Invoway / AGC-WARE / SAP)",
            "Implementar integración funcional completa con SAP",
            "Realizar pruebas piloto con facturas reales",
            "Despliegue final en producción"
        ],
        developer: { iniciales: "SG", nombre: "S. González" },
        impacto: "Alto",
        impactoClass: "imp-a",
        gerencia: "Contabilidad"
    },

    {
        id: "IN-63 · AUT-700",
        gerenciaLabel: "Compras y Logística · CC 10689",
        tipo: "auto",
        nivel: "o",
        prioridad: "Alta",
        prioridadClass: "pr-alta",
        titulo: "Portal Integrado de Reportes Mensuales y Anuales (PyG)",
        area: "Compras, Logística e Inventarios — Santiago Moreno",
        alerta: {
            tipo: "am",
            texto: "🟡 95% — Pendiente validación cliente y despliegue"
        },
        avance: 95,
        statusDone: [
            "Base de datos (~20k registros)",
            "Backend funcional",
            "Login implementado",
            "Integración de datos",
            "Métricas PyG",
            "Portal funcional end-to-end",
            "Conflictos resueltos"
        ],
        statusTodo: [
            "Validación con cliente",
            "Ajustes finales",
            "Despliegue en producción",
            "Integraciones SAP/Jira futuras"
        ],
        developer: { iniciales: "SM", nombre: "S. Moreno" },
        impacto: "Alto",
        impactoClass: "imp-a",
        gerencia: "Compras y Logística"
    },

    {
        id: "IN-52 · AUT-712",
        gerenciaLabel: "Contabilidad · CC 10687",
        tipo: "auto",
        nivel: "o",
        prioridad: "Alta",
        prioridadClass: "pr-alta",
        titulo: "Identificación Responsabilidades Tributarias en Municipios",
        area: "Contabilidad — Juan David Rodríguez",
        avance: 90,
        tags: ["IA PDF", "SAP", "40 municipios/mes", "50-300 págs"],
        alerta: null,
        statusDone: [
            "Flujo end-to-end funcional",
            "OCR con Document AI implementado",
            "Extracción de texto desde PDFs escaneados",
            "Análisis con IA funcionando",
            "Generación automática de Excel",
            "Envío automático por correo",
            "Validación con documentos reales"
        ],
        statusTodo: [
            "Optimizar precisión del modelo",
            "Evaluar escalabilidad OCR",
            "Integrar base de datos",
            "Pruebas masivas",
            "Preparación a producción"
        ],
        developer: { iniciales: "JD", nombre: "J. Rodríguez" },
        impacto: "Alto",
        impactoClass: "imp-a",
        gerencia: "Contabilidad"
    },

    {
        id: "IN-58 · IN-121",
        gerenciaLabel: "Aseguramiento · CC 10692",
        tipo: "auto",
        nivel: "o",
        prioridad: "Alta",
        prioridadClass: "pr-alta",
        titulo: "Automatización Matriz de Compromisos Contractuales",
        area: "Aseguramiento de Soluciones — Edwin León",
        avance: 90,
        tags: ["BPO", "ITO", "Contratos", "Seguimiento"],
        alerta: {
            tipo: "am",
            texto: "🟡 90% — Pendiente validación final"
        },
        statusDone: [
            "Portal web para carga de documentos contractuales desarrollado",
            "Flujo de automatización implementado en n8n",
            "Integración con IA para análisis automático de contratos",
            "Generación automática de la matriz contractual funcionando",
            "Descarga automática y repositorio de archivos generados en el portal"
        ],
        statusTodo: [
            "Mejorar experiencia visual del portal",
            "Implementar indicador visual de procesamiento de archivos",
            "Realizar validación final con la solicitante",
            "Despliegue del sistema en producción"
        ],
        developer: { iniciales: "EL", nombre: "E. León" },
        impacto: "Alto",
        impactoClass: "imp-a",
        gerencia: "Gobierno y Aseguramiento"
    },

    {
        id: "IN-108 · PQE-2217",
        gerenciaLabel: "Soluciones Financieras · CC 10729",
        tipo: "auto",
        nivel: "o",
        prioridad: "Alta",
        prioridadClass: "pr-alta",
        titulo: "Optimización del Reclutamiento — Primer Filtro Automatizado",
        area: "Soluciones Financieras — Santiago Moreno",
        avance: 40,
        tags: ["Chatbot HV", "Motor Reglas", "-70% filtro"],
        alerta: null,
        statusDone: [
            "Problema identificado",
            "Enfoque definido",
            "Chatbot NOVA creado",
            "Pruebas iniciales"
        ],
        statusTodo: [
            "Criterios de clasificación",
            "Integración GH",
            "Flujo completo",
            "MVP",
            "Pruebas piloto"
        ],
        developer: { iniciales: "SM", nombre: "S. Moreno" },
        impacto: "Alto",
        impactoClass: "imp-a",
        gerencia: "Soluciones Financieras"
    },

    {
        id: "IN-57 · IN-120",
        gerenciaLabel: "Aseguramiento · CC 10692",
        tipo: "auto",
        nivel: "o",
        prioridad: "Alta",
        prioridadClass: "pr-alta",
        titulo: "Automatización Auditorías de Casos — Bot ITSM",
        area: "Aseguramiento de Soluciones — Santiago Moreno",
        avance: 50,
        tags: ["ITSM Aranda", "Bot Evaluación", "Comwquality", "Matrices Calidad"],
        alerta: {
            tipo: "ar",
            texto: "🚨 BLOQUEADA — Falta credenciales Aranda"
        },
        statusDone: [
            "Levantamiento completo de requerimientos realizado",
            "Proceso actual de auditoría documentado",
            "Archivos de prueba recibidos para análisis",
            "Diseño inicial del flujo de automatización"
        ],
        statusTodo: [
            "Desarrollar módulo de generación automática de matriz de auditoría",
            "Implementar formulario web para registro automático",
            "Desarrollar reglas de evaluación de calidad",
            "Integrar bot con herramienta ITSM (Aranda)",
            "Realizar pruebas piloto con casos reales"
        ],
        developer: { iniciales: "SM", nombre: "S. Moreno" },
        impacto: "Alto",
        impactoClass: "imp-a",
        gerencia: "Gobierno y Aseguramiento"
    },

    // ╔═══════════════════════════════════════════════════╗
    //   AUTOMATIZACIÓN  ·  NIVEL 3  🟡  (Amarillo)
    // ╚═══════════════════════════════════════════════════╝

    {
        id: "IN-60 · AUT-702",
        gerenciaLabel: "Servicios Generales · CC 10690",
        tipo: "auto",
        nivel: "y",
        prioridad: "Media-Alta",
        prioridadClass: "pr-media",
        titulo: "Planificación Digital y Control de Cargas Operativas",
        area: "Servicios Generales — Juan David Rodríguez",
        avance: 85,
        tags: ["App Móvil", "Dashboard", "Indicadores"],
        alerta: null,
        statusDone: [
            "Frontend",
            "Backend FastAPI",
            "BD Docker",
            "CRUD parcial",
            "Dashboard",
            "Indicadores por usuario",
            "Perfil admin"
        ],
        statusTodo: [
            "Integración completa",
            "CRUD completo",
            "Pruebas",
            "Producción"
        ],
        developer: { iniciales: "JD", nombre: "J. Rodríguez" },
        impacto: "Medio-Alto",
        impactoClass: "imp-a",
        gerencia: "Servicios Generales"
    },

    {
        id: "IN-59 · IN-122",
        gerenciaLabel: "Servicios Generales · CC 10690",
        tipo: "auto",
        nivel: "y",
        prioridad: "Alta",
        prioridadClass: "pr-alta",
        titulo: "Canal Móvil de Solicitudes Administrativas + Aranda",
        area: "Servicios Generales — Santiago Moreno",
        avance: 70,
        tags: ["n8n ✓", "Mini App ✓", "BD ✓", "Aranda API"],
        alerta: {
            tipo: "ao",
            texto: "⚠️ PAUSA POR MIGRACIÓN A IVANTI"
        },
        statusDone: [
            "Formulario web desarrollado",
            "Flujo automatizado en n8n implementado",
            "Base de datos de solicitudes operativa"
        ],
        statusTodo: [
            "Evaluar integración con nueva plataforma IVANTI",
            "Analizar reutilización del desarrollo actual"
        ],
        developer: { iniciales: "SM", nombre: "S. Moreno" },
        impacto: "Medio-Alto",
        impactoClass: "imp-a",
        gerencia: "Servicios Generales"
    },

    {
        id: "IN-111 · IN-129",
        gerenciaLabel: "Corporativo — Todas las Áreas",
        tipo: "auto",
        nivel: "y",
        prioridad: "Media",
        prioridadClass: "pr-media",
        titulo: "Desarrollo Automatizado Herramientas Comware (Paraguas)",
        area: "Soluciones Financieras — Jefrey Román",
        avance: 45,
        tags: ["SAP", "INVOWAY", "NOVA", "IA", "Automatización transversal"],
        alerta: null,
        statusDone: [
            "Idea estratégica definida",
            "Alcance corporativo establecido",
            "Sesiones de levantamiento ejecutadas (Legal, GH, Compras, Contabilidad)",
            "Procesos AS-IS identificados",
            "Oportunidades de automatización detectadas",
            "Definición de metodología de trabajo",
            "Definición de estrategia incremental (quick wins)",
            "Recepción de insumos reales para pruebas"
        ],
        statusTodo: [
            "Consolidar backlog completo de automatizaciones",
            "Priorizar por impacto vs complejidad",
            "Definir arquitectura del ecosistema",
            "Diseñar MVPs",
            "Iniciar desarrollo de prototipos"
        ],
        developer: { iniciales: "JR", nombre: "J. Roman" },
        impacto: "Muy Alto",
        impactoClass: "imp-ma",
        gerencia: "Soluciones Financieras"
    },

    // ╔═══════════════════════════════════════════════════╗
    //   AUTOMATIZACIÓN  ·  NIVEL 4  🟢  (Verde / Quick wins)
    // ╚═══════════════════════════════════════════════════╝

    {
        id: "IN-53 · IN-128",
        gerenciaLabel: "Contabilidad · CC 10687",
        tipo: "auto",
        nivel: "g",
        prioridad: "Media-Alta",
        prioridadClass: "pr-media",
        titulo: "Liquidaciones y Capacitaciones de Nómina — SAP",
        area: "Contabilidad y Control Interno — Angie Hernandez",
        avance: 85,
        tags: ["SAP", "Excel-Plano", "16-24h/mes ahorro"],
        alerta: null,
        statusDone: [
            "Aplicativo completamente desarrollado",
            "Procesamiento de archivos Excel funcional",
            "Generación automática de archivo plano SAP",
            "Soporte para nómina y viáticos",
            "Pruebas técnicas realizadas",
            "Flujo end-to-end funcional"
        ],
        statusTodo: [
            "Validación con SAP",
            "Casos excepcionales",
            "Pruebas piloto reales",
            "Despliegue en producción"
        ],
        developer: { iniciales: "AH", nombre: "A. Hernandez" },
        impacto: "Medio",
        impactoClass: "imp-m",
        gerencia: "Contabilidad"
    },

    {
        id: "IN-47 · AUT-693",
        gerenciaLabel: "Mercadeo · CC 10683",
        tipo: "auto",
        nivel: "g",
        prioridad: "Crítica",
        prioridadClass: "pr-critica",
        titulo: "Chatbot Pág Web Omnicanal",
        area: "Gerencia de Mercadeo — Nicolás Durán",
        avance: 100,
        tags: ["n8n ✓", "NOVA ✓", "WhatsApp API", "CRM", "Frontend ✓"],
        alerta: {
            tipo: "ok",
            texto: "✅ INICIATIVA FINALIZADA — EN PRODUCCIÓN"
        },
        statusDone: [
            "Frontend del chatbot desarrollado",
            "Integración completa con NOVA",
            "Flujo conversacional funcional",
            "Base de conocimiento actualizada con documentos del cliente",
            "Correcciones solicitadas por el cliente implementadas",
            "Validación final del cliente",
            "Publicación widget web",
            "Despliegue en producción"
        ],
        statusTodo: [

        ],
        developer: { iniciales: "ND", nombre: "N. Durán" },
        impacto: "Muy Alto",
        impactoClass: "imp-ma",
        gerencia: "Mercadeo"
    },

    // ╔═══════════════════════════════════════════════════╗
    //   PRODUCTO SCRUM  ·  NIVEL 1  🔴  (Rojo)
    // ╚═══════════════════════════════════════════════════╝

    {
        id: "IN-131 · PQE-2261",
        gerenciaLabel: "Soluciones Financieras · CC 10729",
        tipo: "prod",
        nivel: "r",
        prioridad: "Muy Alta",
        prioridadClass: "pr-critica",
        titulo: "Automatización de Flujos Contables y Legalizaciones (Invoway-SAP)",
        area: "Soluciones Financieras — Jeimy Bernal",
        avance: 10,
        tags: ["Invoway", "SAP", "Legalizaciones", "Activos Fijos"],
        alerta: {
            tipo: "ar",
            texto: "🔴 Iniciativa más compleja del portafolio Producto. Integra Invoway + SAP + App interna + activos fijos."
        },
        statusDone: [
            "Problema operativo y sistemas involucrados definidos",
            "Alcance general y beneficio esperado documentados"
        ],
        statusTodo: [
            "Levantamiento detallado flujo contable actual",
            "Reglas contables + arquitectura de integración",
            "Diseño herramienta legalizaciones + desarrollo SAP",
            "Pruebas piloto con casos reales"
        ],
        developer: { iniciales: "JB", nombre: "Jeimy Bernal" },
        impacto: "Alto",
        impactoClass: "imp-a",
        gerencia: "Soluciones Financieras"
    },

    {
        id: "IN-104 · PQE-2213",
        gerenciaLabel: "Arquitectura · CC 10695",
        tipo: "prod",
        nivel: "r",
        prioridad: "Muy Alta",
        prioridadClass: "pr-critica",
        titulo: "Lectura y Análisis Inteligente de Pliegos con IA",
        area: "Arquitectura / Tercerización — Jeimy Bernal",
        avance: 10,
        tags: ["IA Semántica", "SharePoint", "Licitaciones", "Comparación Versiones"],
        alerta: null,
        statusDone: [
            "SharePoint como repositorio oficial definido",
            "Meta: -20% tiempo de revisión de pliegos"
        ],
        statusTodo: [
            "Modelo: descalificable/puntuable/deseable",
            "Motor comparación versiones + prototipo IA",
            "Pruebas piloto con pliegos reales"
        ],
        developer: { iniciales: "JB", nombre: "Jeimy Bernal" },
        impacto: "Muy Alto",
        impactoClass: "imp-ma",
        gerencia: "Arquitectura"
    },

    {
        id: "IN-46 · PQE-2198",
        gerenciaLabel: "Arquitectura · CC 10695",
        tipo: "prod",
        nivel: "r",
        prioridad: "Muy Alta",
        prioridadClass: "pr-critica",
        titulo: "Generador Automático de Dimensionamiento de RH",
        area: "Arquitectura / Tercerización — Jeimy Bernal",
        avance: 30,
        tags: ["Erlang C", "SLA/TMO", "Contact Center", "Motor Matemático"],
        alerta: null,
        statusDone: [
            "Reunión inicial + variables clave definidas",
            "Método Erlang C identificado; roles a dimensionar",
            "Bloqueos y preguntas técnicas estructuradas"
        ],
        statusTodo: [
            "Entrega de fórmulas y bases históricas",
            "Modelo matemático definitivo + interfaz + prototipo"
        ],
        developer: { iniciales: "JB", nombre: "Jeimy Bernal" },
        impacto: "Muy Alto",
        impactoClass: "imp-ma",
        gerencia: "Arquitectura"
    },

    {
        id: "IN-45 · PQE-2197",
        gerenciaLabel: "Arquitectura · CC 10695",
        tipo: "prod",
        nivel: "r",
        prioridad: "Muy Alta",
        prioridadClass: "pr-critica",
        titulo: "Estimativo Salarial Inteligente Multi-fuente",
        area: "Arquitectura / Desarrollo de Negocios — Jeimy Bernal",
        avance: 8,
        tags: ["Multi-fuente", "IA Semántica", "Base Interna", "Licitaciones"],
        alerta: null,
        statusDone: [
            "Problema + impacto + integración interna/externa",
            "Necesidad de trazabilidad de fuente definida"
        ],
        statusTodo: [
            "Fuentes externas + normalización salarial",
            "Prototipo + validación con casos reales"
        ],
        developer: { iniciales: "JB", nombre: "Jeimy Bernal" },
        impacto: "Muy Alto",
        impactoClass: "imp-ma",
        gerencia: "Arquitectura"
    },

    {
        id: "IN-107 · PQE-2216",
        gerenciaLabel: "Soluciones Financieras · CC 10729",
        tipo: "prod",
        nivel: "r",
        prioridad: "Muy Alta",
        prioridadClass: "pr-muy-alta",
        titulo: "Automatización y Control Integral de Afiliaciones Laborales",
        area: "Soluciones Financieras — Jeimy Bernal",
        avance: 12,
        tags: ["CCF/EPS/ARL", "UGPP", "Panel Control", "-40% tiempo"],
        alerta: null,
        statusDone: [
            "Meta: reducir 40% tiempos de afiliación",
            "Componentes funcionales definidos a alto nivel"
        ],
        statusTodo: [
            "Levantamiento detallado + puntos críticos UGPP",
            "Panel de control + desarrollo + pruebas"
        ],
        developer: { iniciales: "JB", nombre: "Jeimy Bernal" },
        impacto: "Muy Alto",
        impactoClass: "imp-ma",
        gerencia: "Soluciones Financieras"
    },

    // ╔═══════════════════════════════════════════════════╗
    //   PRODUCTO SCRUM  ·  NIVEL 2  🟠  (Naranja)
    // ╚═══════════════════════════════════════════════════╝

    {
        id: "IN-110 · PQE-2189",
        gerenciaLabel: "Soluciones Financieras · CC 10729",
        tipo: "prod",
        nivel: "o",
        prioridad: "Alta",
        prioridadClass: "pr-alta",
        titulo: "Automatización Radicación y Auditoría de Incapacidades",
        area: "Soluciones Financieras — Jeimy Bernal",
        avance: 15,
        tags: ["PDF Editable", "Anti-fraude", "Recobro", "Panel"],
        alerta: null,
        statusDone: [
            "Riesgos de fraude documental identificados",
            "Indicador de efectividad de recobro definido"
        ],
        statusTodo: [
            "Arquitectura + detector PDF editable",
            "Panel seguimiento + indicadores"
        ],
        developer: { iniciales: "JB", nombre: "Jeimy Bernal" },
        impacto: "Alto",
        impactoClass: "imp-a",
        gerencia: "Soluciones Financieras"
    },

    {
        id: "IN-55 · PQE-2203",
        gerenciaLabel: "Contabilidad · CC 10687",
        tipo: "prod",
        nivel: "o",
        prioridad: "Alta",
        prioridadClass: "pr-alta",
        titulo: "Automatización Legalizaciones — Caja Menor, Anticipos, TC",
        area: "Contabilidad y Control Interno — Jeimy Bernal",
        avance: 15,
        tags: ["IA PDF", "SAP", "Intranet", "20% ahorro"],
        alerta: null,
        statusDone: [
            "Archivos ejemplo + integración SAP+Intranet definida",
            "Beneficio cuantificado: 20% ahorro mensual"
        ],
        statusTodo: [
            "Estructura exacta archivo plano SAP",
            "Diseño flujo IA + desarrollo + pruebas"
        ],
        developer: { iniciales: "JB", nombre: "Jeimy Bernal" },
        impacto: "Alto",
        impactoClass: "imp-a",
        gerencia: "Contabilidad"
    },

    {
        id: "IN-106 · PQE-2215",
        gerenciaLabel: "Arquitectura · CC 10695",
        tipo: "prod",
        nivel: "o",
        prioridad: "Alta",
        prioridadClass: "pr-alta",
        titulo: "Estimativo Salarial — Versión Base para Pliegos",
        area: "Arquitectura / Tercerización — Jeimy Bernal",
        avance: 10,
        tags: ["Portales Empleo", "Base Interna", "-70% búsqueda"],
        alerta: null,
        statusDone: [
            "Base interna definida; 70% optimización cuantificada"
        ],
        statusTodo: [
            "Fuentes externas + modelo datos salarial",
            "Motor búsqueda + criterios perfil + pruebas"
        ],
        developer: { iniciales: "JB", nombre: "Jeimy Bernal" },
        impacto: "Alto",
        impactoClass: "imp-a",
        gerencia: "Arquitectura"
    },

    {
        id: "IN-56 · AUT-708",
        gerenciaLabel: "Mercadeo · CC 10683",
        tipo: "prod",
        nivel: "o",
        prioridad: "Alta",
        prioridadClass: "pr-alta",
        titulo: "Plataforma Central de Datos de Clientes y Prospectos",
        area: "Gerencia de Mercadeo — Jeimy Bernal",
        avance: 40,
        tags: ["CRM", "Excel-BD", "Scoring", "Flujo Auto ✓"],
        alerta: null,
        statusDone: [
            "Flujo actualización Excel hijo-main operativo",
            "Validación duplicados + notificación correo",
            "Validación con solicitante iniciada"
        ],
        statusTodo: [
            "Modelo datos persona/empresa + integración CRM",
            "Scoring + enriquecimiento externo"
        ],
        developer: { iniciales: "JB", nombre: "Jeimy Bernal" },
        impacto: "Alto",
        impactoClass: "imp-a",
        gerencia: "Mercadeo"
    },

    // ╔═══════════════════════════════════════════════════╗
    //   PRODUCTO SCRUM  ·  NIVEL 3  🟢  (Verde / Quick wins)
    // ╚═══════════════════════════════════════════════════╝

    {
        id: "IN-44 · PQE-2196",
        gerenciaLabel: "Compras y Logística · CC 10689",
        tipo: "prod",
        nivel: "g",
        prioridad: "Alta",
        prioridadClass: "pr-alta",
        titulo: "Dashboard Interactivo de Activos Corporativos",
        area: "Compras, Logística e Inventarios — Jeimy Bernal",
        avance: 18,
        tags: ["Power BI", "CMDB", "SAP", "Aranda"],
        alerta: null,
        statusDone: [
            "Archivo consolidado base + sistemas fuente disponibles",
            "Variables clave y herramienta (Power BI) definidas"
        ],
        statusTodo: [
            "Modelo datos unificado + KPIs específicos",
            "Desarrollo dashboard + validación áreas usuarias"
        ],
        developer: { iniciales: "JB", nombre: "Jeimy Bernal" },
        impacto: "Alto",
        impactoClass: "imp-a",
        gerencia: "Compras y Logística"
    },

    {
        id: "IN-34 · PQE-2190",
        gerenciaLabel: "Gestión Humana · CC 10686",
        tipo: "prod",
        nivel: "g",
        prioridad: "Media-Alta",
        prioridadClass: "pr-media",
        titulo: "Envío Automático Cartilla de Bienvenida — Personal Nuevo",
        area: "Gestión Humana — Jeimy Bernal",
        avance: 20,
        tags: ["Trigger Estado", "Correo Auto", "Teams URL", "Log Envío"],
        alerta: null,
        statusDone: [
            "Requerimiento completamente documentado",
            "Plantillas, insumos y flujo listos",
            "Stakeholders y criterios de aceptación definidos"
        ],
        statusTodo: [
            "Disparador automático + parametrización HTML",
            "Control de unicidad + log + pruebas funcionales"
        ],
        developer: { iniciales: "JB", nombre: "Jeimy Bernal" },
        impacto: "Medio-Alto",
        impactoClass: "imp-a",
        gerencia: "Gestión Humana"
    },

    {
        id: "IN-109 · PQE-2218",
        gerenciaLabel: "Soluciones Financieras · CC 10729",
        tipo: "prod",
        nivel: "g",
        prioridad: "Media-Alta",
        prioridadClass: "pr-media",
        titulo: "Onboarding Digital Gamificado y Automatización de Carnets",
        area: "Soluciones Financieras / Gestión Humana — Jeimy Bernal",
        avance: 12,
        tags: ["Gamificación", "Carnet Auto", "-60% carnetización"],
        alerta: null,
        statusDone: [
            "Meta: 60% reducción en carnetización",
            "Componentes técnicos definidos a alto nivel"
        ],
        statusTodo: [
            "Levantamiento flujo actual + diseño funcional",
            "Plantilla automatizada + integración BD + pruebas"
        ],
        developer: { iniciales: "JB", nombre: "Jeimy Bernal" },
        impacto: "Medio-Alto",
        impactoClass: "imp-a",
        gerencia: "Soluciones Financieras"
    },

    {
        id: "IN-105 · AUT-713",
        gerenciaLabel: "Arquitectura · CC 10695",
        tipo: "prod",
        nivel: "g",
        prioridad: "Media",
        prioridadClass: "pr-media",
        titulo: "Generación Automatizada de Descriptivos Técnicos Base",
        area: "Arquitectura - Tercerización — Jeimy Bernal",
        avance: 20,
        tags: ["Asistente IA", "Mesa Servicio", "Contact Center"],
        alerta: null,
        statusDone: [
            "Informe inicial con brechas y riesgos elaborado",
            "Contexto documentado"
        ],
        statusTodo: [
            "Validación flujo con solicitante",
            "Diseño del asistente + desarrollo"
        ],
        developer: { iniciales: "JB", nombre: "Jeimy Bernal" },
        impacto: "Medio-Alto",
        impactoClass: "imp-a",
        gerencia: "Arquitectura"
    }

];