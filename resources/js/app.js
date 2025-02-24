import {createInertiaApp} from '@inertiajs/svelte'
import {hydrate, mount} from 'svelte'

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Templates/**/*.svelte')
        return pages[`./Templates/${name}.svelte`]()
    },
    setup({ el, App, props }) {
        if (el.dataset.serverRendered === 'true') {
            hydrate(App, { target: el, props })
        } else {
            mount(App, { target: el, props })
        }
    },
})
