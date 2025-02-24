<script module>
    let component = {};

    const loadComponents = async () => {
        if(typeof window !== 'undefined') {
            return;
        }

        component['headline'] = await import.meta.glob('../../Blocks/Headline/Component.svelte')['../Headline/Component.svelte']();
        component['text_and_image'] = await import.meta.glob('../../Blocks/TextAndImage/Component.svelte')['../TextAndImage/Component.svelte']()
    }

    loadComponents();
</script>


<script>
    export let data = {
        type: 'headline'
    }

    const importComponents = async () => {
        switch(data?.type) {
            case 'headline':
                return await import('../Headline/Component.svelte');
            case 'text_and_image':
                return await import('../TextAndImage/Component.svelte');
        }
    }
</script>

{#if typeof window === 'undefined'}
    {#if component[data?.type]}
        <svelte:component this={component[data?.type]?.default} {data}/>
    {/if}
{:else}
    {#await importComponents() then component}
        <svelte:component this={component?.default} {data}/>
    {/await}
{/if}
