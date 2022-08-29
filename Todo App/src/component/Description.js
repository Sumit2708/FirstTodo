import React, { useState } from "react";

export default function Description() {
  const [info, setInfo] = useState("");
  const [detail, setDetail] = useState([]);

  const adddata = () => {
    if (!info) {
    } else {
      setDetail([...detail, info]);

      setInfo("");
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter description here "
          value={info}
          onChange={(e) => setInfo(e.target.value)}
        />

        <div>
          {detail.map((elem, index) => {
            return (
              <span>
                {" "}
                <b> {elem}</b>
              </span>
            );
          })}
        </div>

        <button
          className="desbtn"
          onClick={adddata}
          style={{
            margin: "4px",
          }}
        >
          Add description
        </button>
      </div>
    </>
  );
}
