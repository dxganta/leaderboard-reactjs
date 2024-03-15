import React from "react";
import { useState, useEffect } from "react";

import LoadingBar from "./LoadingBar";

const databaseUrl = "https://leaderboard-backend-acz8.onrender.com";

const vaultToToken = {
  sceth: "ETH",
  scusdc: "USDC",
  sclusd: "LUSD",
};

const Leaderboard = ({ vault }) => {
  const [holders, setHolders] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(`${databaseUrl}/holders/${vault}`, {
          method: "GET",
        });
        const data = await res.json();

        setHolders(data);
      } catch (err) {
        setErrorMsg(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [vault]);

  if (loading) {
    return (
      <div>
        <LoadingBar />
      </div>
    );
  }

  if (errorMsg) {
    return (
      <div>
        <div className="alert alert-error"> {errorMsg} </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead className="font-bold text-sm">
          <tr>
            <th>Serial No.</th>
            <th>Address</th>
            <th>TVL ({vaultToToken[vault]})</th>
            <th>Quartz Received</th>
          </tr>
        </thead>
        <tbody className="text-base">
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
