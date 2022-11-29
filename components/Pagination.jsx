// import Image from "next/image";
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
          <span>
            {paginationData?.total > 0
              ? `${paginationData?.page * 10 - 9} -
            ${
              paginationData?.pageCount === paginationData?.page
                ? paginationData?.total
                : paginationData.page * 10
            }${" "}
            of ${paginationData?.total}`
              : 0}
          </span>{" "}
          item{paginationData?.total > 1 ? "s" : ""}
        </div>
        <div className="navigation">
          <Button
            // variant={"darkOutline"}
            disabled={paginationData?.page === 1}
            onClick={() => updateData(paginationData?.page - 1)}
          >
            <span className="icon-left">
              <ChevronLeft />
            </span>
            {/* <span>Previous</span> */}
          </Button>
          {paginationData && (
            <ul>
              {paginationData?.pageCount >= 1 && (
                <li className={`${paginationData?.page === 1 && "active"}`}>
                  <Button onClick={() => updateData(1)}>1</Button>
                </li>
              )}
              {paginationData.pageCount >= 2 && (
                <li className={`${paginationData?.page === 2 && "active"}`}>
                  <Button onClick={() => updateData(2)}>2</Button>
                </li>
              )}
              {paginationData.pageCount >= 3 && (
                <li className={`${paginationData?.page === 3 && "active"}`}>
                  <Button onClick={() => updateData(3)}>3</Button>
                </li>
              )}
              {paginationData.pageCount >= 4 && (
                <li className={`${paginationData?.page === 4 && "active"}`}>
                  <Button onClick={() => updateData(4)}>4</Button>
                </li>
              )}
              {paginationData.pageCount >= 5 && (
                <li className={`${paginationData?.page === 5 && "active"}`}>
                  <Button onClick={() => updateData(5)}>5</Button>
                </li>
              )}
              {paginationData.pageCount > 6 && <li>...</li>}
              {paginationData.pageCount > 5 && (
                <li
                  className={`${
                    paginationData?.page === paginationData.pageCount &&
                    "active"
                  }`}
                >
                  <Button onClick={() => updateData(paginationData.pageCount)}>
                    {paginationData.pageCount}
                  </Button>
                </li>
              )}
            </ul>
          )}
          <Button
            // variant={"primary"}
            disabled={paginationData?.page === paginationData?.pageCount}
            onClick={() => updateData(paginationData.page + 1)}
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
