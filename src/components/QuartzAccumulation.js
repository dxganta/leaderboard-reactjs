import React from "react";
import { useState } from "react";

import LoadingBar from "./LoadingBar.js";

const QuartzAccumulation = () => {
  const [loading, setLoading] = useState(false);
  const [quartzPerDay, setQuartzPerDay] = useState(0);
  const [address, setAddress] = useState("");
  const [isUnusedAddress, setisUnusedAddress] = useState(false);

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
  };

  const updateAddress = (e) => {
    setAddress(e.target.value);
  };

  if (loading) {
    return <LoadingBar />;
  }

  if (quartzPerDay > 0) {
    return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Amazing! 🤑</h2>
          <div>You are earning {quartzPerDay} quartz per day</div>
          <div className="card-actions justify-end">
            <button
              onClick={() => {
                setQuartzPerDay(0);
                setAddress("");
              }}
              className="btn btn-primary"
            >
              Check another address
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (quartzPerDay === 0 && isUnusedAddress) {
    return (
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body text-center">
          <h2 className="text-xl font-semibold">That sucks! 😔</h2>
          <p>You are missing out on a lot of yield</p>
          <div className="card-actions flex space-x-2">
            <a
              href="https://app.sandclock.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-primary" onClick={() => {}}>
                Start Earning Yield
              </button>
            </a>
            <button
              onClick={() => {
                setQuartzPerDay(0);
                setAddress("");
                setisUnusedAddress(false);
              }}
              className="btn btn-primary"
            >
              Check Another Address
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body self-center">
        <h2 className="card-title text-center">
          Check the amount of{" "}
          <a
            className="underline underline-offset-2 hover:text-primary"
            href="https://coinmarketcap.com/currencies/sandclock/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quartz
          </a>{" "}
          you are earning per day
        </h2>
        <input
          type="text"
          placeholder="Address"
          className="input input-bordered w-full max-w"
          value={address}
          onChange={(e) => updateAddress(e)}
        />
        <div className="card-actions justify-end pt-2">
          <button onClick={handleClick} className="btn btn-primary">
            ENTER
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuartzAccumulation;
