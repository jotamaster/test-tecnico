<template>
  <v-app id="inspire">
    <!-- <v-navigation-drawer
      v-model="drawer"
      app
    >
    </v-navigation-drawer> -->

    <v-app-bar app>
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->

      <v-toolbar-title v-if="ifIndex" >Cars</v-toolbar-title>
      <nuxt-link v-else to="/">  Volver al Inicio</nuxt-link>
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
    computed:{
      ifIndex() {
        if(this.$route.name == 'index') return true
        return false
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
