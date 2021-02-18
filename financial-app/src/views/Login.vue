<template>
  <section id="login">
    <Navigation />
    <main class="container">
      <form action="" class="form" @submit ="login()">
        <div class="row">
              <Input placeholder="Username" id="username" type ="text" v-model = "username"/>
              <Input placeholder="Password" id="password" type ="password" v-model= "password"/>
              <Button wrapperClass= "col s12" buttonClass= "waves-effect waves-light btn-large col s12 button-login" buttonText= "Login"/>
        </div>
        
      </form>
      <!-- <p v-if = "loginStatus === success" class = "login login-success">Login successful</p>
            <p v-if = "loginStatus === error"  v-html="errorName" class = "login login-error"></p> -->
    </main>
  </section>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
export default {
  name: "Login",
  components: { Navigation, Input, Button },
  data() {
      return {
          username: '',
          password: ''
      }
  },
  computed:{
      loginStatus: ''
  },
  methods: {
      login() {
          console.log(this.username, 'username');
          console.log(this.password, 'password');
          this.resetInputs();
      },
      resetInputs() {
          this.username ='';
          this.password =''
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
</style>