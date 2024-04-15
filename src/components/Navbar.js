import React from "react";

const Navbar = () => {
  return (
    <div className="navbar flex justify-center">
      <a
        href="https://app.sandclock.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="sandclock.png" alt="Sandclock" />
      </a>
      <a
        href="https://app.sandclock.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="invisible md:visible"
      >
        <button
          // onClick={handleClick}
          className="mr-8 btn hover:text-white hover:bg-black border-2 absolute rounded-[57px] right-0 text-neutral-800 bg-white text-base font-normal"
        >
          Earn Yield
        </button>
      </a>
    </div>
  );
};

export default Navbar;
