import Vue from "vue";
import Vuex from "vuex";
import { api } from "../services";

Vue.use(Vuex);

export default new Vuex.Store({
  // strict: true,
  state: {
    login: false,
    usuario: {
      id: "",
      nome: "",
      email: "",
      senha: "",
      cep: "",
      rua: "",
      bairro: "",
      cidade: "",
      estado: ""
    }
  },
  mutations: {
    // preciso do estado, e do payload, que vou enviar quando fizer um commit
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },

    UPDATE_USUARIO(state, payload) {
      //assign vai copiar as propriedades de um objeto de origem para um de destinoi, e retornar o obj.destino
      state.usuario = Object.assign(state.usuario, payload);
    }
  },
  actions: {
    getUsuario(context, payload) {
      api.get(`/usuario/${payload}`).then(response => {
        context.commit("UPDATe_USUARIO", response.data);
        context.commit("UPDATE_LOGIN", true);
      });
    }
  },
  modules: {}
});
