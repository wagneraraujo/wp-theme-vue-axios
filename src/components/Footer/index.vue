<template>
  <div class="allFooter bg-gray-800 text-gray-200 py-12">
    <div class="container mx-auto px-4 pb-5">
      <div class="grid md:grid-cols-3 gap-4">
        <div>
          <h4>Select Nutri</h4>
          <p class="pr-10 text-sm">
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
          </p>
        </div>
        <div class="">
          <h4>Acesso Rápido</h4>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/">Sobre Nós</router-link></li>
            <li><router-link to="/">Produtos</router-link></li>
            <li><router-link to="/">Pedidos</router-link></li>
            <li><router-link to="/">Pagamento</router-link></li>
            <li><router-link to="/">Contato</router-link></li>
          </ul>
        </div>
        <div>
          <ul>
            <li>icon texto</li>
          </ul>
        </div>
      </div>
    </div>
    <p class="text-center text-gray-500">&copy; Todos os direitos reservados</p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.allFooter h4 {
  font-size: 1.5rem;
  color: #fff;
}
</style>
