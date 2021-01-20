import axios, { AxiosError, AxiosResponse } from "axios";
import { myFramework } from "./../../framework/framework";
import { User } from "../../model";

export class Login {
  constructor() {
    this.init();
  }
  init() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    (window as any).currentView = new myFramework({
      el: "login",
      data() {
        return {
          username: "",
          password: "",
          loginStatus: "",
          errorName: "",
        };
      },
      methods: {
        login: function (e: Event) {
          e.preventDefault();
          self.clearInputs(e);

          const username = (window as any).currentView.watchers.username;
          const password = (window as any).currentView.watchers.password;
          axios
            .post<User>("api/login", {
              username: username,
              password: password,
            })
            .then(function (response: AxiosResponse) {
              (window as any).currentView.watchers.loginStatus = "success";
              setTimeout(() => {
                (window as any).currentView.watchers.loginStatus = "";
              }, 2000);
            })
            .catch(function (error: AxiosError) {
              (window as any).currentView.watchers.loginStatus = "error";
              (window as any).currentView.watchers.errorName =
                error.response.data.error;
              setTimeout(() => {
                (window as any).currentView.watchers.loginStatus = "";
              }, 2000);
            });
        },
      },
    });
  }
  clearInputs(e: Event): void {
    const btn = e.target as Element;
    const form = btn.closest(".form");
    const inputs = form.querySelectorAll("input");
    Array.from(inputs).forEach((input) => (input.value = ""));
  }
}
