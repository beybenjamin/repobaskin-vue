<template>
  <div class="perso">
    <section class="c-perso">
      <!-- <div class="c-perso__container">
        <div class="c-perso__icon">
          <img class="e-perso__icon -save" src="\imgs\save.png" alt="" />
          <img class="e-perso__icon -share" src="\imgs\share.png" alt="" />
          <img class="e-perso__icon -buy" src="\imgs\buy.png" alt="" />
        </div>
      </div> -->
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
    <button @click="printShoe">print</button>
  </div>
</template>

<script>
import html2canvas from "html2canvas";

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
        document.body.appendChild(canvas);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
:root {
  box-sizing: border-box;
}
*,
*::after,
*::before {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

.result-container {
  position: relative;
  width: min-content;
  margin: auto;
  img.absolute-img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
}

.perso {
  padding: 64px 0;
  max-width: 1100px;
  margin: auto;
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

.c-perso__container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 100px;
}

.e-perso__img_perso {
  position: absolute;
  margin: 0;
  padding: 0;
}

.e-perso__icon {
  display: flex;
  padding-top: 33px;
  width: 30px;
  padding-left: 750px;
}

.c-list {
  display: flex;
  list-style: none;
  padding: 1rem;
  align-items: center;
  margin-top: 0;
  margin-bottom: 0;
  justify-content: center;

  &__item {
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: pxToRem(25);
    line-height: pxToRem(25);
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    transition: all ease 230ms;
    &:hover {
      cursor: pointer;
    }
    &.active {
      font-size: pxToRem(50);
    }
  }
}

.e-perso {
  &__separateur {
    border-top: solid 3px $colordarkgreen;
  }
}
</style>
