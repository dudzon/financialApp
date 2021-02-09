import Axios from "axios";
import { myFramework } from "./../../../framework/framework";
import axios, { AxiosError, AxiosResponse } from "axios";
import { RoutesNames } from "../../../model";
import { router } from "../../../router";
import { dataToValidate } from "./../../../validator";
import { appStore } from "../../../store/appStore";
import * as AppActions from "../../../store/app.actions";

const RATE = {
  minimumRate: 5.67,
  maximumRate: 9.8,
};

export class Calc {
  store: any;
  state: any;
  constructor() {
    this.store = appStore;
    this.state = this.store.getState();

    console.log(this.state, "state-calc");
    this.init();
  }
  init(): void {
    const self = this;
    (window as any).currentView = new myFramework({
      el: "calc",
      data() {
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
          const passValidation = (window as any).currentView.methods.validate();
          if (!passValidation) {
            return;
          }
          const amount = +(window as any).currentView.watchers.creditAmount;
          const duration = +(window as any).currentView.watchers.duration;
          const interestMin = (amount * RATE.minimumRate) / 100;
          const resultMin = (amount + interestMin) / duration;
          const interestMax = (amount * RATE.maximumRate) / 100;
          const resultMax = (amount + interestMax) / duration;

          self.store.dispatch(
            new AppActions.CalculateLoanExample({
              creditExampleAmount: amount,
              creditExampleDuration: duration,
              resultMin: resultMin,
              resultMax: resultMax,
            })
          );
          const updatedState = appStore.getState();
          (window as any).currentView.watchers.monthlyRateMin =
            updatedState.monthlyRateMin;
          (window as any).currentView.watchers.monthlyRateMax =
            updatedState.monthlyRateMax;
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
