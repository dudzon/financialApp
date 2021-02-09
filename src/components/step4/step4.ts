import axios, { AxiosResponse, AxiosError } from "axios";
import { RoutesNames } from "../../../model";
import { router } from "../../../router";
import { myFramework } from "../../../framework/framework";
import { appStore } from "../../../store/appStore";
import * as AppActions from "../../../store/app.actions";

export class Step4 {
  store;
  state;
  constructor() {
    this.store = appStore;
    this.state = this.store.getState();
    console.log(this.state, "state -step4");
    this.init();
  }
  init() {
    const self = this;
    (window as any).currentView = new myFramework({
      el: "step4",
      data() {
        return {
          dateOfBirth: "",
          nationality: "",
          residence: "",
          residentPeriod: "",
        };
      },
      methods: {
        back: function (e: Event) {
          e.preventDefault();
          router.navigate(`${RoutesNames.default}${RoutesNames.step3}`);
        },
        next: function (e: Event) {
          e.preventDefault();
          const dateOfBirth = (window as any).currentView.watchers.dateOfBirth;
          const nationality = (window as any).currentView.watchers.nationality;
          const residence = (window as any).currentView.watchers.residence;

          const residentPeriod = (window as any).currentView.watchers
            .residentPeriod;

          axios
            .post("api/step4", { prop: "ok" })
            .then(function (response: AxiosResponse) {
              self.store.dispatch(
                new AppActions.ApplicantAdditionalData({
                  dateOfBirth: dateOfBirth,
                  nationality: nationality,
                  residence: residence,
                  residentPeriod: residentPeriod,
                })
              );
              const updatedState = appStore.getState();

              alert(`App state is as follows:${JSON.stringify(updatedState)}`);
            })
            .catch(function (err: AxiosError) {
              throw new Error(err.message);
            });
        },
      },
    });
  }
}
