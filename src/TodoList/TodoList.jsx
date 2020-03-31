import React from "react";
import TodoItem from "./TodoItem";
import { SortableContainer } from "react-sortable-hoc";

const TodoList = SortableContainer(({ list, markComplete }) => {
  return (
    <ul>
      {list.map((ToDo, index) => (
        <TodoItem
          key={`ToDo-${index}`}
          index={index}
          ToDo={ToDo}
          markComplete={markComplete}
        />
      ))}
    </ul>
  );
});

export default TodoList;
