import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../components/Button';
import { ButtonSet } from '../components/ButtonSet';

import "primereact/resources/themes/saga-blue/theme.css";  //theme
import "primereact/resources/primereact.min.css";

export default {
    title: 'Components/ButtonSet',
    component: ButtonSet,
} as ComponentMeta<typeof ButtonSet>;

const Template: ComponentStory<typeof ButtonSet> = (args) => (
    <ButtonSet {...args}>
        <Button type="primary" label="First"></Button>
        <Button type="primary" label="Second"></Button>
        <Button type="primary" label="Third"></Button>
    </ButtonSet>
);

export const Default = Template.bind({});
