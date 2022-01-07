<template>
  <div class="contact">
    <div class="image-header">
      <img src="imgs/sneakers.jpg" />
      <div class="titre">
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
    <div class="c-formulaire_div">
      <h3>Formulaire de contact</h3>
      <p>* champs obligatoires</p>
      <form method="post">
        <div class="e-formulaire_div">
          <p>* Votre nom</p>
          <input type="text" name="Prénom" />
        </div>
        <div class="e-formulaire_div">
          <p>* Votre prénom</p>
          <input type="text" name="Prénom" />
        </div>
        <div class="e-formulaire_div">
          <p>* Votre adresse mail</p>
          <input type="text" name="Prénom" />
        </div>
        <div class="e-formulaire_div">
          <p>* Object du message</p>
          <input type="text" name="Prénom" />
        </div>
        <div class="e-formulaire_div">
          <p>* Votre message</p>
          <input type="text" name="Prénom" />
        </div>
        <button class="e-fullbutton">Envoyer</button>
      </form>
    </div>
    <div class="c-map-div">
      <h3>Cordonnées</h3>
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
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        >
        </iframe>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>