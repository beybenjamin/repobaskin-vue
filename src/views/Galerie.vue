<template>
  <div class="galerie">
    <div class="image-header">
      <img src="imgs/sneakers.jpg" />
      <div class="titre">
        <h2>La galerie</h2>
      </div>
    </div>
    <div class="c-products">
      <h3>Notre communauté</h3>

      <div class="e-product">
        <div class="e-shoes">
          <div class="e-shoes__img">
            <img src="imgs/chaussure.png" />
            <svg class="e-coeur" viewBox="0 0 32 29.6">
            <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/></svg> 
          </div>
          <div class="c-galerie-h3">
            <h3>Super bro</h3>
          </div>
          <button class="e-fullbutton">Prendre le visuel</button>
        </div>
      </div>
      <div class="e-product">
        <div class="e-shoes">
          <div class="e-shoes__img">
            <img src="imgs/chaussure.png" />
            <svg class="e-coeur" viewBox="0 0 32 29.6">
            <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/></svg> 
          </div>
          <div class="c-galerie-h3">
            <h3>Super bro</h3>
          </div>
          <button class="e-fullbutton">Prendre le visuel</button>
        </div>
      </div>
      <div class="e-product">
        <div class="e-shoes">
          <div class="e-shoes__img">
            <img src="imgs/chaussure.png" />
            <svg class="e-coeur" viewBox="0 0 32 29.6">
            <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/></svg> 
          </div>
          <div class="c-galerie-h3">
            <h3>Super bro</h3>
          </div>
          <button class="e-fullbutton">Prendre le visuel</button>
        </div>
      </div>
      <div class="e-product">
        <div class="e-shoes">
          <div class="e-shoes__img">
            <img src="imgs/chaussure.png" />
<svg class="e-coeur" viewBox="0 0 32 29.6">
            <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/></svg> 
          </div>
          <div class="c-galerie-h3">
            <h3>Super bro</h3>
          </div>
          <button class="e-fullbutton">Prendre le visuel</button>
        </div>
      </div>

      <div class="e-product">
        <div class="e-shoes">
          <div class="e-shoes__img">
            <img src="imgs/chaussure.png" />
            <svg class="e-coeur" viewBox="0 0 32 29.6">
            <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/></svg> 
          </div>
          <div class="c-galerie-h3">
            <h3>Super bro</h3>
          </div>
          <button class="e-fullbutton">Prendre le visuel</button>
        </div>
      </div>
    </div>
    <button class="c-galerie-nav" onclick="firstpage()"></button>
    <button class="c-galerie-nav" onclick="previous()"></button>
    <span id="e-galerie-1"></span>
    <button class="c-galerie-nav" onclick="nextPage()"></button>
    <button class="c-galerie-nav" onclick="lastPage()"></button>
  </div>
</template>


<style lang="scss" scoped>
.titre {
  font-size: 60px;
  justify-content: center;
  align-items: center;
  display: flex;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.e-shoes__img {
  border-radius: 1.5em;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.2);
}

.e-coeur {
  fill: $colordarkpink;
  position: relative;
  top: 5px;
  width: 25px;
}

</style>