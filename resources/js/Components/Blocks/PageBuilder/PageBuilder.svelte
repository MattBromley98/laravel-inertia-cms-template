<script>
    import PageBuilderItem from "./PageBuilderItem.svelte";

    export let data = [];
</script>

{#each data as component}
    <PageBuilderItem data={component}/>
{/each}

