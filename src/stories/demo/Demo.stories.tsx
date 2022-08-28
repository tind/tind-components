import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Demo } from './Demo.component';

// import "primereact/resources/themes/rhea/theme.css";  //theme
import "primereact/resources/primereact.min.css";  

export default {
  title: 'Demo',
  component: Demo,
} as ComponentMeta<typeof Demo>;

const Template: ComponentStory<typeof Demo> = (args) => <Demo {...args} />;

export const Default = Template.bind({});
Default.args = {
    theme: "primereact/resources/themes/rhea/theme.css"
}