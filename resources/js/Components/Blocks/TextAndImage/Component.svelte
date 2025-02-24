<script>
    export let data = {};
</script>

<div class="flex grid-cols-2">
    <img src="{data?.image[0]?.permalink}">
    <div>
        <h2>{data?.title}</h2>
        <p>{data?.content}</p>
    </div>
</div>
