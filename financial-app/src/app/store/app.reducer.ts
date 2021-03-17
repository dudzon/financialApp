import * as fromLogin from '../login/store/login.reducer';
import * as fromCalc from '../calc/store/calc.reducer';
import * as from1Step from '../step1/store/step1.reducer';
import * as from2Step from '../step2/store/step2.reducer';
import * as from3Step from '../step3/store/step3.reducer';
import * as from4Step from '../step4/store/step4.reducer';
import { LoginState } from '../login/models/loginState';
import { CalcState } from '@app/calc/models/calcState';
import { Step1State } from '@app/step1/models/step1State';
import { Step2State } from '@app/step2/models/step2State';
import { Step3State } from '@app/step3/models/step3State';
import { Step4State } from '@app/step4/models/step4State';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  login: LoginState;
  calc: CalcState;
  step1: Step1State;
  step2: Step2State;
  step3: Step3State;
  step4: Step4State;
}

// export const appReducer: ActionReducerMap<AppState> = {
//   login: fromLogin.loginReducer,
//   calc: fromCalc.calcReducer,
//   step1: from1Step.step1Reducer,
//   step2: from2Step.step2Reducer,
//   step3: from3Step.step3Reducer,
//   step4: from4Step.step4Reducer,
// };
