<template>
    <div>
        <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
    <file-list></file-list>
    </div>
</template>

<script>
import FileList from "@/components/FlieComponents/FileList.vue";

export default {
    name: "FlieListView",
    components: {FileList},
    data() {
        return {
            items: [
                {text: 'Home', disabled: false, href: '/'},
                {text: 'Pan List', disabled: true, href: '/files'},
            ]
        }
    }
}
</script>

<style scoped>

</style>