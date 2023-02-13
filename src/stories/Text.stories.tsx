import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '../components/Text';

import "./assets/theme.css"; // theme
import "primereact/resources/primereact.min.css";

export default {
    title: 'Components/Text',
    component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => {
    return <Text {...args} />
}
const defaultArgs = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}

export const Default = Template.bind({});
Default.args = {
    ...defaultArgs
};

export const Bold = Template.bind({});
Bold.args = {
    ...defaultArgs,
    className: 'text-bold'
};

export const Italic = Template.bind({});
Italic.args = {
    ...defaultArgs,
    className: 'text-italic'
};