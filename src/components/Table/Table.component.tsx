import React from "react";
import './Table.component.css';
import { DataTable } from 'primereact/datatable';

interface TableProps {
  children?: any;
  data?: any[];
  header?: JSX.Element;
  footer?: JSX.Element;
  paginator?: boolean;
  selection?: any;
  onSelectionChange?: (e: any) => void
}

export const Table = ({
  children,
  data = [],
  header,
  footer,
  paginator = false,
  selection,
  onSelectionChange
}: TableProps) => {
  const classList = `tc-table`;

  return (
    <>
      <DataTable value={data} className={classList} header={header} footer={footer} selection={selection} onSelectionChange={onSelectionChange} responsiveLayout="scroll" paginator={paginator} rowsPerPageOptions={[10,20,50]} rows={10}>
        {children}
      </DataTable>
    </>
  );
};