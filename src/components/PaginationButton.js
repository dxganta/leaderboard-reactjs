import React from "react";

const PaginationButton = ({ pageNumber, onPageChange, currentPage }) => {
  if (pageNumber === currentPage) {
    return (
      <button
        onClick={() => onPageChange(pageNumber)}
        className="join-item btn text-base font-normal bg-neutral-700 text-white"
      >
        {pageNumber}
      </button>
    );
  }

  return (
    <button
      onClick={() => onPageChange(pageNumber)}
      className="join-item btn bg-white hover:text-white text-neutral-800 text-base font-normal"
    >
      {pageNumber}
    </button>
  );
};

export default PaginationButton;
