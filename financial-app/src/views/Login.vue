<template>
  <section id="login">
    <Navigation />
    <main class="container">
      <form action="" class="form" @submit="login()">
        <div class="row">
          <Input
            placeholder="Username"
            id="username"
            type="text"
            inputClass= "validate"
            v-model="username"
          />
          <Input
            placeholder="Password"
            id="password"
            type="password"
            inputClass= "validate"
            v-model="password"
          />
          <Button
            wrapperClass="col s12"
            buttonClass="waves-effect waves-light btn-large col s12 button-login"
            buttonText="Login"
          />
        </div>
      </form>
      <p v-if="statusName" class="login login-success">Login successful</p>
      <p v-if="errorName" v-html="errorName" class="login login-error"></p>
    </main>
  </section>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
import router from "./../router/index";
import { loginMixin } from "./../mixins/login";

const IS_AUTHENTICATED = "is_authenticated";

export default {
  name: "Login",
  components: { Navigation, Input, Button },
  mixins: [loginMixin],
  data() {
    return {
      username: "",
      password: "",
      errorName: "",
      statusName: ""
    };
  },
  created() {
    this.isUserAuthenticated();
  },
  methods: {
    login() {
      this.loginRequest(this.username, this.password)
        .then(() => {
          this.statusName = "success";

          this.authenticate();
          setTimeout(() => {
            router.push("calc");
          }, 2000);
        })
        .catch(error => {
          console.log(this, "this");

          this.errorName = error.response.data.error;

          setTimeout(() => {
            this.errorName = "";
          }, 2000);
        });
      this.resetInputs();
    },
    resetInputs() {
      this.username = "";
      this.password = "";
    },
    authenticate() {
      if (!localStorage.getItem(IS_AUTHENTICATED)) {
        localStorage.setItem(IS_AUTHENTICATED, "true");
      }
    },
    isUserAuthenticated() {
      if (localStorage.getItem(IS_AUTHENTICATED)) {
        router.push("calc");
      }
    }
  }
};
</script>

<style scoped>
#login {
  height: 100vh;
}
.button-login {
  margin-top: 3rem;
}
.form {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
}
.login-success {
  color: green;
}
.login-error {
  color: red;
}
</style>
