/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { HomeLine15 } from "../../assets/icons/HomeLine15";

export const BreadcrumbButton = ({
  current,
  type,
  icon,
  stateProp,
  className,
  homeLine15Color = "#667085",
  textClassName,
  text = "Projects",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    current: current || false,
    type: type || "text",
    icon: icon || false,
    state: stateProp || "focused",
  });

  return (
    <div
      className={`inline-flex relative ${
        state.icon ? "items-start" : "items-center"
      } ${
        state.type === "text" && state.state === "focused"
          ? "shadow-focus-ring-4px-primary-100"
          : ""
      } ${
        !state.icon && ["button-gray", "button-primary"].includes(state.type)
          ? "px-2 py-1"
          : state.icon && ["button-gray", "button-primary"].includes(state.type)
          ? "p-1"
          : ""
      } ${
        ["button-gray", "button-primary"].includes(state.type)
          ? "rounded-md"
          : ""
      } ${!state.icon ? "justify-center" : ""} ${
        (state.current &&
          state.state === "default" &&
          state.type === "button-primary") ||
        (state.current &&
          state.state === "focused" &&
          state.type === "button-primary") ||
        (state.state === "hover" && state.type === "button-primary")
          ? "bg-primary-50"
          : (state.current &&
              state.state === "default" &&
              state.type === "button-gray") ||
            (state.current &&
              state.state === "focused" &&
              state.type === "button-gray") ||
            (state.state === "hover" && state.type === "button-gray")
          ? "bg-gray-50"
          : ""
      } ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {!state.icon && (
        <div
          className={`w-fit mt-[-1.00px] whitespace-nowrap relative ${
            state.current ? "font-text-sm-semibold" : "font-text-sm-medium"
          } ${
            state.current
              ? "tracking-[var(--text-sm-semibold-letter-spacing)]"
              : "tracking-[var(--text-sm-medium-letter-spacing)]"
          } ${
            state.current
              ? "text-[length:var(--text-sm-semibold-font-size)]"
              : "text-[length:var(--text-sm-medium-font-size)]"
          } ${
            state.current
              ? "[font-style:var(--text-sm-semibold-font-style)]"
              : "[font-style:var(--text-sm-medium-font-style)]"
          } ${
            !state.current && ["default", "focused"].includes(state.state)
              ? "text-gray-600"
              : state.current && state.type === "button-gray"
              ? "text-gray-700"
              : !state.current &&
                state.state === "hover" &&
                ["button-gray", "text"].includes(state.type)
              ? "text-gray-800"
              : "text-primary-700"
          } ${
            state.current
              ? "font-[number:var(--text-sm-semibold-font-weight)]"
              : "font-[number:var(--text-sm-medium-font-weight)]"
          } ${
            state.current
              ? "leading-[var(--text-sm-semibold-line-height)]"
              : "leading-[var(--text-sm-medium-line-height)]"
          } ${textClassName}`}
        >
          {text}
        </div>
      )}

      {state.icon && (
        <HomeLine15 className="!relative !w-5 !h-5" color={homeLine15Color} />
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}

BreadcrumbButton.propTypes = {
  current: PropTypes.bool,
  type: PropTypes.oneOf(["button-gray", "text", "button-primary"]),
  icon: PropTypes.bool,
  stateProp: PropTypes.oneOf(["default", "focused", "hover"]),
  homeLine15Color: PropTypes.string,
  text: PropTypes.string,
};
