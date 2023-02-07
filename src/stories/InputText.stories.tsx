import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputText } from '../components/InputText';

import "./assets/theme.css"; // theme
import "primereact/resources/primereact.min.css";  

export default {
  title: 'Components/InputText',
  component: InputText,
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => <div style={{ width: "300px", marginTop: "10px" }}><InputText {...args} /></div>;
const defaultArgs = {};

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  ...defaultArgs,
  placeholder: 'Search me...'
};

export const Value = Template.bind({});
Value.args = {
  ...defaultArgs,
  value: 'Moby Dick',
};

export const Error = Template.bind({});
Error.args = {
  ...defaultArgs,
  error: 'This field is required',
};

export const Large = Template.bind({});
Large.args = {
  ...defaultArgs,
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  ...defaultArgs,
  size: 'small',
};

export const FloatLabel = Template.bind({});
FloatLabel.args = {
  ...defaultArgs,
  label: 'Search'
}