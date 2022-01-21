<template>
  <div class="galerie">
    <div>
      <ImageHeader />
    </div>
    <div class="gallerie__fond">
      <ul
        :style="{
          gridTemplateColumns:
            'repeat(' + Math.ceil(imgList.length / 4) + ',13em)',
        }"
        class="e-product"
      >
        <li v-for="url of imgList" :key="url" class="e-shoes">
          <img :src="url" class="e-shoes__img" />
        </li>
      </ul>
    </div>




    <!-- <div class="e-shoes">
      <div class="e-shoes__img">
        <img src="imgs/chaussure.png" />
        <svg class="e-coeur" viewBox="0 0 32 29.6">
          <path
            d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
          />
        </svg>
      </div>
      <div class="c-galerie-h3">
        <h3>Super bro</h3>
      </div>
      <button class="e-fullbutton">Prendre le visuel</button>
    </div>
    <div class="e-shoes">
      <div class="e-shoes__img">
        <img src="imgs/chaussure.png" />
        <svg class="e-coeur" viewBox="0 0 32 29.6">
          <path
            d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
          />
        </svg>
      </div>
      <div class="c-galerie-h3">
        <h3>Super bro</h3>
      </div>
      <button class="e-fullbutton">Prendre le visuel</button>
    </div>
    <div class="e-shoes">
      <div class="e-shoes__img">
        <img src="imgs/chaussure.png" />
        <svg class="e-coeur" viewBox="0 0 32 29.6">
          <path
            d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
          />
        </svg>
      </div>
      <div class="c-galerie-h3">
        <h3>Super bro</h3>
      </div>
      <button class="e-fullbutton">Prendre le visuel</button>
    </div>

    <div class="e-shoes">
      <div class="e-shoes__img">
        <img src="imgs/chaussure.png" />
        <svg class="e-coeur" viewBox="0 0 32 29.6">
          <path
            d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
          />
        </svg>
      </div>
      <div class="c-galerie-h3">
        <h3>Super bro</h3>
      </div>
      <button class="e-fullbutton">Prendre le visuel</button>
    </div>
    <div class="e-shoes">
      <div class="e-shoes__img">
        <img src="imgs/chaussure.png" />
        <svg class="e-coeur" viewBox="0 0 32 29.6">
          <path
            d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
          />
        </svg>
      </div>
      <div class="c-galerie-h3">
        <h3>Super bro</h3>
      </div>
      <button class="e-fullbutton">Prendre le visuel</button>
    </div>-->
  </div>
  <!-- <button class="c-galerie-nav" onclick="firstpage()"></button>
    <button class="c-galerie-nav" onclick="previous()"></button>
    <span id="e-galerie-1"></span>
    <button class="c-galerie-nav" onclick="nextPage()"></button>
    <button class="c-galerie-nav" onclick="lastPage()"></button> -->
  <!-- </div> -->
</template>

<script>
import ImageHeader from "@/components/ImageHeader.vue";

export default {
  components: { ImageHeader },

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

.gallerie__fond{
}

.titre {
  font-size: 60px;
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.e-product {
  margin-top: 2em;
  padding: 0;
  display: grid;
  row-gap: 4em;
  column-gap: 4em;
  justify-content: center;
}

.e-shoes {
  margin: 0;
  padding: 0;
  position: relative;
  background-color: $colorwhite;
  border-radius: 1.5em;
   width: 100%;
  aspect-ratio: 1/1;
  flex-direction: column;
  max-width: 18em;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.2);
}

.e-shoes__img {
  max-width: 90%;
  width: 10em;
  height: auto;
}

.e-coeur {
  fill: $colordarkpink;
  position: relative;
  top: 5px;
  width: 25px;
}
</style>