import React from "react";

const SearchField = () => {
  return (
    <form action="">
      <div className="input" style={{ marginBottom: "0" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          style={{ borderRadius: "42px" }}
        />
      </div>
    </form>
  );
};

export default SearchField;
