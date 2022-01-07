<template>
  <div id="header">
    <div class="e-logo">
      <a href="#"><img class="e-logo__img" src="/src/imgs/Logo.png" /></a>
    </div>
    <div class="e-menu">
      <ul class="e-menu__ul">
        <li class="e-menu__li">
          <a class="e-decoration" href="marque.html">La marque</a>
        </li>
        <li class="e-menu__li">
          <a class="e-decoration" href="galerie.html">La galerie</a>
        </li>
        <li class="e-menu__li">
          <a class="e-decoration" href="contact.html">Contact</a>
        </li>
        <li class="e-menu__li">
          <a class="e-decoration" href="personalisation.html">Ma paire</a>
        </li>
        <li class="e-menu__li">
          <a href="#"><img src="/src/imgs/icon_profil.png" alt="" /></a>
        </li>
        <li class="e-menu__li">
          <a href="#"><img src="/src/imgs/icon_cart.png" alt="" /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#header{
    background-color: $colordarkgreen;
    max-height: 90px;
    max-width: 1200px;
    border-bottom-left-radius: 30px ;
    border-bottom-right-radius: 30px ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    box-shadow: 1px 1px 5px 2px $colorshadow;

}

.e-logo{
    width: auto;
    display: flex;
    margin: 0px 35px;
}

.e-logo__img{
    max-width: 200px;
    margin: 10px;
}


.e-decoration{
    font-size: 20px;
    text-decoration: none;
    color: $colorwhite;
    font-family: $fontTexte;
    
}

.e-menu__ul{
    display: flex;
    flex-direction: row;
}
.e-menu__li{
    display: flex ;
    flex-direction: row;
    margin-right: 35px;
    text-decoration: none;
    align-items: center;
    
}
</style>