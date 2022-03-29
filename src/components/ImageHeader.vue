<template>
  <div class="c-div__image">
    <img class="e-image" src="imgs/sneakers.jpg" />
    <div class="e-marque__titre">
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
  },
};
</script>
<style lang="scss" scoped>
.c-div__image {
  height: 40em;
  width: 100vm;
  overflow: hidden;
}

.e-image {
  min-height: 100%;
  min-width: 100%;
  width: auto;
  height: auto;
  max-width: none;
  max-height: none;
  display: block;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: blur(5px) brightness(50%);
}

.e-marque__titre {
  font-size: 60px;
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  h2 {
    color: #fff;
    margin: 0;
  }
}
</style>
