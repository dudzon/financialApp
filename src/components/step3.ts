import axios, { AxiosResponse, AxiosError } from "axios";
import { RoutesNames } from "../../model";
import { myFramework } from "./../../framework/framework";

export class Step3 {
  constructor() {
    this.init();
  }
  init() {
    const step3 = new myFramework({
      el: "step3",
      data() {
        return {};
      },
      methods: {
        back: function (e: Event) {
          e.preventDefault();
          (window as any).location = RoutesNames.step2;
        },
        next: function (e: Event) {
          e.preventDefault();

          axios
            .post("api/step3", { prop: "ok" })
            .then(function (response: AxiosResponse) {
              (window as any).location = RoutesNames.step4;
            })
            .catch(function (err: AxiosError) {
              throw new Error(err.message);
            });
        },
      },
    });
  }
}
