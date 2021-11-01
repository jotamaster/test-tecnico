<template>
  <v-container>
    <v-row center align-self="center">
      <v-col cols="12">
        <h3>Agregar auto</h3>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="10" align-self="center">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="12" md="3" sm="12">
              <v-text-field
                v-model="car.owner"
                label="Dueño"
                required
                :rules="fieldRules"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3" sm="12">
              <v-text-field
                v-model="car.description"
                label="Descripción"
                required
                :rules="fieldRules"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3" sm="12">
              <v-text-field
                v-model="car.brand"
                label="Marca"
                required
                :rules="fieldRules"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3" sm="12">
              <v-text-field
                v-model="car.year"
                label="Año"
                required
                :rules="fieldRules"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3" sm="12">
              <v-text-field
                v-model="car.carClass"
                label="Categoria"
                required
                :rules="fieldRules"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3" sm="12">
              <v-text-field
                v-model="car.model"
                label="Modelo"
                required
                :rules="fieldRules"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3" sm="12">
              <v-text-field
                v-model="car.imageOne"
                label="Imagen uno"
                required
                :rules="fieldRules"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3" sm="12">
              <v-text-field
                v-model="car.imageTwo"
                label="Imagen dos"
                required
                :rules="fieldRules"
              ></v-text-field>
            </v-col>
            <v-btn :disabled="!valid" class="mr-4" @click="submit">
              Guardar
            </v-btn>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  middleware: "isAuthenticated",
  data: () => ({
    valid: true,
    car: {
      description: "auto semi nuevo bien cuidado",
      owner: "Jorge Bustamante Dos",
      brand: "Changan",
      year: "2015",
      carClass: "sedan",
      model: "NEW ALSVIN",
      imageOne: "https://derco-pe-prod.s3.amazonaws.com/images/carcontent/2021-05-06%2012%3A56%3A35-exterior_2-min.jpg",
      imageTwo: "https://derco-pe-prod.s3.amazonaws.com/images/carcontent/2021-05-06%2012%3A56%3A35-exterior_2-min.jpg",
    },
    fieldRules: [
      (v) => !!v || "Este campo es requerido"
    ]
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
      console.log(this.$refs.form.validate())
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
      console.log(this.$refs.form.resetValidation())
    },
    submit(){
      if(this.$refs.form.validate()){
        this.car.images = [this.car.imageOne,this.car.imageTwo]
        this.$axios.post('/api/cars',this.car,{
          headers:{
            "auth-token": this.$store.getters['getUserInfo'].token
          }
        })
        .then( (response ) => {
          this.$router.push('/')
        })
      }
    }
  },
};
</script>
