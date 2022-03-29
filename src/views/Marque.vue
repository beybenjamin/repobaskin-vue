<template>
  <div class="marque">
    <ImageHeader title="La marque" imgUrl="imgs/ban_3.jpeg" />

    <div id="e-marque__page">
      <div class="e-paragraphe">
        <p>
          Quand quatre étudiants ont lancé la marque <strong>Baskin</strong>, ce
          n’était pas simplement pour créer une marque de chaussures comme les
          autres, mais répondre à une demande des consommateurs, créer des
          <strong>designs uniques</strong> et ajoutant des améliorations
          dynamiques aux silhouettes classiques qui ne peuvent être achetées
          chez les vendeurs habituels.
        </p>
        <br />
        <p>
          Vous ne trouverez pas ici de tendances saisonnières en constante
          évolution. Au lieu de cela, nous nous concentrons sur la création de
          sneakers à <strong>votre image</strong> avec une fabrication de
          <strong>haute qualité</strong>, qui sont confortables et ayant un
          faible <strong>impact environnemental</strong>.
        </p>
        <br />
        <p>
          Nous visons des produits <strong>durables</strong> pour minimiser
          l’utilisation des ressources de la terre. Cela implique la fabrication
          de biens de consommation fabriqués à partir de matériaux durables.
        </p>
      </div>
      <div class="e-div__image2">
        <img class="e-image2" src="imgs/Marque.gif" alt="#" />
      </div>
      <div class="e-paragraphe">
        <p>
          L'un des plus grands obstacles à la durabilité environnementale dans
          l'industrie de la chaussure est le <stong>cycle saisonnier</stong> de
          la mode et la <strong>pression marketing</strong> associée qui est
          implacablement appliquée aux consommateurs. Conformez-vous au dernier
          look ou vous n’êtes personne !
        </p>
        <br />
        <p>
          Cette stratégie de l'industrie, génère d'énormes profits, mais elle
          tue notre planète. Nous pensons que le style doivent être
          <stong>durables</stong>, <stong>ethniques</stong> et adaptés pour
          <strong>l'individu</strong>
        </p>
        <br />
        <p>
          Nous sommes fiers de vous proposer la conception de vos propres
          sneakers à votre <strong>image</strong> pouvant être portées tous les
          jours.
        </p>
        <br />
        <p>
          Tous nos produits sont <strong>fabriqués en France</strong>. Si vous
          rencontrez des difficultés avec l'un de nos produits à tout moment.
          Veuillez nous contacter pour obtenir des conseils.
        </p>
      </div>
    </div>
    <div class="bouton">
      <router-link to="/contact" class="whiteFilledBtn"
        >Contacter BaskIn</router-link
      >
    </div>
    <br />
    <br />
  </div>
</template>
<script>
import ImageHeader from "@/components/ImageHeader";
export default {
  name: "Marque",
  components: {
    ImageHeader,
  },
};
</script>
<style lang="scss" scoped>

.e-paragraphe {
  padding: 2em 2em;
  max-width: 1100px;
  margin: auto;
  text-align: left;

  strong {
    font-size: 1.05em;
    font-style: italic;
    font-family: Decoy, Arial;
  }
}

.e-div__image {
  height: 41em;
  position: relative;
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
  filter: blur(5px) brightness(50%);
}

.e-marque__titre {
  font-size: 30px;
  font-weight: bold;
  font-family: "Decoy", Arial;
  display: flex;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.e-div__image2 {
  position: relative;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}

.e-image2 {
  width: auto;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  max-width: none;
  max-height: none;
  display: block;
}

.bouton {
  text-decoration: none;
  margin-bottom: 2em;
}

.whiteFilledBtn {
  text-decoration: none;
}

@media (max-width: 480px) {
  .e-div__image {
    height: 43em;
  }
  .e-p_1 {
    font-size: 14px;
  }

  .e-p_2 {
    font-size: 14px;
  }

  .e-p_3 {
    font-size: 14px;
  }

  .e-image2 {
  max-width: 90%;
  max-height: 90%;
  }
}
</style>