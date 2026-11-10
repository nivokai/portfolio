import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Chemins relatifs : le site fonctionne aussi bien à la racine que dans un sous-dossier (GitHub Pages).
  base: './',
  plugins: [react()],
})
