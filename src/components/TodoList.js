import React from "react";
import PropTypes from "prop-types";
import ToDoItem from "./TodoItem";

const ToDoList = ({ todos, toggleTodo, deleteTodo }) => (
    <div>
        {/* Map through todos array and render TodoItem for each todo */}
        {todos.map(todo => (
            <ToDoItem
                key={todo.id} //Unique key for react list rendering
                todo={todo} //Pass each todo as a prop to TodoItem component
                toggleToDo={toggleTodo} //Pass toggleTodo as a prop
                deleteToDo={deleteTodo} //Pass deleteTodo as a prop
            />
        ))}
    </div>

);

ToDoList.PropTypes={
    todos:PropTypes.arrayOf(PropTypes.object).isRequired,
    toggleToDo:PropTypes.func.isRequired,
    deleteToDo:PropTypes.func.isRequired,
}

export default ToDoList;