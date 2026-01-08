import { defineConfig } from '@playwright/test';

export default defineConfig({
    // webServer: {
    //     command: 'npm run build && npm run preview',
    //     port: 4173
    // },
    use: {
        baseURL: "http://localhost:5173"
    },
    testDir: 'e2e'
});
