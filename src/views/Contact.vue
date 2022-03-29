<template>
  <div class="contact">
    <ImageHeader title="Contact" imgUrl="imgs/ban_1.jpeg" />

    <div class="e-paragraphe">
      <p>
        Un soucis avec un produit ? Des renseignements sur le fonctionnement du
        site ? <br />
        N'hésitez pas à contacter Baskin. Notre équipe vous répondra dans les
        meilleures délais.
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
            <p>
              <b>*</b> Votre message
              <textarea name="Commentaires" cols="30" rows="5"> </textarea>
            </p>
          </div>
          <button class="e-fullbutton">Envoyer</button>
        </form>
      </div>

      <div class="c-map-div">
        <div class="contact_info">
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
        </div>
        <div class="e-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d744985.2176521306!2d3.4044157363844203!3d43.16545639926214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b13b3d6dafa423%3A0xcb27c18f54956e94!2sBaskin!5e0!3m2!1sfr!2sfr!4v1639660369896!5m2!1sfr!2sfr"
            width="500"
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
<script>
import ImageHeader from "@/components/ImageHeader";
export default {
  name: "Contact",
  components: {
    ImageHeader,
  },
};
</script>

<style lang="scss" scoped>
.e-contact_body {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 1100px;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 4em;
  column-gap: 64px;
  align-items: center;
}

.e-paragraphe {
  text-align: center;
  padding-bottom: none;
  margin: 3em 0;
  padding: 0;
}

.c-formulaire_div {
  text-align: left;
  max-width: 100%;
  flex-grow: 1;
}

.e-fullbutton {
  display: block;
  margin: auto;
  margin-top: 1.5em;
}

.contact_info {
  margin-bottom: 2em;
  & > div:not(:last-child) {
    margin-bottom: 8px;
  }
}

.c-map-div {
  padding-top: 20px;
  text-align: center;
  flex-grow: 1;
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

.c-formulaire_div p {
  font-weight: bold;
}

.c-formulaire_div p b {
  color: red;
}

form {
  width: 100%;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 10px;
}

form div + div {
  margin-top: 1em;
}

label {
  display: inline-block;
  width: 90%;
  text-align: right;
}

input,
textarea {
  font: 1em sans-serif;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #999;
  border-radius: 5px;
}

input:focus,
textarea:focus {
  border-color: #000;
}

textarea {
  vertical-align: top;
  height: 5em;
}

//! fin formulaire!//

.e-adresse {
  padding-top: 5px;
  text-align: center;
}

.e-phone {
  padding-top: 5px;
  text-align: center;
}

//! responssive !//

@media (max-width: 480px) {
  .e-contact_body {
    display: flex;
    flex-direction: column;
  }

  .e-map {
    width: 100%;
    padding-left: 0%;
  }

  .e-adresse,
  .e-phone,
  h3 {
    text-align: left;
  }

  .e-paragraphe {
    text-align: left;
    text-align: justify;
    padding: 2em;
    margin: 0;
  }

  .c-formulaire_div {
    padding: 2em;
  }

  .c-map-div {
    padding: 2em;
  }
}

//! Header !//

h2 {
  padding-top: 1em;
  text-align: center;
}
iframe {
  width: 100%;
}
</style>
