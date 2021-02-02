import Axios from "axios";
import { myFramework } from "./../../framework/framework";
import axios, { AxiosError, AxiosResponse } from "axios";
import { RoutesNames } from "../../model";
import { router } from "../../router";
import { dataToValidate } from "./../../validator";

const RATE = {
  minimumRate: 5.67,
  maximumRate: 9.8,
};

export class Calc {
  constructor() {
    this.init();
  }
  init(): void {
    (window as any).currentView = new myFramework({
      el: "calc",
      data() {
        const self = this;
        return {
          creditAmount: "",
          duration: "",
          monthlyRateMin: "",
          monthlyRateMax: "",
        };
      },
      methods: {
        calc: function (e: Event) {
          e.preventDefault();

          axios
            .post("api/calc", { prop: "ok" })
            .then(function (response: AxiosResponse) {
              router.navigate(`${RoutesNames.default}${RoutesNames.step1}`);
            })
            .catch(function (err: AxiosError) {
              throw new Error(err.message);
            });
        },
        calculateRate: function (e: Event) {
          e.preventDefault();
          const passValidation = (self as any).currentView.methods.validate();
          if (!passValidation) {
            return;
          }
          const amount = +(window as any).currentView.watchers.creditAmount;
          const duration = +(window as any).currentView.watchers.duration;
          const interestMin = (amount * RATE.minimumRate) / 100;
          const resultMin = (amount + interestMin) / duration;
          const interestMax = (amount * RATE.maximumRate) / 100;
          const resultMax = (amount + interestMax) / duration;

          return [
            ((window as any).currentView.watchers.monthlyRateMin = Math.round(
              resultMin
            )),
            ((window as any).currentView.watchers.monthlyRateMax = Math.round(
              resultMax
            )),
            ((window as any).currentView.watchers.errorMessage = ""),
          ];
        },
        validate: function (): boolean {
          return dataToValidate(
            [
              (window as any).currentView.watchers.creditAmount,
              (window as any).currentView.watchers.duration,
            ],
            (window as any).currentView.el
          );
        },
      },
    });
  }
}
