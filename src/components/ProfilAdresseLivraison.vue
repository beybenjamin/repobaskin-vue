<template>
  <div>
    <div class="c-addresseDeLivraison" v-if="!edit">
      <div class="c-contenu">
        <div class="c-introduction">
          <h3 class="c-introduction__h3">Adresse de livraison</h3>
          <p>Ici tu vas pouvoir modifier tes adresses de livraisons</p>
        </div>
        <button class="whiteFilledBtn" @click="edit = true">
          Ajouter une adresse
        </button>
        <ul class="address-list">
          <li
            v-for="(address, i) of addresses"
            class="e-rubrique"
            :key="address.title + i"
          >
            <div class="e-rubrique__haut">
              <strong>
                {{ address.title }}
              </strong>
              <div>
                <p v-if="address.isDefault">Adresse par défaut</p>
              </div>
            </div>
            <div class="e-rubrique__bas">
              <p>{{ address.line1 }}</p>
              <p>{{ address.line2 }}</p>
              <p>{{ address.country }}</p>
            </div>
            <div class="btns">
              <button class="whiteFilledBtn">Modifier</button>
              <button class="whiteFilledBtn">Effacer</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="c-ajouterUneaddresse" v-else>
      <div class="c-contenu">
        <div class="c-introduction">
          <h3 class="c-introduction__h3">Ajouter une adresse de livraison</h3>
          <p>Ici tu vas pouvoir ajouter une nouvelle adresse de livraison</p>
        </div>
        <button class="whiteFilledBtn" style="margin-bottom: 48px">
          Utiliser l'emplacement actuel
        </button>
        <hr />
        <form method="post" class="e-formulaire" @submit="edit = false">
          <ul>
            <li class="e-formlist__addresse">
              <label class="e-formlist__titre"
                >Adresse
                <input class="e-formlist__input" type="text" name="addresse" />
                <input class="e-formlist__input" type="text" name="addresse" />
              </label>
            </li>
            <li class="e-formlist">
              <label class="e-formlist__titre"
                >Code postal
                <input
                  class="e-formlist__input"
                  type="text"
                  name="Code postal"
                />
              </label>
            </li>
            <li class="e-formlist">
              <label class="e-formlist__titre"
                >Ville
                <input class="e-formlist__input" type="text" name="Ville" />
              </label>
            </li>
          </ul>
          <label for="e-chexbox">
            <input type="checkbox" id="e-chexbox" name="Défaut" />
            Faire de cette adresse mon adresse par défaut
          </label>
          <br />
          <input type="submit" class="whiteFilledBtn" value="Ajouter" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfiladresseLivraison",
  data() {
    return {
      edit: false,
      addresses: [
        {
          title: "Théo Legrand",
          line1: "36 rue de la Liberté",
          line2: "Montbéliard, Franche-Comté, 25200",
          country: "France",
          isDefault: true,
        },
        {
          title: "Théo Legrand",
          line1: "86 rue de la Concorde",
          line2: "Lens, Haut de France, 62300",
          country: "France",
          isDefault: false,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
form {
  margin-top: 48px;
}

.e-fullbutton,
.whiteFilledBtn {
  margin: 0;
  max-width: unset;
  min-width: max-content;
}

ul.address-list {
  list-style: none;
  margin: 0;
  margin-top: 24px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;

  li {
    padding: 12px 24px;
    max-width: 80%;
    width: min(38em, 80%);
    border: 1px solid $colordarkgreen;
    border-radius: 16px;

    .e-rubrique__haut {
      display: flex;
      justify-content: space-between;
      align-items: center;
      strong {
        color: $colordarkpink;
        font-size: 1.3em;
      }
      p {
        color: #a6a6a6;
        font-size: 0.9em;
        font-style: italic;
      }
    }
    .e-rubrique__bas {
      text-align: left;
      margin: 12px 0;
    }

    .btns {
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 12px;
      button {
        flex-shrink: 1;
        max-width: 45%;
        width: max-content;
        font-size: 1em;
        padding: 4px 8px;
      }
    }
  }
}
</style>
