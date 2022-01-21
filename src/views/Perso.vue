<template>
  <div class="perso">
    <section class="c-perso">
      <img class="e-perso__img_perso" src="\imgs\nike_perso.png" alt="" />
      <img class="e-perso__icon" src="\imgs\save.png" alt="" />
      <img class="e-perso__icon -share" src="\imgs\share.png" alt="" />
      <img class="e-perso__icon -buy" src="\imgs\buy.png" alt="" />

      <ul class="c-list">
        <li class="c-list__item">Semelle</li>
        <li class="c-list__item">Languette</li>
        <li class="c-list__item -Actif">Logo</li>
        <li class="c-list__item">Bandes</li>
      </ul>
      <button class="e-emptybutton">Couleur</button>
      <button class="e-fullbutton">Matière</button>
      <div class="e-perso__separateur"></div>
    </section>
    <ul class="c-Colorlist">
      <li class="c-Colorlist__item -shoesdarkred"></li>
      <li class="c-Colorlist__item -shoesyellow"></li>
      <li class="c-Colorlist__item -shoesgreen"></li>
      <li class="c-Colorlist__item -shoesblue -ColorActif"></li>
      <li class="c-Colorlist__item -shoesredpink"></li>
      <li class="c-Colorlist__item -shoesblack"></li>
      <li class="c-Colorlist__item -shoesgrey"></li>
      <li class="c-Colorlist__item -shoeswhite"></li>
    </ul>
  </div>
</template>

<script>

</script>



<style lang="scss" scoped>

.e-perso__icon{
   width: 20%;
}


</style>