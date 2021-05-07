import { createReducer, Action, on } from '@ngrx/store';
import { Step1Payload } from '../models/step1Payload';
import { Step2Payload } from '../models/step2Payload';
import { Step3Payload } from '../models/step3Payload';
import { Step4Payload } from '../models/step4Payload';
import * as WizardActions from './wizard.actions';

// tslint:disable-next-line:no-empty-interface
export interface State {
  [x: string]: any;
}

const initialState: State = {};

const wizardReducer = createReducer(
  initialState,
  on(WizardActions.getConfig, (state) => {
    return {
      ...state,
    };
  }),
  on(WizardActions.configLoaded, (state, action) => {
    const newState = action.payload.config;
    console.log(newState, 'new state');
    console.log(Object.values(newState), ' config values');
    return {
      ...state,
      ...newState,
    };
  }),
  // on(WizardActions.updateLoanAmount, (state, action) => {
  //   const value = action.payload.value;
  //   const newStep1State: any = [...state.step1];
  //   let field = newStep1State.find((item: any) => item.field === 'Loan Amount');
  //   const index = newStep1State.findIndex(
  //     (item: any) => item.field === 'Loan Amount'
  //   );
  //   field = {
  //     ...field,
  //     defaultValue: value,
  //   };
  //   newStep1State[index] = field;

  //   return {
  //     ...state,
  //     step1: newStep1State,
  //   };
  // }),
  // on(WizardActions.updateLoanDuration, (state, action) => {
  //   const value = action.payload.value;
  //   const newStep1State: any = [...state.step1];
  //   let field = newStep1State.find((item: any) => item.field === 'Loan Duration');
  //   const index = newStep1State.findIndex(
  //     (item: any) => item.field === 'Loan Duration'
  //   );
  //   field = {
  //     ...field,
  //     defaultValue: value,
  //   };
  //   newStep1State[index] = field;

  //   return {
  //     ...state,
  //     step1: newStep1State,
  //   };
  // }),
  on(WizardActions.updateState1, (state, action) => {
    const payload: Step1Payload = action.payload;
    const newStep1State: any = [...state.step1];
    let key: keyof Step1Payload;

    // tslint:disable-next-line:forin
    for (key in payload) {
      let field = newStep1State.find((item: any) => item.field === key);
      const index = newStep1State.findIndex((item: any) => item.field === key);
      field = {
        ...field,
        value: payload[key],
      };
      newStep1State[index] = field;
    }
    console.log(payload, 'payload step1');
    console.log(newStep1State, 'newStep1 step1');
    return {
      ...state,
      step1: newStep1State,
    };
  }),
  on(WizardActions.updateState2, (state, action) => {
    const payload: Step2Payload = action.payload;
    const newStep2State: any = [...state.step2];
    let key: keyof Step2Payload;

    // tslint:disable-next-line:forin
    for (key in payload) {
      let field = newStep2State.find((item: any) => item.field === key);
      const index = newStep2State.findIndex((item: any) => item.field === key);
      field = {
        ...field,
        value: payload[key],
      };
      newStep2State[index] = field;
    }
    return {
      ...state,
      step2: newStep2State,
    };
  }),
  on(WizardActions.updateState3, (state, action) => {
    const payload: Step3Payload = action.payload;
    const newStep3State: any = [...state.step3];
    let key: keyof Step3Payload;

    // tslint:disable-next-line:forin
    for (key in payload) {
      let field = newStep3State.find((item: any) => item.field === key);
      const index = newStep3State.findIndex((item: any) => item.field === key);
      field = {
        ...field,
        value: payload[key],
      };
      newStep3State[index] = field;
    }
    return {
      ...state,
      step3: newStep3State,
    };
  }),
  on(WizardActions.updateState4, (state, action) => {
    const payload: Step4Payload = action.payload;
    const newStep4State: any = [...state.step4];
    let key: keyof Step4Payload;

    // tslint:disable-next-line:forin
    for (key in payload) {
      let field = newStep4State.find((item: any) => item.field === key);
      const index = newStep4State.findIndex((item: any) => item.field === key);
      field = {
        ...field,
        value: payload[key],
      };
      newStep4State[index] = field;
    }
    return {
      ...state,
      step4: newStep4State,
    };
  }),
  on(WizardActions.error, (state, action) => {
    return { ...state };
  })
);

// tslint:disable-next-line:typedef
export function reducer(state: State | undefined, action: Action) {
  return wizardReducer(state, action);
}
