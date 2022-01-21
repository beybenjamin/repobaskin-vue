<template>
  <div class="galerie">
    <div>
      <ImageHeader />
    </div>
    <div class="gallerie__fond">
      <ul class="e-product">
        <li v-for="shoe of shoes" :key="shoe.id" class="e-shoes">
          <div class="img-container">
            <img :src="shoe.acf.image_url" class="e-shoes__img" />
            <div class="fav-container">
              <svg class="e-heart" viewBox="0 0 32 29.6">
                <path stroke="black" stroke-width="2"
                  d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
                />
              </svg>
            </div>
          </div>
          <p>Createur</p>
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
import axios from "axios";
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
      shoes: [],
    };
  },
  mounted() {
    this.getShoes();
  },
  methods: {
    getShoes() {
      axios
        .get(`https://sitebaskin.benjaminbey.fr/wp-json/wp/V2/chaussures`)
        .then((response) => {
          console.log(response.data);
          this.shoes = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.gallerie__fond {
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
}

.e-shoes {
  margin: 0;
  padding: 0;
  width: 25%;
  display: inline-block;
  vertical-align: top;
  
}

.img-container {
  position: relative;
  background-color: $colorwhite;
  border-radius: 1.5em;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.2);
  @include aspect-ratio(1,1);
}

.e-shoes__img {
  width: 100%;
  height: auto;
}

.fav-container {
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 30px;

  &:hover {
    .e-heart {
      fill: $colordarkpink;
    }
  }
}

.e-heart {
  fill: $colorwhite;
  width: 100%;
}
</style>