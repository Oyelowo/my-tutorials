import React, { SFC, HTMLAttributes } from "react";
import "./Button.scss";

interface IButtonProps  extends HTMLAttributes<HTMLButtonElement> {
  label?: string;
  children?: React.ReactChild;
}
const Button: SFC<IButtonProps> = ({ children, label, ...props }) => {
  return <button className="my-btn" {...props}>{label || children}</button>;
};

export default Button;
