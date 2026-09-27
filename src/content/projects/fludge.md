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
projectName: "fludge"
title: "Fludge"
slug: "fludge"
summary: "Sistema POS full-stack en TypeScript con app móvil React Native y backend Elysia, para gestión de ventas, catálogo e inventario en organizaciones."
category: "fullstack"
date: "2026-08-20"
lastUpdate: "2026-09-26"
status: "in-progress"
featured: false
priority: 0

# ── Contexto del proyecto ────────────────────────────────────
type: "personal"
role: "Full-stack developer"
team:
  size: 1
  solo: true

# ── Links y stack ────────────────────────────────────────────
links:
  repo: "https://github.com/Criss117/fludge"
  demo: ""
  docs: ""
  npm: ""

stack:
  - "TypeScript"
  - "Bun"
  - "Turborepo"
  - "Elysia"
  - "oRPC"
  - "React Native"
  - "Expo"
  - "HeroUI Native"
  - "SQLite (LibSQL)"
  - "Drizzle ORM"
  - "Better Auth"
  - "TanStack Query"
  - "TanStack Form"
  - "Zod 4"
  - "Tailwind CSS v4"

# ── Highlights ───────────────────────────────────────────────
highlights:
  - "Type-safety end-to-end con oRPC: los routers del backend generan automáticamente el contrato que el cliente consume, sin codegen ni duplicación manual de tipos"
  - "Separación estricta API/Form: schemas de formularios duplican campos de commands sin importarlos, permitiendo evolución independiente de cada capa"
  - "Domain Exceptions como primeras ciudadanas: errores de negocio mapeados a códigos HTTP semánticos con keys de i18n, eliminando capas de mapeo"
  - "Arquitectura modular Clean/Hexagonal por módulo de negocio (iam, catalog, commerce) con containers de dependencias y separación commands/queries"

# ── Imágenes ─────────────────────────────────────────────────
images:
  hero:
    ext: "png"
    alt: "TODO: captura de pantalla principal de la app Fludge"
  cover:
    ext: "png"
    alt: "TODO: diagrama de arquitectura del sistema o screenshot clave"
  gallery:
    - name: "1"
      ext: "png"
      alt: "TODO: screenshot del módulo de ventas"
      caption: ""
    - name: "2"
      ext: "png"
      alt: "TODO: screenshot del catálogo de productos con filtros"
      caption: ""

# ── SEO ──────────────────────────────────────────────────────
seo:
  metaTitle: "Fludge — Sistema POS full-stack en TypeScript"
  metaDescription: "Point of Sale construido con React Native, Elysia y oRPC. Gestión de ventas, catálogo e inventario con type-safety end-to-end."

# ── Metadatos internos del agente (no editar manualmente) ────
generatedBy: "agent"
generatedAt: "2026-09-26T19:15:00Z"
schemaVersion: 1
---

## Sobre el proyecto

Fludge es un sistema POS (Point of Sale) diseñado para pequeñas y medianas organizaciones que necesitan gestionar ventas, catálogo de productos e inventario desde un dispositivo móvil. El sistema ofrece una experiencia nativa con React Native y un backend type-safe construido con Elysia y oRPC, donde los tipos se comparten end-to-end sin codegen manual.

La arquitectura monorepo (Turborepo + Bun) permite compartir lógica de negocio, schemas de validación y tipos entre backend y app móvil, manteniendo el desacoplamiento entre capas mediante convenciones explícitas.

## Problema

Las soluciones POS accesibles suelen ser o bien web-only (sin experiencia nativa en campo) o bien nativas sin type-safety entre frontend y backend, lo que genera bugs de integración y duplicación de lógica de validación. Fludge busca resolver:

- **Gestión de ventas con estados complejos**: una venta puede transitar entre `open`, `partial`, `completed` o `cancelled`, con pagos parciales y reversiones. La lógica de transiciones debe estar encapsulada en el dominio, no en la UI.
- **Catálogo con filtrado avanzado**: productos con estados (activo, inactivo, descontinuado), ordenamiento por fecha de creación y stock, y búsqueda por texto.
- **Organizaciones con permisos granulares**: modelo IAM con organizaciones, miembros y grupos de permisos asignables.

## Solución / Arquitectura

El sistema sigue una arquitectura modular basada en Clean/Hexagonal por módulo de negocio:

- **`packages/api`**: Lógica de negocio pura organizada por módulos (`iam`, `catalog`, `commerce`, `auth`, `sync`). Cada módulo tiene su propio container de dependencias, domain entities, commands (escritura) y queries (lectura).
- **`packages/db`**: Schema declarativo con Drizzle ORM sobre SQLite (LibSQL), migraciones automáticas.
- **`packages/auth`**: Configuración de Better Auth con soporte para Expo (secure store, deep linking).
- **`packages/client`**: Capa del cliente con schemas de formularios (Zod 4), hooks de TanStack Form, mutaciones con cache strategy explícita (`setQueryData` vs `invalidateQueries`), y providers de React.
- **`apps/server`**: Backend HTTP con Elysia, monta routers oRPC y expone la API en `localhost:3000`.
- **`apps/native`**: App móvil con Expo Router, módulos que espejan la estructura del backend.

La comunicación sigue el flujo: **UI (React Native)** → **TanStack Query + oRPC client** → **Elysia server** → **Domain logic** → **Drizzle ORM** → **SQLite**.

### Decisiones clave

**Separación estricta API/Form**: Los schemas de formularios en `@fludge/client` duplican los campos de los commands de `@fludge/api` pero nunca los importan. Esto permite que el cliente evolucione sus validaciones (mensajes, transformaciones de UI) independientemente del backend. El trade-off es duplicación controlada de definiciones, pero el beneficio es independencia total de evolución.

**Domain Exceptions como primeras ciudadanas**: Las excepciones del dominio extienden `ORPCError` directamente, mapeando errores de negocio a códigos HTTP semánticos (`NOT_FOUND`, `CONFLICT`, `BAD_REQUEST`) con keys de i18n. El backend nunca lanza strings crudos: cada error ya viene traducido y tipado.

**Commands vs Queries**: Cada módulo separa explícitamente commands (escritura, retornan el objeto actualizado) de queries (lectura, cacheadas con TanStack Query). Cada mutación define explícitamente qué queries invalidar, haciendo el flujo de datos predecible.

## Retos

El principal desafío fue mantener el type-safety end-to-end sin sacrificar la separación de capas. La convención de "duplicar schemas sin importar" entre `@fludge/client` y `@fludge/api` es contraintuitiva, pero permite que cada capa evolucione independiente.

Otro desafío fue el manejo de estados de venta con transiciones complejas: `open` → `partial` → `completed`, con pagos que se pueden revertir. La entidad `Sale` encapsula estas transiciones con validación de estado, evitando estados inválidos desde la UI o la API.

La integración de Better Auth con Expo requirió manejar secure storage, deep linking y la generación de tipos desde la configuración de auth, lo que añadió complejidad al setup inicial pero eliminó boilerplate repetitivo.

## Resultados / Estado actual

El proyecto está en desarrollo activo. Los módulos core de la API (`iam`, `catalog`, `commerce`) están implementados con tests de entidades y commands. La app móvil tiene las pantallas principales funcionando: autenticación, catálogo de productos con filtros, y flujo de ventas con múltiples tipos de pago.

La base de datos corre localmente con Turso para desarrollo y está preparada para despliegue con SQLite embebido o Turso cloud. El servidor expone tanto RPC como OpenAPI con documentación automática.

Próximos pasos: completar el módulo de reportes, agregar soporte offline con sincronización (`packages/sync`), y preparar el primer build de producción con EAS.
