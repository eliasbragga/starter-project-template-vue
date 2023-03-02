<template>
  <v-app >
      <v-main class="app">
        <HomeViwe/>
      </v-main>

  </v-app>
</template>

<script>
import HomeViwe from '@/views/HomeView.vue'
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    HomeViwe
  }
};
</script>

<style>
.app {
  height: 100%;
  background:var(--v-background-site-base);
}

p,h1,h2,h3,h4,h5,h6 {
  color: white;
}
</style>

