import Axios from "axios";
import { myFramework } from "./../../framework/framework";
import axios, { AxiosError, AxiosResponse } from "axios";
import { RoutesNames } from "../../model";
import { router } from "../../router";

export class Calc {
  constructor() {
    this.init();
  }
  init() {
    (window as any).currentView = new myFramework({
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
              router.navigate(`${RoutesNames.default}${RoutesNames.step1}`);
            })
            .catch(function (err: AxiosError) {
              throw new Error(err.message);
            });
        },
      },
    });
  }
}
