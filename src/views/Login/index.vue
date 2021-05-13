<template>
  <div class="py-16 space-x-2">
    <form class="container mx-auto">
      <div>
        <input
          id=""
          placeholder="Email"
          type="email"
          class="p-2 border mb-2"
          v-model="login.email"
          name=""
        />
      </div>
      <div>
        <input
          id=""
          class="p-2 focus-within:bg-gray-100 border"
          type="password"
          v-model="login.senha"
          name=""
          placeholder="Senha"
        />
      </div>
      <div>
        <button
          @click.prevent="logar"
          class="mt-6 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        >
          Login
        </button>
      </div>

      <Registro />
    </form>
  </div>
</template>

<script>
import Registro from "../../components/Registro";
export default {
  name: "Login",
  components: {
    Registro
  },
  data() {
    return {
      login: {
        email: "",
        senha: ""
      }
    };
  },

  methods: {
    logar() {
      // qual valor que quero mudar e o payload => true
      this.$store.dispatch("getUsuario", true);
      this.$route.push({ name: "usuario" });
    }
  }
};
</script>

<style></style>
