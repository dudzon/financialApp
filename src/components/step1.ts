import axios, { AxiosResponse, AxiosError } from "axios";
import { createRouter } from "routerjs";
import { RoutesNames } from "../../model";
import { dataToValidate } from "../../validator";
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
        const self = this;
        return {
          creditPurpose: "",
          comments: "",
          loanAmount: "",
          duration: "",
        };
      },
      methods: {
        checkCreditRate: function (e: Event) {
          e.preventDefault();

          axios
            .post("api/step1", { prop: "ok" })
            .then(function (response: AxiosResponse) {
              const passValidation = (self as any).currentView.methods.validate();
              if (!passValidation) {
                return;
              }
              router.navigate(`${RoutesNames.default}${RoutesNames.step2}`);
            })
            .catch(function (err: AxiosError) {
              throw new Error(err.message);
            });
        },
        validate: function (): boolean {
          return dataToValidate(
            [
              (window as any).currentView.watchers.loanAmount,
              (window as any).currentView.watchers.duration,
            ],
            (window as any).currentView.el
          );
        },
      },
    });
  }
}
