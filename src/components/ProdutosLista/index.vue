<template>
  <section class="py-2">
    <div v-if="produtos" class="grid grid-cols gap-4 md:grid-cols-3">
      <div
        v-for="produto in produtos"
        class="border-gray-100 produto shadow-md p-4 my-4"
        :key="produto.id"
      >
        <router-link to="/">
          <img v-if="produto.fotos" :src="produto.fotos[o].src" alt="" />
          <h3 class="text-xl text-gray-600">{{ produto.nome }}</h3>
          <p class="text-md text-gray-400">{{ produto.descricao }}</p>
          <h2 class="text-3xl text-green-900">
            R$
            {{ produto.preco }}
          </h2>
        </router-link>
      </div>
    </div>
    <div v-if="produtos && produtos.length === 0">
      <p>Busca sem resultados, tente outra palavra</p>
    </div>
    <PaginacaoProdutos
      :produtosTotal="produtosTotal"
      :produtosPorPagina="produtosPorPagina"
    />
  </section>
</template>
<script>
import PaginacaoProdutos from "../PaginacaoProdutos/index";
import { api } from "../../services.js";
import { seralize } from "../../helpers.js";
export default {
  name: "ProdutosLista",
  components: {
    PaginacaoProdutos
  },
  data() {
    return {
      produtos: null,
      produtosTotal: 0,
      produtosPorPagina: 3
    };
  },
  computed: {
    url() {
      const query = seralize(this.$route.query);
      return `/produto?_limit=6${query}`;
    }
  },
  methods: {
    getProdutos() {
      api.get(this.url).then(response => {
        this.produtosTotal = Number(response.headers["x-total-count"]);
        this.produtos = response.data;
      });
    }
  },
  created() {
    this.getProdutos();
  },
  watch: {
    url() {
      this.getProdutos();
    }
  }
};
</script>
<style lang="scss" scoped></style>
