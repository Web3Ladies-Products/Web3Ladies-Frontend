// import Image from "next/image";
import React from "react";
import Button from "./buttons/Button";
import ChevronLeft from "./icons/ChevronLeft";
import ChevronRight from "./icons/ChevronRight";

const Pagination = ({ pageDetails, paginationData, updateData }) => {
  console.log(paginationData);
  return (
    <section>
      <div
        className={`container pagination ${
          paginationData.pageSize ? "display-none" : ""
        }`}
      >
        <div className="summary">
          <span>
            {paginationData?.total > 0
              ? `${paginationData?.page * 10 - 9} 
            
            of ${paginationData?.pageCount}`
              : 0}
          </span>{" "}
          page{paginationData?.page > 1 ? "s" : ""}
        </div>
        <div className="navigation">
          <Button
            // variant={"darkOutline"}
            disabled={paginationData?.page === 1}
            handleClick={() => updateData(paginationData?.page - 1)}
          >
            <span className="icon-left">
              <ChevronLeft />
            </span>
            {/* <span>Previous</span> */}
          </Button>
          {paginationData && (
            <ul>
              <li className="active">
                <Button handleClick={() => {}}>{paginationData?.page}</Button>
              </li>
            </ul>
          )}
          <Button
            // variant={"primary"}
            disabled={paginationData?.page === paginationData?.pageCount}
            handleClick={() => updateData(paginationData.page + 1)}
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
