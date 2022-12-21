import React from "react";
import './ButtonSet.component.css';

interface ButtonSetProps {
  children?: any;
}

export const ButtonSet = ({
  children
}: ButtonSetProps) => {
  const classList = `tc-button-set p-buttonset`;

  return (
    <>
      <span className={classList}>
        {children}
      </span>
    </>
  );
};