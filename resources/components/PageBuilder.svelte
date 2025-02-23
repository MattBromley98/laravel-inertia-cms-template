<script async>
    export let data = [];

    const test = await import("./Blocks/Headline/Component.svelte");
</script>

<!--{#each data as component}-->
    <!--{#await importComponent(component?.type) then componentBlock}-->
        <svelte:component this={test?.default}/>
    <!--{/await}-->
<!--{/each}-->
