<template>
  <div class="popup" v-if="open" @mousedown.self="$emit('closed')">
    <div class="popup-content">
        <slot></slot>
    </div>
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>

.popup{
    position: fixed;
    z-index: 999999;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: $colorbeige;
}

.popup> .popup-content{
    margin: 70px auto;
    padding: 20px;
    background: $colorbeige;
    border-radius: 5px;
    width: 640px;
    max-height: 80%;
    position: relative;
}

/* .div__form{
  background-color:$colorbeige;
  padding: 1em;
  width: 20em;
  height: 25em;
}

.form__div{
    margin-bottom: 1em;
}

.form__label{
    display: flex;
    flex-direction: column;
    text-align: left;
}

.e-fullbutton {
  font-family: $fontTexte;
  font-weight: bold;
  font-size: 16px;
  color: $colorwhite;
  background-color: $colordarkgreen;
  padding: 10px;
  margin: 20px;
  min-width: 220px;
  border-radius: 28px;
  border-width: 4px;
  border-color: $colordarkgreen;
  border-style: solid;
  box-shadow: 1px 1px 5px 2px $colorshadow;

  /*@include small-up {
        font-size: pxToRem(12);
    }

    @include medium-up {
        font-size: pxToRem(18)
    }
    */

 /*  &:hover {
    cursor: pointer;
    box-shadow: none;
    transition: all ease-out 0.4s;
  }
}  */
</style>

