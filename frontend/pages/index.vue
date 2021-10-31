<template>
  <v-container>
    <v-row v-if="cars" no-gutters>
      <v-col v-for="(car , index) in cars" :key="index+'cars'" class="py-3" order="1">
        <card-car :car="car"></card-car>
      </v-col>
    </v-row>
    <v-row v-else no-gutters>
      <h3>Sin Vehículos para mostrar..</h3>
    </v-row>
  </v-container>
</template>
<script>
import CardCar from '@/components/CardCar.vue'

export default {
  components: {
   CardCar
  },
  data() {
    return {
      cars:null
    }
  },
  methods: {
  },
  async fetch() {

    try{
      const cars = await this.$axios.$get('/api/cars');
      this.cars = cars;
    }
    catch(error){
      console.log("error al reliazar la peticion al servidor");
      console.log(error);
    }

  }

}
</script>
