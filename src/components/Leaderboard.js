import React from "react";
import { useState, useEffect } from "react";

import LoadingBar from "./LoadingBar";

const Leaderboard = () => {
  const [holders, setHolders] = useState([]);

  useEffect(() => {
    try {
      async function fetchData() {
        const res = await fetch(
          "https://leaderboard-backend-acz8.onrender.com/holders",
          {
            method: "GET",
          }
        );
        const data = await res.json();

        setHolders(data);
      }

      fetchData();
    } catch (err) {}
  }, []);

  if (holders.length === 0) {
    return <LoadingBar />;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Address</th>
            <th>TVL (ETH)</th>
            <th>Quartz Received</th>
          </tr>
        </thead>
        <tbody>
          {holders.map((holder, index) => (
            <tr key={holder.address}>
              <td>{index + 1}</td>
              <td>{holder.address}</td>
              <td>{holder.balance.toFixed(2)}</td>
              <td>{holder.airdrop.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
