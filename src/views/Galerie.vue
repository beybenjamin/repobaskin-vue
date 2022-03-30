<template>
  <div class="gallerie" >
    <ImageHeader title="La galerie" imgUrl="imgs/ban_2.jpeg" />
    <div class="gallerie__fond">
      <ul class="e-products">
        <li
          v-for="shoe of shoes.filter(
            (_shoe) => _shoe.acf && _shoe.acf.image_url
          )"
          :key="shoe.id"
          class="e-shoes"
        >
          <div class="img-container">
            <img :src="shoe.acf.image_url" class="e-shoes__img" />
            <svg
              class="e-heart"
              :class="{ active: shoe.liked }"
              viewBox="0 0 32 29.6"
              @click="likeShoe(shoe.id)"
            >
              <path
                stroke-width="2"
                d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
              />
            </svg>
          </div>
          <div class="info-container">
            <p>{{ shoe.title.rendered }}</p>
            <button class="whiteFilledBtn">Commander ce visuel</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ImageHeader from "@/components/ImageHeader.vue";
import axios from "axios";
export default {
  components: { ImageHeader },
  data() {
    return {
      shoes: [],
    };
  },
  mounted() {
    this.getShoes();
  },
  methods: {
    likeShoe(id) {
      const shoe = this.shoes.find((shoe) => shoe.id == id);
      shoe.liked = !shoe.liked;
    },
    getShoes() {
      axios
        .get(`https://sitebaskin.benjaminbey.fr/wp-json/wp/V2/chaussures?per_page=100`)
        .then((response) => {
          console.log(response.data);
          this.shoes = response.data.map((shoe) => ({ liked: false, ...shoe }));
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.gallerie {
  padding-bottom: 100px;
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

ul {
  margin: 0 auto;
  margin-top: 48px;
  padding: 0 12px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 4em;
  column-gap: 2em;
  overflow-x: scroll;
  padding-bottom: 1rem;
  margin-bottom: 2rem;

  max-width: 1100px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 1em;
  }
}

li {
  margin: 0;
  padding: 0;
  list-style-type: none;
  position: relative;
  background-color: $colorwhite;
  width: 100%;
  border-radius: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 500px) {
    flex-direction: row;
  }
  .img-container {
    position: relative;
    padding: 24px 12px;
    box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    margin-bottom: 12px;

    @media (max-width: 500px) {
      padding: 8px;
      margin-right: 2em;
    }

    img {
      width: 100%;
      height: auto;
    }

    svg {
      fill: white;
      stroke: $colordarkpink;
      position: absolute;
      bottom: 10px;
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
  .info-container {
    width: 100%;
    p {
      color: $colororange;
      font-weight: bold;
      font-family: "Decoy", arial;
    }
    button.whiteFilledBtn {
      font-size: 0.9em;
      padding: 4px 12px;
      width: max-content;
      margin-top: 8px;
      @media (max-width: 500px) {
        font-size: 0.8em;
        border-width: 1px;
      }
    }
  }
}
</style>