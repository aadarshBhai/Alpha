import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

/** Ensures HTML document requests are served with Content-Type: text/html */
function htmlContentType() {
  return {
    name: 'html-content-type',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = (req.url || '').split('?')[0];
        const isDocumentRequest =
          url === '' ||
          url === '/' ||
          (url.startsWith('/') && !url.startsWith('/@') && !url.includes('.'));
        if (isDocumentRequest) {
          const orig = res.writeHead;
          res.writeHead = function (code, headers, ...rest) {
            const h = typeof headers === 'object' && !Array.isArray(headers)
              ? { ...headers, 'Content-Type': 'text/html; charset=utf-8' }
              : headers;
            return orig.apply(this, [code, h, ...rest]);
          };
        }
        next();
      });
    },
  };
}

export default defineConfig({
  base: process.env.BASE_PATH || '/Alpha/',
  plugins: [htmlContentType(), react()],
  server: {
    port: 5173,
    fs: {
      strict: false
    }
  },
  build: {
    rollupOptions: {
      external: [],
      output: {
        manualChunks: undefined
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
});
