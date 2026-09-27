# ══════════════════════════════════════════════════════════════
# CASE STUDY — Plantilla MDX para agentes
#
# Ubicación: src/content/projects/<slug>.mdx
# Formato: MDX (Markdown + JSX). Se renderiza en Astro con
#          @astrojs/mdx y estilos via Tailwind CSS v4.
#
# REGLAS PARA EL AGENTE:
# - No inventar datos: si no hay info suficiente, dejar vacío ("")
#   o el placeholder "TODO: ...".
# - Mantener el orden y los nombres de las claves del frontmatter.
# - Fechas siempre en formato ISO "YYYY-MM-DD".
# - "slug" debe ser kebab-case y coincidir con la URL.
# - El body es MDX: usa <div>, <section>, <article>, etc. con
#   clases de Tailwind. NO uses estilos inline.
# - Las imágenes del hero y galería se definen en frontmatter;
#   el layout las lee desde `data.images`. En el body solo se
#   escribe contenido estructural.
# - Para las cards de puntos clave, usa la estructura indicada
#   abajo con las clases Tailwind sugeridas.
# - DENTRO de elementos JSX (span, h2, h3, p), envuelve todo
#   el texto en {"..."} para evitar que MDX lo envuelva en
#   párrafos adicionales.
# ══════════════════════════════════════════════════════════════

---
# ── Identidad básica ─────────────────────────────────────────
title: "Nombre del proyecto"
slug: "nombre-del-proyecto"
summary: "Resumen de 1-2 frases: qué es, qué problema resuelve y con qué tecnología clave."
category: "web" # web | mobile | fullstack | library | cli | api | desktop | otro
date: "YYYY-MM-DD"
lastUpdate: "YYYY-MM-DD"
status: "in-progress" # idea | in-progress | completed | archived | maintained
featured: false
priority: 0

# ── Contexto del proyecto ────────────────────────────────────
type: "personal" # personal | freelance | client | opensource | academic | work
role: "TODO: tu rol"
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
# Logros/decisiones técnicas relevantes (no descripción genérica).
highlights:
  - "TODO: highlight 1"
  - "TODO: highlight 2"

# ── Imágenes ─────────────────────────────────────────────────
# Referencias al repo remoto; el layout arma las URLs.
images:
  hero:
    ext: "png"
    alt: "TODO: descripción accesible"
  cover:
    ext: "png"
    alt: "TODO: descripción"
  gallery:
    - name: "1"
      ext: "png"
      alt: "TODO: screenshot 1"
      caption: ""
    - name: "2"
      ext: "png"
      alt: "TODO: screenshot 2"
      caption: ""

# ── SEO ──────────────────────────────────────────────────────
seo:
  metaTitle: ""
  metaDescription: ""

# ── Metadatos internos del agente ────────────────────────────
generatedBy: "agent"
generatedAt: "YYYY-MM-DDTHH:MM:SSZ"
schemaVersion: 1
---

{/* ═══════════════════════════════════════════════════════════ */}
{/*  BODY — Secciones estructuradas con Tailwind CSS           */}
{/* ═══════════════════════════════════════════════════════════ */}

{/* ── 01 / EL DESAFÍO ─────────────────────────────────────── */}
<section class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 py-20">

  {/* Columna izquierda: título de sección + resumen */}
  <div class="space-y-6">
    <span class="text-xs uppercase tracking-widest text-accent font-semibold block">
      {"01 / El desafío"}
    </span>
    <h2 class="text-3xl md:text-5xl font-bold uppercase tracking-tighter leading-tight">
      {"Definiendo el problema"}
    </h2>
    <p class="text-tertiary text-base md:text-lg leading-relaxed">
      {"Resumen corto del contexto y la motivación del proyecto. 2–4 frases que expliquen por qué existía la necesidad."}
    </p>
  </div>

  {/* Columna derecha: descripción larga + cards de puntos clave */}
  <div class="space-y-8">
    <p class="text-primary text-base md:text-lg leading-relaxed">
      {"Descripción más extensa del problema, los usuarios afectados, las limitaciones del estado previo y cualquier restricción de negocio o técnica relevante."}
    </p>

    {/* Cards de puntos clave */}
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <article class="border border-primary/20 p-5 space-y-2">
        <h3 class="text-sm uppercase font-semibold tracking-wider text-accent">
          {"Punto clave 1"}
        </h3>
        <p class="text-tertiary text-sm leading-relaxed">
          {"Breve explicación de este punto específico."}
        </p>
      </article>

      <article class="border border-primary/20 p-5 space-y-2">
        <h3 class="text-sm uppercase font-semibold tracking-wider text-accent">
          {"Punto clave 2"}
        </h3>
        <p class="text-tertiary text-sm leading-relaxed">
          {"Breve explicación de este punto específico."}
        </p>
      </article>

      <article class="border border-primary/20 p-5 space-y-2">
        <h3 class="text-sm uppercase font-semibold tracking-wider text-accent">
          {"Punto clave 3"}
        </h3>
        <p class="text-tertiary text-sm leading-relaxed">
          {"Breve explicación de este punto específico."}
        </p>
      </article>

      <article class="border border-primary/20 p-5 space-y-2">
        <h3 class="text-sm uppercase font-semibold tracking-wider text-accent">
          {"Punto clave 4"}
        </h3>
        <p class="text-tertiary text-sm leading-relaxed">
          {"Breve explicación de este punto específico."}
        </p>
      </article>
    </div>
  </div>

</section>

{/* ── 02 / LA SOLUCIÓN (opcional, copiar y adaptar) ───────── */}
<section class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 py-20">
  <div class="space-y-6">
    <span class="text-xs uppercase tracking-widest text-accent font-semibold block">
      {"02 / La solución"}
    </span>
    <h2 class="text-3xl md:text-5xl font-bold uppercase tracking-tighter leading-tight">
      {"Cómo se resolvió"}
    </h2>
    <p class="text-tertiary text-base md:text-lg leading-relaxed">
      {"Resumen de la arquitectura o enfoque elegido."}
    </p>
  </div>

  <div class="space-y-8">
    <p class="text-primary text-base md:text-lg leading-relaxed">
      {"Descripción detallada de la solución, decisiones técnicas clave, patrones aplicados y por qué se eligieron."}
    </p>
  </div>
</section>

{/* ── 03 / RESULTADOS (opcional, copiar y adaptar) ────────── */}
<section class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 py-20">
  <div class="space-y-6">
    <span class="text-xs uppercase tracking-widest text-accent font-semibold block">
      {"03 / Resultados"}
    </span>
    <h2 class="text-3xl md:text-5xl font-bold uppercase tracking-tighter leading-tight">
      {"Impacto y estado"}
    </h2>
    <p class="text-tertiary text-base md:text-lg leading-relaxed">
      {"Resumen de métricas o logros alcanzados."}
    </p>
  </div>

  <div class="space-y-8">
    <p class="text-primary text-base md:text-lg leading-relaxed">
      {"Detalle de resultados medibles, aprendizajes y próximos pasos."}
    </p>
  </div>
</section>
