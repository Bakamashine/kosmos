// import "./bootstrap";
import { createInertiaApp, router } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import React, { StrictMode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { hydrateRoot } from "react-dom/client";
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    // title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob("./Pages/**/*.tsx")
        ),
    setup({ el, App, props }) {
        hydrateRoot(el, <StrictMode>
            <App {...props} />
        </StrictMode>)
        // const root = createRoot(el);

        // root.render(
        //     <StrictMode>
        //         <App {...props} />
        //     </StrictMode>
        // );
    },
    progress: {
        color: "#4B5563",
    },
});
