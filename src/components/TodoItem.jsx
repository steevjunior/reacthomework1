import React from "react";
import "../App.css";
export function TodoItem(props) {
  return (
    <tr>
      <td style={{ width: "10%" }}>
        <input
          type="checkbox"
          checked={props.done}
          onChange={() => props.changeDone(props.ind)}
        />
      </td>
      <td style={{ width: "70%", textAlign: "left" }}>
        <p style={{ color: props.done ? "green" : "red" }}>
          {props.description}
        </p>
      </td>
      <td style={{ width: "10%" }}>
        <button onClick={() => props.deleteItem(props.ind)}>Delete</button>
      </td>
      <td style={{ width: "10%" }}>
        <button onClick={() => props.updateItem(props.ind)}>Update</button>
      </td>
    </tr>
  );
}
