import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/

const root = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '#components': resolve(dirname(fileURLToPath(import.meta.url)), 'components'),
      '#constants': resolve(dirname(fileURLToPath(import.meta.url)), 'constants'),
      '#store': resolve(dirname(fileURLToPath(import.meta.url)), 'store'),
      '#hoc': resolve(dirname(fileURLToPath(import.meta.url)), 'hoc'),
      '#windows': resolve(dirname(fileURLToPath(import.meta.url)), 'windows'),
    }


  }
})
