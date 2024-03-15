import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-300 px-10 py-2">
      <div className="flex-1">
        <a
          href="https://app.sandclock.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="sandclock.png" alt="Sandclock" />
        </a>
      </div>
      <div className="grow font-semibold text-2xl text-white">
        Quartz Airdrop Leaderboard
      </div>
    </div>
  );
};

export default Navbar;
