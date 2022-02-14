const FancyInput = ({
  id,
  vector,
  label,
  lightLabel,
  thinlabel,
  value,
  icon,
  alt,
  type,
  add,
  select,
  options,
  placeholder,
  sMargin,
  small,
  largePaddingBottom,
  mdPaddingBottom,
  prominant,
  prominantBlue,
  rootClassName,
  inputClassName,
  ...rest
}) => {
  return (
    <div
      className={`custom-form-control${sMargin ? " s-margin" : ""}${
        prominant ? " prominant" : ""
      }${small ? " small" : ""}${prominantBlue ? " prominant-blue" : ""}${
        largePaddingBottom ? " large-padding-bottom" : ""
      }${mdPaddingBottom ? " md-padding-bottom" : ""}${
        rootClassName ? " " + rootClassName : ""
      }`}
    >
      <label
        className={`${lightLabel ? " text-light-5" : ""}${
          thinlabel ? " fw-400 text-manrope" : ""
        }`}
        htmlFor={id}
      >
        {label}
      </label>
      <div className="input">
        {select ? (
          <select
            className={`custom-input${
              inputClassName ? " " + inputClassName : ""
            }`}
            placeholder={placeholder || ""}
            {...rest}
          >
            {options.map((el, idx) => {
              return (
                <option
                  key={"select" + idx}
                  value={el.value}
                  disabled={el.disabled ? "disabled" : ""}
                >
                  {el.text}
                </option>
              );
            })}
          </select>
        ) : add ? (
          <img
            className="add-placeholder"
            src="./assets/vectors/add-placeholder.svg"
            alt="add"
          />
        ) : (
          <>
            {icon && (
              <img className="icon" src={`./assets/${icon}`} alt={alt} />
            )}
            <input
              {...rest}
              className={`custom-input${
                inputClassName ? " " + inputClassName : ""
              }`}
              type={type || "text"}
              id={id}
              value={value}
              placeholder={placeholder || ""}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default FancyInput;
