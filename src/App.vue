<template>
    <div id="app">
        <v-app>
            <!---->
            <v-app-bar app color="primary">
                <v-btn class="mr-2"
                    icon @click.stop="showNav=!showNav"
                       v-show="$vuetify.breakpoint.smAndDown">
                    <v-icon>mdi-menu</v-icon>
                </v-btn>
                NekoCar
            </v-app-bar>
            <v-navigation-drawer app
                                 dark
                                 color="primary"
                                 :bottom="$vuetify.breakpoint.smAndDown"
                                 v-model="showNav"
                                 :mini-variant.sync="navMini">
                <v-list>
                    <v-list-item v-for="(menuItem,key) in menuList"
                                 :key="key"
                                 @click.stop="$router.push(menuItem.menuHref)">
                        <v-list-item-icon>
                            <v-icon>{{ menuItem.menuIcon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title v-text="menuItem.menuName"/>
                    </v-list-item>
                </v-list>
                <template v-slot:append >
                    <v-list :v-show="!$vuetify.breakpoint.smAndDown">
                        <v-list-item link @click="navMini = !navMini">
                            <v-list-item-icon>
                                <v-icon>mdi-menu</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title v-text="navMini ? '展开':'收起'"/>
                        </v-list-item>
                    </v-list>
                </template>
            </v-navigation-drawer>
            <v-main>
                <router-view/>
            </v-main>
        </v-app>
    </div>
</template>
<script>
export default {
    name: 'App',
    data() {
        return {
            menuList: [
                {menuName: 'Home', menuIcon: 'mdi-home', menuHref: '/'},
                {menuName: 'Pan List', menuIcon: 'mdi-folder', menuHref: '/files'},
                {menuName: 'Cliper', menuIcon: 'mdi-content-cut', menuHref: '/files'},
                {menuName: 'Notes', menuIcon: 'mdi-note-edit-outline', menuHref: '/md'},
                {menuName: 'About', menuIcon: 'mdi-information', menuHref: '/about'},
            ],
            navMini: false,
            showNav: true
        }
    }
}
</script>
