import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionDeposit } from "../store";

const DepositContainer = () => {
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");

  const dispatch = useDispatch();

  const makeTransaction = () => {
    dispatch(
      actionDeposit({ transactionType: type, amount: parseInt(amount) })
    );
  };

  return (
    <div style={{ flexDirection: "row", padding: "20px" }}>
      <div style={{ marginBottom: "10px" }}>
        <input
          onChange={(e) => setType(e.target.value)}
          value={type}
          placeholder="enter type"
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <input
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          placeholder="enter amount"
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <button onClick={makeTransaction}>Add Transaction</button>
      </div>
    </div>
  );
};

export default DepositContainer;
