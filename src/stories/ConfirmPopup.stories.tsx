import React, { createRef, useRef } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ConfirmPopup } from '../components/ConfirmPopup';
import { Button } from '../components/Button';

import "./assets/theme.css"; // theme
import "primereact/resources/primereact.min.css";  
import "primeicons/primeicons.css";

export default {
  title: 'Components/ConfirmPopup',
  component: ConfirmPopup,
} as ComponentMeta<typeof ConfirmPopup>;

const Template: ComponentStory<typeof ConfirmPopup> = (args: any) => {
    const accept = () => alert("Accepted");
    const reject = () => alert("Rejected");
    const ref = useRef({} as any);
    let elRef: any = createRef();

    setTimeout(() => {
      ref.current?.show({ ...args, target: elRef.current })
    }, 0);

    return (
        <span ref={elRef}>            
            <Button onClick={() => ref.current?.show({ ...args, target: elRef.current })} label={args.type == 'confirm' ? 'Confirm' : 'Delete'} type={args.type == 'delete' ? 'danger' : 'primary'}></Button>
            <ConfirmPopup childRef={ref} accept={accept} reject={reject}/>
        </span>
    );
};
const defaultArgs = {
  type: 'confirm',
  message: 'Are you sure you want to proceed?'
}

export const Confirm = Template.bind({});
Confirm.args = {
  ...defaultArgs
};

export const Delete = Template.bind({});
Delete.args = {
  ...defaultArgs,
  type: 'delete',
  message: 'Are you sure you wish to delete this?'
};

