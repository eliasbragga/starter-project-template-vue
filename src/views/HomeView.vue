<template>
  <v-container class="appComp" fluid px-0>
    <v-layout>
      <v-flex>
        <header-comp />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import HeaderComp from '../components/HeaderComp'

  export default {
    name: 'HomeView',

    components: {
      HeaderComp,
    },
  }
</script>

<style>
.appComp {
  height: 100%;
  max-width: 1500px ;
 
}

</style>
