import React from "react";

const PaginationButton = ({ pageNumber, onPageChange, currentPage }) => {
  return (
    <button
      onClick={() => onPageChange(pageNumber)}
      className={`join-item btn bg-white hover:text-white text-neutral-800 text-base font-normal ${
        pageNumber === currentPage && "bg-neutral-800 text-white"
      }`}
    >
      {pageNumber}
    </button>
  );
};

export default PaginationButton;
