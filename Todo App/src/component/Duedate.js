import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Duedate() {
  const [dueDate, setdueDate] = useState(new Date()); 

  var g1 = new Date();
  var g2 = dueDate;

  let Add = () => {
    if (g1.getTime() < g2.getTime()) alert("good to go");
    else if (g1.getTime() > g2.getTime()) alert("Deadline Passed");
    else alert("Today's dedline");
  };

  return (
    <>
      <DatePicker selected={dueDate} onChange={(date) => setdueDate(date)} />
      <button className="datebtn" onClick={Add} style={{margin:"4px"}}>
        Add due date
      </button>
    </>
  );
}
