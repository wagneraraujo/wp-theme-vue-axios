<template>
  <form>
    <div>
      <input type="text" v-model="nome" placeholder="Seu Nome Completo" />
    </div>
    <div>
      <input type="email" v-model="email" placeholder="Seu Email" />
    </div>
    <div>
      <input type="password" v-model="senha" placeholder="Crie uma Senha" />
    </div>
    <div>
      <input type="text" v-model="cep" placeholder="Cep" />
    </div>
    <div>
      <input type="text" v-model="rua" placeholder="Rua" />
    </div>
    <div>
      <input type="text" v-model="bairro" placeholder="Bairro" />
    </div>
    <div>
      <input type="text" v-model="cidade" placeholder="Cidade" />
    </div>
    <div>
      <input type="text" v-model="estado" placeholder="Estado" />
    </div>
    <div>
      <slot></slot>
    </div>
  </form>
</template>

<script>
export default {
  computed: {
    nome: {
      get() {
        return this.$store.state.usuario.nome;
      },
      set(value) {
        this.$store.commit("UPDATE_USUARIO", { nome: value });
      }
    },
    email: {
      get() {
        return this.$store.state.usuario.email;
      },
      set(value) {
        this.$store.commit("UPDATE_USUARIO", { email: value });
      }
    },
    senha: {
      get() {
        return this.$store.state.usuario.senha;
      },
      set(value) {
        this.$store.commit("UPDATE_USUARIO", { senha: value });
      }
    },
    cep: {
      get() {
        return this.$store.state.usuario.cep;
      },
      set(value) {
        this.$store.commit("UPDATE_USUARIO", { cep: value });
      }
    },
    rua: {
      get() {
        return this.$store.state.usuario.rua;
      },
      set(value) {
        this.$store.commit("UPDATE_USUARIO", { rua: value });
      }
    },
    bairro: {
      get() {
        return this.$store.state.usuario.bairro;
      },
      set(value) {
        this.$store.commit("UPDATE_USUARIO", { bairro: value });
      }
    },
    cidade: {
      get() {
        return this.$store.state.usuario.cidade;
      },
      set(value) {
        this.$store.commit("UPDATE_USUARIO", { cidade: value });
      }
    },
    estado: {
      get() {
        return this.$store.state.usuario.estado;
      },
      set(value) {
        this.$store.commit("UPDATE_USUARIO", { estado: value });
      }
    }
  }
};
</script>

<style></style>
