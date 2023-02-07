import React, { useState } from "react";
import './Demo.component.css';
import * as tableDataSmall from './assets/table-data-small.json'
import { InputText } from "../../components/InputText";
import { Button } from '../../components/Button';
import { SelectButton } from "../../components/SelectButton";
import { Checkbox } from "../../components/Checkbox";
import { Dropdown } from "../../components/Dropdown";
import { Chips } from "../../components/Chips";
import { Calendar } from "../../components/Calendar";
import { ButtonSet } from "../../components/ButtonSet";
import { Column, Table } from '../../components/Table';

import "../assets/theme.css"; // theme

interface DemoProps {
    // theme: 'primereact/resources/themes/bootstrap4-light-blue/theme.css' | 'primereact/resources/themes/bootstrap4-light-purple/theme.css' | 'primereact/resources/themes/bootstrap4-dark-blue/theme.css' | 'primereact/resources/themes/bootstrap4-dark-purple/theme.css' | 'primereact/resources/themes/md-light-indigo/theme.css' | 'primereact/resources/themes/md-light-deeppurple/theme.css' | 'primereact/resources/themes/md-dark-indigo/theme.css' | 'primereact/resources/themes/md-dark-deeppurple/theme.css' | 'primereact/resources/themes/mdc-light-indigo/theme.css' | 'primereact/resources/themes/mdc-light-deeppurple/theme.css' | 'primereact/resources/themes/mdc-dark-indigo/theme.css' | 'primereact/resources/themes/mdc-dark-deeppurple/theme.css' | 'primereact/resources/themes/tailwind-light/theme.css' | 'primereact/resources/themes/fluent-light/theme.css' | 'primereact/resources/themes/lara-light-blue/theme.css' | 'primereact/resources/themes/lara-light-indigo/theme.css' | 'primereact/resources/themes/lara-light-purple/theme.css' | 'primereact/resources/themes/lara-light-teal/theme.css' | 'primereact/resources/themes/lara-dark-blue/theme.css' | 'primereact/resources/themes/lara-dark-indigo/theme.css' | 'primereact/resources/themes/lara-dark-purple/theme.css' | 'primereact/resources/themes/lara-dark-teal/theme.css' | 'primereact/resources/themes/saga-blue/theme.css' | 'primereact/resources/themes/saga-green/theme.css' | 'primereact/resources/themes/saga-orange/theme.css' | 'primereact/resources/themes/saga-purple/theme.css' | 'primereact/resources/themes/vela-blue/theme.css' | 'primereact/resources/themes/vela-green/theme.css' | 'primereact/resources/themes/vela-orange/theme.css' | 'primereact/resources/themes/vela-purple/theme.css' | 'primereact/resources/themes/arya-blue/theme.css' | 'primereact/resources/themes/arya-green/theme.css' | 'primereact/resources/themes/arya-orange/theme.css' | 'primereact/resources/themes/arya-purple/theme.css' | 'primereact/resources/themes/nova/theme.css' | 'primereact/resources/themes/nova-alt/theme.css' | 'primereact/resources/themes/nova-accent/theme.css' | 'primereact/resources/themes/luna-amber/theme.css' | 'primereact/resources/themes/luna-blue/theme.css' | 'primereact/resources/themes/luna-green/theme.css' | 'primereact/resources/themes/luna-pink/theme.css' | 'primereact/resources/themes/rhea/theme.css'
}

export const Demo = () => {
    const [selectButtonValue, setSelectButtonValue] = useState(undefined);
    const [checkboxValues, setCheckboxValues] = useState([] as string[]);
    const [dropdownValue, setDropdownValue] = useState(undefined);
    const [chipsValue, setChipsValue] = useState(["First Chip"] as string[]);
    const [calendarValue, setCalendarValue] = useState();
    const [tableData, setTableData] = useState(tableDataSmall.data.splice(0, 10));

    const tableActions = <>
        <ButtonSet>
            <Button type="success" label="Buy" size="small"></Button>
            <Button type="secondary" label="Reserve" size="small"></Button>
        </ButtonSet>
    </>

    const checkboxChange = (e: any) => {
        if (checkboxValues.includes(e.value)) {
            setCheckboxValues(
                [...checkboxValues.filter(v => v !== e.value)]
            );
        } else {
            setCheckboxValues([
                ...checkboxValues,
                e.value
            ]);
        }
    }

    return (
        <>
            <section style={{ "maxWidth": "50%", "display": "inline-block" }}>
                <h1>Text Input</h1>

                <section className='container-medium'>
                    <h4>Default</h4>
                    <InputText placeholder="Search..."></InputText>
                </section>
                <section className='container-medium'>
                    <h4>Error</h4>
                    <InputText placeholder="Search..." error="Required"></InputText>
                </section>
                <section className='container-medium'>
                    <h4>Small</h4>
                    <InputText placeholder="Search..." size="small"></InputText>
                </section>
                <section className='container-medium'>
                    <h4>Medium</h4>
                    <InputText placeholder="Search..." size="medium"></InputText>
                </section>
                <section className='container-medium'>
                    <h4>Large</h4>
                    <InputText placeholder="Search..." size="large"></InputText>
                </section>
                <section className='container-medium float-label-input'>
                    <h4>Float Label</h4>
                    <InputText label="Search"></InputText>
                </section>
            </section>
            <section style={{ "maxWidth": "50%", "width": "50%", "float": "right" }}>
                <section>
                    <h1>Select Button</h1>

                    <h4 />
                    <SelectButton
                        options={[
                            { label: 'Option 1', value: 1 },
                            { label: 'Option 2', value: 2 },
                            { label: 'Option 3', value: 3 }
                        ]}
                        value={selectButtonValue}
                        onChange={(e: any) => {
                            setSelectButtonValue(e.value);
                        }} />

                    <h1>Calendar</h1>

                    <h4 />
                    <div className="cd">
                        <Calendar value={calendarValue} onChange={(e) => setCalendarValue(e.value)}></Calendar>
                    </div>

                    <h1>Checkbox</h1>

                    <h4 />
                    <span className="cb"><Checkbox value="Novels" label="Novels" checked={checkboxValues.includes("Novels")} onChange={checkboxChange} /></span>
                    <span className="cb"><Checkbox value="Sci-Fi" label="Sci-Fi" checked={checkboxValues.includes("Sci-Fi")} onChange={checkboxChange} /></span>
                    <span className="cb"><Checkbox value="Articles" label="Articles" checked={checkboxValues.includes("Articles")} onChange={checkboxChange} /></span>
                    <span className="cb"><Checkbox value="Research Papers" label="Research Papers" checked={checkboxValues.includes("Research Papers")} onChange={checkboxChange} /></span>

                    <h1>Dropdown</h1>

                    <h4 />
                    <div className="cc">
                        <Dropdown options={["Option A", "Option B", "Option C"]} value={dropdownValue} onChange={(e) => setDropdownValue(e.value)}></Dropdown>
                    </div>

                    <h1>Chips</h1>

                    <h4 />
                    <div className="cd">
                        <Chips value={chipsValue} onChange={(e) => setChipsValue(e.value)}></Chips>
                    </div>

                    <h1>Input Group (Input+Button)</h1>

                    <h4 />
                    <div className="p-inputgroup" style={{ "width": "400px" }}>
                        <InputText placeholder="Keyword" className={"input-grp-demo"} />
                        <Button type="primary" label="Search" />
                    </div>
                </section>
            </section>
            <section>
                <h1>Button</h1>

                <h4>Types</h4>
                <span className="container-small"><Button type="primary" label="Primary" /></span>
                <span className="container-small"><Button type="secondary" label="Secondary" /></span>
                <span className="container-small"><Button type="success" label="Success" /></span>
                <span className="container-small"><Button type="info" label="Info" /></span>
                <span className="container-small"><Button type="warning" label="Warning" /></span>
                <span className="container-small"><Button type="help" label="Help" /></span>
                <span className="container-small"><Button type="danger" label="Danger" /></span>
                <h4>Outlined</h4>
                <span className="container-small"><Button type="primary" label="Primary" outlined={true} /></span>
                <span className="container-small"><Button type="secondary" label="Secondary" outlined={true} /></span>
                <span className="container-small"><Button type="success" label="Success" outlined={true} /></span>
                <span className="container-small"><Button type="info" label="Info" outlined={true} /></span>
                <span className="container-small"><Button type="warning" label="Warning" outlined={true} /></span>
                <span className="container-small"><Button type="help" label="Help" outlined={true} /></span>
                <span className="container-small"><Button type="danger" label="Danger" outlined={true} /></span>
                <h4>Sizes</h4>
                <span className="container-small"><Button type="primary" label="Small" size="small" /></span>
                <span className="container-small"><Button type="primary" label="Medium" size="medium" /></span>
                <span className="container-small"><Button type="primary" label="Large" size="large" /></span>
                <h4>Icons</h4>
                <span className="container-small"><Button type="primary" icon="pi pi-check" /></span>
                <span className="container-small"><Button type="primary" label="Save" icon="pi pi-check" /></span>
                <h4>Button Set</h4>
                <ButtonSet>
                    <Button type="primary" label="First" />
                    <Button type="primary" label="Second" />
                    <Button type="primary" label="Third" />
                </ButtonSet>
                <h4>Button Set Outlined</h4>
                <ButtonSet>
                    <Button type="primary" label="First" outlined={true} />
                    <Button type="primary" label="Second" outlined={true} />
                    <Button type="primary" label="Third" outlined={true} />
                </ButtonSet>
            </section>
            <section>
                <h1>Table</h1>
                <div style={{ "width": "90%", margin: "15px" }}>
                    <Table data={tableData}>
                        <Column field="id" header="#"></Column>
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                        <Column field="" header="" body={tableActions}></Column>
                    </Table>
                </div>
            </section>
        </>
    );
};