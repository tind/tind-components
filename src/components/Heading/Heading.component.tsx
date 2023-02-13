import React, { useState } from "react";
import './Heading.component.css';

interface HeadingProps {
    children?: any;
    size: number
}

export const Heading = ({
    children,
    size = 1
}: HeadingProps) => {
    const getHeading = () => {
        switch(size) {
            case 2: {
                return <h2>{children}</h2>
            }
            case 3: {
                return <h3>{children}</h3>
            }
            case 4: {
                return <h4>{children}</h4>
            }
            case 5: {
                return <h5>{children}</h5>
            }
            default: 
                return <h1>{children}</h1>
        }
    }
    return (
        <>
            {getHeading()}
        </>
    );
};