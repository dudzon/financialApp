import axios, { AxiosResponse, AxiosError } from "axios";
import { createRouter } from "routerjs";
import { RoutesNames } from "../../model";
import { View } from "../../view";
import { myFramework } from "./../../framework/framework";
import { router } from "./../../router";

export class Step1 {
  constructor() {
    this.init();
  }
  init() {
    (window as any).currentView = new myFramework({
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
              router.navigate(`${RoutesNames.default}${RoutesNames.step2}`);
            })
            .catch(function (err: AxiosError) {
              throw new Error(err.message);
            });
        },
      },
    });
  }
}
