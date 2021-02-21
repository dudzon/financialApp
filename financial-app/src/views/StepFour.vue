<template>
  <div id="step4">
    <main class="container">
      <form action="" class="form-stepper">
        <div class="row names">
          <p class="col push-s3 no-padding names">When were you born?</p>
        </div>
        <div class="row names">
          <div class="input-field col s6 push-s3 no-padding datepicker">
            <Input
              placeholder="Date of birth"
              id="dob"
              type="date"
              v-model="dateOfBirth"
            />
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6 push-s3 no-padding">
            <span>What is your nationality?</span>
            <select
              id="nationality"
              class="browser-default no-padding"
              v-model="nationality"
            >
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
          <div class="input-field col s6 push-s3 no-padding">
            <span>Which residence permit do you have?</span>
            <select
              id="residence-permit"
              class="browser-default no-padding"
              v-model="residence"
            >
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
            How long have you been resident in Poland?
          </p>
        </div>
        <div class="row names">
          <div class="input-field col s6 push-s3 no-padding">
            <Input
              id="residence"
              type="text"
              v-model="residentPeriod"
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
export default {
  name: "StepFour",
  components: { Input, Button },
  data() {
    return {
      dateOfBirth: "",
      nationality: "",
      residence: "",
      residentPeriod: "",
      options: [
        { text: "Poland", value: "Poland" },
        { text: "Germany", value: "Germany" },
        { text: "Czech Republic", value: "Czech Republic" }
      ]
    };
  },
  methods: {
    back() {
      router.push("stepthree");
    },
    next() {
      axios
        .post("http://localhost:3000/api/step4", { prop: "ok" })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
          throw new Error(error.response.data.error);
        });
    }
  }
};
</script>
<style scoped></style>
