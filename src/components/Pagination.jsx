import { useState, useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";

const PaginationComponent = ({
  currentPage,
  setCurrentPage,
  quantityOfProducts,
  quantityProductsPerPage,
}) => {
  const pageList = [];
  const numberOfPages = Math.ceil(quantityOfProducts / quantityProductsPerPage);

  for (let i = 1; i <= numberOfPages; i++) {
    pageList.push(i);
  }

  const handleNextPage = () => {
    if (currentPage < numberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSpecificPage = (page) => setCurrentPage(page);

  return (
    <div>
      <Pagination>
        <Pagination.Prev onClick={handlePreviousPage} />
        {pageList.map((item) => (
          <Pagination.Item
            key={item}
            onClick={() => handleSpecificPage(item)}
            active={currentPage == item ? true : false}
          >
            {item}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={handleNextPage} />
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
