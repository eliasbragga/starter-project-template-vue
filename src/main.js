import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from "vuetify";

Vue.config.productionTip = false
Vue.use(Vuetify);
let vuetify = new Vuetify({
  icons: {
    iconfont: "md", // material design
  },
  theme: {
    themes: {
      light: {
        goldenTheme: "#CBB26A",
        blackTheme: "#0d0d0d",
        sale: "#c8ff78",
        error: "#FF6060",
        "background-site": "#0d0d0d",
        "green-color": "#c8ff78",
        "white-color": "#fff",
        "background-golden": "#CBB26A",
        "color-buttons":"#"
      },
    },
    options: {
      customProperties: true,
    },
  },
});


new Vue({
  vuetify,
  router,
  el: "#app",
  store,
  render: (h) => h(App),
});
