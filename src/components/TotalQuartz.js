import React from "react";
import { useEffect, useState } from "react";
import { databaseUrl } from "../utils";

const TotalQuartz = () => {
  const [totalQuartz, setTotalQuartz] = useState(0);
  const [totalUsd, setTotalUsd] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${databaseUrl}/quartz`, {
          method: "GET",
        });
        const data = await res.json();
        setTotalQuartz(Math.floor(Number(data[0].totalQuartzDistributed)));
        setTotalUsd(data[0].totalQuartzDistributedUSD.toFixed(2));
      } catch (err) {}
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col bg-white rounded-3xl px-6 justify-center max-h-min max-w-fit mt-6 p-6">
      <div className="text-neutral-800 text-base font-normal pb-6">
        Total QUARTZ distributed
      </div>
      <div className="text-neutral-800 text-4xl font-normal pb-1">
        {totalQuartz.toLocaleString({
          style: "currency",
          currency: "USD",
        })}{" "}
        QUARTZ
      </div>
      <div className="text-neutral-400 text-4xl">
        ${totalUsd.toLocaleString({ style: "currency", currency: "USD" })}
      </div>
    </div>
  );
};

export default TotalQuartz;
