<template>
  <div>
    <div v-if="open" class="modalFilter" @click.self="$emit('close')"></div>
    <div v-if="open" class="modal">
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
            <input type="password" name="MotdePasse" id="MotdePasse" required />
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
  </div>
</template>

<script>
export default {
  name: "LoginModal",
  props: {
    open: Boolean,
  },
  data() {
    return {
      subscribeModal: false,
    };
  },
};
</script>

<style scoped lang="scss">
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