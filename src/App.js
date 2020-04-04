import React, { useState } from "react";
import "./styles.css";
import TodoList from "./TodoList/TodoList.jsx";
import Input from "./AddInput/index";
import arrayMove from "array-move";
import background from "./background.jpg"

// Voit käyttää tätä listaa ykköstehtävässä.
// eslint-disable-next-line
const exampleToDoList = [
  {
    name: "Renderöi lista",
    value: false
  },
  {
    name: "Toteuta lisäyskomponentti",
    value: false
  },
  {
    name: "Toteuta valmiiksi merkkaaminen",
    value: false
  },
  {
    name: "Bonus: järjestettävä lista",
    value: false
  }
];

export default function App() {
  const [list, setList] = useState(exampleToDoList);
  const [ToDo, setNewToDo] = useState("");

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const newList = arrayMove(list, oldIndex, newIndex);
    return setList(newList);
  };

  const addToList = e => {
    e.preventDefault();

    const names = list.map(todo => todo.name);

    if (ToDo !== "") {
      if (!names.includes(ToDo)) {
        const newItem = {
          name: ToDo,
          value: false
        };
        setNewToDo("");
        return setList(list.concat(newItem));
      }
    }
  };

  const handleToDoChange = event => {
    setNewToDo(event.target.value);
  };

  const markComplete = name => {
    setList(
      list.map(todo => {
        if (todo.name === name) {
          todo.value = !todo.value;
        }
        return todo;
      })
    );
  };

  // Tähän kannattaa tehdä kaikki funktiot, joilla listaa
  // muokataan. Esim. listaan lisääminen, listasta poistaminen,
  // listaelementin siirtäminen. Funktiot voi lähettää muille
  // komponenteille propseina.

  // Allaolevaan rakenteeseen lisätään komponentit listaelementille
  // ja lisäyselementille.
  return (
    <div className="App" >
      <h1 style={{ marginTop: "100px" }}>TO-DO LIST</h1>
      <TodoList
        list={list}
        markComplete={markComplete}
        onSortEnd={onSortEnd}
        useDragHandle
      />
      <Input
        addToList={addToList}
        ToDo={ToDo}
        handleToDoChange={handleToDoChange}
      />
    </div>
  );
}
