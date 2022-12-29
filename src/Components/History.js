import React from "react";
import { useSelector } from "react-redux";

function History() {
  const data = useSelector((state) => state.reducer);
  // const data = [
  //   { type: "Cash", amount: 400 },
  //   { type: "Cash", amount: 400 },
  //   { type: "Cash", amount: 400 },
  //   { type: "Cash", amount: 400 },
  // ];

  return (
    <div>
      {data.map(
        ({ transactionType, amount }, index) =>
          index > 0 && (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                padding: "8px",
                backgroundColor: "gray",
                margin: "2px",
                justifyContent: "space-between",
                width: "200px",
                height: "50px",
                alignItems: "center",
              }}
            >
              <h4>{transactionType}</h4>
              <h4>{amount}</h4>
            </div>
          )
      )}
    </div>
  );
}

export default History;
