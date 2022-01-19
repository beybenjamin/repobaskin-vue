<template>
  <footer>
    <div class="e-footer">
      <div class="e-footer__logo">
        <img class="e-logo__logo" src="imgs/Logo_BaskIn_Grand_Blanc.png" />
        <div class="e-logo__icons">
        <img class="e-logo__facebook" src="imgs/icons8-f-de-facebook-50.png" />
        <img class="e-logo__instagram" src="imgs/icons8-instagram-64.png" />
        <img class="e-logo__tictoc" src="imgs/icons8-tic-tac-50.png" />
        </div>
      </div>
      <div class="e-footer__menu">
        <div class="e-menu__1">
          <h4 class="e-menu__h5">Votre compte</h4>
          <ul class="e-menu__ul">
            <li class="e-menu__text">
              <a href="Profil_monProfil.html">Mon profil</a>
            </li>
            <li class="e-menu__text">
              <a href="creation.html">Mes créations</a>
            </li>
          </ul>
        </div>
        <div class="e-menu__2">
          <h4 class="e-menu__h5">Baskin</h4>
          <ul class="e-menu__ul">
            <li class="e-menu__text"><a href="marque.html">La marque</a></li>
            <li class="e-menu__text">
              <a href="personalisation.html">Ma paire</a>
            </li>
            <li class="e-menu__text">
              <a href="galerie.html">La galerie</a>
            </li>
            <li class="e-menu__text"><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="e_menu__3">
          <h4 class="e-menu__h5">Informations</h4>
          <ul class="e-menu__ul">
            <li class="e-menu__text">
              <a href="cgu.html">Condition général d'utilisation et de vente</a>
            </li>
            <li class="e-menu__text">
              <a href="livraison.html">Livraison</a>
            </li>
            <li class="e-menu__text">
              <a href="mention.html">Mentions légales</a>
            </li>
            <li class="e-menu__text"><a href="plan.html">Plan HTML</a></li>
          </ul>
        </div>
      </div>
     
    </div>
     <div class="e-footer__infos">
      <div class="e-info__1">
        <p>Copyright © 2021 BASKIN SARL</p>
      </div>
      <div class="e-info__2">
        <div class="e-info__icons">
        <img src="imgs/icons8-amex-100.png" />
        </div>
        <div class="e-info__icons">
        <img src="imgs/icons8-mastercard-100.png" />
        </div>
        <div class="e-info__icons">
        <img src="imgs/icons8-paypal-an-online-payments-system-operating-worldwide-48.png"/>
        </div>
        <div class="e-info__icons">
        <img src="imgs/icons8-visa-60.png" />
        </div>
      </div>
    </div>
  </footer>
</template>


<style lang="scss" scoped>

.e-footer {
  --separator-height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: $colordarkgreen;
  position: relative;
  margin-top: calc(var(--separator-height) + 64px);
  &::before {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    width: 0;
    transform: translateY(-100%);

    border-bottom: var(--separator-height) solid $colordarkgreen;
    border-right: 100vw solid white;

    background-color: red;
    box-sizing: border-box;
  }
}


.e-footer__logo{
  margin-left: 7em;
}

.e-logo__logo{
  max-height: 13em;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.e-logo__icons{
  margin-bottom: 2em;
}

.e-logo__facebook{
  max-height: 1.5em;
}

.e-logo__instagram{
  max-height: 1.5em;
}

.e-logo__tictoc{
  max-height: 1.5em;
}

.e-footer__menu {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.e-menu__text {
  list-style: none;
  font-size: 12px;
  margin-top: 10px;
  // border-bottom: 20px solid red;
  // border-right: 200px solid green;
}

.e-menu__ul {
  padding: 0;
}

.e-menu__1 {
  text-align: left;
  padding-right: 5em;
}

.e-menu__2 {
  text-align: left;
  padding-right: 5em;
}

.e_menu__3 {
  text-align: left;
  padding-right: 5em;
}

.e-menu__h5 {
  font-size: 16px;
  color: $colorshoeswhite;
  font-weight: bold;
  font-family: $fontTexte;
}

.e-footer__infos {
  background-color: $colordarkgreen;
}

.e-info__icons{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

a {
  text-decoration: none;
  color: $colorshoeswhite;
}
</style>
