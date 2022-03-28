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
        <li v-if="user.id" class="e-menu__li">
          <a href="/profil" id="e-menu__img"
            ><img src="/imgs/icon_profil.png" alt=""
          /></a>
        </li>
        <li v-else class="e-menu__li">
          <a href="#" @click="openModal = true" class="router">Se connecter</a>
          <div
            v-if="openModal"
            class="modalFilter"
            @click.self="openModal = false"
          ></div>
          <div v-if="openModal" class="modal">
            <button v-if="!subscribeModal" class="whiteFilledBtn connectBtn">
              Connexion avec Google
            </button>
            <button v-if="!subscribeModal" class="whiteFilledBtn connectBtn">
              Connexion avec Apple
            </button>
            <form method="post" class="form">
              <div v-if="subscribeModal" class="form__div">
                <label class="form__label"
                  >Nom*
                  <input type="text" name="Nom" required />
                </label>
              </div>
              <div v-if="subscribeModal" class="form__div">
                <label for="Prénom" class="form__label"
                  >Prénom*
                  <input type="text" name="Prénom" id="Prénom" required />
                </label>
              </div>
              <div v-if="subscribeModal" class="form__div">
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
                  <input
                    type="password"
                    name="MotdePasse"
                    id="MotdePasse"
                    required
                  />
                  <button
                    v-if="!subscribeModal"
                    class="toggleModalTypeBtn forgottenPassword"
                  >
                    Mot de passe oublié ?
                  </button>
                </label>
              </div>
              <div v-if="subscribeModal" class="form__div">
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
              <div class="btns">
                <button
                  class="toggleModalTypeBtn"
                  @click="subscribeModal = !subscribeModal"
                >
                  {{ subscribeModal ? "Se connecter" : "Créer un compte" }}
                </button>
                <button class="e-fullbutton">
                  {{ subscribeModal ? "S'inscrire" : "Connexion" }}
                </button>
              </div>
            </form>
          </div>
        </li>
        <li class="e-menu__li">
          <a href="#" id="e-menu__img"
            ><img src="/imgs/icon_cart.png" alt=""
          /></a>
        </li>
      </ul>
    </div>

    <!-- modal s'inscrire -->

    <!--  Fin du modal s'inscrire -->

    <div v-if="user.id">
      <p>Bonjour, {{ user.displayName }}</p>
      <p>{{ user.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      openModal: false,
      subscribeModal: false,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="scss" scoped>
#header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  max-height: 50px;
  max-width: 1100px;
  margin: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;

  background-color: $colordarkgreen;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  box-shadow: 3px 3px 15px 2px $colorshadow;
  box-sizing: border-box;
  z-index: 999;
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
  position: relative;
  &:not(:last-child) {
    margin-right: 35px;
  }

  .modalFilter {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 998;
    &:hover {
      cursor: pointer;
    }
  }

  .modal {
    position: absolute;
    top: calc(100% + 5px);
    right: 0;

    padding: 16px 36px;
    background-color: $colorgrey;
    z-index: 999;
    &:hover {
      cursor: normal;
    }

    .connectBtn {
      margin-bottom: 12px;
    }

    .btns {
      display: flex;
      justify-content: space-between;
      margin-top: 28px;
      button {
        max-width: 50%;
      }
    }
    .toggleModalTypeBtn {
      border: none;
      background: none;
      color: $colordarkpink;
      font-weight: bold;

      &.forgottenPassword {
        text-align: left;
        margin-top: 4px;
      }

      &:hover {
        cursor: pointer;
      }
    }
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
</style>
