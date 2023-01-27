import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../components/Button';
import { ButtonSet } from '../components/ButtonSet';

import "./assets/theme.css"; // theme
import "primereact/resources/primereact.min.css";

export default {
    title: 'Components/ButtonSet',
    component: ButtonSet,
} as ComponentMeta<typeof ButtonSet>;

const Template: ComponentStory<typeof ButtonSet> = (args: any) => (
    <ButtonSet>
        {args.buttons.map((arg: any) => {
            return <Button {...arg}></Button>
        })}
    </ButtonSet>
);
const defaultArgs = {
    buttons: [
        { type: "primary", label: "First" },
        { type: "primary", label: "Second" },
        { type: "primary", label: "Third" }
    ]
};

export const Default = Template.bind({});
Default.args = defaultArgs;

export const Small = Template.bind({});
Small.args = {
    buttons: [
        { type: "primary", label: "First", size: "small" },
        { type: "primary", label: "Second", size: "small" },
        { type: "primary", label: "Third", size: "small" }
    ]
};

export const Large = Template.bind({});
Large.args = {
    buttons: [
        { type: "primary", label: "First", size: "large" },
        { type: "primary", label: "Second", size: "large" },
        { type: "primary", label: "Third", size: "large" }
    ]
};

export const Outlined = Template.bind({});
Outlined.args = {
    buttons: [
        { type: "primary", label: "First", outlined: true },
        { type: "primary", label: "Second", outlined: true },
        { type: "primary", label: "Third", outlined: true }
    ]
};

export const OutlinedSmall = Template.bind({});
OutlinedSmall.args = {
    buttons: [
        { type: "primary", label: "First", outlined: true, size: "small" },
        { type: "primary", label: "Second", outlined: true, size: "small" },
        { type: "primary", label: "Third", outlined: true, size: "small" }
    ]
};