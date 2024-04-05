import React from "react";
import { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

import LoadingBar from "./LoadingBar.js";

const RedCard = ({ onClick }) => {
  return (
    <div className="flex flex-row bg-red-300 alert-error py-4 px-4 rounded-xl items-center space-x-4">
      <img src="cross.svg" alt="error" />{" "}
      <div className="flex flex-col">
        <span className="text-black text-base font-medium leading-snug tracking-tight">
          Address not recognised.
        </span>
        <span className="text-black text-base font-normal leading-snug tracking-tight">
          Can’t find this address please make sure you entered correctly.
        </span>
      </div>
      <IoCloseCircleOutline
        onClick={onClick}
        className="fill-white stroke-black stroke-2"
      />
    </div>
  );
};

const GreenCard = ({ quartz, onClick }) => {
  return (
    <div className="flex flex-row bg-emerald-200 py-4 px-4 rounded-xl items-center space-x-2">
      <img src="tick-circle.svg" alt="tick" />{" "}
      <span className="text-black grow text-left text-base font-medium leading-snug tracking-tight">
        You are earning {quartz} quartz per day.
      </span>
      <IoCloseCircleOutline
        onClick={onClick}
        className="fill-white stroke-black stroke-2"
      />
    </div>
  );
};

const QuartzAccumulation = () => {
  const [loading, setLoading] = useState(false);
  const [quartzPerDay, setQuartzPerDay] = useState(0);
  const [address, setAddress] = useState("");
  const [isUnusedAddress, setisUnusedAddress] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleCrossClick = () => {
    setShowCard(false);
  };

  const handleClick = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        `https://leaderboard-backend-acz8.onrender.com/quartz/${address}`,
        {
          method: "GET",
        }
      );

      const data = await res.json();

      setQuartzPerDay(Number(data));
      if (Number(data) === 0) {
        setisUnusedAddress(true);
      }
    } catch (err) {
      setQuartzPerDay(0);
    }

    setLoading(false);
    setShowCard(true);
  };

  const updateAddress = (e) => {
    setAddress(e.target.value);
  };

  if (loading) {
    return <LoadingBar />;
  }

  return (
    <div className="font-aeonik flex flex-col space-y-2">
      <div className="flex flex-row gap-x-2 text-center text-neutral-600 text-base font-normal pb-7">
        Check the amount of{" "}
        <a
          className="flex flex-row gap-x-0.5 underline underline-offset-2 hover:text-primary"
          href="https://coinmarketcap.com/currencies/sandclock/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="sc.svg" alt="$Q" className="" />
          QUARTZ
        </a>{" "}
        you are earning per day
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Address"
          className="input w-full max-w rounded-[57px] text-xs"
          value={address}
          onChange={(e) => updateAddress(e)}
        />
        <button
          onClick={handleClick}
          className="btn hover:text-white hover:bg-slate-700 border-2 absolute rounded-[57px] right-0 text-neutral-800 bg-white text-base font-normal"
        >
          Check
        </button>
      </div>
      {quartzPerDay === 0 && isUnusedAddress && showCard && (
        <RedCard onClick={handleCrossClick} />
      )}
      {quartzPerDay > 0 && showCard && (
        <GreenCard onClick={handleCrossClick} quartz={quartzPerDay} />
      )}
    </div>
  );
};

export default QuartzAccumulation;
