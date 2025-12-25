import React from "react";
import "./Button.css";

const Button = ({
  children,
  onClick,
  type = "button",
  fullWidth = false,
  variant = "primary",
}) => {
  const className = `btn btn-${variant} ${fullWidth ? "btn-full" : ""}`;

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
