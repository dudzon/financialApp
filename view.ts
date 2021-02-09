import { Login } from "./src/components/login/login";
import { Calc } from "./src/components/calc/calc";
import { Step1 } from "./src/components/step1/step1";
import { Step2 } from "./src/components/step2/step2";
import { Step3 } from "./src/components/step3/step3";
import { Step4 } from "./src/components/step4/step4";
import { RoutesNames } from "./model";

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
        new Calc();
        break;

      case RoutesNames.step1:
        this.exit();
        new Step1();
        break;

      case RoutesNames.step2:
        this.exit();
        new Step2();
        break;

      case RoutesNames.step3:
        this.exit();
        new Step3();
        break;

      case RoutesNames.step4:
        this.exit();
        new Step4();
        break;

      default:
        throw new Error("Unknown value");
    }
  }
  exit() {
    (window as any).currentView = null;
    const ids = this.getAllRoutes();
    ids.forEach((id) => {
      const el = document.getElementById(id);
      el.style.display = "none";
    });
  }

  show() {
    const el = document.getElementById(this.view);
    el.style.display = "block";
  }

  getAllRoutes(): string[] {
    const routesArr = [
      RoutesNames.login,
      RoutesNames.calc,
      RoutesNames.step1,
      RoutesNames.step2,
      RoutesNames.step3,
      RoutesNames.step4,
    ];

    return routesArr;
  }
}
