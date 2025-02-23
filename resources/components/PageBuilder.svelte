<script>
    export let data = [];
    let component;

    switch (data[0]?.type) {
        case 'headline':
            component = import.meta.glob('./Blocks/Headline/Component.svelte', {eager: true})['./Blocks/Headline/Component.svelte']
    }
</script>

<svelte:component this={component?.default}/>
