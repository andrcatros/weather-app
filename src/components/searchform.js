import React from "react";

const SearchForm = (props) => {
  return (
    <div className="search-form">
      <form>
        <input type="text" onChange={props.handleSearch} />
        <input
          onClick={props.callSearchFunction}
          type="submit"
          value="SEARCH"
        />
      </form>
    </div>
  );
};

export default SearchForm;
