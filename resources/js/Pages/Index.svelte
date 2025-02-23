<script>
    import PageBuilder from "../../components/PageBuilder.svelte";

    export let data;
    console.log(data);
</script>

<PageBuilder data={data?.body}/>
