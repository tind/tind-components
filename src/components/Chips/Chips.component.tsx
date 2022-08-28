import React from "react";
import "./Chips.component.css";
import { Chips as PRChips } from 'primereact/chips';

interface ChipsProps {
  value: any[];
  onChange?: (e: any) => void;
}

export const Chips = ({
  value,
  onChange
}: ChipsProps) => {
  return (
    <div className="field">
      <PRChips
        inputId="tc-chips"
        className="tc-chips"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};