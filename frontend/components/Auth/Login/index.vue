<template>
  <v-container fluid>
    <v-row align="center">
      <v-col
        class="d-flex"
        cols="3"
        sm="3"
      >
        <v-text-field
          v-model="loginData.email"
          label="E-mail"
          :rules="emailRules"
          required
          type="email"
        ></v-text-field>
      </v-col>

      <v-col
        class="d-flex"
        cols="3"
        sm="3"
      >
        <v-text-field
          v-model="loginData.password"
          required
          label="password"
        ></v-text-field>
      </v-col>
      <v-col
        class="d-flex"
        cols="3"
        sm="3"
      >
       <v-btn
      class="mr-4"
      @click="login"
    >
      submit
    </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      loginData: {
        email: "john@email.com",
        password: "123456"
      }
    };
  },
  methods: {
   login () {
        this.$axios.post('/api/auth/login',this.loginData)
        .then( (response) => {

          let user = response.data.data;
          localStorage.setItem('user', JSON.stringify(user))
          this.$store.commit('set_user',JSON.parse(user))

        }).catch( (error) => {

        }).finally( ()=> {
          location.reload()
        })

    }
  },
  mounted() {
    if(process.client){
      if(localStorage.user){
       this.$router.push('/')
      }
    }
  },
};
</script>
<style></style>
