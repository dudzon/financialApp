import axios, { AxiosResponse, AxiosError } from "axios";
import { RoutesNames } from "../../model";
import { router } from "../../router";
import { myFramework } from "./../../framework/framework";

export class Step2 {
  constructor() {
    this.init();
  }
  init() {
    (window as any).currentView = new myFramework({
      el: "step2",
      data() {
        return {
          applicant: "",
          maritalStatus: "",
          sameHouseholdStatus: "",
        };
      },
      methods: {
        back: function (e: Event) {
          e.preventDefault();
          router.navigate(`${RoutesNames.default}${RoutesNames.step1}`);
        },
        next: function (e: Event) {
          e.preventDefault();
          axios
            .post("api/step2", { prop: "ok" })
            .then(function (response: AxiosResponse) {
              router.navigate(`${RoutesNames.default}${RoutesNames.step3}`);
            })
            .catch(function (err: AxiosError) {
              throw new Error(err.message);
            });
        },
      },
    });
  }
}
