<template>
    <v-md-preview :text="mdText"></v-md-preview>
</template>

<script>
export default {
    name: "mdViewComponent",
    data() {
        return {
            mdText: `## 11111\n### heading3\n\`\`\`\n{\n   "name": "test",\n     "age": 18\n}\n\`\`\``
        }
    },
}
</script>

<style scoped>

</style>