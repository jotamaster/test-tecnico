<template>
  <v-container>
    <v-row v-if="currentCars" no-gutters>
      <v-col cols="12">
       <search
        @search="getCarsWithFilter"
        @getAll="getAllCars"
        :brands="getBrands"
        :years="getYears"
        :car-classes="getCarClasses"
        ></search>
      </v-col>
      <v-divider></v-divider>
      <v-col v-for="(car , index) in currentCars" :key="index+'cars'" class="py-3" order="1"  >
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
import Seacrch from '@/components/Search.vue'

export default {
  components: {
   CardCar,
   Seacrch
  },
  data() {
    return {
      currentCars:null,
      allCars:null
    }
  },
  computed:{
    getBrands(){
      if(!this.allCars) return []
      let brands= [];
      this.allCars.map( (car) => {
        if(!brands.includes(car.brand))
        brands.push(car.brand);
      });
      return brands;
    },
    getYears(){
      if(!this.allCars) return []
      let years= [];
      this.allCars.map( (car) => {
        if(!years.includes(car.year))
        years.push(car.year);
      });
      return years.sort();
    },
    getCarClasses(){
      if(!this.allCars) return []
      let carClasses= [];
      this.allCars.map( (car) => {
        if(!carClasses.includes(car.carClass));
        carClasses.push(car.carClass)
      });
      return carClasses;
    }
  },
  mounted() {

  },
  watch:{
    allCars: function (val){
      if(val){
        this.validateRecomentionData();
      }
    }
  },
  methods: {
    getCarsWithFilter(carClasses, brands, years){
      let data = {
        brands,
        carClasses,
        years
      }
      this.$axios.post('/api/cars/filters',data)
      .then( (response) => {
        this.currentCars = response.data;
      })
    },
    getAllCars(){
      this.currentCars = this.allCars;
    },
    validateRecomentionData(){
      if(process.client) {
        const data = JSON.parse(localStorage.getItem('recomendationData'))
        if(data){
          let brand = Object.entries(data.brands).sort((a,b) => b[1]-a[1])[0][0]
          let carClass = Object.entries(data.carClasses).sort((a,b) => b[1]-a[1])[0][0]
          let cars = [];
          this.allCars.map( (car) => {
            if( car.carClass == carClass){
               cars.unshift(car)
            }else{
              cars.push(car)
            }
          })
           this.currentCars = cars;
          console.log(carClass)
        }else{
          console.log('sin data');
        }
      }
    }
  },
  async fetch() {
    try{
      const cars = await this.$axios.$get('/api/cars');
      this.currentCars = cars;
      this.allCars = cars;
    }
    catch(error){
      console.log("error al reliazar la peticion al servidor");
      console.log(error);
    }
  }

}
</script>
