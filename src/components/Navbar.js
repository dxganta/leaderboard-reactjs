import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-300 px-10 py-2">
      <div className="flex-1">
        <img src="sandclock.png" alt="Sandclock" />
      </div>
      <div className="grow font-semibold text-2xl text-white">
        Quartz Airdrop Leaderboard
      </div>
    </div>
  );
};

export default Navbar;
