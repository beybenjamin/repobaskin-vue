<template>
  <div class="page-container">
    <nav>
      <ul>
        <li :class="{ active: activeTab === 0 }" @click="activeTab = 0">
          Mon Profil
        </li>
        <li :class="{ active: activeTab === 1 }" @click="activeTab = 1">
          Mot de passe
        </li>
        <li :class="{ active: activeTab === 2 }" @click="activeTab = 2">
          Adresse de livraison
        </li>
        <li :class="{ active: activeTab === 3 }" @click="activeTab = 3">
          Mes précommandes
        </li>
        <li
          :class="{ active: activeTab === 4 }"
          @click="
            $router.push('/');
            $store.commit('setUser', {
              id: null,
              displayName: null,
              email: null,
            });
          "
        >
          Déconnexion
        </li>
      </ul>
    </nav>
    <div class="profil">
      <div class="e-titre">
        <p>Bienvenue à toi Théo,</p>
        <p>Nous sommes ravis de te retrouver</p>
      </div>
      <ProfilMonProfil v-if="activeTab === 0" />
      <ProfilMdp v-if="activeTab === 1" />
      <ProfilAdresseLivraison v-if="activeTab === 2" />
      <ProfilPrecommandes v-if="activeTab === 3" />
      <ProfilCreations v-if="activeTab === 4" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ProfilMonProfil from "../components/ProfilMonProfil.vue";
import ProfilMdp from "../components/ProfilMdp.vue";
import ProfilAdresseLivraison from "../components/ProfilAdresseLivraison.vue";
import ProfilPrecommandes from "../components/ProfilPrecommandes.vue";
import ProfilCreations from "../components/ProfilCreations.vue";

export default {
  components: {
    ProfilMonProfil,
    ProfilMdp,
    ProfilAdresseLivraison,
    ProfilPrecommandes,
    ProfilCreations,
  },
  data() {
    return {
      shoes: [],
      activeTab: 0,
    };
  },

  created() {
    axios
      .get(
        `https://sitebaskin.benjaminbey.fr/wp-json/wp/V2/chaussures?author=${this.$store.state.user.id}`
      )
      .then((response) => {
        console.log(response.data);
        this.shoes = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped lang="scss">
.page-container {
  display: grid;
  grid-template-columns: 260px 1fr;
  column-gap: 24px;
  // @media (max-width: 650px) {
  //   grid-template-columns: 130px 1fr;
  //   font-size: 0.7em;
  // }
  overflow-x: hidden;
  nav {
    background-color: $colorgrey;
    padding-top: 168px;
    padding-bottom: 68px;
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      row-gap: 24px;
      margin-left: 24px;
      @media (max-width: 650px) {
        margin-left: 4px;
      }
      li {
        margin: 0;
        padding-bottom: 2px;
        text-align: left;
        font-size: 1.15em;
        color: $colordarkgreen;
        width: max-content;
        transition: all ease 230ms;
        position: relative;
        overflow: hidden;

        &::before {
          display: block;
          content: "";
          position: absolute;
          bottom: 0px;
          width: 100%;
          left: -100%;
          transition: all ease 230ms;
          height: 2px;
          background-color: $colordarkpink;
        }

        &:hover {
          cursor: pointer;
        }

        &:hover,
        &.active {
          font-weight: bold;

          &::before {
            left: 0;
          }
        }
      }
    }
  }
}

.profil {
  padding-top: 98px;
  padding-bottom: 48px;
  max-width: 880px;
  min-width: 80%;
  margin: auto;
  .e-titre {
    font-family: roboto;
    font-size: 1.6em;
    text-align: center;
    margin-bottom: 24px;
    p {
      text-align: center;
    }
  }
}
</style>

<style lang="scss">
.c-contenu .c-introduction {
  text-align: left;
  margin-bottom: 48px;
  .c-introduction__h3 {
    font-family: "Decoy", arial;
    color: $colordarkgreen;
    font-size: 1.6em;
    margin-bottom: 8px;
  }
}
.e-formulaire ul {
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    margin: 0;
    padding: 0;
    text-align: left;
    margin-bottom: 24px;
    label {
      font-family: roboto;
      color: $colordarkgreen;
      font-weight: bold;
      font-size: 1.25em;
    }
    input {
      display: block;
      margin-top: 8px;
      width: 100%;
      font-size: 1em;
      padding: 6px 0;
      border: 1px solid $colordarkgreen;
      border-radius: 4px;
    }
  }
}
input[type="submit"] {
  margin-top: 24px !important;
}
</style>
