import axios, { AxiosResponse, AxiosError } from "axios";
import { RoutesNames } from "../../model";
import { myFramework } from "./../../framework/framework";

export class Step2 {
  constructor() {
    this.init();
  }
  init() {
    const step2 = new myFramework({
      el: "step2",
      data() {
        return {};
      },
      methods: {
        back: function (e: Event) {
          e.preventDefault();
          (window as any).location = RoutesNames.step1;
        },
        next: function (e: Event) {
          e.preventDefault();

          axios
            .post("api/step2", { prop: "ok" })
            .then(function (response: AxiosResponse) {
              (window as any).location = RoutesNames.step3;
            })
            .catch(function (err: AxiosError) {
              throw new Error(err.message);
            });
        },
      },
    });
  }
}
