/* eslint-disable prefer-spread */
/* eslint-disable prefer-rest-params */
export function createStore(reducer: any, initialState: any) {
  let state = initialState;
  const listeners: any[] = [];

  function getState() {
    return state;
  }

  function subscribe(listener: any) {
    listeners.push(listener);
    return function unsubscribe() {
      listeners.splice(listeners.indexOf(listener), 1);
    };
  }

  function dispatch(action: any) {
    state = reducer(state, action);
    listeners.forEach(function (listener) {
      listener();
    });
    return action;
  }

  return {
    getState: getState,
    subscribe: subscribe,
    dispatch: dispatch,
  };
}

export function combineReducers(reducers: any) {
  const keys = Object.keys(reducers);

  return function (state: any, action: any) {
    state = state || {};
    const next = {};
    keys.forEach(function (key) {
      (next as any)[key] = reducers[key](state[key], action);
    });

    return next;
  };
}

export function bindActionCreators(actionCreators: any, dispatch: any) {
  const bounded = {};
  Object.keys(actionCreators).forEach(function (key) {
    const actionCreator = actionCreators[key];
    (bounded as any)[key] = function () {
      const args = Array.prototype.slice.call(arguments);
      dispatch(actionCreator.apply(null, args));
    };
  });
  return bounded;
}

export function applyMiddleware(middleware: any) {
  return function (createStore: any) {
    return function (reducer: any) {
      const store = createStore(reducer);
      return {
        getState: store.getState,
        subscribe: store.subscribe,
        dispatch: function dispatch(action: any) {
          return middleware(store)(store.dispatch)(action);
        },
      };
    };
  };
}
