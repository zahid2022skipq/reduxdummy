import React from "react";
import { useSelector } from "react-redux";

const AccountInfo = () => {
  const balance = useSelector((state) => state.reducer);

  return (
    <div>
      <h1>Account Info</h1>
      <h2>Balance: {balance[0].balance}$</h2>
      <h2>Income: {balance[0].income}$</h2>
      <h2>Expense: {balance[0].expense}$</h2>
    </div>
  );
};

export default AccountInfo;
