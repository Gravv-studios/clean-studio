import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
 plugins: [react(), ...(mode === 'crm' ? [{name:'crm-local-api',async configureServer(server){const {crmLocalApi}=await import('./scripts/crm-api.mjs');server.middlewares.use(crmLocalApi(process.cwd()));}}] : [])],
 server: { host:'127.0.0.1',port: mode === 'crm' ? 3001 : 3000,strictPort:true,open:false,fs:{deny:['.env','.env.*','*.{crt,pem}','**/.git/**','**/.local-crm/**']} },
 build: {outDir:mode === 'crm' ? 'dist-crm' : 'dist'}
}));
