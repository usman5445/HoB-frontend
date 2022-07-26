import React from "react";

export const Loader = ({ isTrue }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 100,
        display: isTrue ? "flex" : "none",
      }}
      className="vh-100 vw-100 position-absolute justify-content-center align-items-center"
    >
      <button class="btn btn-warning " type="button" disabled>
        <span
          class="spinner-grow spinner-grow-sm"
          role="status"
          aria-hidden="true"
        ></span>
        Loading...
      </button>
    </div>
  );
};
