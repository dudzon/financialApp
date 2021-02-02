import Axios from "axios";
import { myFramework } from "./../../framework/framework";
import axios, { AxiosError, AxiosResponse } from "axios";
import { RoutesNames } from "../../model";
import { router } from "../../router";

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
        return {
          creditAmount: "",
          duration: "",
          monthlyRateMin: "",
          monthlyRateMax: "",
          errorMessage: "",
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
          if (
            !(window as any).currentView.watchers.creditAmount ||
            isNaN(+(window as any).currentView.watchers.creditAmount) ||
            !(window as any).currentView.watchers.duration ||
            isNaN(+(window as any).currentView.watchers.duration)
          ) {
            console.log(window, "window from validate");
            (window as any).currentView.watchers.monthlyRateMin = "";
            (window as any).currentView.watchers.monthlyRateMax = "";
            (window as any).currentView.watchers.errorMessage = "Wrong value";
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
      },
    });
  }
}
