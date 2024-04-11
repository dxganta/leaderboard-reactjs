import React from "react";
import { useState, useEffect } from "react";

import LoadingBar from "./LoadingBar";
import PaginationButton from "./PaginationButton";

const shortenAddress = (address) => {
  if (address.length < 10) {
    return address;
  }
  return `${address.slice(0, 6)}...${address.slice(-3)}`;
};

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
  const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage, setItemsPerPage] = useState(10);

  const itemsPerPage = 10;

  const totalPages = Math.ceil(holders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = holders.slice(startIndex, endIndex);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(`${databaseUrl}/holders/${vault}`, {
          method: "GET",
        });
        const data = await res.json();

        // Sort holders by quartz points
        data.sort((a, b) => b.quartzPoints - a.quartzPoints);

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
    <div className="font-aeonik text-black margin-x-auto w-fit">
      <table className="table margin-x-auto">
        <thead className="text-black">
          <tr className="text-sm sm:text-base">
            <th className="hidden font-normal sm:table-cell">Serial No.</th>
            <th className="font-normal">Address</th>
            <th className="font-normal">TVL ({vaultToToken[vault]})</th>
            <th className="font-normal">QUARTZ Received</th>
            <th className="font-normal">QUARTZ Points</th>
          </tr>
        </thead>
        <tbody className="text-sm sm:text-base">
          {currentItems.map((holder, index) => (
            <tr key={holder.address} className="rounded-2xl border-0 py-2">
              <td className="hidden sm:table-cell">
                {index + 1 + (currentPage - 1) * 10}
              </td>
              <td className="sm:hidden">{shortenAddress(holder.ens)}</td>
              <td className="hidden sm:table-cell">{holder.ens}</td>
              <td>{holder.balance.toFixed(2)}</td>
              <td>{holder.airdrop.toFixed(2)}</td>
              <td>{holder.quartzPoints.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="join">
        {Array.from({ length: totalPages }, (_, index) => (
          <PaginationButton
            key={index + 1}
            pageNumber={index + 1}
            onPageChange={onPageChange}
            currentPage={currentPage}
          />
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
