import React from "react";
import './Text.component.css';

interface TextProps {
    children?: any;
    className?: string;
}

export const Text = ({
    children,
    className
}: TextProps) => {
    return (
        <>
            <p className={className}>{children}</p>
        </>
    );
};