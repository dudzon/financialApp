import axios, { AxiosResponse, AxiosError } from "axios";
import { RoutesNames } from "../../../model";
import { router } from "../../../router";
import { myFramework } from "./../../../framework/framework";
import { appStore } from "../../../store/appStore";
import * as AppActions from "../../../store/app.actions";

export class Step3 {
  store;
  state;
  constructor() {
    this.store = appStore;
    this.state = this.store.getState();
    console.log(this.state, "state -step3");
    this.init();
  }
  init() {
    const self = this;
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
          const applicantTitle = (window as any).currentView.watchers
            .applicantTitle;
          const partnerTitle = (window as any).currentView.watchers
            .partnerTitle;
          const applicantFirstName = (window as any).currentView.watchers
            .applicantFirstName;
          const applicantLastName = (window as any).currentView.watchers
            .applicantLastName;
          const partnerFirstName = (window as any).currentView.watchers
            .partnerFirstName;
          const partnerLastName = (window as any).currentView.watchers
            .partnerLastName;
          axios
            .post("api/step3", { prop: "ok" })
            .then(function (response: AxiosResponse) {
              self.store.dispatch(
                new AppActions.ApplicantPersonalData({
                  applicantTitle: applicantTitle,
                  partnerTitle: partnerTitle,
                  applicantFirstName: applicantFirstName,
                  applicantLastName: applicantLastName,
                  partnerFirstName: partnerFirstName,
                  partnerLastName: partnerLastName,
                })
              );
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
