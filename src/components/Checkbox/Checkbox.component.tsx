import React from "react";
import "./Checkbox.component.css";
import { Checkbox as PRCheckbox } from 'primereact/checkbox';

interface CheckboxProps {
  value: string;
  checked?: boolean;
  label?: string;
  onChange?: (e: any) => void;
}

export const Checkbox = ({
  value,
  checked = false,
  label,
  onChange
}: CheckboxProps) => {
  return (
    <div className="field">
      <PRCheckbox
        inputId="tc-checkbox"
        className="tc-checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      { label ? <label htmlFor="tc-checkbox">{label}</label> : '' }
    </div>
  );
};