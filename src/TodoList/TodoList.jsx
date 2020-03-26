import React from "react";
import TodoItem from "./TodoItem";
import { SortableContainer } from "react-sortable-hoc";
// Tuo tähän elementtiin propsina todo-listasi elementit.
// Tuota lista divin sisälle listan map-funktiolla. Jokainen
// listan elementti on TodoItem-komponentti, joka löytyy
// TodoItem.jsx-tiedostosta.
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
