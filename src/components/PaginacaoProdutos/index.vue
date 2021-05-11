<template>
  <div>
    <ul class="paginacao">
      <li v-for="pagina in paginas" :key="pagina">
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
    paginas() {
      //pagina atual
      const current = Number(this.$route.query._page);

      //total de paginas
      /* const range = 3; */
      const total = this.paginasTotal;
      const pagesArray = [];

      for (let i = 1; i <= total; i++) {
        pagesArray.push(i);
      }
      pagesArray.splice(0, current);
      return pagesArray;
    },
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
