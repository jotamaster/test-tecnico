<template>
  <v-row v-if="car" class="px-6">
      <v-col cols="12" class="mt-12">
        <h2>{{car.description}}</h2>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12" class="mt-12">
        <h3>Informacion general del vehiculo:</h3>
        <p>Dueño: {{car.owner}}</p>
        <p>Marca: {{car.brand}}</p>
        <p>Modelo: {{car.model}}</p>
        <p>Categoria: {{car.carClass}}</p>
        <p>Año: {{car.year}}</p>
        <p></p>
        <p></p>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12" class="mt-12">
        <h3>Galeria de imagenes</h3>
      </v-col>
      <v-col
        v-for="(image, index) in car.images"
        :key="index+'image'"
        class="d-flex child-flex"
        cols="12" sm="12" md="4"
      >
        <v-img
          :src="image"
          aspect-ratio="1"
          class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
  </v-row>
</template>
<script>
export default {
  data () {
    return {
      car: null
    }
  },
  async fetch () {

    try {
      const car = await this.$axios.$get(`/api/cars/slug/${this.$route.params.slug}`);
      this.car = car;
    }
    catch (error) {
      console.log("error al reliazar la peticion al servidor");
      console.log(error);
    }

  },
  mounted () {

  }
}
</script>
