// Varianta offline: un singur fișier HTML, cu tot (scripturi, stiluri, fonturi) inclus în el.
// npm run build:offline  →  offline/site-dr-mihailescu.html
import { defineConfig, mergeConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'
import base from './vite.config.js'

export default mergeConfig(base, defineConfig({
  plugins: [viteSingleFile()],
  build: { outDir: 'offline', assetsInlineLimit: 100000000 },
}))
