import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/index.css";
import CarregandoPagina from "@/components/CarregandoPagina/";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faSearch,
  faUser,
  faHeart,
  faShoppingCart,
  faBars
} from "@fortawesome/free-solid-svg-icons";
library.add(faSearch, faUser, faHeart, faShoppingCart, faBars);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.component("CarregandoPagina", CarregandoPagina);
Vue.filter("numeroPreco", valor => {
  valor = Number(valor);
  if (!isNaN(valor)) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
  } else {
    return "";
  }
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
