import axios, { AxiosResponse, AxiosError } from "axios";
import { RoutesNames } from "../../model";
import { myFramework } from "./../../framework/framework";

export class Step1 {
  constructor() {
    this.init();
  }
  init() {
    const step1 = new myFramework({
      el: "step1",
      data() {
        return {};
      },
      methods: {
        checkCreditRate: function (e: Event) {
          e.preventDefault();

          axios
            .post("api/step1", { prop: "ok" })
            .then(function (response: AxiosResponse) {
              (window as any).location = RoutesNames.step2;
            })
            .catch(function (err: AxiosError) {
              throw new Error(err.message);
            });
        },
      },
    });
  }
}
