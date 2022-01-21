<template>
  <div class="marque">
    <div>
      <ImageHeader />
    </div>

    <div id="e-marque__page">
      <div id="e-paragraphe__1">
        <p>
          Quand quatre étudiants ont lancé la marque Baskin, ce n’était pas
          simplement pour créer une marque de chaussures comme les autres, mais
          répondre à une demande des consommateurs, créer des designs uniques et
          ajoutant des améliorations dynamiques aux silhouettes classiques qui
          ne peuvent être achetées chez les vendeurs habituels.
        </p>
        <p>
          Vous ne trouverez pas ici de tendances saisonnières en constante
          évolution. Au lieu de cela, nous nous concentrons sur la création de
          sneakers à votre image avec une fabrication de haute qualité, qui sont
          confortables et ayant un faible impact environnemental.
        </p>
        <p>
          Nous visons des produits durables pour minimiser l’utilisation des
          ressources de la terre. Cela implique la fabrication de biens de
          consommation fabriqués à partir de matériaux durables.
        </p>
      </div>
      <div class="c-div__image">
        <img class="e-image" src="imgs/sneakers.jpg" alt="#" />
      </div>
      <div id="e-paragraphe__2">
        <p>
          L'un des plus grands obstacles à la durabilité environnementale dans
          l'industrie de la chaussure est le cycle saisonnier de la mode et la
          pression marketing associée qui est implacablement appliquée aux
          consommateurs. Conformez-vous au dernier look ou vous n’êtes personne
          !
        </p>
        <p>
          Cette stratégie de l'industrie, génère d'énormes profits, mais elle
          tue notre planète. Nous pensons que le style doivent être durables,
          ethniques et adaptés pour l'individu.
        </p>
        <p>
          Nous sommes fiers de vous proposer la conception de vos propres
          sneakers à votre image pouvant être portées tous les jours.
        </p>
        <p class="e-p">
          Tous nos produits sont fabriqués en France. Si vous rencontrez des
          difficultés avec l'un de nos produits à tout moment. Veuillez nous
          contacter pour obtenir des conseils.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import ImageHeader from "@/components/ImageHeader.vue";

export default {
  components: { ImageHeader },
};
</script>
<style lang="scss" scoped>
.e-p {
  margin-bottom: 5em;
}

.c-div__image {
  height: 10em;
  width: 100vm;
  overflow: hidden;
}

.e-image {
  min-height: 100%;
  min-width: 100%;
  width: auto;
  height: auto;
  max-width: none;
  max-height: none;
  display: block;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
