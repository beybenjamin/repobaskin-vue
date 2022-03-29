<template>
  <div class="accueil">
    <div id="vidéo_acueil">
      <!--Ici mettre la vidéo et le bouton "Je créer ma paire"-->
      <!-- <PopUp/> -->
      <NosValeurs />
      <Communaute />
      <Media />
    </div>
  </div>
</template>

<script>
import NosValeurs from "@/components/NosValeurs.vue";
import Communaute from "@/components/Communaute.vue";
import Media from "@/components/Media.vue";
export default {
  components: { NosValeurs, Communaute, Media },
};
</script>

<style lang="scss" scoped>
  .accueil {
    padding-top: 50px;
  }
</style>
