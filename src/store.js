import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

export const actionDeposit = (transaction) => {
  return (dispatch) => {
    dispatch({
      type: "Transaction",
      payload: transaction,
    });
  };
};

const reducerTransaction = (
  state = [{ balance: 0, income: 0, expense: 0 }],
  action
) => {
  switch (action.type) {
    case "Transaction":
      state[0].balance += action.payload.amount;
      state[0].income +=
        action.payload.amount > 0 ? Math.abs(action.payload.amount) : 0;
      state[0].expense +=
        action.payload.amount < 0 ? Math.abs(action.payload.amount) : 0;
      return [...state, action.payload];

    default:
      return state;
  }
};

export const reducer = combineReducers({ reducer: reducerTransaction });

export const store = createStore(reducer, {}, applyMiddleware(thunk));
