<template>
  <div>
    <Newshoesform />

    <form @submit="submit">
      <div>
        <label for="username">Nom utilisateur</label>
        <input id="username" type="text" v-model="form.username" />
      </div>
      <div>
        <label for="password">Mot de passe</label>
        <input type="password" id="password" v-model="form.password" />
      </div>

      <input type="submit" value="submit" />
    </form>

    <div v-if="success">
      <p style="color: green">Votre inscription est réussi !</p>
    </div>

    <div v-if="error">
      <p style="color: red">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import Newshoesform from "@/components/Newshoesform";
import axios from "axios";
export default {
  components: {
    Newshoesform,
  },
  data() {
    return {
      form: {
        username: null,
        password: null,
      },
      success: false,
      error: false,
      errorMessage: null,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },

  mounted() {},
  methods: {
    submit(event) {
      event.preventDefault();

      axios
        .post("https://sitebaskin.benjaminbey.fr/wp-json/jwt-auth/v1/token", {
          username: this.form.username,
          password: this.form.password,
        })
        .then((response) => {
          if (response.status === 200) {
            this.success = true;
            console.log('ALO', response.data.data.token)

            this.$store.commit("setUser", {
              userid: response.data.data.id,
              username: response.data.data.displayName,
              email: response.data.data.email,
              authToken: response.data.data.token,
            });

            this.error = false;
          }
        })
        .catch((error) => {
          console.log("Error LOG : ", error.response);
          this.errorMessage = error.response.data.message;
          this.error = true;
          this.success = false;
        });
    },
  },
};
</script>

<style lang="scss">
//test branch dev
form {
  text-align: left;
  width: 980px;
  margin: auto;

  div {
    display: flex;

    label {
      width: 200px;
    }

    input {
      width: 100%;
    }
  }
}
</style>
