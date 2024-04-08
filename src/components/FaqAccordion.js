import React from "react";

const FaqAccordion = ({ question, answer }) => {
  return (
    <div className="collapse collapse-arrow bg-neutral-800 my-3">
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title text-base font-normal">{question}</div>
      <div className="collapse-content">
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FaqAccordion;
