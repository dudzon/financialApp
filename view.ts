// import { Login } from './src/components/login';
// import { Calc } from './src/components/calc';
// import { Step1 } from './src/components/step1';
// import { Step2 } from './src/components/step2';
// import { Step3 } from './src/components/step3';
// import { Step4 } from './src/components/step4';
import { RoutesNames } from "./model";
import { myFramework } from "./framework/framework";
import axios from "axios";

export class View {
  view: string;
  constructor(view: string) {
    this.view = view;
  }
  init() {
    switch (this.view) {
      case RoutesNames.login:
        this.exit();
        (window as any).currentView = new myFramework({
          el: "login",
          data() {
            return {
              username: "",
              password: "",
            };
          },
          methods: {
            login: function (e: Event) {
              e.preventDefault();
              const username = (window as any).currentView.watchers.username;
              const password = (window as any).currentView.watchers.password;
              console.log(username, password);
              // console.log("clicked");
              axios
                .post("api/login", {
                  username: username,
                  password: password,
                })
                .then(function (response) {
                  console.log(response);
                })
                .catch(function (error) {
                  console.log(error);
                });
            },
          },
        });
        console.log(window);
        // refactor view
        // add http library
        // send request
        // v-model attribute
        // collect data from watchers on sending requests
        // on every change of the input, data.name and data.password must be updated
        break;

      case RoutesNames.calc:
        this.exit();
        (window as any).currentView = new myFramework({
          el: "calc",
          data() {
            return {
              name: "",
              password: "",
            };
          },
          methods: {},
        });
        break;

      case RoutesNames.step1:
        this.exit();
        (window as any).currentView = new myFramework({
          el: "step1",
          data() {
            return {
              name: "",
              password: "",
            };
          },
          methods: {},
        });
        break;

      case RoutesNames.step2:
        this.exit();
        (window as any).currentView = new myFramework({
          el: "step2",
          data() {
            return {
              name: "",
              password: "",
            };
          },
          methods: {},
        });
        break;

      case RoutesNames.step3:
        this.exit();
        (window as any).currentView = new myFramework({
          el: "step3",
          data() {
            return {
              name: "",
              password: "",
            };
          },
          methods: {},
        });
        break;

      case RoutesNames.step4:
        this.exit();
        (window as any).currentView = new myFramework({
          el: "step4",
          data() {
            return {
              name: "",
              password: "",
            };
          },
          methods: {},
        });
        break;

      default:
        throw new Error("Unknown value");
    }
  }
  exit() {
    (window as any).currentView = null;
  }

  show() {
    const el = document.getElementById(this.view);
    el.style.display = "block";
  }
}
