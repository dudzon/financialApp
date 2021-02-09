import * as CalcActions from "./calc.actions";

interface State {
  creditAmount: number;
  duration: number;
  monthlyRateMin: number | null;
  monthlyRateMax: number | null;
}

export const initialState: State = {
  creditAmount: 0,
  duration: 0,
  monthlyRateMin: null,
  monthlyRateMax: null,
};

const RATE = {
  minimumRate: 5.67,
  maximumRate: 9.8,
};

export const calcReducer = function (
  state = initialState,
  action: CalcActions.CalcActions
) {
  switch (action.type) {
    case CalcActions.CALCULATE_LOAN_EXAMPLE:
    //   const amount = +(window as any).currentView.watchers.creditAmount;
    //   const duration = +(window as any).currentView.watchers.duration;
    //   const interestMin = (amount * RATE.minimumRate) / 100;
    //   const resultMin = (amount + interestMin) / duration;
    //   const interestMax = (amount * RATE.maximumRate) / 100;
    //   const resultMax = (amount + interestMax) / duration;
    //   console.log(window, 'window');
    //   console.log(amount,'amount')
    //   console.log(action.payload.duration, "duration = calcred");
    //   console.log('jestem w calcReducer')
      return {
        ...state,
        creditAmount: action.payload.amount,
        duration: action.payload.duration,
        monthlyRateMin: Math.round(action.payload.resultMin),
        monthlyRateMax: Math.round(action.payload.resultMax),
      };
  }
};
