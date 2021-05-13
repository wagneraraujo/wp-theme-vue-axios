<template>
  <div class="container mx-auto py-16 mb-6">
    <h3 class="text-left py-3 text-2xl">Crie sua conta</h3>
    <button
      v-if="!criar"
      @click="criar = true"
      class="bg-green-600 text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 p-2 text-divide-gray-100"
    >
      Criar conta
    </button>
    <UsuarioForm v-else>
      <button class="btn border border-gray-500 p-4">Criar Usuario</button>
    </UsuarioForm>
  </div>
</template>

<script>
import UsuarioForm from "../../components/UsuarioForm";
export default {
  name: "Cadastro",
  components: {
    UsuarioForm
  },
  data() {
    return {
      criar: false
    };
  }
};
</script>

<style></style>
