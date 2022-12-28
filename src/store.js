import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const actionDeposit = (action) => {
  return (dispatch) => {
    dispatch({
      type: "Deposit",
      amount: action.payload,
    });
  };
};

export const actionWithdraw = (action) => {
  return (dispatch) => {
    dispatch({
      type: "Withdraw",
      transactionType: action.transactionType,
      amount: action.amount,
    });
  };
};

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case "Deposit":
      return { ...state, action };

    case "Withdraw":
      break;

    default:
      break;
  }
};

export const store = createStore(reducer, {}, applyMiddleware(thunk));
