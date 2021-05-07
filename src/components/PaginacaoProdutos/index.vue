<template>
  <div>
    <ul class="paginacao">
      <li v-for="pagina in paginasTotal" :key="pagina">
        <router-link :to="{ query: query(pagina) }">{{ pagina }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PaginacaoProdutos",

  props: {
    produtosPorPagina: {
      type: Number,
      default: 1
    },

    produtosTotal: {
      type: Number,
      default: 1
    }
  },

  methods: {
    query(pagina) {
      return {
        ...this.$route.query,
        _page: pagina
      };
    }
  },

  computed: {
    paginasTotal() {
      const total = this.produtosTotal / this.produtosPorPagina;
      /* se o valor for negativo */
      return total !== Infinity ? Math.ceil(total) : 0;
    }
  }
};
</script>

<style lang="scss" scoped>
.paginacao {
  display: flex;
  margin-top: 60px;
  li {
    a {
      margin: 0 10px;
      padding: 4px 8px;
      background: #191919;
      color: #fff;

      &:hover {
        background: #ccc;
        color: #191919;
      }
    }
  }
}
</style>
