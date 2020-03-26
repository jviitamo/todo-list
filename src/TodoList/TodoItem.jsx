import React from "react";
import "./todo-item.css";
import { SortableElement } from "react-sortable-hoc";
import { sortableHandle } from "react-sortable-hoc";
// Tässä komponentissa majailee yksittäinen listalla oleva
// elementti.

const DragHandle = sortableHandle(() => (
  <span>
    <label for="toggle">&#9776;</label>
  </span>
));

const ToDoItem = SortableElement(({ ToDo, markComplete }) => {
  const style = {
    textDecoration: ToDo.value ? "line-through" : "none"
  };

  return (
    <li className="todo-item">
      <div style={{ width: "30px", marginTop: "-2px" }}>
        <DragHandle />
      </div>
      <div style={style} onClick={markComplete.bind(this, ToDo.name)}>
        {ToDo.name}
      </div>
      <div style={{ marginLeft: "10px" }} />
    </li>
  );
});

export default ToDoItem;
