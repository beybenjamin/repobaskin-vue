<template>
  <footer>
    <div class="e-footer">
      <div class="e-footer__1">
        <div class="e-footer__logo">
          <img class="e-logo__logo" src="imgs/Logo_BaskIn_Grand_Blanc.png" />
          <div class="e-logo__icons">
            <img
              class="e-logo__facebook"
              src="imgs/icons8-f-de-facebook-50.png"
            />
            <img class="e-logo__instagram" src="imgs/icons8-instagram-64.png" />
            <img class="e-logo__tictoc" src="imgs/icons8-tic-tac-50.png" />
          </div>
        </div>
        <div class="e-footer__menu">
          <div class="e-menu__1">
            <h4 class="e-menu__h5">Votre compte</h4>
            <ul class="e-menu__ul">
              <li class="e-menu__text">
                <router-link to="/profil" class="router"
                  >Mon profil</router-link
                >
              </li>
              <li class="e-menu__text">
                <router-link to="/creation" class="router"
                  >Mes créations</router-link
                >
              </li>
            </ul>
          </div>
          <div class="e-menu__2">
            <h4 class="e-menu__h5">Baskin</h4>
            <ul class="e-menu__ul">
              <li class="e-menu__text">
                <router-link to="/marque" class="router">La marque</router-link>
              </li>
              <li class="e-menu__text">
                <router-link to="/perso" class="router">Ma paire</router-link>
              </li>
              <li class="e-menu__text">
                <router-link to="/galerie" class="router"
                  >La galerie</router-link
                >
              </li>
              <li class="e-menu__text">
                <router-link to="/contact" class="router">Contact</router-link>
              </li>
            </ul>
          </div>
          <div class="e_menu__3">
            <h4 class="e-menu__h5">Informations</h4>
            <ul class="e-menu__ul">
              <li class="e-menu__text">
                <router-link to="/cgu" class="router"
                  >Condition général d'utilisation et de vente</router-link
                >
              </li>
              <li class="e-menu__text">
                <router-link to="/livraison" class="router"
                  >Livraison</router-link
                >
              </li>
              <li class="e-menu__text">
                <router-link to="/mention" class="router"
                  >Mentions légales</router-link
                >
              </li>
              <li class="e-menu__text">
                <router-link to="/plan" class="router">Plan HTML</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="e-footer__infos">
        <div class="e-info__1">
          <p class="copyright">Copyright © 2021 BASKIN SARL</p>
        </div>
        <div class="e-info__2">
          <div>
            <img class="e-info__icons" src="imgs/icons8-amex-100.png" />
          </div>
          <div>
            <img class="e-info__icons" src="imgs/icons8-mastercard-100.png" />
          </div>
          <div>
            <img
              class="e-info__icons"
              src="imgs/icons8-paypal-an-online-payments-system-operating-worldwide-48.png"
            />
          </div>
          <div>
            <img class="e-info__icons" src="imgs/icons8-visa-60.png" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>


<style lang="scss" scoped>
.e-footer {
  --separator-height: 50px;
  background-color: $colordarkgreen;
  position: relative;
  /*margin-top: calc(var(--separator-height) + 64px);*/
  padding: 2em 5em;
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
    border-right: 100vw solid transparent;
    background-color: transparent;
    box-sizing: border-box;
  }
}

.e-footer__1 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.e-footer__logo {
  margin-left: 7em;
  position: relative;
}

.e-logo__logo {
  max-height: 20em;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.e-logo__icons {
  margin-bottom: 2em;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
}

.e-logo__facebook {
  max-height: 2.5em;
}

.e-logo__instagram {
  max-height: 2.5em;
}

.e-logo__tictoc {
  max-height: 2.5em;
}

.e-footer__menu {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.e-menu__text {
  list-style: none;
  font-size: 16px;
  margin-top: 10px;
  // border-bottom: 20px solid red;
  // border-right: 200px solid green;
}

.router {
  text-decoration: none;
  color: $colorshoeswhite;
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
  font-size: 18px;
  color: $colorshoeswhite;
  font-weight: bold;
  font-family: $fontTexte;
}

.e-footer__infos {
  background-color: $colordarkgreen;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
}

.e-info__2 {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 20em;
}

.copyright {
  color: $colorshoeswhite;
  margin-right: 5em;
}

.e-info__icons {
  max-height: 2.5em;
  margin-right: 10px;
}

.lien {
  text-decoration: none;
  color: $colorshoeswhite;
}
</style>
