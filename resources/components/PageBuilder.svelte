<script module>
    let state = 0;
    let component;
    const loadComponent = async () => {
        component = await import.meta.glob('./Blocks/Headline/Component.svelte')['./Blocks/Headline/Component.svelte']();
        state = 1;
    }

    loadComponent();
</script>


<script>
    let state = 0;
    const loadComponent = async () => {
        if(component?.default) {
            return;
        }
        component = await import.meta.glob('./Blocks/Headline/Component.svelte')['./Blocks/Headline/Component.svelte']();
        state = 1;
    }

    loadComponent();
    import Loadable from 'svelte-loadable'

    /*export let data = [];
    let component;

    const resolveComponent = () => {
        switch (data[0]?.type) {
            case 'headline':
                component = import.meta.glob('./Blocks/Headline/Component.svelte', {
                    eager: true
                })['./Blocks/Headline/Component.svelte']
        }

        return component;
    }*/
</script>

{#if typeof window === 'undefined'}
    {#if component?.default}
        <svelte:component this={component?.default}/>
    {/if}
{:else}
    {#await import('./Blocks/Headline/Component.svelte') then component}
        <svelte:component this={component?.default}/>
    {/await}
{/if}

