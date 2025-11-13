import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/css/app.css",
                "resources/css/main.css",
                "resources/js/app.tsx",
                "resources/js/bootstrap.js",
                "resources/js/ziggy.js"
            ],
            refresh: true,
        }),
        react(),
        // tailwindcss(),
    ],
});
