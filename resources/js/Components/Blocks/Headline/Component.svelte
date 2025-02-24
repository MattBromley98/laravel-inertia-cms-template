<script>
    export let data = {};

    console.log(data);
</script>

<div class="container mx-auto text-center">
    <h1 style="color: {data?.primary_colour}">{data?.primary_text}</h1>
    <h1 style="color: {data?.secondary_colour}">{data?.secondary_text}</h1>
</div>
