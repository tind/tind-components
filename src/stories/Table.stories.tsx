import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Table, Column } from '../components/Table';
import * as tableDataSmall from './demo/assets/table-data-small.json';
import * as tableDataMedium from './demo/assets/table-data-medium.json';

import { Button } from '../components/Button';
import { ButtonSet } from '../components/ButtonSet';

import "./assets/theme.css"; // theme
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
            <Button type="primary" label="View" icon='pi pi-eye' size="small" outlined={true}></Button>
            <Button type="primary" label="Edit" icon='pi pi-pencil' size="small" outlined={true}></Button>
            <Button type="primary" label="Delete" icon="pi pi-trash" size="small" outlined={true}></Button>
            <Button type="primary" label="Unpublish" icon="pi pi-file-excel" size="small" outlined={true}></Button>
        </ButtonSet>
    </>

    return (
        <Table data={tableData} selection={selection} onSelectionChange={(e: any) => setSelection(e.value)} paginator>
            <Column selectionMode="multiple"></Column>
            <Column field="id" header="#"></Column>
            <Column field="nameOfThePage" header="Name of the page"></Column>
            <Column field="content" header="Content"></Column>
            <Column field="language" header="Language"></Column>
            <Column field="created" header="Created" sortable={true}></Column>
            <Column field="modified" header="Modified" sortable={true}></Column>
            <Column field="status" header="Status" sortable={true}></Column>
            <Column body={tableActions}></Column>
        </Table>
    )
};

export const WithPaginator = PaginatorTemplate.bind({});
