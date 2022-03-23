import React from "react";
import clsx from "clsx";

const SearchInput = ({
  inputStyle,
  rootClassName,
  onQrClick,
  withFilter,
  icon,
  placeholder,
  ...rest
}) => {
  return (
    <div className="main-search">
      <div className={clsx(rootClassName, "custom-form-control d-flex")}>
        {withFilter && (
          <button className="btn">
            <img
              src="./assets/vectors/search-filter.svg"
              className="icon"
              alt="filter"
            />
          </button>
        )}
        <div className="input" style={inputStyle}>
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
