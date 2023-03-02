<template>
  <div>
    <header class="mb-10 px-8" >
      <div class="container__header">
        <nav class="container__menu">
          <ul class="pl-3">
            <li
              @click="redirectRoute(route)"
              class="mt-3"
              v-for="(route, i) in routes"
              :key="i"
            >
              <p>{{ route.meta.nome }}</p>
            </li>
          </ul>
        </nav>
        <div>
        </div>
        <div class="container__buttons">
          <button class="btn fourth">Garantir ebook</button>
          <!-- <v-btn block small>Comprar</v-btn> -->
        </div>
      </div>
    </header>
    <v-main>
      <v-container pa-0 fluid px-10>
        <router-view @navigateTo="redirectRoute" class="router-view" />
      </v-container>
    </v-main>
  </div>
</template>

<script>
import { routes } from "@/router/index";
export default {
  name: "HeaderComp",
  data: () => ({
    routes: [],
  }),
  mounted() {
    this.routes = routes[0].children;
  },
  methods: {
    redirectRoute(route) {
      if (this.$router) {
        this.$router.push(route);
      }
    },
  },
};
</script>

<style scoped lang="scss">
header {
  height: 15%;
  background: transparent;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
}

.container__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
}

.container__menu {
  width: 50%;
}
.container__menu ul {
  list-style: none;
  display: flex;
  gap: 8%;
}
.container__menu ul li p {
  cursor: pointer;
  color: rgba(255, 255, 255, 0.707);
  position: relative;
  padding: 6px 0;
}
.container__menu ul li p::after {
  content: " ";
  position: absolute;
  width: 0%;
  height: 4px;
  background: var(--v-green-color-base);
  bottom: 0;
  left: 0;
  transition: 0.3s ease-in-out;
}
.container__menu ul li p:hover {
  color: var(--v-green-color-base);
}
.container__menu ul li p:hover::after {
  width: 100%;
}


.btn {
  box-sizing: border-box;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: transparent;
  border: 1px solid #e74c3c;
  border-radius: 0.6em;
  color: #e74c3c;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-self: center;
      -ms-flex-item-align: center;
          align-self: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  margin: 20px;
  padding: 1.2em 2.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
}
.btn:hover, .btn:focus {
  color: #fff;
  outline: 0;
}

.fourth {
  border-color: #c8ff78;
  color: #ffffffcb;
  background-image: -webkit-linear-gradient(45deg, transparent 50%, transparent 50%);
  background-image: linear-gradient(45deg, #c8ff78 50%, transparent 50%);
  background-position: 100%;
  background-size: 400%;
  -webkit-transition: background 300ms ease-in-out;
  transition: background .3s ease-in-out;
}
.fourth:hover {
  color: black;
  background-position: 0;
}
</style>