<template>
  <div>
    <input type="text" v-model="shoeName" placeholder="nom de la chaussure" />
    <div class="canvas">
      <p>Test de dom to image</p>
      <img src="@/assets/logo.png" alt="" />
    </div>
    <button @click="screenShot">Sauvegarde</button>
  </div>
</template>


<script>
import domtoimage from "dom-to-image-more";
import axios from "axios";

export default {
  data() {
    return {
      shoeName: "",
    };
  },
  methods: {
    screenShot() {
      domtoimage
        .toJpeg(document.querySelector(".canvas"), { quality: 0.95 })
        .then( (dataUrl) => {
          var link = document.createElement("a");
          link.download = "my-image-name.jpeg";
          link.href = dataUrl;
          link.click();

          this.submitShoe();
        });
    },

    submitShoe() {
      axios
        .post(
          "https://sitebaskin.benjaminbey.fr/wp-json/wp/V2/chaussures",
          {
            status: "publish",
            title: this.$store.state.user.displayName,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${this.$store.state.user.authToken}`,
            },
          }
        )
        .then((response) => {
          if (response.status === 200) {
            console.log("La chaussure est enregistrée");
          }
        });
    },
  },
};
</script>
<style scoped></style>
