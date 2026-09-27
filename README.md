# Sol Naciente — Showrooms Digitales Interactivos

Landing page de **Sol Naciente Soluciones Digitales**. Hecha con React + Vite + Tailwind CSS.

> ### 👀 ¿Solo querés ver el sitio?
> Abrí **`docs/index.html`** con doble clic. Es el sitio completo en un solo archivo.
> (Si abrís el `index.html` de la raíz, te redirige ahí automáticamente.)

---

## 🚀 Publicar en GitHub Pages (sin instalar nada)

### 1. Subir los archivos

**Opción A: desde la web de GitHub (sin usar la terminal)**

1. Creá un repositorio nuevo en [github.com/new](https://github.com/new) (público).
2. Hacé clic en **"uploading an existing file"**.
3. Arrastrá **todo el contenido** de esta carpeta (incluida la carpeta `docs`) y hacé clic en **Commit changes**.

**Opción B: con git**

```bash
git init
git add .
git commit -m "Primera versión del sitio"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
```

### 2. Activar GitHub Pages (una sola vez)

En el repositorio: **Settings → Pages → Build and deployment**

- **Source:** `Deploy from a branch`
- **Branch:** `main` → carpeta **`/docs`** → **Save**

### 3. Listo ✅

En 1–2 minutos el sitio queda en:

```
https://TU-USUARIO.github.io/TU-REPO/
```

> Si en el paso 2 elegiste la carpeta `/ (root)` en vez de `/docs`, también funciona: la raíz redirige sola a `docs/`.

### Dominio propio (opcional)

1. En **Settings → Pages → Custom domain**, escribí tu dominio (ej. `showroom.solnaciente.com.py`).
2. En tu proveedor de DNS, creá un registro `CNAME` que apunte a `TU-USUARIO.github.io`.
3. Activá **Enforce HTTPS**.

---

## ✏️ Editar el sitio

Requiere **Node.js 20.19+** (recomendado 22).

```bash
npm install                  # una sola vez
npm run dev                  # servidor local en http://localhost:5173 con recarga automática
node scripts/build-docs.mjs  # compila y actualiza la carpeta docs/ para publicar
```

⚠️ **Importante:** después de cualquier cambio, ejecutá `node scripts/build-docs.mjs` y subí la carpeta `docs/` actualizada. Esa carpeta es lo que publica GitHub Pages.

| Qué cambiar                          | Dónde                             |
| ------------------------------------ | --------------------------------- |
| Número de WhatsApp y mensaje         | `src/constants.ts`                |
| Links del menú                       | `src/constants.ts` → `NAV_LINKS`  |
| Textos de cada sección               | `src/sections/*.tsx`              |
| Colores de marca y tipografías       | `src/index.css` → bloque `@theme` |
| Fotos                                | `src/assets/images/`              |
| Título y descripción para buscadores | `index.html`                      |

> Antes de reemplazar fotos, comprimilas (ancho máx. ~1400 px, JPG calidad ~80). Todo va embebido en un solo archivo, así que el peso de las imágenes impacta directo en la velocidad.

---

## 📁 Estructura

```
docs/                        → SITIO COMPILADO (esto es lo que se publica)
index.html                   → plantilla de código fuente (redirige a docs/ si se abre directo)
src/                         → código fuente (secciones, componentes, estilos, fotos)
public/                      → archivos que se copian tal cual (404.html, robots.txt)
scripts/build-docs.mjs       → compila y actualiza docs/
.github/workflows/deploy.yml → método alternativo con GitHub Actions (opcional, ver comentarios)
```

### ¿Por qué no alcanza con el `index.html` de la raíz?

Ese archivo es la plantilla que usa Vite: carga `src/main.tsx` (TypeScript + JSX), que el navegador no puede ejecutar sin compilar. `docs/index.html` es la versión ya compilada, con todo el CSS, JavaScript e imágenes embebidos.
