<template>
    <div>
        <v-list v-for="(fileItem,key) in fileLists" :key="key">
            <v-list-item link>
                <v-list-item-icon>
                    <v-btn fab small dark color="blue">
                        <v-icon >
                            {{ fileItem.fileIcon }}
                        </v-icon>
                    </v-btn>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title v-text="fileItem.fileName"/>
                    <v-list-item-subtitle v-text="fileItem.ModifyDate"/>
                </v-list-item-content>
                <v-list-item-action>
                    <v-btn icon>
                        <v-icon color="grey lighten-1">mdi-information</v-icon>
                    </v-btn>
                </v-list-item-action>
            </v-list-item>
        </v-list>
    </div>
</template>

<script>
export default {
    name: "FileList",
    data() {
        return {
            fileLists: [
                {fileName: '文件夹1', ModifyDate: '2023-02-04 23:59:59', fileSize: '', fileIcon: 'mdi-folder'},
                {fileName: '文件夹2', ModifyDate: '2023-02-04 23:59:59', fileSize: '', fileIcon: 'mdi-folder'},
                {fileName: '文件夹3', ModifyDate: '2023-02-04 23:59:59', fileSize: '', fileIcon: 'mdi-folder'},
                {fileName: '文件夹4', ModifyDate: '2023-02-04 23:59:59', fileSize: '', fileIcon: 'mdi-folder'},
                {fileName: 'README.md', ModifyDate: '2023-02-04 23:59:59', fileSize: '', fileIcon: 'mdi-text-box'},
                {fileName: 'live.mp4', ModifyDate: '2023-02-04 23:59:59', fileSize: '149MB', fileIcon: 'mdi-video'},
                {fileName: 'liveMusic.mp3', ModifyDate: '2023-02-04 23:59:59', fileSize: '23MB', fileIcon: 'mdi-music'},
            ]
        }
    }
}
</script>

<style scoped>

</style>