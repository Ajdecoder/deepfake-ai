import path from "path"; // Required for path.resolve
import { fileURLToPath } from "url"; // Required to mimic __dirname in ESM
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import flowbiteReact from "flowbite-react/plugin/vite";

// --- ESM __dirname Fix ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// --------------------------

export default defineConfig({
  plugins: [react(), tailwindcss(), flowbiteReact()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },  
})