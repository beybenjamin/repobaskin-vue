<template>
  <div class="shoes-list">
    <h1>liste des chaussures</h1>
    <div v-for="shoe in shoes" :key="shoe.id" class="shoe">
      <p>{{ shoe.title.rendered }}</p>
      <img :src="shoe.acf.image_url" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfilPrecommandes",
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss"></style>
