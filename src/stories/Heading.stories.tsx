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

export const Heading1 = Template.bind({});
Heading1.args = {
    children: 'Heading 1'
};

export const Heading2 = Template.bind({});
Heading2.args = {
    children: 'Heading 2',
    size: 2
};

export const Heading3 = Template.bind({});
Heading3.args = {
    children: 'Heading 3',
    size: 3
};

export const Heading4 = Template.bind({});
Heading4.args = {
    children: 'Heading 4',
    size: 4
};

export const Heading5 = Template.bind({});
Heading5.args = {
    children: 'Heading 5',
    size: 5
};
