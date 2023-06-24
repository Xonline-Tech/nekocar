<template>
    <div>
        <md-view-component/>
        <md-editor-component/>
    </div>
</template>

<script>
import MdViewComponent from "@/components/md/MdViewComponent.vue";
import MdEditorComponent from "@/components/md/MdEditorComponent.vue";

export default {
    name: "MdView",
    components: {MdViewComponent, MdEditorComponent}
}
</script>

<style scoped>

</style>