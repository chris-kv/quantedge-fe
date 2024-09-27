/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const StyleBold = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="17"
      viewBox="0 0 17 17"
      width="17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M2.87549 11.2851L7.08293 3.43637C7.75221 2.18788 9.58788 2.18788 10.2572 3.43637L14.4646 11.2851C15.0864 12.4451 14.2218 13.8333 12.8775 13.8333H4.4626C3.11833 13.8333 2.25367 12.4451 2.87549 11.2851ZM8.67004 4.5C9.03823 4.5 9.33671 4.79848 9.33671 5.16667V9.83333C9.33671 10.2015 9.03823 10.5 8.67004 10.5C8.30185 10.5 8.00338 10.2015 8.00338 9.83333V5.16667C8.00338 4.79848 8.30185 4.5 8.67004 4.5ZM7.83671 11.6667C7.83671 12.1269 8.20981 12.5 8.67004 12.5C9.13028 12.5 9.50338 12.1269 9.50338 11.6667C9.50338 11.2064 9.13028 10.8333 8.67004 10.8333C8.20981 10.8333 7.83671 11.2064 7.83671 11.6667Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

StyleBold.propTypes = {
  color: PropTypes.string,
};
