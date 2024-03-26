import React from "react";

const FaqAccordion = ({ question, answer }) => {
  return (
    <div className="collapse collapse-arrow bg-base-200 my-3">
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title text-xl font-medium">{question}</div>
      <div className="collapse-content">
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FaqAccordion;
