<template>
  <div id="step2">
    <div class="step-progress">
      <div class="container">
        <span>20%</span>
        <div class="progress">
          <div class="determinate" style="width: 20%"></div>
        </div>
        <div class="info">
          <router-link to="/stepone">
            <p>Debt situation</p>
          </router-link>
          <p><span class="active">Applicant</span></p>
          <router-link to="/stepthree">
            <p>Contact details</p>
          </router-link>
        </div>
      </div>
    </div>
    <main class="container">
      <h5 class="center-align">Who applies for the credit?</h5>
      <form action="" class="form-stepper">
        <div class="row checkbox">
          <div class="col s6 push-s3">
            <label>
              <input
                type="radio"
                value="Myself"
                name="radio1"
                class="with-gap"
                v-model="applicant"
              />
              <span>Myself</span>
            </label>
          </div>
        </div>
        <div class="row checkbox">
          <div class="col s6 push-s3">
            <label>
              <input
                type="radio"
                value="Me and my partner"
                name="radio1"
                class="with-gap"
                v-model="applicant"
              />
              <span>Me and my partner</span>
            </label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6 push-s3 no-padding">
            <span>What is your marital status</span>
            <select class="browser-default no-padding" v-model="maritalStatus">
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
        <div class="row">
          <h6 class="col push-s3 no-padding">
            Do you live in the same household?
          </h6>
        </div>
        <div class="row checkbox">
          <div class="col s3 push-s3">
            <label>
              <input
                type="radio"
                class="with-gap"
                value="yes"
                name="radio2"
                v-model="sameHouseholdStatus"
              />
              <span>Yes</span>
            </label>
          </div>
          <div class="col s3 push-s3">
            <label>
              <input
                type="radio"
                class="with-gap"
                value="no"
                name="radio2"
                v-model="sameHouseholdStatus"
              />
              <span>No</span>
            </label>
          </div>
        </div>
      </form>
      <div class="row buttons">
        <Button
          @click.prevent="back()"
          buttonClass="col s2 push-s3 waves-effect waves-light btn button-back"
          buttonText="BACK"
        />
        <Button
          @click.prevent="next()"
          buttonClass="col s2 push-s5 waves-effect waves-light btn"
          buttonText="NEXT"
        />
      </div>
    </main>
  </div>
</template>
<script>
import Button from "../components/Button.vue";
import router from "./../router/index";
import axios from "axios";
import * as store from "./../store/index";
export default {
  name: "StepTwo",
  components: { Button },
  data() {
    return {
      applicant: "",
      maritalStatus: "",
      sameHouseholdStatus: "",
      options: [
        { text: "Divorced", value: "Divorced" },
        { text: "Single", value: "Single" },
        { text: "Married", value: "Married" }
      ]
    };
  },
  store,
  methods: {
    back() {
      router.push("stepone");
    },
    next() {
      axios
        .post("http://localhost:3000/api/step2", { prop: "ok" })
        .then(() => {
          this.$store.dispatch("getStepTwoData", {
            applicant: this.applicant,
            maritalStatus: this.maritalStatus,
            sameHouseholdStatus: this.sameHouseholdStatus
          });

          router.push("stepthree");
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
.checkbox {
  margin-top: 2.5rem;
}
</style>
