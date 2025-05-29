import { createServer } from '@inertiajs/node';
import { createInertiaApp } from '@inertiajs/react';
import ReactDOMServer from 'react-dom/server';
import route from 'ziggy-js';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import appName from './config/appName'; // فرض بر اینکه appName رو از جایی import می‌کنی

createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        title: (title) => `${title} - ${appName}`,
        resolve: (name) => resolvePageComponent(`./pages/${name}.jsx`, import.meta.glob('./pages/**/*.jsx')),
        setup: ({ App, props }) => {
            global.route = (name, params, absolute) =>
                route(name, params, absolute, {
                    ...page.props.ziggy,
                    location: new URL(page.props.ziggy.location),
                });

            return <App {...props} />;
        },
    })
);
