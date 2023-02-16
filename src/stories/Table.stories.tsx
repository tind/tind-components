import React, { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Table, Column } from '../components/Table';
import * as tableDataSmall from './demo/assets/table-data-small.json';
import * as tableDataMedium from './demo/assets/table-data-medium.json';
import { disableArg } from './assets/helpers';

import { Button } from '../components/Button';
import { ButtonSet } from '../components/ButtonSet';

import "./assets/theme.css"; // theme
import "./assets/stories.css"; // theme
import "primereact/resources/primereact.min.css";

export default {
    title: 'Components/Table',
    component: Table,
    argTypes: {
        ...disableArg("data"),
        ...disableArg("header"),
        ...disableArg("footer"),
        ...disableArg("paginator"),
        ...disableArg("selection"),
        ...disableArg("onSelectionChange")
    }
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
        <ButtonSet className="m-w-400">
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

interface DynamicProps { columns: number, withSelection: boolean, withActions: boolean, withPaginator: boolean }
const DynamicTemplate: ComponentStory<typeof Table> = (args: DynamicProps | any) => {
    const [tableData, setTableData] = useState(tableDataMedium.data);
    const [selection, setSelection] = useState([]);
    const tableActions = <>
        <ButtonSet className="m-w-400">
            <Button type="primary" label="View" icon='pi pi-eye' size="small" outlined={true}></Button>
            <Button type="primary" label="Edit" icon='pi pi-pencil' size="small" outlined={true}></Button>
            <Button type="primary" label="Delete" icon="pi pi-trash" size="small" outlined={true}></Button>
            <Button type="primary" label="Unpublish" icon="pi pi-file-excel" size="small" outlined={true}></Button>
        </ButtonSet>
    </>;

    // useEffect(() => {
    //     setTableData(tableDataMedium.data);
    // }, []);

    const getTableColumns = (count: number = 3) => {
        let columns = [
            <Column field="id" header="#"></Column>,
            <Column field="nameOfThePage" header="Name of the page"></Column>,
            <Column field="content" header="Content"></Column>,
            <Column field="language" header="Language"></Column>,
            <Column field="created" header="Created" sortable={true}></Column>,
            <Column field="modified" header="Modified" sortable={true}></Column>,
            <Column field="status" header="Status" sortable={true}></Column>
        ];

        console.log(columns, count);
        return columns.slice(0, count).filter((c: any) => {
            console.log(c);
            return c;
        });
    }

    return (
        <Table data={tableData} selection={args.withSelection ? selection : null} onSelectionChange={args.withSelection ? (e: any) => setSelection(e.value) : () => {}} paginator={args.withPaginator}>
            { args.withSelection ? <Column selectionMode="multiple"></Column> : <></> }
            { getTableColumns(args.columns) }
            { args.withActions ? <Column body={tableActions}></Column> : <></> }
        </Table>
    )
};
export const Dynamic = DynamicTemplate.bind({});
Dynamic.args = {
    columns: 3,
    withSelection: true,
    withActions: true,
    withPaginator: false
}