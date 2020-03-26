import React from "react";
import "./input.css";

const input = ({ addToList, ToDo, handleToDoChange }) => {
  return (
    <div className="input-container">
      <form onSubmit={addToList}>
        <div>
          <input
            value={ToDo}
            onChange={handleToDoChange}
            placeholder="Enter Task"
          />
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default input;
