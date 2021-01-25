import Axios from "axios";
import { myFramework } from "./../../framework/framework";
import axios, { AxiosError, AxiosResponse } from "axios";
import { RoutesNames } from "../../model";

export class Calc {
  constructor() {
    this.init();
  }
  init() {
    const calc = new myFramework({
      el: "calc",
      data() {
        return {};
      },
      methods: {
        calc: function (e: Event) {
          e.preventDefault();

          axios
            .post("api/calc", { prop: "ok" })
            .then(function (response: AxiosResponse) {
              (window as any).location = RoutesNames.step1;
            })
            .catch(function (err: AxiosError) {
              throw new Error(err.message);
            });
        },
      },
    });
  }
}
