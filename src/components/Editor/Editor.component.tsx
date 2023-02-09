import { Editor as PREditor, EditorTextChangeParams } from 'primereact/editor';
import React from "react";
import './Editor.component.css';

interface EditorProps {
    value?: string;
    className?: string;
    onChange: (e: EditorTextChangeParams) => void;
}

export const Editor = ({
    value,
    className,
    onChange
}: EditorProps) => {
    console.log('editor');
    return (
        <>
            <PREditor value={value} onTextChange={onChange} className={className} />
        </>
    )
};