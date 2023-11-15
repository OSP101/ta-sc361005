import React from "react";
import { useState } from "react";

const Alert = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div
      className="alert alert-success fade-in-5 fadeOut-5"
      role="alert"
      style={{ visibility: isVisible ? "visible" : "hidden" }}
    >
      บันทึกข้อมูลสำเร็จแล้ว
      <button
        className="btn-close"
        onClick={handleClose}
        aria-label="Close"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 20c6.627 0 12-5.373 12-12S18.627 0 12 0S0 5.373 0 12s5.373 12 12 12zm-1.414-9.414L10.586 11H14v2h-3.586l-2.121-2.122a.5.5 0 0 0-.707-.707L7.707 9.293A.5.5 0 0 0 6 9.586V12h2V9.586a.5.5 0 0 0-.293-.707L9.293 7.707a.5.5 0 0 0-.707.707L6 10.414V12h2z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Alert;
