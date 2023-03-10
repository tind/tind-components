import React, { ChangeEventHandler } from "react";
import './InputText.component.css';
import { InputText as PRInputText } from 'primereact/inputtext';
import { generateID } from '../index';

interface SelectButtonProps {
  placeholder?: string;
  value?: string;
  error?: string;
  size?: 'small' | 'medium' | 'large',
  iconPosition?: 'left' | 'right',
  icon?: string | undefined,
  className?: string | undefined,
  label?: string | undefined,
  onChange?: ChangeEventHandler<HTMLInputElement>;
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
  iconPosition = 'left',
  icon = undefined,
  size = 'medium',
  className = '',
  label = undefined,
  onChange
}: SelectButtonProps) => {
  const classList = ["tc-inputtext", "block", getSizeClass(size), getErrorClass(error), className].join(' ');
  const iconClassList = [(icon && iconPosition == 'left') ? 'p-input-icon-left' : '', (icon && iconPosition == 'right') ? 'p-input-icon-right' : '', label ? 'p-float-label' : ''].join(' ');
  const id = generateID();

  return (
    <>
      <span className={iconClassList}>
        <PRInputText
          id={`tc-input-${id}`}
          className={classList}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {
          error ?
            <small className="p-error block">{error}</small> : ''
        }
        {
          label ?
            <label htmlFor={`tc-input-${id}`}>{label}</label> : ''
        }
      </span>
    </>
  );
};