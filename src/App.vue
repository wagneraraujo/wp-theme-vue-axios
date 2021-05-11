<template>
  <div id="app">
    <Header />
    <div>
      <transition mode="out-in">
        <router-view />
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header/";
import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>
<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.bm-burger-button {
  position: fixed;
  width: 26px;
  height: 20px;
  left: 26px;
  top: 25px;
  cursor: pointer;
}
</style>
