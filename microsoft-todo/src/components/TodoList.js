// // TodoList.js
// import React from "react";
// import TodoListItem from "./TodoListItem";
// import "/Users/seojeong/Documents/GitHub/React_TodoList/microsoft-todo/src/TodoList.scss";

// const TodoList = ({ todos, onToggle, onRemove }) => {
//   return (
//     <div className="TodoList">
//       {todos.map((todo) => (
//         <TodoListItem
//           key={todo.id}
//           todo={todo}
//           onToggle={onToggle}
//           onRemove={onRemove}
//         />
//       ))}
//     </div>
//   );
// };

// export default TodoList;
import React from "react";
import TodoListItem from "./TodoListItem";
import "../TodoList.scss"; // 경로 수정

const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
    <div className="todo-list">
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
