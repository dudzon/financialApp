import { createReducer, Action, on } from '@ngrx/store';
import * as WizardActions from './wizard.actions';

// tslint:disable-next-line:no-empty-interface
export interface State {}

const initialState: State = {};

const wizardReducer = createReducer(
  initialState,
  on(WizardActions.getConfig, (state) => {
    // debugger;
    // console.log(state, 'getConfig');
    return {
      ...state,
    };
  }),
  on(WizardActions.configLoaded, (state, action) => {
    // console.log(action, 'action');
    // console.log(state, 'state configLoaded');
    const newState = action.payload.config;
    // console.log(newState, 'newstate cl');

    return {
      ...state,
      ...newState,
    };
  }),
  // on(WizardActions.mapConfigToState, (state: any, action) => {
  //   // console.log(action.payload.config, 'payload config');
  //   // console.log(state[action.payload.config], 'state from mapConfig');
  //   const oldstate = { ...state };
  //   console.log(oldstate, 'oldstate');
  //   // const conf = Object.keys(oldstate)
  //   //   .filter((key) => key === action.config)
  //   //   .toString();
  //   // console.log(conf, 'conf');
  //   // return { ...state };
  //   return {
  //     ...state,
  //   };
  // }),
  on(WizardActions.error, (state, action) => {
    return { ...state };
  })
);

// tslint:disable-next-line:typedef
export function reducer(state: State | undefined, action: Action) {
  return wizardReducer(state, action);
}
