import axios, { AxiosError, AxiosResponse } from "axios";
import { myFramework } from "../../../framework/framework";
import { RoutesNames, User } from "../../../model";
import { router } from "../../../router";
import { appStore } from "../../../store/appStore";
// import * as LoginActions from "./login.actions";
import * as AppActions from "./../../../store/app.actions";

const IS_AUTHENTICATED = "is_authenticated";

export class Login {
  store: any;
  state: any;
  constructor() {
    this.store = appStore;
    this.state = this.store.getState();
    console.log(this.state, "state");

    this.init();
    this.isUserAuthenticated();
  }
  init() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;

    // debugger;

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
              self.store.dispatch(
                new AppActions.LoginSuccess({
                  user: username,
                  password: password,
                  isAuthenticated: true,
                })
              );
              self.authenticate();
              setTimeout(() => {
                router.navigate(`${RoutesNames.default}${RoutesNames.calc}`);
                (window as any).currentView.watchers.loginStatus = "";
              }, 2000);
            })
            .catch(function (error: AxiosError) {
              (window as any).currentView.watchers.loginStatus = "error";
              (window as any).currentView.watchers.errorName =
                error.response.data.error;
              self.store.dispatch(
                new AppActions.Auth({ isAuthenticated: false })
              );
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
  authenticate(): void {
    if (!localStorage.getItem(IS_AUTHENTICATED)) {
      localStorage.setItem(IS_AUTHENTICATED, "true");
      this.store.dispatch(new AppActions.Auth({ isAuthenticated: true }));
    }
  }
  isUserAuthenticated(): void {
    if (localStorage.getItem(IS_AUTHENTICATED)) {
      this.store.dispatch(new AppActions.Auth({ isAuthenticated: true }));
      router.navigate(`${RoutesNames.default}${RoutesNames.calc}`);
    }
  }
}
