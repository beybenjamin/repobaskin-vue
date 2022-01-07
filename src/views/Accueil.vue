<template>
  <div class="accueil">
    <div id="vidéo_acueil">
      <!--Ici mettre la vidéo et le bouton "Je créer ma paire"-->
    </div>
    <H2>Nos valeurs</H2>
    <div>
      <div class="valeurs">
        <div class="e-valeur">
          <div class="e-valeur__haut">
            <img class="e-nosValeur-Img" src="imgs/icons8-recycle-60.png" />
          </div>
          <div class="e-valeur__bas">
            <h3 class="e-nosValeur-h3">Eco-responsable</h3>
          </div>
        </div>
        <div class="e-valeur">
          <div class="e-valeur__haut">
            <img src="imgs/icons8-quality-64.png" />
          </div>
          <div class="e-valeur__bas">
            <h3 class="e-nosValeurs-h3">Qualité</h3>
          </div>
        </div>
      </div>
      <p>
        Ici, à la BaskIn corporation, nous souhaitons respecter deux valeurs
        fondamentales selon nous.
        <br />
        Ces valeurs tournent autour de l'écologie et la qualité.
      </p>
      <button class="e-fullbutton">En savoir plus</button>
    </div>
    <div class="products">
      <h2>Notre communauté</h2>
      <ul class="communauté">
        <li class="shoes-1">
          <img src="imgs/chaussure.png" />
        </li>
        <li class="shoes-2">
          <img src="imgs/chaussure_2.png" />
        </li>
        <li class="shoes-3">
          <img src="imgs/chaussure_3.png" />
        </li>
        <li class="shoes-4">
          <img src="imgs/chaussure_4.png" />
        </li>
        <li class="shoes-5">
          <img src="imgs/chaussure_5.png" />
        </li>
        <li class="shoes-6">
          <img src="imgs/chaussure.png" />
        </li>
      </ul>
      <!--Metre progresse bar-->
      <button class="e-fullbutton">En savoir plus</button>
    </div>
    <div id="media">
      <h2>On parle de nous</h2>
      <div class="monde">
        <img src="imgs/sneakers.jpg" />
        <h3>Le monde</h3>
        <h4>Chaussures responsables !</h4>
        <p>
          Le Monde a parlé de nous ! Après avoir découvert nos chaussures
          responsables, il ne pouvais pas ne pas parler de nous dans leur
          journal ! Venez découvrir nos chaussures responsables en lisant
          l'article ci-dessous !
        </p>
        <a
          class="suite"
          href="https://www.youtube.com/watch?v=Ogc-aqYavek&ab_channel=1Mvues"
          >Lire la suite</a
        >
      </div>
      <div class="liberation">
        <img src="imgs/puma-618x449.jpg" />
        <h3>Libération</h3>
        <h4>La révolution de la chaussures !</h4>
        <p>
          Je suis un résumé d'article super intéressant qu'il va falloir
          inventer car aujourd'hui je n'ai absolument aucune inspiration. J'ai
          juste envie de manger parce que je suis une grosse daleuse. Il fait
          moche et froid, ce matin j'ai du gratter le parebrise !
        </p>
        <a class="suite" href="https://youtu.be/dQw4w9WgXcQ">Lire la suite</a>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  .valeurs{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.e-valeur{
    display: flex;
    flex-direction: column;
    
}

.e-valeur__haut{
    height: 358px;
    width: 337px;
    background: $colordarkpink;
    border-top-left-radius: 20px;
    border-top-right-radius:20px ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 5px 0px $colorshadow;

}

.e-nosValeur-Img{
    height: 150px;
}

.e-valeur__bas{
    width: 337px;
    height: 70px;
    text-align: center;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: #fff;
    vertical-align: middle;
    box-shadow: 0px 1px 5px 2px $colorshadow;
}

.e-emptybutton {
    font-family: $fontTexte;
    font-weight: bold;
    color: $colordarkgreen;
    background-color: white;
    padding: 10px;
    margin: 20px;
    min-width: 220px;
    border-radius: 28px;
    border-width: 4px;
    border-color: $colordarkgreen;
    border-style: solid;
    box-shadow: 1px 1px 5px 2px $colorshadow;

   /* @include small-up {
        font-size: 12px;
    }

    @include medium-up {
        font-size: 16px;
    }

    */

    &:hover {
        cursor: pointer;
        background-color: $colordarkgreen;
        color: $colorwhite;
        box-shadow: none;
        transition: all ease-out 0.4s;
    }

}

.e-fullbutton {
    font-family: $fontTexte;
    font-weight: bold;
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
