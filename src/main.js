import Vue from "vue";
import VTooltip from "v-tooltip";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(VTooltip);

new Vue({
  render: h => h(App)
}).$mount("#app");
