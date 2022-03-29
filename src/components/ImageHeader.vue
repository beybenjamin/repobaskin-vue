<template>
  <div class="container" :style="{ backgroundImage: 'url(' + imgUrl + ')' }">
    <div class="content">
      <h2>{{ title }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageHeader",
  props: {
    title: {
      type: String,
      default: () => "La marque",
    },
    imgUrl: {
      type: String,
      default: () => "imgs/sneakers.jpg",
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  height: 360px;
  width: 100vw;
  overflow: hidden;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  .content {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);

    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px);
    h2 {
      color: #fff;
      margin: 0;
    }
  }
}
</style>
