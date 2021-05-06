<template>
  <section class="bg-gray-50 p-4 text-center">
    <h3>Produtos</h3>
    <ProdutosBuscar />
    <ProdutosLista />
  </section>
</template>
<script>
import ProdutosLista from "../components/ProdutosLista";
import ProdutosBuscar from "../components/ProdutosBuscar";
export default {
  name: "Home",
  components: {
    ProdutosLista,
    ProdutosBuscar
  }
};
</script>
