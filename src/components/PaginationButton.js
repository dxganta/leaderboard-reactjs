import React from "react";

const PaginationButton = ({ pageNumber, onPageChange, currentPage }) => {
  return (
    <button
      onClick={() => onPageChange(pageNumber)}
      className={`join-item btn ${pageNumber === currentPage && "btn-active"}`}
    >
      {pageNumber}
    </button>
  );
};

export default PaginationButton;
