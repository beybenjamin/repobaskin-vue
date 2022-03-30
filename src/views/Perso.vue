<template>
  <div class="perso">
    <section class="c-perso">
      <div class="top">
        <div class="c-perso__container">
          <img
            class="e-perso__icon -save"
            src="\imgs\save.png"
            alt=""
            @click="printShoe"
          />
          <img class="e-perso__icon -share" src="\imgs\share.png" alt="" />
          <img class="e-perso__icon -buy" src="\imgs\buy.png" alt="" />
        </div>
        <div class="result-container" id="result">
          <img src="/imgs/partie chaussure/base.png" />
          <img
            v-for="category of categories"
            class="absolute-img"
            :key="category.title"
            :src="
              '/imgs/partie chaussure/' +
              category.imgPrefix +
              category.activeColor +
              '.png'
            "
          />
        </div>
      </div>
      <ul class="c-list">
        <li
          v-for="category of categories"
          class="c-list__item"
          :class="{ active: activeCategory == category.title }"
          :key="category.title"
          @click="activeCategory = category.title"
        >
          {{ category.title }}
        </li>
      </ul>
      <ul class="color-list">
        <li
          v-for="(color, colorName) of colors"
          :key="colorName"
          :style="{ borderColor: color }"
          :class="{ active: colorName === currentCategory.activeColor }"
          @click="currentCategory.activeColor = colorName"
        >
          <div :style="{ backgroundColor: color }"></div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

export default {
  name: "Perso",
  components: {},
  data() {
    return {
      colors: {
        beige: "#E3967F",
        blanc: "white",
        bleu: "#628fda",
        gris: "#B2B2B2",
        jaune: "#ddd75e",
        rouge: "#be504d",
        vert: "#0B6067",
        violet: "purple",
      },
      categories: [
        { title: "Base", imgPrefix: "partie 2 ", activeColor: "blanc" },
        { title: "Bande", imgPrefix: "partie 1 ", activeColor: "blanc" },
        {
          title: "Languette",
          imgPrefix: "languette arrière ",
          activeColor: "blanc",
        },
        { title: "Oeuillet", imgPrefix: "oeuillet ", activeColor: "blanc" },
        { title: "Lacet", imgPrefix: "lacet ", activeColor: "blanc" },
        { title: "Logo", imgPrefix: "bande ", activeColor: "blanc" },
      ],
      activeCategory: "Base",
    };
  },
  computed: {
    currentCategory() {
      return this.categories.find((_c) => _c.title == this.activeCategory);
    },
  },
  mounted: function () {},
  methods: {
    printShoe() {
      html2canvas(document.getElementById("result")).then((canvas) => {
        const imgsrc = canvas.toDataURL("image/png");
        saveAs(imgsrc, "basket.png");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  position: relative;
  .c-perso__container {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    img {
      width: 40px;
      height: 40px;
      &:hover {
        cursor: pointer;
      }
    }
    @media (max-width: 700px) {
      position: relative;
      flex-direction: row;
      max-width: 50%;
      margin: auto;
      margin-top: 24px;
      margin-bottom: 24px;
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
}

.perso {
  padding: 64px 0;
  max-width: 1100px;
  margin: auto;
}

.result-container {
  position: relative;
  width: min-content;
  margin: auto;
  img {
    max-width: 80vw;
  }
  img.absolute-img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
}

.color-list {
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  li {
    width: 45px;
    height: 45px;
    padding: 5px;
    border-radius: 50%;
    transition: all ease 230ms;
    caret-color: transparent;

    @media (max-width: 700px) {
        width: 30px;
        height: 30px;
        padding: 2px;
    }
    &:hover {
      cursor: pointer;
    }
    &:hover,
    &.active {
      border-style: solid;
      border-width: 2px;
      box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.3);
      transform: scale(1.2);
    }
    div {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.3);
      caret-color: transparent;
    }
  }
}

.c-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 1rem;
  align-items: center;
  margin-top: 0;
  margin-bottom: 24px;
  justify-content: center;

  &__item {
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 1.8em;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    transition: all ease 230ms;
    &:hover {
      cursor: pointer;
    }
    &.active {
      font-size: 2.5em;
    }

    @media (max-width: 700px) {
      font-size: 1em;
      &.active {
        font-size: 1.5em;
      }
    }
  }
}
</style>
