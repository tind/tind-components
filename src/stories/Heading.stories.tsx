import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading } from '../components/Heading';

import "./assets/theme.css"; // theme
import "primereact/resources/primereact.min.css";

export default {
    title: 'Components/Heading',
    component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => {
    return <Heading {...args} />
}
const defaultArgs = {
    children: 'Book Title: Moby Dick'
}

export const Heading1 = Template.bind({});
Heading1.args = {
    ...defaultArgs
};

export const Heading2 = Template.bind({});
Heading2.args = {
    ...defaultArgs,
    size: 2
};

export const Heading3 = Template.bind({});
Heading3.args = {
    ...defaultArgs,
    size: 3
};

export const Heading4 = Template.bind({});
Heading4.args = {
    ...defaultArgs,
    size: 4
};

export const Heading5 = Template.bind({});
Heading5.args = {
    ...defaultArgs,
    size: 5
};

export const Heading6 = Template.bind({});
Heading6.args = {
    ...defaultArgs,
    size: 6
};