import React from "react";
import "./Calendar.component.css";
import { Calendar as PRCalendar } from 'primereact/calendar';

interface CalendarProps {
  value?: string;
  onChange?: (e: any) => void;
}

export const Calendar = ({
  value,
  onChange
}: CalendarProps) => {
  return (
    <div className="field">
      <PRCalendar value={value} onChange={onChange}></PRCalendar>
    </div>
  );
};