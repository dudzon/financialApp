import axios, { AxiosResponse, AxiosError } from "axios";
import { RoutesNames } from "../../../model";
import { router } from "../../../router";
import { myFramework } from "../../../framework/framework";
import { appStore } from "../../../store/appStore";
import * as AppActions from "../../../store/app.actions";

export class Step2 {
  store;
  state;
  constructor() {
    this.store = appStore;
    this.state = this.store.getState();
    console.log(this.state, "state -step2");
    this.init();
  }
  init() {
    const self = this;
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
          const applicant = (window as any).currentView.watchers.applicant;
          const maritalStatus = (window as any).currentView.watchers
            .maritalStatus;
          const sameHouseholdStatus = (window as any).currentView.watchers
            .sameHouseholdStatus;

          axios
            .post("api/step2", { prop: "ok" })
            .then(function (response: AxiosResponse) {
              self.store.dispatch(
                new AppActions.ApplicantData({
                  applicant: applicant,
                  maritalStatus: maritalStatus,
                  sameHouseholdStatus: sameHouseholdStatus,
                })
              );
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
