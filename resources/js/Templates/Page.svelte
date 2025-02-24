<script>
    import PageBuilder from "../Components/Blocks/PageBuilder/PageBuilder.svelte";
    import MainLayout from "../Layouts/MainLayout.svelte";

    export let data;
</script>

<MainLayout>
    <PageBuilder data={data?.body}/>
</MainLayout>
