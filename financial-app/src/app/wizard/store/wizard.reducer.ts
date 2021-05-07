import { createReducer, Action, on } from '@ngrx/store';
import { CalcPayload } from '../models/calcPayload';
import { Routes } from '../models/routes';
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

function updateState(state: any, chunkState: string, action: any): any {
  const payload = action.payload;
  const newState: any = [...state[chunkState]];
  let key: keyof typeof payload | string;

  // tslint:disable-next-line:forin
  for (key in payload) {
    let field = newState.find((item: any) => item.field === key);
    const index = newState.findIndex((item: any) => item.field === key);
    field = {
      ...field,
      value: payload[key],
    };
    newState[index] = field;
  }
  return {
    ...state,
    [chunkState]: newState,
  };
}

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
    return updateState(state, Routes.step1, action);
  }),
  on(WizardActions.updateState2, (state, action) => {
    return updateState(state, Routes.step2, action);
  }),
  on(WizardActions.updateState3, (state, action) => {
    return updateState(state, Routes.step3, action);
  }),
  on(WizardActions.updateState4, (state, action) => {
    return updateState(state, Routes.step4, action);
  }),
  on(WizardActions.updateCalc, (state, action) => {
    return updateState(state, Routes.calc, action);
  }),
  on(WizardActions.updateLogin, (state, action) => {
    return updateState(state, Routes.login, action);
  }),
  on(WizardActions.error, (state, action) => {
    return { ...state };
  })
);

// tslint:disable-next-line:typedef
export function reducer(state: State | undefined, action: Action) {
  return wizardReducer(state, action);
}
