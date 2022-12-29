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

const reducerTransaction = (state = [{ balance: 0 }], action) => {
  switch (action.type) {
    case "Transaction":
      state[0].balance += action.payload.amount;
      console.log(action.payload);
      return [...state, action.payload];

    default:
      return state;
  }
};

export const reducer = combineReducers({ reducer: reducerTransaction });

export const store = createStore(reducer, {}, applyMiddleware(thunk));
