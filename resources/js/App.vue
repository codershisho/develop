<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <div>
          <img src="" />
        </div>
        <v-list-item
          v-for="[icon, text, url] in menus"
          :key="icon"
          :prepend-icon="icon"
          :title="text"
          :to="url"
          link
          bg-color="primary"
          class="menu-item"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Application</v-app-bar-title>
    </v-app-bar> -->

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const drawer = ref(null);

const menus = [
  ['mdi-home', 'Dashboard', '/'],
  ['mdi-account-circle-outline', 'partners', '/partners'],
];

const data = axios.get('/api/sample');
</script>

<style>
.menu-item .v-list-item__overlay {
  background-color: royalblue !important;
}
</style>
