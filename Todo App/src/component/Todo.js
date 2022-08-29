import React, { useState } from "react";
import Description from "./Description";
import Duedate from "./Duedate";

export const Todo = () => {
  const [add, setAdd] = useState("");
  const [para, setPara] = useState([]);

  const clickhandle = () => {
    if (!add) {
    } else {
      setPara([...para, add]);

      setAdd("");
    }
  };

  const removetodo = (id) => {
    const Delete = para.filter((elem, index) => {
      return index !== id;
    });

    setPara(Delete);
  };

  return (
    <>
      <div>
        <div className="header text-center">
          <h3>Todo Application</h3>

          <input
            type="text"
            className=""
            placeholder="Add Task..."
            value={add}
            onChange={(e) => setAdd(e.target.value)}
          />
          <br />
          <button className="btn my-2 btn-sm" onClick={clickhandle}>
            Add todo
          </button>
        </div>
      </div>

      <div className="cardflex ">
        {para.map((elem, index) => {
          return (
            <div className="card ">
              <div className="card-header">
                <i
                  className="fa-solid fa-trash "
                  onClick={() => removetodo(index)}
                  style={{ marginRight: "10px" }}
                ></i>
                <input
                  type="checkbox"
                  id="cbox3"
                  value="third_checkbox"
                  style={{ outerWidth: "4px", outerHeight: "5px" }}
                />{" "}
                <label htmlFor="cbox3"> {elem} </label>
              </div>
              <div className="card-body">
                <Description />
                <Duedate />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
