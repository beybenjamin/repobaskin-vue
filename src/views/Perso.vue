import 

<template>
  <div class="perso">

    <section class="c-perso">
      <div class="c-perso__container">

        <img class="e-perso__img_perso" src="\imgs\nike_perso.png" alt="" />
        
        <div class="c-perso__icon">
          <img class="e-perso__icon -save" src="\imgs\save.png" alt="" />
          <img class="e-perso__icon -share" src="\imgs\share.png" alt="" />
          <img class="e-perso__icon -buy" src="\imgs\buy.png" alt="" />
        </div>

      </div>

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

<script></script>

<style lang="scss">

.c-perso__container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 100px;

}

.e-perso__img_perso {
  position: absolute;
  margin:0;
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
    margin-top: 0 ;
    margin-bottom: 0;
    
&__item {
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: pxToRem(25);
    line-height: pxToRem(25);
    margin-top: 0 ;
    margin-bottom: 0;
    padding: 0;
    
&.-Actif {
        font-size: pxToRem(50)
}}

}

.e-perso {
    &__separateur {

        border-top: solid 3px $colordarkgreen ;
    }

}

.c-Colorlist {
    display: flex; 
    padding: 1rem; 
    align-items: center;
    margin-top: 0 ;
    margin-bottom: 0;
    list-style: none;

    /*&__ColorActif{
        padding: 30px;
        height: pxToRem(70);
        width: pxToRem(70); 
        background-color: $colorshoesgreen;
          
        border-color: $colorshoesgreen ;
        border-radius: 100%;   
            
        }*/
    

&__item{
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 0 ;
    margin-bottom: 0;
    padding: 0;
    height: pxToRem(52);
    width: pxToRem(52);
    background-color: $colorshoesdarkred;
    border-radius: 100%;
    border: 1px solid transparent;


&.-shoesdarkred{
    background-color: $colorshoesdarkred;
}

&.-shoesyellow{
    background-color: $colorshoesyellow;
}

&.-shoesgreen{
    background-color: $colorshoesgreen;
}

&.-ColorActif{
    height: pxToRem(70);
    width: pxToRem(70);
    position: relative;
    
    
    &::after{
        content: "";
        position: absolute;
        top: -10px;
        left: -10px;
        padding: 0px;
        margin: 0px;
        height: pxToRem(80);
        width: pxToRem(80);
        border-radius: 100%;
        border: 4px solid $colorshoesblue;
    
    }}

&.-shoesblue{
   background-color: $colorshoesblue; 
   
}

&.-shoesredpink{
    background-color: $colorshoesredpink;
}

&.-shoesblack{
    background-color: $colorshoesblack;
}

&.-shoesgrey{
    background-color: $colorshoesgrey;
}

&.-shoeswhite{
    background-color: $colorshoeswhite;
    border-color: grey;
}

}}


</style>
