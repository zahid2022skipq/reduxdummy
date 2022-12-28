import React from "react";
import { useSelector } from "react-redux";

function History() {
  const data = useSelector((state) => state.data);
  console.log(data);

  return (
    <div>
      {data.map(({ type, amount }, index) => (
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
          <h4>{type}</h4>
          <h4>{amount}</h4>
        </div>
      ))}
    </div>
  );
}

export default History;
