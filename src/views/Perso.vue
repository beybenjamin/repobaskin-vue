<template>
  <div class="perso">

    <section class="c-perso">
      <div class="c-perso__container">

        <img class="e-perso__img_perso" src="/imgs/{{IDurl}}.png" alt="" /> -->
        
        
        <div class="c-perso__icon">
          <img class="e-perso__icon -save" src="\imgs\save.png" alt="" />
          <img class="e-perso__icon -share" src="\imgs\share.png" alt="" />
          <img class="e-perso__icon -buy" src="\imgs\buy.png" alt="" />
        </div> 

      </div>


<!-- test 1 



<section class="container_0">
        <input type="button" name="choice" id="choice-1" checked hidden><li class="c-list__item">Semelle</li>
        <input type="button" name="choice" id="choice-2" hidden><li class="c-list__item">Languette</li>
        <input type="button" name="choice" id="choice-3" hidden><li class="c-list__item -Actif">Logo</li>
        <input type="button" name="choice" id="choice-4" hidden><li class="c-list__item">Bandes</li>
        
 -->
         <ul class="c-list">
        <li class="c-list__item" id="semelle">Semelle</li>
        <li class="c-list__item" id="languette" >Languette</li>
        <li class="c-list__item -Actif" id="logo">Logo</li>
        <li class="c-list__item" id="bande">Bandes</li>
      </ul> -->

        <!--<div class="product">
            <img src="" alt="Product">
        </div>

        <div class="product-nav">
            <label for="choice-1"></label>
            <label for="choice-2"></label>
            <label for="choice-3"></label>
            <label for="choice-4"></label>
        </div>
    </section> -->
    </section>

    <section class="container">
        <input type="radio" name="color" id="color-1" checked hidden>
        <input type="radio" name="color" id="color-2" hidden>
        <input type="radio" name="color" id="color-3" hidden>
        <input type="radio" name="color" id="color-4" hidden>
        <input type="radio" name="color" id="color-5" hidden>
        <input type="radio" name="color" id="color-6" hidden>


        <div class="product">
            <img src="" alt="Product">
        </div>

        <div class="product-nav">
            <label for="color-1"></label>
            <label for="color-2"></label>
            <label for="color-3"></label>
            <label for="color-4"></label>
            <label for="color-5"></label>
            <label for="color-6"></label>
        </div>
    </section>




    <!-- <section class="container">
        <input type="radio" name="color" id="color-1" checked hidden>
        <input type="radio" name="color" id="color-2" hidden>
        <input type="radio" name="color" id="color-3" hidden>
        <input type="radio" name="color" id="color-4" hidden>
        <input type="radio" name="color" id="color-5" hidden>
        <input type="radio" name="color" id="color-6" hidden>


        <div class="product">
            <img src="" alt="Product">
        </div>

        <div class="product-nav">
            <label for="color-1"></label>
            <label for="color-2"></label>
            <label for="color-3"></label>
            <label for="color-4"></label>
            <label for="color-5"></label>
            <label for="color-6"></label>
        </div>
    </section>  -->



      <!--<button class="e-emptybutton">Couleur</button>
      <button class="e-fullbutton">Matière</button> -->
      
      
       <div class="e-perso__separateur"></div>
   
   

    <ul class="c-Colorlist" id="Menucustom">
      <button class="c-Colorlist__item -shoesdarkred"  id="r" onclick="getID()"></button>
      <button class="c-Colorlist__item -shoesyellow" id="y"></button>
      <button class="c-Colorlist__item -shoesgreen" id="g"></button>
      <button class="c-Colorlist__item -shoesblue -ColorActif" id="b" ></button>
      <button class="c-Colorlist__item -shoesredpink" id="p" ></button>
      <button class="c-Colorlist__item -shoesblack" id="B" ></button>
      <button class="c-Colorlist__item -shoesgrey" id="G" ></button>
      <button class="c-Colorlist__item -shoeswhite" id="W" ></button>
    </ul>
    
  </div>

</template>

<script>
export default{
  name:"Perso",
  components:{},

mounted: function () {
    "use strict";

    var header = document.getElementById("Menucustom");
    var btns = header.getElementsByClassName("c-Colorlist__item");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("-ColorActif");
        if (current.length > 0) {
          current[0].className = current[0].className.replace(
            " -ColorActif",
            ""
          );
        }
        this.className += " -ColorActif";
      });
    }


    function getID() {
       //var IDchoice= document.getElementById('semelle') ;
       //var IDcolor= document.getElementById('')
       String IDchoice= semelle;
       String IDcolor= r;
     String IDurl= IDchoice + IDcolor;
     IDchoice;
     IDcolor;
     IDurl;
    //var a= document.getElementById('#r')
    }
    getID;

}

}

</script>

<style lang="scss">

// test1 CSS 

:root{
    box-sizing: border-box;
}
*, *::after, *::before{
    box-sizing: inherit;
    margin: 0; 
    padding: 0; 
}

.product img{
    max-width: 100%;
    min-width: 20rem;
}
.container{
    display: grid;
    place-items: center;
    height: 100vh; 
    width: 100vw; 
    padding: 0 2.5rem;
    background-color: white;
    
}
.product::after{
    content: "";
    position: absolute;
    top: 0; 
    right: 0; 
    bottom: 0; 
    left: 0; 
    
    /* opacity: 0.5; */
    mix-blend-mode: hue;                

}

.product-nav{
    position: relative;
}
.product-nav label{
    display: inline-block;
    width: 5vmin; 
    height: 5vmin; 
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 0 0.5em #fff,
                0.5em 0.5em 1em -0.15em rgba(0, 0, 0, 0.25);
    transition: 200ms all ease-in-out;
}

.product-nav label + label{
    margin-left: 2.5em; 
}



.product-nav label:nth-of-type(1), 
#color-1:checked ~ .product::after{
    background-color: $colorshoesdarkred;
}
.product-nav label:nth-of-type(2), 
#color-2:checked ~ .product::after{
    background-color: $colorshoesyellow;
}
.product-nav label:nth-of-type(3),
#color-3:checked ~ .product::after{
    background-color: $colorshoesgreen;
}
.product-nav label:nth-of-type(4),
#color-4:checked ~ .product::after{
    background-color: $colorshoesblue;
}
.product-nav label:nth-of-type(5),
#color-5:checked ~ .product::after{
    background-color: $colorshoesredpink;
}
.product-nav label:nth-of-type(6),
#color-6:checked ~ .product::after{
    background-color: $colorshoesgrey;
}



#color-1:checked ~ .product-nav > label:nth-of-type(1), 
#color-2:checked ~ .product-nav > label:nth-of-type(2),
#color-3:checked ~ .product-nav > label:nth-of-type(3),
#color-4:checked ~ .product-nav > label:nth-of-type(4),
#color-5:checked ~ .product-nav > label:nth-of-type(5),
#color-6:checked ~ .product-nav > label:nth-of-type(6){
    transform: scale(1.3);
}


#color-1:checked ~ .product-nav > label:nth-of-type(1){
    background-color: $colorshoesdarkred;
}
#color-2:checked ~ .product-nav > label:nth-of-type(2){
    background-color: $colorshoesyellow;
}
#color-3:checked ~ .product-nav > label:nth-of-type(3){
    background-color: $colorshoesgreen;
}
#color-4:checked ~ .product-nav > label:nth-of-type(4){
    background-color: $colorshoesblue;
}
#color-5:checked ~ .product-nav > label:nth-of-type(5){
    background-color: $colorshoesredpink;
}
#color-6:checked ~ .product-nav > label:nth-of-type(6){
    background-color: $colorshoesgrey;
}



// fin du test 1



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
    justify-content: center;
    
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
    margin-top: 150px ;
    margin-bottom: 0;
    margin-right: 0;
    margin-left: 0;
    justify-content: center;
    list-style: none;

    &__ColorActif{
        padding: 30px;
        height: pxToRem(70);
        width: pxToRem(70); 
        background-color: $colorshoesgreen;
          
        border-color: $colorshoesgreen ;
        border-radius: 100%;   
            
        }
    

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
    background-image: url("/imgs/choussure_1.png");
    
    
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

}
}


</style>
