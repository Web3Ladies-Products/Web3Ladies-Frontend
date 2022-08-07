import React from "react";

const SearchField = ({ handleChange }) => {
  const [search, setSearch] = React.useState("");
  const handleEntry = (e) => {
    e.preventDefault();
    handleChange(search);
  };

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <form onSubmit={handleEntry}>
      <div className="input" style={{ marginBottom: "0" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          style={{ borderRadius: "42px" }}
          onChange={handleChangeSearch}
        />
      </div>
    </form>
  );
};

export default SearchField;
