import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.length !== 0 ? (
         filteredTodos.map((todo) => (
            <Todo
              key={todo.id}
              text={todo.text}
              todos={todos}
              setTodos={setTodos}
              todo={todo}
            />
          ))
        ) : (
          <p>There is anything to do</p>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
