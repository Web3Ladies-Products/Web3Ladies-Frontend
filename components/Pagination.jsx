import Image from "next/image";
import React from "react";
import Button from "./buttons/Button";
import ChevronLeft from "./icons/ChevronLeft";
import ChevronRight from "./icons/ChevronRight";

const Pagination = ({ noPagination, paginationData, updateData }) => {
  return (
    <section>
      <div
        className={`container pagination ${noPagination ? "display-none" : ""}`}
      >
        <div className="summary">
          {paginationData.currentPage * 10 - 9} -
          {paginationData?.totalPages === paginationData?.currentPage
            ? paginationData?.total
            : paginationData.currentPage * 10}{" "}
          of {paginationData?.total} items
        </div>
        <div className="navigation">
          <Button
            // type={"darkOutline"}
            disabled={paginationData.currentPage === 1}
            onClick={() => updateData(paginationData.currentPage - 1)}
          >
            <span className="icon-left">
              <ChevronLeft />
            </span>
            {/* <span>Previous</span> */}
          </Button>
          {paginationData && (
            <ul>
              {paginationData.totalPages >= 1 && (
                <li
                  className={`${paginationData?.currentPage === 1 && "active"}`}
                >
                  <Button onClick={() => updateData(1)}>1</Button>
                </li>
              )}
              {paginationData.totalPages >= 2 && (
                <li
                  className={`${paginationData?.currentPage === 2 && "active"}`}
                >
                  <Button onClick={() => updateData(2)}>2</Button>
                </li>
              )}
              {paginationData.totalPages >= 3 && (
                <li
                  className={`${paginationData?.currentPage === 3 && "active"}`}
                >
                  <Button onClick={() => updateData(3)}>3</Button>
                </li>
              )}
              {paginationData.totalPages >= 4 && (
                <li
                  className={`${paginationData?.currentPage === 4 && "active"}`}
                >
                  <Button onClick={() => updateData(4)}>4</Button>
                </li>
              )}
              {paginationData.totalPages >= 5 && (
                <li
                  className={`${paginationData?.currentPage === 5 && "active"}`}
                >
                  <Button onClick={() => updateData(5)}>5</Button>
                </li>
              )}
              {paginationData.totalPages > 6 && <li>...</li>}
              {paginationData.totalPages > 5 && (
                <li
                  className={`${
                    paginationData?.currentPage === paginationData.totalPages &&
                    "active"
                  }`}
                >
                  <Button onClick={() => updateData(paginationData.totalPages)}>
                    {paginationData.totalPages}
                  </Button>
                </li>
              )}
            </ul>
          )}
          <Button
            // type={"primary"}
            disabled={
              paginationData?.currentPage === paginationData?.totalPages
            }
            onClick={() => updateData(paginationData.currentPage + 1)}
            hasIcon
          >
            {/* <span>Next</span> */}
            <span className="icon-right">
              <ChevronRight color={"#000000"} />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pagination;
