import { createSelector } from '@ngrx/store';
import { State } from './wizard.reducer';

export const componentState = (state: State) => state;
export const stateForComponent = () =>
  createSelector(
    componentState,
    (state: any, props: any) => state[props.config]
  );
