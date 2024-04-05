import React from "react";
import FaqAccordion from "./FaqAccordion";

const Faq = () => {
  return (
    <div className="w-3/5 font-aeonik text-white">
      <h1 className="text-black pt-20 pl-3 text-base font-normal">FAQ's</h1>
      <FaqAccordion
        question="What is TVL?"
        answer="The total amount of assets you have deposited into the respective vault."
      />
      <FaqAccordion
        question="What are QUARTZ Points?"
        answer="The amount of QUARTZ you have earned in the current month. These will be distributed to your wallet at the end of the current month. 1 QUARTZ POINT = 1 QUARTZ. The leaderboard is updated every 24 hrs. So come again tomorrow to see how much your QUARTZ points has grown. "
      />
      <FaqAccordion
        question="How frequently is the leaderboard data updated?"
        answer="The leaderboard is updated every 24 hrs."
      />

      <FaqAccordion
        question="What is 'QUARTZ Received'?"
        answer="The total amount of QUARTZ that has been sent to the wallet till now."
      />
    </div>
  );
};

export default Faq;
