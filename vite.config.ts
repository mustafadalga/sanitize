import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [ vue() ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'sanitize',
            fileName: 'sanitize',
        },
        rollupOptions: {
            external: [ 'vue', "dompurify" ],
            output: {
                globals: {
                    vue: 'Vue',
                    dompurify:"dompurify"
                },
            },
        },
    },
})