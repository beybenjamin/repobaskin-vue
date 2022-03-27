<template>
  <div class="c-mesPrecommandes">
    <div class="c-contenu">
      <div class="c-introduction">
        <h3 class="c-introduction_h3">Mes précommandes</h3>
        <p>Ici tu vas pouvoir retrouver toutes tes précommandes</p>
      </div>
      <div class="c-précommandes">
        <div class="e-chaussures">
          <img src="#" alt="Photo d'une basquette" />
        </div>
        <div class="e-informations">
          <p><strong>Nom de la basket</strong></p>
          <p>La Bask'It</p>
          <p><strong>Taille de la basket</strong></p>
          <p>40</p>
          <p><strong>Date de livraison estimé</strong></p>
          <p>janvier 2022</p>
        </div>
        <button class="e-emptybutton">Télécharger la facture</button>
      </div>
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

<style scoped lang="scss"></style>
