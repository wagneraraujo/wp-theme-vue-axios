<template>
  <div
    class="allHeader text-gray-400 border-b border-gray-200 flex flex-row p-2 lg:p-5 justify-between align-center justify-items-center content-center items-center"
  >
    <Slide>
      <div class="wideMenu">
        <nav>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/">Home</router-link></li>
          </ul>
        </nav>
      </div>
    </Slide>
    <div class="logoSite">
      <router-link to="/" class="logo"
        ><img src="@/assets/logo.png" alt="Select Nutri" />
      </router-link>
    </div>
    <div class="iconsMenu">
      <nav class="iconsM">
        <font-awesome-icon icon="user" />
        <font-awesome-icon icon="heart" />
        <font-awesome-icon icon="shopping-cart" />
      </nav>
    </div>
  </div>
</template>

<script>
import { Slide } from "vue-burger-menu";
export default {
  name: "Header",
  components: {
    Slide
  }
};
</script>

<style lang="scss" scoped>
.menuSite {
  svg {
    cursor: pointer;
  }
}
.menuSite svg:hover {
  color: #34d399;
}
.allHeader {
  height: 50px;
}
.logoSite img {
  max-width: 150px;
  height: auto;
}
.iconsM svg {
  margin: 0px 5px;
  cursor: pointer;
}
.iconsM svg:hover {
  color: #34d399;
}

@media (min-width: 760px) {
  .allHeader {
    height: 70px;
  }
}

.wideMenu {
  z-index: 9;
  padding: 22px 16px;

  ul {
    margin-top: 32px;
  }
  li {
    a {
      font-size: 2rem;
    }
    color: #191919;
    &:hover {
      color: #34d399;
    }
  }
}
</style>
