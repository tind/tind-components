import React, { ChangeEventHandler } from "react";
import './ConfirmDialog.component.css';
import { ConfirmDialog as PRConfirmDialog, confirmDialog } from 'primereact/confirmdialog';

interface ConfirmDialogShowProps {
    type?: 'confirm' | 'delete',
    header: string,
    message: string,
    icon?: string
}

interface ConfirmDialogProps {
    childRef: any,
    accept?: () => void,
    reject?: () => void,
}

export const ConfirmDialog = ({
    accept,
    reject,
    childRef
}: ConfirmDialogProps) => {
    const show = ({
        type = 'confirm',
        header,
        message
    }: ConfirmDialogShowProps) => {
        confirmDialog({
            message,
            header,
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
            <PRConfirmDialog />
        </>
    );
}