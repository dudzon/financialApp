import * as LoginActions from "./login.actions";

interface State {
  user: string;
  password: string;
  isAuthenticated: boolean;
}

export const initialState: State = {
  user: "",
  password: "",
  isAuthenticated: null,
};

export const loginReducer = function (
  state = initialState,
  action: LoginActions.LoginActions
) {
  switch (action.type) {
    case LoginActions.LOGIN:
      return {
        ...state,
        user: action.payload.user,
        password: action.payload.password,
      };
    case LoginActions.AUTH:
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
      };
  }
};
