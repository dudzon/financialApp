<template>
 <Navigation />
  <router-view />
</template>

<script>
import Navigation from "./components/Navigation";
import M from 'materialize-css'
export default {
  components: {Navigation},
  mounted() {
    M.AutoInit();
  }
};
</script>

<style>
:root {
  --grey: #e5e5e5;
  --progress-background-color: #ddd;
  --main-color: #b4cd3a;
}
span, input{
    font-size: .8rem;
}
.input-field {
    margin-bottom:0;
    padding:0;
}
.error-data span[v-html='errorMessage']{
    display:block;
    color:red;
    font-size: 10px;
}
.form-stepper {
  width: 100%;
}
.buttons {
    margin-top:3rem;
}
.button-back {
    background:#979797;
}
.active {
      color: var(--main-color);
}
.names {
  margin-bottom: 0;
}
.step-progress {
    width:100%;
    height:7rem;
    background: var(--progress-background-color);
}
.step-progress .container {
    height:100%;
    padding-top:1rem;
}
.step-progress span {
    font-size:1.2rem;
    font-weight:bold;
    color: var(--main-color);

}
.step-progress .progress{
    background: #FFF;
    height:10px;
    margin-bottom:0;
}
.info {
    width:70%;
    display: flex;
    justify-content: space-between;
    margin:0 auto;
    font-weight:200;
}
.info a {
      color:#000;
}
.active {
      color: var(--main-color);
}
</style>
