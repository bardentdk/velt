import '../css/app.css';
import { createApp, h } from 'vue';
import { createInertiaApp, Head, Link } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

// --- CORRECTION ICI : On utilise le paquet NPM directement ---
// Plus de chemins compliqués avec des ../../../
import { ZiggyVue } from 'ziggy-js';

// On importe toujours ton fichier de configuration généré
import { Ziggy } from './ziggy';

const appName = import.meta.env.VITE_APP_NAME || 'Velt';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) })
            .use(plugin)
            // On utilise le plugin avec la config
            .use(ZiggyVue, Ziggy)
            .component('Head', Head)
            .component('Link', Link);

        app.mount(el);
    },
    progress: {
        color: '#22D3EE',
        showSpinner: false,
    },
});