<template>
  <div class="c-motDePasse">
    <div class="c-contenu">
      <div class="c-introduction">
        <h3 class="c-introduction__h3">Mot de Passe</h3>
        <p>Ici tu vas pouvoir modifier ton mot de passe</p>
        <p>Ne l'oublie surtout pas !</p>
      </div>
      <form method="post" class="e-formulaire">
        <ul>
          <li class="e-formlist">
            <label class="e-formlist__titre"
              >Mot de passe actuel
              <input class="e-formlist__input" type="text" name="MDPactuel" />
            </label>
          </li>
          <li class="e-formlist">
            <label class="e-formlist__titre"
              >Nouveau mot de passe
              <input class="e-formlist__input" type="text" name="NvMDP" />
            </label>
          </li>
          <li class="e-formlist">
            <label class="e-formlist__titre"
              >Retaper le mot de passe
              <input class="e-formlist__input" type="text" name="RetaperMDP" />
            </label>
          </li>
        </ul>
      </form>
      <button class="whiteFilledBtn">Sauvegarder</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfilMdp",
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss"></style>
