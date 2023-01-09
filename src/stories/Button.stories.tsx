import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../components/Button';

import "primereact/resources/themes/saga-blue/theme.css";  //theme
import "primereact/resources/primereact.min.css"; 

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
const defaultArgs = {
  label: 'Button',
  type: 'primary',
  size: 'medium'
}

export const Primary = Template.bind({});
Primary.args = {
  ...defaultArgs
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...defaultArgs,
  type: 'secondary'
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

export const Icon = Template.bind({});
Icon.args = {
  ...defaultArgs,
  icon: 'pi pi-check'
};
