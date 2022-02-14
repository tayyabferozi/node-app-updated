import React from "react";

import clsx from "clsx";

import FancyInput from "../components/FancyInput";

const Modal = ({
  isOpen,
  modalCloseHandler,
  bottomAligned,
  className,
  headClassName,
  bodyClassName,
  headRightComp,
  title,
  subTitle,
  forText,
  headInput,
  buttonText,
  children,
  ...rest
}) => {
  return (
    <>
      <div
        onClick={modalCloseHandler}
        className={clsx("modal-overlay", isOpen && "show")}
      ></div>
      <div
        className={clsx(
          "custom-modal",
          "short-scrollbar",
          className,
          isOpen && "show",
          bottomAligned && "bottom-aligned"
        )}
        {...rest}
      >
        {title && (
          <div
            className={`modal-head${headClassName ? " " + headClassName : ""}`}
          >
            <div className="text">
              <h2 className="main-title">{title}</h2>
              <div className="title-label fs-10">{subTitle}</div>
              {forText && (
                <div className="fs-12 mt-1">
                  For : <span className="fs-12 fw-600">{forText}</span>
                </div>
              )}
            </div>
            <div className="d-flex">
              {headInput && <FancyInput {...headInput} />}
              {headRightComp && headRightComp}
            </div>
          </div>
        )}
        <div
          className={`modal-body${bodyClassName ? " " + bodyClassName : ""}`}
        >
          {children}
        </div>
        {buttonText && (
          <div className="modal-foot">
            <button
              onClick={modalCloseHandler}
              className="btn btn-blue btn-rounded"
            >
              {buttonText}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;
