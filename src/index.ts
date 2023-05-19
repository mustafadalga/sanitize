import { sanitize } from "./sanitize";
import type { App, Plugin } from "vue";

export const sanitizePlugin: Plugin = {
    install: (app: App) => {
        app.directive("sanitize", sanitize);
    },
};

export { sanitize };
