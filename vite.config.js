import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable minification
    minify: 'esbuild',

    // Target modern browsers for smaller bundle size
    target: 'esnext',

    // CSS code splitting
    cssCodeSplit: true,

    // Rollup options
    rollupOptions: {
      output: {
        // Manual chunks for better caching
        manualChunks: (id) => {
          // Separate vendor chunks
          if (id.includes('node_modules')) {
            // framer-motion is large, separate it
            if (id.includes('framer-motion')) {
              return 'framer-motion'
            }
            // lucide-react icons, separate for caching
            if (id.includes('lucide-react')) {
              return 'lucide-react'
            }
            // React core
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor'
            }
          }
          return null
        },

        // Asset file naming
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/\.(png|jpe?g|svg|gif|webp|ico)$/.test(assetInfo.name)) {
            return `assets/images/[name]-[hash][ext]`
          }
          return `assets/[name]-[hash][ext]`
        },

        // Chunk file naming
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },

    // Chunk size warning limit
    chunkSizeWarningLimit: 500,

    // Source maps for production (set to false for smaller builds)
    sourcemap: false,

    // Enable CSS tree shaking
    cssMinify: true,
  },

  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react'],
  },
})
