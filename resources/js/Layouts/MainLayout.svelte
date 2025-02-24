<script>
    import Navigation from "./Nav/Navigation.svelte";
    import OrganisationSchema from "../Schemas/OrganisationSchema.svelte";
</script>

<OrganisationSchema/>
<Navigation/>
<div>
    <slot/>
</div>
