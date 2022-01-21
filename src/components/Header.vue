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

    <!-- modal s'inscrire -->
<!-- 
    <modal
      :open="modalOpen"
      :title="modalValues.title"
      @close="modalOpen = false"
      class="xl-modal"
    >
      <form method="post" class="form">
        <div class="form__div">
          <label for="Nom" class="form__label"
            >Nom*
            <input type="text" name="Nom" id="Nom" required />
          </label>
        </div>
        <div class="form__div">
          <label for="Prénom" class="form__label"
            >Prénom*
            <input type="text" name="Prénom" id="Prénom" required />
          </label>
        </div>
        <div class="form__div">
          <label for="Surnom" class="form__label"
            >Surnom*
            <input type="text" name="Surnom" id="Surnom" required />
          </label>
        </div>
        <div class="form__div">
          <label for="Mail" class="form__label"
            >Mail*
            <input type="email" name="Nom" id="Nom" required />
          </label>
        </div>
        <div class="form__div">
          <label for="MotdePasse" class="form__label"
            >Mot de Passe*
            <input type="password" name="MotdePasse" id="MotdePasse" required />
          </label>
        </div>
        <div class="form__div">
          <label for="ConfirmerMdp" class="form__label"
            >Confirmer le mot de passe*
            <input
              type="password"
              name="ConfirmerMdp"
              id="ConfirmerMdp"
              required
            />
          </label>
        </div>
        <button class="e-fullbutton">Sauvegarder</button>
      </form>
    </modal> -->

    <!--  Fin du modal s'inscrire -->

    <p>Bonjour, {{ user.displayName }}</p>
    <p>{{ user.email }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
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

.router {
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

.div__form {
  background-color: $colorbeige;
  padding: 1em;
  width: 20em;
  height: 25em;
}

.form__div {
  margin-bottom: 1em;
}

.form__label {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.e-fullbutton {
  font-family: $fontTexte;
  font-weight: bold;
  font-size: 16px;
  color: $colorwhite;
  background-color: $colordarkgreen;
  padding: 10px;
  margin: 20px;
  min-width: 220px;
  border-radius: 28px;
  border-width: 4px;
  border-color: $colordarkgreen;
  border-style: solid;
  box-shadow: 1px 1px 5px 2px $colorshadow;

  /*@include small-up {
        font-size: pxToRem(12);
    }

    @include medium-up {
        font-size: pxToRem(18)
    }
    */

  &:hover {
    cursor: pointer;
    box-shadow: none;
    transition: all ease-out 0.4s;
  }
}
</style>