<template>
  <div id="step2">
    <Navigation />
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
        <div class="row buttons">
            <Button @click.prevent = "showlogs()"
            buttonClass="col s2 push-s3 waves-effect waves-light btn button-back"
            buttonText="BACK"
          />
            <Button @click.prevent = "showlogs()"
            buttonClass="col s2 push-s5 waves-effect waves-light btn"
            buttonText="NEXT"
          />
        </div>
      </form>
    </main>
  </div>
</template>
<script>
import Button from '../components/Button.vue';
import Navigation from "../components/Navigation.vue";
export default {
  name: "StepTwo",
  components: { Button, Navigation },
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
  methods: {
    showlogs() {
      console.log( this.applicant, 'applicant');
      console.log( this.maritalStatus, 'maritalStatus');
      console.log( this.sameHouseholdStatus, 'sameHouseHold');
    }
  }
};
</script>
<style scoped>
.checkbox {
    margin-top:2.5rem;
}
</style>
