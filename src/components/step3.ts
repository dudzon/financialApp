import axios, { AxiosResponse, AxiosError } from "axios";
import { RoutesNames } from "../../model";
import { router } from "../../router";
import { myFramework } from "./../../framework/framework";

export class Step3 {
  constructor() {
    this.init();
  }
  init() {
    (window as any).currentView = new myFramework({
      el: "step3",
      data() {
        return {
          applicantTitle: "",
          partnerTitle: "",
          applicantFirstName: "",
          applicantLastName: "",
          partnerFirstName: "",
          partnerLastName: "",
        };
      },
      methods: {
        back: function (e: Event) {
          e.preventDefault();
          router.navigate(`${RoutesNames.default}${RoutesNames.step2}`);
        },
        next: function (e: Event) {
          e.preventDefault();

          axios
            .post("api/step3", { prop: "ok" })
            .then(function (response: AxiosResponse) {
              router.navigate(`${RoutesNames.default}${RoutesNames.step4}`);
            })
            .catch(function (err: AxiosError) {
              throw new Error(err.message);
            });
        },
      },
    });
  }
}
