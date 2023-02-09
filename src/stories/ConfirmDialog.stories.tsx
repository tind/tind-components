import React, { useRef } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ConfirmDialog } from '../components/ConfirmDialog';
import { Button } from '../components/Button';

import "./assets/theme.css"; // theme
import "primereact/resources/primereact.min.css";  
import "primeicons/primeicons.css";

export default {
  title: 'Components/ConfirmDialog',
  component: ConfirmDialog,
} as ComponentMeta<typeof ConfirmDialog>;

const Template: ComponentStory<typeof ConfirmDialog> = (args: any) => {
    const accept = () => alert("Accepted");
    const reject = () => alert("Rejected");
    const ref = useRef({} as any);

    setTimeout(() => ref.current?.show({ ...args }), 0);

    return (
        <>
            <ConfirmDialog childRef={ref} accept={accept} reject={reject}/>
            <Button onClick={() => ref.current?.show({ ...args })} label={args.type == 'confirm' ? 'Show Confirm Dialog' : 'Show Delete Dialog'} type={args.type == 'delete' ? 'danger' : 'primary'}></Button>
        </>
    );
};
const defaultArgs = {
  type: 'confirm',
  message: 'Are you sure you want to proceed?',
  header: "Confirmation Required"
}

export const Confirm = Template.bind({});
Confirm.args = {
  ...defaultArgs
};

export const Delete = Template.bind({});
Delete.args = {
  ...defaultArgs,
  type: 'delete',
  message: 'Are you sure you wish to delete this?',
  header: "Delete Confirmation"
};

