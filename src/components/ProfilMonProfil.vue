<template>
  <div class="c-contenu">
    <div class="c-introduction">
      <h3 class="c-introduction__h3">Mon profil</h3>
      <p>Ici tu vas pouvoir modifier tes informations personnels.</p>
      <p>Nous te promettons de les garder rien que pour nous.</p>
    </div>
    <div class="c-photo">
      <img
        class="e-photo__img"
        src="imgs/théo.png"
        alt="Photo d'un jeune homme"
      />
      <div>
        <button class="e-fullbutton">Modifier la photo</button>
        <button class="whiteFilledBtn">Supprimer la photo</button>
      </div>
    </div>
    <form class="e-formulaire" method="post">
      <ul>
        <li class="e-formlist">
          <label class="e-formlist__titre"
            >Prénom
            <input class="e-formlist__input" type="text" name="Prénom" />
          </label>
        </li>
        <li class="e-formlist">
          <label class="e-formlist__titre"
            >Nom
            <input class="e-formlist__input" type="text" name="Nom" />
          </label>
        </li>
        <li class="e-formlist">
          <label class="e-formlist__titre"
            >Pseudo
            <input class="e-formlist__input" type="text" name="Pseudo" />
          </label>
        </li>
        <li class="e-formlist">
          <label class="e-formlist__titre"
            >E-mail
            <input class="e-formlist__input" type="text" name="E-mail" />
          </label>
        </li>
        <li class="e-formlist">
          <label class="e-formlist__titre"
            >Téléphone
            <input class="e-formlist__input" type="text" name="Téléphone" />
          </label>
        </li>
      </ul>
      <input type="submit" class="whiteFilledBtn" value="Sauvegarder" />
    </form>
  </div>
</template>

<script>
export default {
  name: "ProfilMonProfil",
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.c-photo {
  width: max-content;
  margin: auto;
  margin-bottom: 48px;
  display: flex;
  column-gap: 64px;
  img {
    width: 230px;
    height: 230px;
    border-radius: 50%;
  }
  div {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    justify-content: center;
    row-gap: 12px;
  }
}
.e-fullbutton,
.whiteFilledBtn {
  margin: 0;
  max-width: unset;
}
</style>

<style lang="scss"></style>
