import createServer from '@inertiajs/svelte/server'
import {createInertiaApp} from "@inertiajs/svelte";
import { render } from 'svelte/server'

createServer(page => {
        return createInertiaApp({
            page,
            title: title => `${title}`,
            resolve: name => {
                const pages = import.meta.glob('./Pages/**/*.svelte', {eager: true})
                console.log(pages[`./Pages/${name}.svelte`]?.default);
                return pages[`./Pages/${name}.svelte`]
            },
            setup({ App, props }) {
                return render(App, { props })
            },
        });
    }
)
