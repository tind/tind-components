import React from "react";
import './Button.component.css';
import { Button as PRButton } from 'primereact/button';
 
import "primeicons/primeicons.css";

interface ButtonProps {
  type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'help';
  size?: 'small' | 'medium' | 'large';
  outlined?: boolean;
  label?: string;
  icon?: string;
  iconPosition?: 'left' | 'right'
  onClick?: () => void;
}

function getButtonSizeClass(size: string) {
  switch (size) {
    case 'large': {
      return 'p-button-lg';
    }
    case 'small': {
      return 'p-button-sm';
    }
    default: {
      return 'p-button';
    }
  }
}

export const Button = ({
  type = 'primary',
  size = 'medium',
  outlined = false,
  label = '',
  icon,
  iconPosition = 'left',
  onClick
}: ButtonProps) => {
  const classList = `tc-button-${type} tc-button-${size} p-button-${type} ${getButtonSizeClass(size)} ${outlined ? 'p-button-outlined' : ''}`;

  return (
    <PRButton
      label={label}
      className={classList}
      onClick={onClick}
      icon={icon}
      iconPos={iconPosition}
    />
  );
};