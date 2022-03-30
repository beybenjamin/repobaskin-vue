<template>
  <div class="c-mesPrecommandes">
    <div class="c-contenu">
      <div class="c-introduction">
        <h3 class="c-introduction__h3">Mes précommandes</h3>
        <p>Ici tu vas pouvoir retrouver toutes tes précommandes</p>
      </div>
      <ul class="c-precommandes">
        <li>
          <div class="e-chaussures">
            <img src="/imgs/choussure_2.png" alt="Photo d'une basquette" />
          </div>
          <div class="e-informations">
            <p><strong>Nom de la basket</strong>La Bask'It</p>
            <p><strong>Taille de la basket</strong>40</p>
            <p><strong>Date de livraison estimé</strong>janvier 2022</p>
          </div>
          <button class="whiteFilledBtn">Télécharger la facture</button>
        </li>
        <li>
          <div class="e-chaussures">
            <img src="/imgs/choussure_1.png" alt="Photo d'une basquette" />
          </div>
          <div class="e-informations">
            <p><strong>Nom de la basket</strong>La Bask'It</p>
            <p><strong>Taille de la basket</strong>40</p>
            <p><strong>Date de livraison estimé</strong>janvier 2022</p>
          </div>
          <button class="whiteFilledBtn">Télécharger la facture</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfilPrecommandes",
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
ul.c-precommandes {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  row-gap: 48px;
  li {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 640px;
    max-width: 100%;
    margin: 0 auto;
    align-items: center;
    .e-chaussures img {
      padding: 1.5em 4em;
      border: 2px solid $colordarkgreen;
      border-radius: 24px;
      width: 100%;
      height: auto;
    }

    .e-informations {
      p {
        strong {
          display: block;
        }

        &:not(:last-child) {
          margin-bottom: 8px;
        }
      }
    }

    & > button {
      grid-column: span 2;
      margin: 0 auto;
      margin-top: 18px;
    }
  }
}
</style>
