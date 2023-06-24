<template>
    <v-md-editor v-model="mdText"></v-md-editor>
</template>

<script>
export default {
    name: "mdEditorComponent",
    data() {
        return {
            mdText: `## 11111\n### heading3\n\`\`\`\n{\n   "name": "test",\n    "age": 18\n}\n\`\`\``,
        }
    },
}
</script>

<style scoped>

</style>