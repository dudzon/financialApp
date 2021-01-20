import { Login } from "./src/components/login";
// import { Calc } from './src/components/calc';
// import { Step1 } from './src/components/step1';
// import { Step2 } from './src/components/step2';
// import { Step3 } from './src/components/step3';
// import { Step4 } from './src/components/step4';
import { RoutesNames } from "./model";
import { myFramework } from "./framework/framework";

export class View {
  view: string;
  constructor(view: string) {
    this.view = view;
  }
  init() {
    switch (this.view) {
      case RoutesNames.login:
        this.exit();
        new Login();
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
  // loginResponse(response: AxiosResponse) {
  //   if (response.data) {
  //     console.log(response.data);
  //     (window as any).currentView.watchers.loginStatus = "success";
  //     setTimeout(() => {
  //       (window as any).currentView.watchers.loginStatus = "";
  //     }, 2000);
  //   } else {
  //     console.log(response.data);
  //     (window as any).currentView.watchers.loginStatus = "error";
  //     setTimeout(() => {
  //       (window as any).currentView.watchers.loginStatus = "";
  //     }, 2000);
  //   }
  // }
}
