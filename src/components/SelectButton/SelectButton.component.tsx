import React from "react";
import { SelectButton as PRSelectButton } from 'primereact/selectbutton';

interface SelectButtonProps {
    options: { label: string, value: any }[];
    value?: any;
    onChange?: (event: any) => void;
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