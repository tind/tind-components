import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Table, Column } from '../components/Table';
import * as tableDataSmall from './demo/assets/table-data-small.json';
import * as tableDataMedium from './demo/assets/table-data-medium.json';

import { Button } from '../components/Button';
import { ButtonSet } from '../components/ButtonSet';

import "primereact/resources/themes/saga-blue/theme.css";  //theme
import "primereact/resources/primereact.min.css";

export default {
    title: 'Components/Table',
    component: Table,
} as ComponentMeta<typeof Table>;

const DefaultTemplate: ComponentStory<typeof Table> = (args) => {
    const [tableData, setTableData] = useState(tableDataSmall.data);

    return (
        <Table data={tableData}>
            <Column field="id" header="#"></Column>
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </Table>
    )
};

export const Default = DefaultTemplate.bind({});

const ActionsTemplate: ComponentStory<typeof Table> = (args) => {
    const [tableData, setTableData] = useState(tableDataSmall.data);
    const tableActions = <>
        <ButtonSet>
            <Button type="success" label="Buy" size="small"></Button>
            <Button type="secondary" label="Reserve" size="small"></Button>
        </ButtonSet>
    </>

    return (
        <Table data={tableData}>
            <Column field="id" header="#"></Column>
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="quantity" header="Quantity"></Column>
            <Column body={tableActions}></Column>
        </Table>
    )
};

export const WithActions = ActionsTemplate.bind({});

const SelectionTemplate: ComponentStory<typeof Table> = (args) => {
    const [tableData, setTableData] = useState(tableDataSmall.data);
    const [selection, setSelection] = useState(null);
    const tableActions = <>
        <ButtonSet>
            <Button type="success" label="Buy" size="small"></Button>
            <Button type="secondary" label="Reserve" size="small"></Button>
        </ButtonSet>
    </>

    return (
        <Table data={tableData} selection={selection} onSelectionChange={(e: any) => setSelection(e.value)}>
            <Column selectionMode="multiple"></Column>
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="quantity" header="Quantity"></Column>
            <Column body={tableActions}></Column>
        </Table>
    )
};

export const WithSelection = SelectionTemplate.bind({});

const PaginatorTemplate: ComponentStory<typeof Table> = (args) => {
    const [tableData, setTableData] = useState(tableDataMedium.data);
    const [selection, setSelection] = useState(null);
    const tableActions = <>
        <ButtonSet>
            <Button type="success" label="Buy" size="small"></Button>
            <Button type="secondary" label="Reserve" size="small"></Button>
        </ButtonSet>
    </>

    return (
        <Table data={tableData} selection={selection} onSelectionChange={(e: any) => setSelection(e.value)} paginator>
            <Column selectionMode="multiple"></Column>
            <Column field="id" header="#"></Column>
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="quantity" header="Quantity"></Column>
            <Column body={tableActions}></Column>
        </Table>
    )
};

export const WithPaginator = PaginatorTemplate.bind({});

// const PaginatorTemplate: ComponentStory<typeof Table> = (args) => {
//     const [tableData, setTableData] = useState(tableDataSmall.data);

//     return (
//         <Table data={tableData}>
//             <Column field="id" header="#"></Column>
//             <Column field="code" header="Code"></Column>
//             <Column field="name" header="Name"></Column>
//             <Column field="quantity" header="Quantity"></Column>
//         </Table>
//     )
// };

// export const WithPaginator = PaginatorTemplate.bind({});