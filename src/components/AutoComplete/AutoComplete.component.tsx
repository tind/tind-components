import React, { useState } from "react";
import { 
    AutoComplete as PRAutoComplete, 
    AutoCompleteCompleteMethodParams, 
    AutoCompleteChangeParams 
} from 'primereact/autocomplete';

interface AutoCompleteProps {
    suggestions: any[];
    value?: string;
    field?: string;
    dropdown?: boolean;
    onChange?: (e: AutoCompleteChangeParams) => void;
}

export const AutoComplete = ({
    dropdown = false,
    value = '',
    suggestions,
    field,
    onChange
}: AutoCompleteProps) => {
    const [items, setItems] = useState([] as any[]);

    const search = (event: AutoCompleteCompleteMethodParams) => {
        setItems(suggestions.filter(item => item.startsWith(event.query)));
    }

    return (
        <>
            <PRAutoComplete
                field={field}
                dropdown={dropdown}
                value={value}
                suggestions={items}
                completeMethod={search}
                onChange={onChange}
                dropdownMode="blank"
            />
        </>
    );
};