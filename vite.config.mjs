import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import {PrimeVueResolver} from '@primevue/auto-import-resolver';
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({

    plugins: [
        vue(),
        vueDevTools(),
        Components({
            resolvers: [
                PrimeVueResolver()
            ]
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },

    build: {
        rollupOptions: {
          output: {
            manualChunks(id) {
              if (id.includes('node_modules')) {
                if (id.includes('vue')) {
                  return 'vue'; // Separate Vue-related files
                }
                if (id.includes('lodash')) {
                  return 'lodash'; // Separate Lodash
                }
                return 'vendor'; // All other libraries
              }
            },
          },
        },
      },
    
});