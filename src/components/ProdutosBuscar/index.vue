<template>
  <form>
    <input
      id="busca"
      type="text"
      name="busca"
      v-model="busca"
      placeholder="digite..."
      class="text-green-900 focus:text-gray-600 focus:border-blue-500 p-2 border my-2"
    />

    <input
      id="lupa"
      type="submit"
      value="Buscar Produtos"
      @click.prevent="buscarProdutos"
      class="hover:border-gray-500 p-2 bg-green-500 hover:bg-green-600 cursor-pointer text-gray-50"
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
