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
        <li v-for="(img, i) of imgList" :key="i" class="e-gallerie__fond">
          <img :src="img.url" class="e-gallerie__image" />
          <svg
            @click="likeUrl(i)"
            class="e-heart"
            :class="{ active: img.liked }"
            viewBox="0 0 32 29.6"
          >
            <path
              stroke-width="2"
              d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
            />
          </svg>
        </li>
      </ul>
    </div>
    <button class="whiteFilledBtn">En savoir plus</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgList: [
        { url: "imgs/chaussure.png", liked: false },
        { url: "imgs/chaussure_2.png", liked: false },
        { url: "imgs/chaussure_3.png", liked: false },
        { url: "imgs/chaussure_4.png", liked: false },
        { url: "imgs/chaussure_5.png", liked: false },
        { url: "imgs/chaussure.png", liked: false },
        { url: "imgs/chaussure.png", liked: false },
        { url: "imgs/chaussure_2.png", liked: false },
        { url: "imgs/chaussure_3.png", liked: false },
        { url: "imgs/chaussure_4.png", liked: false },
        { url: "imgs/chaussure_5.png", liked: false },
        { url: "imgs/chaussure.png", liked: false },
        { url: "imgs/chaussure.png", liked: false },
        { url: "imgs/chaussure_2.png", liked: false },
        { url: "imgs/chaussure_3.png", liked: false },
        { url: "imgs/chaussure_4.png", liked: false },
        { url: "imgs/chaussure_5.png", liked: false },
        { url: "imgs/chaussure.png", liked: false },
        { url: "imgs/chaussure.png", liked: false },
        { url: "imgs/chaussure_2.png", liked: false },
        { url: "imgs/chaussure_3.png", liked: false },
        { url: "imgs/chaussure_4.png", liked: false },
        { url: "imgs/chaussure_5.png", liked: false },
        { url: "imgs/chaussure.png", liked: false },
      ],
    };
  },
  methods: {
    likeUrl(photoIndex) {
      this.imgList[photoIndex].liked = !this.imgList[photoIndex].liked;
    },
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
  padding-bottom: 1rem;
  margin-bottom: 2rem;
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
  svg {
    fill: white;
    stroke: $colordarkpink;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 24px;
    transition: all ease 0.18s;
    &:hover,
    &.active {
      fill: $colordarkpink;
      cursor: pointer;
    }
  }
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

//Elements

.surligner {
  background-color: $colordarkpink;
  height: 0.2em;
  max-width: 10em;
  margin-bottom: 4em;
}
</style>
