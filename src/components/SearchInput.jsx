import React from "react";

const SearchInput = ({ onQrClick, withFilter, icon, placeholder, ...rest }) => {
  return (
    <div className="main-search">
      <div className="custom-form-control d-flex">
        {withFilter && (
          <button className="btn">
            <img
              src="./assets/vectors/search-filter.svg"
              className="icon"
              alt="filter"
            />
          </button>
        )}
        <div className="input">
          <img
            src="./assets/vectors/search.svg"
            alt="search"
            className="icon magnifier"
          />
          <input
            className="custom-input"
            type="text"
            id="search"
            placeholder={placeholder || "Start typing.."}
            value=""
            readOnly
            {...rest}
          />
          {icon && (
            <img
              onClick={onQrClick}
              src={icon}
              className="icon qr c-pointer"
              alt="qr"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
