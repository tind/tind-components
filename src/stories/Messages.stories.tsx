import React, { useRef, useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Messages } from '../components/Messages';

import "./assets/theme.css"; // theme
import "./assets/stories.css"; // custom css
import "primereact/resources/primereact.min.css";
import { Button } from '../components/Button';

export default {
    title: 'Components/Messages',
    component: Messages,
} as ComponentMeta<typeof Messages>;

const Template: ComponentStory<typeof Messages> = (args: any) => {
    const ref: any = useRef(null);

    useEffect(() => {
        ref.current.show({ sticky: true, severity: args.severity, summary: args.sumary, detail: args.detail, closable: args.closable });
    }, []);

    setTimeout(() => console.log(ref), 1000);

    return (
        <div style={{ width: "400px" }}>
            <Messages childRef={ref} />
        </div>
    );
}

export const Info = Template.bind({});
Info.args = {
    severity: 'info',
    summary: 'Info',
    detail: 'Info Message Content',
    closable: true
};

export const InfoNoClose = Template.bind({});
InfoNoClose.args = {
    severity: 'info',
    summary: 'Info',
    detail: 'Info Message Content',
    closable: false
};

export const Success = Template.bind({});
Success.args = {
    severity: 'success',
    summary: 'Success',
    detail: 'Success Message Content',
    closable: true
};

export const SuccessNoClose = Template.bind({});
SuccessNoClose.args = {
    severity: 'success',
    summary: 'Success',
    detail: 'Success Message Content',
    closable: false
};

export const Warning = Template.bind({});
Warning.args = {
    severity: 'warn',
    summary: 'Warning',
    detail: 'Warning Message Content',
    closable: true
};

export const WarningNoClose = Template.bind({});
WarningNoClose.args = {
    severity: 'warn',
    summary: 'Warning',
    detail: 'Warning Message Content',
    closable: false
};

export const Error = Template.bind({});
Error.args = {
    severity: 'error',
    summary: 'Error',
    detail: 'Error Message Content',
    closable: true
};

export const ErrorNoClose = Template.bind({});
ErrorNoClose.args = {
    severity: 'error',
    summary: 'Error',
    detail: 'Error Message Content',
    closable: false
};

const DynamicTemplate: ComponentStory<typeof Messages> = (args: any) => {
    const ref: any = useRef(null);
    const createMsg = (severity: string, summary: string, detail: string, closable: boolean = true) => {
        ref.current.show({ severity: severity, summary: summary, detail: detail, closable: closable });
    }

    return (
        <div style={{ width: "400px" }}>
            <Messages childRef={ref} />

            <div>
                <Button onClick={() => createMsg('info', 'Info', ' Message')} label='Info'></Button>
                <Button type='secondary' onClick={() => createMsg('info', 'Info', ' Message', false)} label='Info No Close'></Button>
            </div>
            <div>
                <Button type='success' onClick={() => createMsg('success', 'Success', ' Message')} label='Success'></Button>
                <Button type='secondary' onClick={() => createMsg('success', 'Success', ' Message', false)} label='Success No Close'></Button>
            </div>
            <div>
                <Button type='warning' onClick={() => createMsg('warn', 'Warning', ' Message')} label='Warning'></Button>
                <Button type='secondary' onClick={() => createMsg('warn', 'Warning', ' Message', false)} label='Warning No Close'></Button>
            </div>
            <div>
                <Button type='danger' onClick={() => createMsg('error', 'Error', ' Message')} label='Error'></Button>
                <Button type='secondary' onClick={() => createMsg('error', 'Error', ' Message', false)} label='Error No Close'></Button>
            </div>
        </div>
    );
}
export const Dynamic = DynamicTemplate.bind({});