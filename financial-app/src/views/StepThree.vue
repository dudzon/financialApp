<template>
  <div id="step3">
    <div class="step-progress">
      <div class="container">
        <span>60%</span>
        <div class="progress">
          <div class="determinate" style="width: 60%"></div>
        </div>
        <div class="info">
         <router-link to="/stepone">
            <p>Debt situation</p>
          </router-link>
          <router-link to="/steptwo">
            <p>Applicant</p>
          </router-link>
          <p><span class="active">Contact details</span></p>
        </div>
      </div>
    </div>
    <main class="container step3">
      <h5 class="center-align">Your contact information</h5>
      <form action="" class="form-stepper">
        <div class="row">
          <div class="input-field col s6 push-s3 no-padding">
            <span>Title</span>
            <select class="browser-default no-padding" v-model="applicantTitle">
              <option value="" disabled selected>Choose your option</option>
              <option
                v-for="option in options"
                :value="option.value"
                :key="option.value"
                >{{ option.text }}</option
              >
            </select>
          </div>
        </div>
        <div class="row names">
          <p class="col push-s3 no-padding names">What is your name?</p>
        </div>
        <div class="row names">
          <div class="input-field col s6 push-s3 no-padding ">
            <Input
              placeholder="First Name"
              id="first-name"
              type="text"
              v-model="applicantFirstName"
              inputClass="input-data"
            />
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6 push-s3 no-padding ">
            <Input
              placeholder="Last Name"
              id="last-name"
              type="text"
              v-model="applicantLastName"
              inputClass="input-data"
            />
          </div>
        </div>
        <h5 class="center-align">Fill in the information about your partner</h5>
        <div class="row">
          <div class="input-field col s6 push-s3 no-padding">
            <span>Title</span>
            <select class="browser-default no-padding" v-model="partnerTitle">
              <option value="" disabled selected>Choose your option</option>
              <option
                v-for="option in options"
                :value="option.value"
                :key="option.value"
                >{{ option.text }}</option
              >
            </select>
          </div>
        </div>
        <div class="row names">
          <p class="col push-s3 no-padding names">
            What is your partner's name?
          </p>
        </div>
        <div class="row names">
          <div class="input-field col s6 push-s3 no-padding ">
            <Input
              placeholder="First Name"
              id="partner-first-name"
              type="text"
              v-model="partnerFirstName"
            />
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6 push-s3 no-padding ">
            <Input
              placeholder="Last Name"
              id="partner-last-name"
              type="text"
              v-model="partnerLastName"
            />
          </div>
        </div>
        <div class="row buttons">
          <Button
            @click="back()"
            buttonClass="col s2 push-s3 waves-effect waves-light btn button-back"
            buttonText="BACK"
          />
          <Button
            @click="next()"
            buttonClass="col s2 push-s5 waves-effect waves-light btn"
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
import * as store from './../store/index';
export default {
  name: "StepThree",
  components: { Input, Button },
  data() {
    return {
      applicantTitle: "",
      partnerTitle: "",
      applicantFirstName: "",
      applicantLastName: "",
      partnerFirstName: "",
      partnerLastName: "",
      options: [
        { text: "Miss", value: "Miss" },
        { text: "Mister", value: "Mister" },
        { text: "No title", value: "No title" }
      ]
    };
  },
  store,
  methods: {
    back() {
      router.push("steptwo");
    },
    next() {
      axios
        .post("http://localhost:3000/api/step3", { prop: "ok" })
        .then(() => {
          console.log(this.applicantLastName, 'applicantLastName')
          this.$store.dispatch('getStepThreeData', {
            applicantTitle: this.applicantTitle,
            partnerTitle: this.partnerTitle,
            applicantFirstName: this.applicantFirstName,
            applicantLastName: this.applicantLastName,
            partnerFirstName: this.partnerFirstName,
            partnerLastName: this.partnerLastName
          })
          router.push("stepfour");
        })
        .catch(error => {
          console.log(error);
          throw new Error(error.response.data.error);
        });
    }
  }
};
</script>
<style scoped>
.step3 {
  margin-bottom: 5rem;
}
</style>
