import React from "react";
import PropTypes from "prop-types";

const ToDoItem = ({ todo, toggleToDo, deleteToDo }) => (
    <div>
        {/* Checkbox to toggle To Do completion status */}
        <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleToDo(todo.id)}
        />
        {/* Todo text with strike-through if completed */}
        <span style={{textDecoration: todo.completed? 'line-through':'none'}}>
            {todo.text}
        </span>
        {/* Button to delete the ToDo */}
        <button onClick={()=>deleteToDo(todo.id)}>Delete</button>
    </div>
);

ToDoItem.propTypes = {
    todo:PropTypes.object.isRequired,
    toggleToDo:PropTypes.func.isRequired,
    deleteToDo:PropTypes.func.isRequired,
}

export default ToDoItem;