import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            {
                find: 'variables',
                replacement: '/src/utils/variables'
            },
            {
                find: 'modules',
                replacement: '/src/modules'
            },
            {
                find: 'components',
                replacement: '/src/components'
            },
        ]
    },
});