import React, { MutableRefObject, useRef } from "react";
import './Messages.component.css';
import { Messages as PRMessages } from 'primereact/messages';

interface MessagesProps {
    childRef?: MutableRefObject<PRMessages | null>;
}

export const Messages = ({
    childRef
}: MessagesProps) => {
    setTimeout(() => console.log(childRef), 2000);
    return (
        <>
            <PRMessages ref={childRef} />
        </>
    );
};