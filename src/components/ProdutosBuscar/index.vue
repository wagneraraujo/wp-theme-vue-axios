<template>
  <form>
    <input id="busca" type="text" name="busca" v-model="busca" />
    <br />

    <input
      id="lupa"
      type="submit"
      value="Buscar Produtos"
      @click.prevent="buscarProdutos"
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
      busca: ""
    };
  },

  methods: {
    buscarProdutos() {
      this.$router.push({ query: { q: this.busca } });
    }
  }
};
</script>

<style></style>
