import axios, { AxiosResponse, AxiosError } from "axios";
import { createRouter } from "routerjs";
import { RoutesNames } from "../../../model";
import { dataToValidate } from "../../../validator";
import { View } from "../../../view";
import { myFramework } from "../../../framework/framework";
import { router } from "../../../router";
import { appStore } from "../../../store/appStore";
import * as AppActions from "../../../store/app.actions";

export class Step1 {
  store;
  state;
  constructor() {
    this.store = appStore;
    this.state = this.store.getState();
    console.log(this.state, "state -step1");
    this.init();
  }
  init() {
    const self = this;
    (window as any).currentView = new myFramework({
      el: "step1",
      data() {
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

          const creditPurpose = (window as any).currentView.watchers
            .creditPurpose;
          const comments = (window as any).currentView.watchers.comments;
          const loanAmount = (window as any).currentView.watchers.loanAmount;
          const loanDuration = (window as any).currentView.watchers.duration;
          console.log(loanAmount, 'loanAmount');

          axios
            .post("api/step1", { prop: "ok" })
            .then(function (response: AxiosResponse) {
              const passValidation = (window as any).currentView.methods.validate();
              if (!passValidation) {
                return;
              }
              self.store.dispatch(
                new AppActions.DeterminateLoanRate({
                  creditPurpose: creditPurpose,
                  comments: comments,
                  loanAmount: +loanAmount,
                  loanDuration: +loanDuration,
                })
              );
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
