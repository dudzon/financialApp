import axios, { AxiosResponse, AxiosError } from "axios";
import { RoutesNames } from "../../model";
import { myFramework } from "./../../framework/framework";

export class Step4 {
  constructor() {
    this.init();
  }
  init() {
    const step4 = new myFramework({
      el: "step4",
      data() {
        return {};
      },
      methods: {
        back: function (e: Event) {
          e.preventDefault();
          (window as any).location = RoutesNames.step3;
        },
        next: function (e: Event) {
          e.preventDefault();

          axios
            .post("api/step4", { prop: "ok" })
            .then(function (response: AxiosResponse) {
              console.log("ok");
            })
            .catch(function (err: AxiosError) {
              throw new Error(err.message);
            });
        },
      },
    });
  }
}
