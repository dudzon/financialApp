import { createSelector } from '@ngrx/store';
import { State } from './wizard.reducer';

export const componentState = (state: State) => state;
export const stateForComponent = () =>
  createSelector(
    componentState,
    (state: any, props: any) => state[props.config]
  );
export const calcState = (state: State) => state.wizard.calc;

export const selectMinRate = createSelector(calcState, (state: any) => {
  const creditAmount = state.find(
    (item: any) => item.field === 'Credit Amount'
  );
  return creditAmount.resultMin;
});

export const selectMaxRate = createSelector(calcState, (state: any) => {
  const creditAmount = state.find(
    (item: any) => item.field === 'Credit Amount'
  );
  return creditAmount.resultMax;
});
