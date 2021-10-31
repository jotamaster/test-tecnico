<template>
  <v-app id="inspire">
    <!-- <v-navigation-drawer
      v-model="drawer"
      app
    >
    </v-navigation-drawer> -->

    <v-app-bar app>
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->

      <v-toolbar-title>Cars</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <nuxt></nuxt>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        drawer: false,
        cars:[
          {

          }
        ]
      }
    },
  }
</script>

<style >
  .theme--dark.v-application {
    background: white !important;
    color: black;
}
</style>
