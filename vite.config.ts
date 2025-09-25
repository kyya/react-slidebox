import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            'react-slidebox': path.resolve(__dirname, './lib/react-slidebox/src/index.js')
        }
    }
})
