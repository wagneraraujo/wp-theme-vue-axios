<template>
  <div>
    <section class="bg-gray-50 p-20 text-center">
      <h3 class="text-2xl text-gray-500 py-2">O que você procura</h3>
      <ProdutosBuscar />
    </section>
    <ProdutosLista class="container mx-auto py-16" />
  </div>
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
