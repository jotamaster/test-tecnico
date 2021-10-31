<template>
  <v-card
    class="mx-auto"
    max-width="300"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="car.images[0]"
    >
      <v-card-title class="text--dark">{{car.owner}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      {{car.brand}}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{car.model}}</div>

      <div>{{car.year}}</div>
      <div>{{car.carClass}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Ver más
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props:{
    car:{
      type:Object
    }
  }
}
</script>
