import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SelectButton } from '../components/SelectButton';

import "./assets/theme.css"; // theme
import "primereact/resources/primereact.min.css";  

export default {
  title: 'Components/SelectButton',
  component: SelectButton,
} as ComponentMeta<typeof SelectButton>;

const Template: ComponentStory<typeof SelectButton> = (args) => <SelectButton {...args} />;
const defaultArgs = {
  options: [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 }
  ]
}

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs
};

export const Selected = Template.bind({});
Selected.args = {
  ...defaultArgs,
  value: 2
};
