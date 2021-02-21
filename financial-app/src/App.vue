<template>
  <router-view />
</template>

<script>
import M from 'materialize-css'
export default {
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
</style>
