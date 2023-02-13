import React from "react";
import './ConfirmPopup.component.css';
import { ConfirmPopup as PRConfirmPopup, confirmPopup} from 'primereact/confirmpopup';

interface ConfirmPopupShowProps {
    type?: 'confirm' | 'delete',
    message: string,
    icon?: string,
    target?: any
}

interface ConfirmPopupProps {
    childRef: any,
    accept?: () => void,
    reject?: () => void,
}

export const ConfirmPopup = ({
    accept,
    reject,
    childRef
}: ConfirmPopupProps) => {
    const show = ({
        type = 'confirm',
        message,
        target
    }: ConfirmPopupShowProps) => {
        confirmPopup({
            target,
            message,
            acceptClassName: type === 'delete' ? 'p-button-danger' : '',
            accept,
            reject
        })
    };

    childRef.current = {
        show
    };

    return (
        <>
            <PRConfirmPopup />
        </>
    );
}