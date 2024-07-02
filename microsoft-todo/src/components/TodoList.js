// TodoList.js
import React from "react";
import TodoListItem from "./TodoListItem";
import "/Users/seojeong/Documents/GitHub/React_TodoList/microsoft-todo/src/TodoList.scss";

const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default TodoList;
