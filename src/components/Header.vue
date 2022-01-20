<template>
  <div id="header">
    <div class="e-logo">
      <a href="/"><img class="e-logo__img" src="/imgs/logo.png" /></a>
    </div>
    <div class="e-menu">
      <ul class="e-menu__ul">
        <li class="e-menu__li">
          <router-link to="/marque" class="router">La marque</router-link>
        </li>
        <li class="e-menu__li">
          <router-link to="/galerie" class="router">La galerie</router-link>
        </li>
        <li class="e-menu__li">
          <router-link to="/contact" class="router">Contact</router-link>
        </li>
        <li class="e-menu__li">
          <router-link to="/perso" class="router">Ma paire</router-link>
        </li>
        <li class="e-menu__li">
          <a href="#" id="e-menu__img"
            ><img src="/imgs/icon_profil.png" alt=""
          /></a>
        </li>
        <li class="e-menu__li">
          <a href="#" id="e-menu__img"
            ><img src="/imgs/icon_cart.png" alt=""
          /></a>
        </li>
      </ul>
    </div>
    <p>Bonjour, {{user.displayName}}</p>
        <p>{{user.email}}</p>
  </div>
</template>

<script>

export default {
  computed: {
    user() {
      return this.$store.state.user
    }
  }
}
</script>


<style lang="scss" scoped>
#header {
  background-color: $colordarkgreen;
  height: 50px;
  max-height: 50px;
  max-width: 1100px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 0 50px;
  box-shadow: 3px 3px 15px 2px $colorshadow;
  box-sizing: border-box;
}

.e-logo {
  height: 100%;
  position: relative;
  a {
    display: flex;
    align-items: center;
    height: 100%;
  }
}

.e-logo__img {
  max-height: 60%;
}

.e-menu__ul {
  display: flex;
  flex-direction: row;
}
.e-menu__li {
  display: flex;
  flex-direction: row;
  text-decoration: none;
  align-items: center;
  &:not(:last-child) {
    margin-right: 35px;
  }
}

.router{
  text-decoration: none;
  color: $colorwhite;
  font-size: 16px;
}

#e-menu__img {
  display: flex;
  align-items: center;
  height: 100%;
  img {
    height: 1.5em;
    aspect-ratio: 1/1;
  }
}
</style>