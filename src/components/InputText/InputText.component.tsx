import React from "react";
import './InputText.component.css';
import { InputText as PRInputText } from 'primereact/inputtext';

interface SelectButtonProps {
  placeholder?: string;
  value?: string;
  error?: string;
  size?: 'small' | 'medium' | 'large'
  onChange?: (e: any) => void;
}

function getSizeClass(size: string) {
  switch (size) {
    case 'large': {
      return 'p-inputtext-lg';
    }
    case 'small': {
      return 'p-inputtext-sm';
    }
    default: {
      return 'p-inputtext';
    }
  }
}

function getErrorClass(error?: string) {
  return error ? "p-invalid" : "";
}

export const InputText = ({
  placeholder,
  value,
  error,
  size = 'medium',
  onChange
}: SelectButtonProps) => {
  const classList = ["tc-inputtext", "block", getSizeClass(size), getErrorClass(error)].join(' ');

  return (
    <>
      <PRInputText
        className={classList}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {
        error ?
          <small className="p-error block">{error}</small> : ''
      }
    </>
  );
};