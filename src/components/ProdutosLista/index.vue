<template>
  <section class="py-2">
    <div v-for="produto in produtos" class="border" :key="produto.id">
      <h3>{{ produto.nome }}</h3>
      <p>{{ produto.descricao }}</p>
      <h2>{{ produto.preco }}</h2>
    </div>
  </section>
</template>

<script>
import { api } from "../../services.js";
import { seralize } from "../../helpers.js";
export default {
  data() {
    return {
      produtos: null
    };
  },

  computed: {
    url() {
      const query = seralize(this.$route.query);
      return `/produto?_limit=10${query}`;
    }
  },

  methods: {
    getProdutos() {
      api.get(this.url).then(response => {
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

<style></style>
