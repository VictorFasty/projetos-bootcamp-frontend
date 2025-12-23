import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { 
    port: 3000, //Por padrao a porta vai ser 5173, alterando agora pra 3000
  },
})