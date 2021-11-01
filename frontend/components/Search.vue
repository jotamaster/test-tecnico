<template>
  <v-card>
    <v-container fluid>
      Buscador
      <v-row
        align="center"
      >
        <v-col
          cols="12"
          sm="3"
        >
          <v-select
            v-model="brandsSelected"
            :items="brands"
            chips
            label="Marcas"
            multiple
            outlined
          ></v-select>
        </v-col>
         <v-col
          cols="12"
          sm="3"
        >
          <v-select
            v-model="carClassesSelected"
            :items="carClasses"
            chips
            label="Categorias"
            multiple
            outlined
          ></v-select>
        </v-col>
         <v-col
          cols="12"
          sm="3"
        >
          <v-select
            v-model="yearsSelected"
            :items="years"
            chips
            label="Años"
            multiple
            outlined
          ></v-select>
        </v-col>
        <v-col
          cols="12"
          sm="3"
        >
         <v-btn
            elevation="2"
            :disabled="isFormEmpty"
            @click="search"
          > Buscar</v-btn>
          <v-btn
            elevation="2"
            @click="getAll"
          > Todos</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>


<script>
  export default {
    props:{
      years:{
        type:Array,
      },
      brands:{
        type:Array,
      },
      carClasses:{
        type:Array,
      }
    },
    methods: {
      search(event){
        this.$emit('search', this.carClassesSelected,this.brandsSelected,this.yearsSelected)
      },
      getAll(event){
        this.$emit('getAll')
      }
    },
    computed:{
      isFormEmpty(){
        if(!this.carClassesSelected.length && !this.brandsSelected.length && !this.yearsSelected.length) return true
        return false
      }
    },
    data() {
      return {
        yearsSelected:[],
        brandsSelected:[],
        carClassesSelected:[]
      }
    },
  }
</script>
