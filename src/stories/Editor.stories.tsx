import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Editor } from '../components/Editor';

import "./assets/theme.css"; // theme
import "./assets/stories.css"; // custom css
import "primereact/resources/primereact.min.css";

export default {
    title: 'Components/Editor',
    component: Editor,
} as ComponentMeta<typeof Editor>;

const Template: ComponentStory<typeof Editor> = (args: any) => {
    const [_value, _setValue] = useState<string>('');
    return (
        <div style={{width: args.width}}>
            <Editor {...args} value={_value} onChange={(e) => _setValue(e.htmlValue ? e.htmlValue : '')} className={"editor-height"} />
        </div>
    );
}

export const Desktop = Template.bind({});
Desktop.args = {
    width: "900px"
};

export const Mobile = Template.bind({});
Mobile.args = {
    width: "338px" // 338
};