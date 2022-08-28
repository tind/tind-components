import React from "react";
import "./Dropdown.component.css";
import { Dropdown as PRDropdown } from 'primereact/dropdown';

interface DropdownProps {
  placeholder?: string;
  value: any;
  options: any[];
  optionLabel?: string;
  onChange?: (e: any) => void;
}

export const Dropdown = ({
  placeholder,
  value,
  options,
  optionLabel,
  onChange
}: DropdownProps) => {
  return (
    <div className="field">
      <PRDropdown
        placeholder={placeholder}
        inputId="tc-dropdown"
        className="tc-dropdown"
        value={value}
        options={options}
        optionLabel={optionLabel}
        onChange={onChange}
      />
    </div>
  );
};