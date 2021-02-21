<template>
  <div id="step1">
    <Navigation />

    <main class="container">
      <form action="" class="form-stepper">
        <div class="row">
          <div class="input-field col s6 push-s3 no-padding">
            <span>Credit Purposes</span>
            <select class="browser-default" v-model="creditPurpose">
              <option value="" disabled selected>Choose your option</option>
              <option value="Mortgage">Mortgage</option>
              <option value="Student Credit">Student Credit</option>
              <option value="Car Credit">Car credit</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6 push-s3 no-padding">
            <span>Do you have any comments for your credit application?</span>
            <textarea
              id="textarea1"
              class="materialize-textarea"
              v-model="comments"
            ></textarea>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6 push-s3 no-padding error-data">
            <span>Desired loan amount in EUR</span>
            <Input id="loanAmount" type="text" v-model= "loanAmount" inputClass= "input-data"/>
            <span v-html="errorMessage"></span>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6 push-s3 no-padding error-data">
            <span>Duration in months</span>
            <Input id="duration" type="text" v-model= "duration" inputClass= "input-data"/>
            <span v-html="errorMessage"></span>
          </div>
        </div>
        <div class="row">
          <!-- <button v-click="checkCreditRate()" class="waves-effect waves-light btn-large col s6 push-s3 no-padding">Determine
                        credit rate</button> -->
          <Button
            buttonClass="waves-effect waves-light btn-large col s6 push-s3 no-padding"
            buttonText="Determine
                        credit rate"
          />
        </div>
      </form>
    </main>
  </div>
</template>
<script>
import Navigation from "../components/Navigation.vue";
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";

export default {
  name: "StepOne",
  components: { Navigation, Input, Button },
  data() {
    return {
      creditPurpose: "",
      comments: "",
      loanAmount: "",
      duration: "",
      options: ["Mortgage", "Studnt Credit", "Car Credit"]
    };
  },
  methods: {}
};
</script>
<style scoped>
.form-stepper {
  width: 100%;
}
</style>
