import { Login } from './src/components/login';
import { Calc } from './src/components/calc';
import { Step1 } from './src/components/step1';
import { Step2 } from './src/components/step2';
import { Step3 } from './src/components/step3';
import { Step4 } from './src/components/step4';
import { RoutesNames } from './model'; 

export class View {
    view:string
    constructor(view:string) {
        this.view = view;
    }
    init() {
        switch(this.view) {
            case RoutesNames.default,
                 RoutesNames.login :
                this.exit();
                (window as any).currentView = new Login().init();
            break;
            
            case RoutesNames.calc :
                this.exit();
                (window as any).currentView = new Calc().init();
            break;

            case RoutesNames.step1 :
                this.exit();
                (window as any).currentView = new Step1().init();
            break;

            case RoutesNames.step2 :
                this.exit();
                (window as any).currentView = new Step2().init();
            break;

            case RoutesNames.step3 :
                this.exit();
                (window as any).currentView = new Step3().init();
            break;

            case RoutesNames.step4 :
                this.exit();
                (window as any).currentView = new Step4().init();
            break;

            default :
            throw new Error('Unknown value')
            
        }
    }
    exit() {
            (window as any).currentView = null;
    }
}
