<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-if="isLogged"
      v-model="drawer"
      app
    >

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Cars Manager
          </v-list-item-title>
          <v-list-item-subtitle>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          link
        >
          <v-list-item-icon>
            <v-icon>{{ 'mdi-view-dashboard'}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              <nuxt-link to="/dashboard">Dashboard</nuxt-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
        >
          <v-list-item-icon>
            <v-icon>{{ 'mdi-view-sing-out'}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title @click="logout">
              Salir
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>

    <v-app-bar app >
      <v-app-bar-nav-icon v-if="isLogged" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title v-if="ifIndex" >Cars </v-toolbar-title>
      <v-toolbar-title v-if="ifIndex && !isLogged" > <nuxt-link to="/auth/login">Login</nuxt-link> </v-toolbar-title>
      <nuxt-link v-if="!ifIndex" to="/">  Volver al Inicio</nuxt-link>
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
      },
      isLogged(){
        return this.$store.getters['isAuthenticated']
      }
    },
    methods: {
      logout(){
        console.log('que pasa')
        localStorage.removeItem('user')
        this.$store.commit('set_user',null)
        location.reload()
      }
    },
    mounted() {
      if(process.client){

        if(localStorage.user){

          this.$store.commit('set_user',JSON.parse(localStorage.user))
           console.log(this.$store.getters['isAuthenticated'])
        }
      }
    },
  }
</script>

<style >
  .theme--dark.v-application {
    background: white !important;
    color: black;
}

.v-toolbar__content, .v-toolbar__extension {
    justify-content: space-between;
}
</style>
