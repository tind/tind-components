import React from "react";
import { SelectButton as PRSelectButton, SelectButtonChangeParams } from 'primereact/selectbutton';

interface SelectButtonProps {
    options: { label: string, value: any }[];
    value?: any;
    onChange?: (e: SelectButtonChangeParams) => void;
}

export const SelectButton = ({
    options,
    value,
    onChange
}: SelectButtonProps) => {
    return (
        <PRSelectButton
            options={options}
            value={value}
            onChange={onChange}
        />
    );
};