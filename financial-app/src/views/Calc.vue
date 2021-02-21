<template>
  <div id="calc">
    <main class="form-calc">
      <form action="">
        <div class="row valign-wrapper">
          <div class="col s6">
            <span>Credit Amount in EUR</span>
          </div>
          <div class="col s6 error-data">
            <Input
              id="creditAmount"
              type="text"
              v-model="creditAmount"
              inputClass=" browser-default credit-data right"
            />
            <span v-html="errorMessage"></span>
          </div>
        </div>
        <div class="progress progress-calc">
          <div class="determinate" style="width: 70%"></div>
        </div>
        <div class="row valign-wrapper">
          <div class="col s6">
            <span>Duration in months</span>
          </div>
          <div class="col s6 error-data">
            <Input
              id="duration"
              type="text"
              v-model="duration"
              inputClass=" browser-default credit-data right"
            />
            <span v-html="errorMessage"></span>
          </div>
        </div>
        <div class="progress">
          <div class="determinate" style="width: 70%"></div>
        </div>

        <div class="row texts valign-wrapper">
          <div class="col s6">
            <span class="texts__main">Monthly rate</span>
          </div>
          <div class="col s6">
            <p class="texts__secondary">
              from <span v-html="monthlyRateMin"></span><span>EUR</span> to
              <span v-html="monthlyRateMax"></span><span>EUR</span>
            </p>
          </div>
        </div>
        <div class="row texts valign-wrapper">
          <div class="col s6">
            <span class="texts__main">Nominal interest</span>
          </div>
          <div class="col s6">
            <p class="texts__secondary">
              from <span>5.67%</span> to <span>9.8%</span>
            </p>
          </div>
        </div>
        <div class="row buttons">
        <Button
            @click="calculateRate()"
            buttonClass="col s6 waves-effect waves-light btn"
            buttonText="Apply your loan"
          />
          <Button
            @click="calc()"
            buttonClass="col s3 push-s3 waves-effect waves-light btn"
            buttonText="NEXT"
          />
        </div>
      </form>
    </main>
  </div>
</template>
<script>
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
import router from "./../router/index";
import axios from "axios";
export default {
  name: "Calc",
  components: { Input, Button },
  data() {
      return {
          creditAmount: "",
          duration: "",
          monthlyRateMin: "",
          monthlyRateMax: "",
      }
  },
  methods: {
      calc() {
        axios
            .post("http://localhost:3000/api/calc", { prop: "ok" })
            .then(response =>  {
            console.log(response)
             router.push("stepone");
            })
           .catch(error => {
            console.log(error);
           throw new Error(error.response.data.error);
        });
      },
      calculateRate() {
          console.log('implement me');
      }
  }
};
</script>
<style scoped>
.form-calc {
    width:40%;
    height:100%;
    margin:10rem auto 0;
}
.credit-data {
    display:block;
    text-align: right;
    width:10rem;
    padding:5px;
    border: 2px solid var(--grey);
}
.progress-calc{
    margin: 1.5rem 0;
}
.texts div:nth-child(2){
    text-align:right;
}
.texts__main {
    text-transform:uppercase;
    font-weight: bold;
}
.texts__secondary {
    color: rgba(0,0,0,.3);
    font-size:.8rem;
}
.texts__secondary span {
    color:#000;
}
</style>
