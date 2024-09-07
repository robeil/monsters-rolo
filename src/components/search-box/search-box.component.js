import React from "react";
import "./search-box.styles..css";

const SearchBox = ({ className, placeholder, onChangeHandler }) => {
  return (
    <>
      <input
        type="search"
        placeholder={placeholder}
        className={`search-box ${className}`}
        onChange={onChangeHandler}
      />
    </>
  );
};

export default SearchBox;
