<template>
  <div class="c-valeurs">
    <h2>Nos valeurs</h2>
    <div class="surligner"></div>
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
          <img class="e-nosValeur-Img" src="imgs/icons8-quality-64.png" />
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
    <button class="e-emptybutton">En savoir plus</button>
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>

// Nos valeurs

.c-valeurs {
  padding: 3em 2em;
}

.valeurs {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  column-gap: 12px;
  row-gap: 12px;
  padding-bottom: 2em;
}

.e-valeur {
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 8px 0px $colorshadow;
  border-radius: 20px;
  overflow: hidden;
  width: 30em;
  max-width: 80%;
}

.e-valeur__haut {
  height: min(15em, 30vh);
  background: $colordarkpink;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.e-nosValeur-Img {
  height: 4.5em;
}

.e-valeur__bas {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.5em;
  background-color: #fff;
  vertical-align: middle;
}

// Boutons

.e-emptybutton {
  font-family: $fontTexte;
  font-weight: bold;
  font-size: 16px;
  color: $colordarkgreen;
  background-color: transparent;
  padding: 10px;
  margin: 20px;
  min-width: 220px;
  border-radius: 28px;
  border-width: 4px;
  border-color: $colordarkgreen;
  border-style: solid;
  box-shadow: 1px 1px 5px 2px $colorshadow;

  @include small-up {
    cursor: pointer;
    background-color: $colordarkgreen;
    color: $colorwhite;
    box-shadow: none;
    transition: all ease-out 0.4s;
  }
  &:hover {
    cursor: pointer;
    background-color: $colordarkgreen;
    color: $colorwhite;
    box-shadow: none;
    transition: all ease-out 0.4s;
  }
}


//Elements

.surligner {
  background-color: $colordarkpink;
  height: 0.2em;
  max-width: 10em;
  margin-bottom: 4em;
}
</style>