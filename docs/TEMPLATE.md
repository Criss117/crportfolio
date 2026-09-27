---
# ══════════════════════════════════════════════════════════════
# CASE STUDY — Frontmatter base
#
# Ubicación esperada en cada repo: /portfolio/case-study.md
# Este archivo es generado/actualizado por un agente y consumido
# por el portfolio en Astro (fetch remoto al repo, ej. via
# raw.githubusercontent.com o la API de GitHub).
#
# Reglas para el agente que genera este archivo:
# - No inventar datos: si no hay info suficiente, dejar el valor
#   vacío ("") o el placeholder "TODO: ..." tal cual.
# - Mantener el orden y los nombres de las claves. Si el proyecto
#   no aplica un campo (ej. no tiene demo), dejarlo como "" y no
#   eliminar la clave — el schema del portfolio espera que exista.
# - Fechas siempre en formato ISO "YYYY-MM-DD".
# - "slug" debe ser kebab-case y coincidir con el nombre que se
#   quiere usar en la URL del portfolio (ej. /projects/fludge).
# ══════════════════════════════════════════════════════════════

# ── Identidad básica ─────────────────────────────────────────
title: "Nombre del proyecto"
slug: "nombre-del-proyecto"
summary: "Resumen de 1-2 frases: qué es, qué problema resuelve y con qué tecnología clave."
category: "web" # web | mobile | fullstack | library | cli | api | desktop | otro
date: "YYYY-MM-DD" # fecha de inicio del proyecto
lastUpdate: "YYYY-MM-DD" # fecha de la última actualización relevante
status: "in-progress" # idea | in-progress | completed | archived | maintained
featured: false
priority: 0 # entero; desempata el orden cuando hay varios featured=true

# ── Contexto del proyecto ────────────────────────────────────
type: "personal" # personal | freelance | client | opensource | academic | work
role: "TODO: tu rol en el proyecto (ej. Full-stack developer)"
team:
  size: 1
  solo: true

# ── Links y stack ────────────────────────────────────────────
links:
  repo: "https://github.com/usuario/repo"
  demo: ""
  docs: ""
  npm: ""

stack:
  - "TODO: tecnología 1"
  - "TODO: tecnología 2"

# ── Highlights ───────────────────────────────────────────────
# Bullets cortos, orientados a logros/decisiones técnicas relevantes,
# no a descripción genérica ("Usé X" no cuenta, "Reduje el tiempo de
# build de 4min a 40s migrando a Turborepo" sí).
highlights:
  - "TODO: highlight 1"
  - "TODO: highlight 2"

# ── Imágenes ─────────────────────────────────────────────────
# Los archivos reales deben vivir junto a este .md, ej:
# /portfolio/images/hero.png, /portfolio/images/cover.png,
# /portfolio/images/gallery-1.png, etc. Aquí solo se referencia
# metadata; el portfolio arma la ruta final.
images:
  hero:
    ext: "png"
    alt: "TODO: descripción accesible de la captura principal"
  cover:
    ext: "png"
    alt: "TODO: descripción de imagen secundaria (arquitectura, diagrama, etc.)"
  gallery:
    - name: "1"
      ext: "png"
      alt: "TODO: descripción de la screenshot 1"
      caption: ""
    - name: "2"
      ext: "png"
      alt: "TODO: descripción de la screenshot 2"
      caption: ""

# ── SEO ──────────────────────────────────────────────────────
seo:
  metaTitle: ""
  metaDescription: ""

# ── Metadatos internos del agente (no editar manualmente) ────
generatedBy: "agent" # agent | manual
generatedAt: "YYYY-MM-DDTHH:MM:SSZ"
schemaVersion: 1
---

<!--
  CONTENIDO DEL BODY — aún sin definir el diseño final de render.
  El agente puede usar estas secciones como guía mientras tanto;
  bórralas o reemplázalas cuando definas el formato definitivo.

  ## Sobre el proyecto
  Contexto: qué es, para quién, por qué se hizo.

  ## Problema
  Qué problema específico resuelve o qué motivó el proyecto.

  ## Solución / Arquitectura
  Cómo se resolvió, decisiones técnicas clave, diagramas si aplica.

  ## Retos
  Obstáculos técnicos relevantes y cómo se abordaron.

  ## Resultados / Estado actual
  Métricas si existen, estado del proyecto, aprendizajes.
-->
