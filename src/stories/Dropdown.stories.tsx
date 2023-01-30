import React, { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from '../components/Dropdown';

import "./assets/theme.css"; // theme
import "primereact/resources/primereact.min.css";  
import "primeicons/primeicons.css";

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => {
    const [value, setValue] = useState('');

    useEffect(() => {
        if (args.value) {
            setValue(args.value);
        }
    }, [])

    return <div style={{"width": "200px"}}>
        <Dropdown {...args} value={value} onChange={(e) => setValue(e.value)} />
    </div>;
};
const defaultArgs = {
  options: ["Red", "Blue", "Green", "Yellow"],
  placeholder: 'Select color'
}

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs
};

export const Selected = Template.bind({});
Selected.args = {
  ...defaultArgs,
  value: "Red"
};

export const Invalid = Template.bind({});
Invalid.args = {
  ...defaultArgs,
  invalid: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...defaultArgs,
  disabled: true
};

export const WithFilter = Template.bind({});
WithFilter.args = {
  ...defaultArgs,
  filter: true
};
