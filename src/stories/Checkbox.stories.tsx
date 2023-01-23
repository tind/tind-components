import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from '../components/Checkbox';

import "./assets/theme.css"; // theme
import "primereact/resources/primereact.min.css";  
import "primeicons/primeicons.css";

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;
const defaultArgs = {
  value: 'value',
  label: 'Click Me'
}

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs
};

export const Checked = Template.bind({});
Checked.args = {
  ...defaultArgs,
  checked: true
};

