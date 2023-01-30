import React from "react";
import "./Dropdown.component.css";
import { Dropdown as PRDropdown, DropdownChangeParams } from 'primereact/dropdown';

interface DropdownProps {
  placeholder?: string;
  value: any;
  options: any[];
  optionLabel?: string;
  filterBy?: string;
  invalid?: boolean;
  disabled?: boolean;
  filter?: boolean;
  onChange?: (e: DropdownChangeParams) => void;
}

export const Dropdown = ({
  placeholder,
  value,
  options,
  optionLabel,
  invalid = false,
  disabled = false,
  filter = false,
  filterBy,
  onChange
}: DropdownProps) => {
  const classes = ["tc-dropdown"];
  if (invalid) { classes.push('p-invalid'); }
  if (disabled) { classes.push('p-disabled'); }

  const classList = classes.join(' ');

  return (
    <div className="field">
      <PRDropdown
        placeholder={placeholder}
        inputId="tc-dropdown"
        className={classList}
        value={value}
        options={options}
        optionLabel={optionLabel}
        onChange={onChange}
        filter={filter}
        filterBy={filterBy}
      />
    </div>
  );
};