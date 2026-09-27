// Compila el sitio y copia el resultado a /docs para publicarlo en GitHub Pages
// ("Deploy from a branch" → main → /docs) o abrirlo con doble clic.
//
// Uso:  node scripts/build-docs.mjs
import { execSync } from "node:child_process";
import { cpSync, existsSync, readdirSync, rmSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const docs = join(root, "docs");

console.log("› Compilando (npm run build)…");
execSync("npm run build", { cwd: root, stdio: "inherit" });

if (!existsSync(join(dist, "index.html"))) {
  console.error("✗ No se encontró dist/index.html — el build falló.");
  process.exit(1);
}

rmSync(docs, { recursive: true, force: true });
cpSync(dist, docs, { recursive: true });

const files = readdirSync(docs);
const kb = Math.round(statSync(join(docs, "index.html")).size / 1024);
console.log(`✓ docs/ actualizado (${files.join(", ")}) — index.html: ${kb} KB`);
