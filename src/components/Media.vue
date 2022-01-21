<template>
  <div class="media">
    <h2>On parle de nous</h2>
    <div class="surligner"></div>
    <div class="e-media">
      <div class="article">
        <img class="e-article__photo" src="imgs/sneakers.jpg" />
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
      <div class="article">
        <img class="e-article__photo" src="imgs/puma-618x449.jpg" />
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

// On parle de nous 

.media {
  background-color: $colorturqoise;
  padding: 3em 2em 0em 2em;
}

.e-media {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.article {
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 30em;
}

.e-article__photo {
  max-width: 25em;
  max-height: 15em;
  border-radius: 2em;
}

// Elements 

.surligner {
  background-color: $colordarkpink;
  height: 0.2em;
  max-width: 10em;
  margin-bottom: 4em;
}
</style>
