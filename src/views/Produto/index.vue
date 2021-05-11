<template>
  <div class="container mx-auto">
    <div v-if="produto" class="produtoPage">
      <ul class="photos" v-if="produto.fotos">
        <li v-for="(foto, index) in produto.fotos" :key="index">
          <img :src="foto.src" alt="" />
        </li>
      </ul>

      <div class="infoProduto">
        <h3 class="text-3xl">{{ produto.nome }}</h3>
        <h2 class="text-4xl">{{ produto.preco | numeroPreco }}</h2>
        <p class="text-md">{{ produto.descricao }}</p>

        <button
          v-if="produto.vendido === 'false'"
          class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        >
          Comprar
        </button>
        <button
          v-else
          disabled
          class="bg-blue-100 hover:bg-blue-200 text-black font-bold border py-2 px-4 border-blue-700 hover:border-blue-500 rounded"
        >
          Produto esgotado
        </button>
      </div>
    </div>
    <CarregandoPagina v-else />
  </div>
</template>
<script>
import { api } from "../../services.js";
export default {
  name: "Produto",
  props: ["id"],
  data() {
    return {
      produto: null
    };
  },

  methods: {
    getProduto() {
      api.get(`/produto/${this.id}`).then(response => {
        this.produto = response.data;
      });
    }
  },

  created() {
    this.getProduto();
  }
};
</script>
<style></style>
