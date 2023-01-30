import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AutoComplete } from '../components/AutoComplete';
// import { AutoComplete } from "primereact/autocomplete";

import "./assets/theme.css"; // theme
import "primereact/resources/primereact.min.css";

export default {
    title: 'Components/AutoComplete',
    component: AutoComplete,
} as ComponentMeta<typeof AutoComplete>;

const Template: ComponentStory<typeof AutoComplete> = (args) => {
    const [_value, _setValue] = useState('');

    return <AutoComplete {...args} value={_value} onChange={(e) => _setValue(e.value)} />
}
const defaultArgs = {
    suggestions: [
        "Norway", "Sweden", "Finland", "Denmark"
    ]
}

export const Default = Template.bind({});
Default.args = {
    ...defaultArgs
};

export const WithDropdown = Template.bind({});
WithDropdown.args = {
    ...defaultArgs,
    dropdown: true
};
