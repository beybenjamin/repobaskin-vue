<template>
  <div>
    <input type="text" v-model="shoeName" placeholder="nom de la chaussure" />
    <div class="canvas">
      <p>Test de dom to image</p>
      <img src="@/assets/logo.png" alt="" />
    </div>
    <button @click="saveShoeHandler">Sauvegarde</button>
  </div>
</template>

<script>
import domtoimage from "dom-to-image-more";
import axios from "axios";

export default {
  data() {
    return {
      shoeName: "",
      shoeCreated: false,
    };
  },
  methods: {
    debug() {
      domtoimage
        .toJpeg(document.querySelector(".canvas"), { quality: 0.95 })
        .then((dataUrl) => {
          var link = document.createElement("a");
          link.download = "my-image-name.jpeg";
          link.href = dataUrl;
          link.click();

          this.submitShoe();
        });
    },

    saveShoeHandler() {
      // First, we need to get an image of the finalized shoe
      // When getScreenShot() has finished his job, sendImageToWPMediaLibrary() will be executed
      this.getScreenShot(this.sendImageToWPMediaLibrary);
    },
    /**
     * Take a screen of a node in DOM
     * Thanks to dom-to-image-more, return an image as a Blob format (log it if curious)
     * @param callback
     */
    getScreenShot(callback) {
      domtoimage.toBlob(document.querySelector(".canvas")).then((image) => {
        callback(image);
      });
    },
    /**
     * Send Image through WP API
     * @param {file} image - Image file
     */
    sendImageToWPMediaLibrary(image) {
      console.log(this.$store.state.user.authToken)
      
      
      axios
        .post("https://sitebaskin.benjaminbey.fr/wp-json/wp/V2/media", image, {
          headers: {
            "Content-Disposition": `attachment; filename="${this.$store.state.user.displayName}.jpg"`,
            Authorization: `Bearer ${this.$store.state.user.authToken}`,
          },
        })
        .then((response) => {
          // If we get an id in the response data,
          // it means that an actual image has been saved
          // into the WP media library
          if (response.data.id) {
            // Now that the image has been saved,
            // we can create the post shoe

            // IMPORTANT !
            // since the URL of the image freshly registered in the
            // WP Media library can be found in the response (check the response log)
            // We can simply use it and save it into a URL or Text ACF field
            // HOWEVER that's not really the good way to do it, but hey, it works balec
            this.createShoe(response.data.source_url);
          }
        });
    },
    /**
     * Create/Save the shoe as a Post type Shoe
     * @param imageURL - URL of the image freshly generated
     */
    createShoe(imageURL) {
      axios
        .post(
          "https://sitebaskin.benjaminbey.fr/wp-json/wp/V2/chaussures",
          {
            status: "publish",
            title: this.$store.state.user.displayName,
            fields: {
              image_url: imageURL,
            },
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${this.$store.state.user.authToken}`,
            },
          }
        )
        .then((response) => {
          console.log("SHOE IS CREATED", response);
          this.shoeCreated = true;
        });
    },
  },
};
</script>

<style scoped></style>
