<template>
  <div class="marque">
    <div class="e-div__image" >
      <img class="e-image" src="imgs/sneakers.jpg" />
      <p class="e-marque__titre">
        La marque
      </p>
    </div>

    <div id="e-marque__page">
      <div id="e-paragraphe1">
        <p class="e-p_1">
          Quand quatre étudiants ont lancé la marque Baskin, ce n’était pas
          simplement pour créer une marque de chaussures comme les autres, mais
          répondre à une demande des consommateurs, créer des designs uniques et
          ajoutant des améliorations dynamiques aux silhouettes classiques qui
          ne peuvent être achetées chez les vendeurs habituels.
        </p>
        <p class="e-p_2">
          Vous ne trouverez pas ici de tendances saisonnières en constante
          évolution. Au lieu de cela, nous nous concentrons sur la création de
          sneakers à votre image avec une fabrication de haute qualité, qui sont
          confortables et ayant un faible impact environnemental.
        </p>
        <p class="e-p_3">
          Nous visons des produits durables pour minimiser l’utilisation des
          ressources de la terre. Cela implique la fabrication de biens de
          consommation fabriqués à partir de matériaux durables.
        </p>
      </div>
      <div class="e-div__image2">
        <img class="e-image2" src="imgs/chaussure_2.png" alt="#" />
        <img class="e-image3" src="imgs/chaussure_3.png" alt="#" />
        <img class="e-image4" src="imgs/chaussure_4.png" alt="#" />
        <img class="e-image5" src="imgs/chaussure_5.png" alt="#" />
      </div>
      <div id="e-paragraphe2">
        <p class="e-p_1">
          L'un des plus grands obstacles à la durabilité environnementale dans
          l'industrie de la chaussure est le cycle saisonnier de la mode et la
          pression marketing associée qui est implacablement appliquée aux
          consommateurs. Conformez-vous au dernier look ou vous n’êtes personne
          !
        </p>
        <p class="e-p_2">
          Cette stratégie de l'industrie, génère d'énormes profits, mais elle
          tue notre planète. Nous pensons que le style doivent être durables,
          ethniques et adaptés pour l'individu.
        </p>
        <p class="e-p_2">
          Nous sommes fiers de vous proposer la conception de vos propres
          sneakers à votre image pouvant être portées tous les jours.
        </p>
        <p class="e-p_3">
          Tous nos produits sont fabriqués en France. Si vous rencontrez des
          difficultés avec l'un de nos produits à tout moment. Veuillez nous
          contacter pour obtenir des conseils.
        </p>
      </div>
    </div>      
    <div>
          <router-link to="/contact" class="e-p_bouton">Contacter BaskIn</router-link>
    </div>
    <br>
    <br>
  </div>
</template>
<script>

</script>
<style lang="scss" scoped>

.e-div__image{
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

.e-marque__titre{
  font-size: 30px;
  font-weight: bold;
  font-family: 'Decoy', Arial;
  display: flex;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.e-div__image2{
    position: relative;
    display: flex;
    flex-direction: row;
    overflow: hidden;
}

.e-image2{
    width: auto;
    height: auto;
    max-width: none;
    max-height: none;
    display: block;
    transform: scaleX(-1);
}

.e-image3{
    width: auto;
    height: auto;
    max-width: none;
    max-height: none;
    display: block;
    transform: scaleX(-1);
}

.e-image4{
    width: auto;
    height: auto;
    max-width: none;
    max-height: none;
    display: block;
    transform: scaleX(-1);
}

.e-image5{
    width: auto;
    height: auto;
    max-width: none;
    max-height: none;
    display: block;
    transform: scaleX(-1);
}

.e-p_1 {
    font-size: 16px;
    text-align: left;
    margin: 30px 15px 0px 15px;
}

.e-p_2 {
    font-size: 16px;
    text-align: left;
    margin: 10px 15px;
}

.e-p_3 {
    font-size: 16px;
    text-align: left;
    margin: 0px 15px 30px 15px;
}

.e-p_bouton {
    font-family: $fontTexte;
    font-weight: bold;
    font-size: 16px;
    color: $colordarkgreen;
    background-color: transparent;
    padding: 10px;
    margin: 20px;
    width: 220px;
    max-width: 80%;
    border-radius: 28px;
    border-width: 4px;
    border-color: $colordarkgreen;
    border-style: solid;
    box-shadow: 1px 1px 5px 0px $colorshadow;
    text-decoration: none;

    @include small-up {
        cursor: pointer;
        background-color: $colordarkgreen;
        color: $colorwhite;
        box-shadow: none;
        transition: all ease-out 0.23s;
    }

    &:hover {
        cursor: pointer;
        background-color: $colordarkgreen;
        color: $colorwhite;
        box-shadow: none;
        transition: all ease-out 0.23s;
    }
}

@media (max-width: 480px) {
  .e-div__image{
    height: 43em;

  }
  .e-p_1{
    font-size: 14px;

  }

  .e-p_2{
    font-size: 14px;

  }

  .e-p_3{
    font-size: 14px;

  }
}
</style>