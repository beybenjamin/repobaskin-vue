<template>
  <div class="products">
    <h2>Notre communauté</h2>
    <div class="surligner"></div>
    <div class="c-acceuil__gallerie">
      <ul
        :style="{
          gridTemplateColumns:
            'repeat(' + Math.ceil(imgList.length / 2) + ',13em)',
        }"
      >
        <li v-for="url of imgList" :key="url" class="e-gallerie__fond">
          <img :src="url" class="e-gallerie__image" />
        </li>
      </ul>
    </div>
    <p class="e-progression">BARRE DE PROGRESSION</p>
    <button class="e-emptybutton">En savoir plus</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgList: [
        "imgs/chaussure.png",
        "imgs/chaussure_2.png",
        "imgs/chaussure_3.png",
        "imgs/chaussure_4.png",
        "imgs/chaussure_5.png",
        "imgs/chaussure.png",
        "imgs/chaussure.png",
        "imgs/chaussure_2.png",
        "imgs/chaussure_3.png",
        "imgs/chaussure_4.png",
        "imgs/chaussure_5.png",
        "imgs/chaussure.png",
        "imgs/chaussure.png",
        "imgs/chaussure_2.png",
        "imgs/chaussure_3.png",
        "imgs/chaussure_4.png",
        "imgs/chaussure_5.png",
        "imgs/chaussure.png",
        "imgs/chaussure.png",
        "imgs/chaussure_2.png",
        "imgs/chaussure_3.png",
        "imgs/chaussure_4.png",
        "imgs/chaussure_5.png",
        "imgs/chaussure.png",
      ],
    };
  },
};
</script>
<style lang="scss" scoped>

// Communauté

.products {
  background-color: $colorgrey;
  padding: 3em 2em;
}

ul {
  margin: 0;
  padding: 0;
  display: grid;
  row-gap: 2em;
  column-gap: 2em;
  overflow-x: scroll;
}

li {
  margin: 0;
  padding: 0;
  list-style-type: none;
  position: relative;
  background-color: $colorwhite;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.e-gallerie__image {
  max-width: 90%;
  width: 10em;
  height: auto;
  margin-top: 1.5em;
}

.e-progression {
  padding: 2em 0em;
}

// Bouton

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
  font-size: 16px;
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

//Elements

h2 {
  text-align: left;
  margin-left: 2em;
  margin-bottom: 0;
}

.surligner {
  background-color: $colordarkpink;
  height: 0.2em;
  max-width: 10em;
  margin-bottom: 4em;
}
</style>
