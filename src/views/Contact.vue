<template>
  <div class="contact">
    <div class="c-div__image" >
      <img class="e-image" src="imgs/sneakers.jpg" />
      <div class="e-contact__titre">
        <h2>Contact</h2>
      </div>
    </div>

    <div class="e-paragraphe">
      <p>
        Un soucis avec un produit ?<br />
        Des renseignements sur le fonctionnement du site ?<br />
        N'hésitez pas à contacter Baskin.<br />
        Notre équipe vous répondra dans les meilleures délais.
      </p>
    </div>

    <div class="e-contact_body">
    <div class="c-formulaire_div">
      <p><b>*</b> champs obligatoires</p>
      <form method="post">
        <div class="e-formulaire_div">
          <p><b>*</b> Votre nom</p>
          <input type="text" name="Nom" />
        </div>
        <div class="e-formulaire_div">
          <p><b>*</b> Votre prénom</p>
          <input type="text" name="Prénom" />
        </div>
        <div class="e-formulaire_div">
          <p><b>*</b> Votre adresse mail</p>
          <input type="text" name="Mail" />
        </div>
        <div class="e-formulaire_div">
          <p><b>*</b> Object du message</p>
          <input type="text" name="Object" />
        </div>
        <div class="e-formulaire_div">
          <p><b>*</b> Votre message
           <textarea name="Commentaires" cols="30" rows="5" >
           </textarea>
        </p>
        </div>
        <button class="e-fullbutton">Envoyer</button>
      </form>
    </div>
    <div class="c-map-div">
      <h3>Coordonnées</h3>
      <div class="e-adresse">
        <h4>Adresse :</h4>
        <p>
          5 avenue Léon Blum<br />
          25200 Montbéliard
        </p>
      </div>
      <div class="e-phone">
        <h4>Téléphonne :</h4>
        <p>03 81 00 00 00</p>
      </div>
      <div class="e-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d744985.2176521306!2d3.4044157363844203!3d43.16545639926214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b13b3d6dafa423%3A0xcb27c18f54956e94!2sBaskin!5e0!3m2!1sfr!2sfr!4v1639660369896!5m2!1sfr!2sfr"
          width="600"
          height="400"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        >
        </iframe>
      </div>
    </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>

<style lang="scss" scoped>

.e-paragraphe{
  text-align: left;
  padding-left: 40%;
  padding-top: 2%;
  padding-bottom: none;
}

.e-contact_body{
  display: flex;
  flex-direction: row;
  padding-top: 3%;
  width: 1000px;
  justify-content: baseline;
  margin-left: auto;
  margin-right: auto;
}

.c-formulaire_div{
  padding-top: 2%;
  text-align: left;
  padding-left: 10%;
  flex: 30%;
}

.c-map-div{
  padding-top: 20px;
  text-align: center;
  padding-left: 10%;
  flex: 30%;
}

.titre {
  font-size: 60px;
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

//! début formulaire!//

.c-formulaire_div p{
  padding-top: 3%;
  font-weight: bold;
  padding-bottom: 1%;
}

.c-formulaire_div p b {
  color: red;
}

form {
  width: 335px;
  padding: 1em;
  border: 1px solid #CCC;
  border-radius: 10px;
}

form div + div {
  margin-top: 1em;
}

label {
  display: inline-block;
  width: 90px;
  text-align: right;
}

input, textarea {
  font: 1em sans-serif;
  width: 300px;
  box-sizing: border-box;
  border: 1px solid #999;
  border-radius: 5px;
}

input:focus, textarea:focus {
  border-color: #000;
}

textarea {
  vertical-align: top;
  height: 5em;
}

//! fin formulaire!//

.e-adresse{
  padding-top: 5px;
  text-align: center;
}

.e-phone{
  padding-top: 5px;
  text-align: center;
}

//! responssive !//

@media (max-width: 480px) {
  .flex-container {
    flex-direction: column;
  }

  .e-map{
    max-width: 400px;
  }

  .e-paragraphe{
    padding: 20%;
    padding-top: 5%;
  }
  .e-image{
    height: 5%;
  }
}

//! Header !//

.c-div__image{
    height: 350px;
    width: 100vm;
    overflow: hidden;
}

.e-image{
    min-height: 90%;
    min-width: 90%;
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

.e-contact__titre{
  font-size: 60px;
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  padding-bottom: 18%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.e-contact__titre h2{
  color: antiquewhite;
}

</style>