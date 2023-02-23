import React from "react";
import { Column as PRColumn } from 'primereact/column';

interface ColumnProps {
  field?: string;
  header?: string;
  body?: JSX.Element;
  selectionMode?: 'single' | 'multiple';
  sortable?: boolean;
  classes?: string;
}

export const Column = ({
  field,
  header,
  body,
  selectionMode = "multiple",
  sortable = false,
  classes
}: ColumnProps) => {
  const classList = `${classes} tc-column`;
  console.log(classList);

  return (
    <PRColumn className={classList} field={field} header={header} body={body} selectionMode={selectionMode} sortable={sortable}></PRColumn>
  );
};