import React from "react";
import './Table.component.css';
import { Column as PRColumn } from 'primereact/column';

interface ColumnProps {
  field?: string;
  header?: string;
  body?: JSX.Element;
  selectionMode?: 'single' | 'multiple';
}

export const Column = ({
  field,
  header,
  body,
  selectionMode = "multiple"
}: ColumnProps) => {
  const classList = `tc-column`;

  return (
    <PRColumn className={classList} field={field} header={header} body={body} selectionMode={selectionMode}></PRColumn>
  );
};