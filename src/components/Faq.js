import React from "react";
import FaqAccordion from "./FaqAccordion";

const Faq = () => {
  return (
    <div className="w-3/5">
      <h1 className="text-center pt-10 text-3xl font-bold">FAQ</h1>
      <FaqAccordion
        question="What is TVL?"
        answer="The total amount of assets you have deposited into the respective vault."
      />
      <FaqAccordion
        question="What are Quartz Points?"
        answer="The amount of quartz you have earned in the current month. These will be distributed to your wallet at the end of the current month. 1 QUARTZ POINT = 1 QUARTZ. The leaderboard is updated every 24 hrs. So come again tomorrow to see how much your quartz points has grown. "
      />
      <FaqAccordion
        question="How frequently is the leaderboard data updated?"
        answer="The leaderboard is updated every 24 hrs."
      />

      <FaqAccordion
        question="What is 'Quartz Received'?"
        answer="The total amount of quartz that has been sent to the wallet till now."
      />
    </div>
  );
};

export default Faq;
