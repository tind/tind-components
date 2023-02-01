import React from "react";
import './ButtonSet.component.css';

interface ButtonSetProps {
  children?: any;
  className?: string;
}

export const ButtonSet = ({
  children,
  className
}: ButtonSetProps) => {
  const classList = `${className} tc-button-set p-buttonset`;

  return (
    <>
      <span className={classList}>
        {children}
      </span>
    </>
  );
};