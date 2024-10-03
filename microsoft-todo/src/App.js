// App.js

import "/Users/seojeong/Documents/GitHub/React_TodoList/microsoft-todo/src/App.js";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

import React, { useState } from "react";
import Sidebar from "./components/Sidebar";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "React 공부하기", checked: false },
    { id: 2, text: "ToDo 앱 만들기", checked: true },
    { id: 3, text: "마이크로소프트 ToDo 스타일 적용하기", checked: false },
  ]);

  const nextId = React.useRef(4);

  const onInsert = (text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos((todos) => todos.concat(todo));
    nextId.current += 1;
  };

  const onToggle = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const onRemove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    
    <div className="App">
      <div className="sidebar">
      <Sidebar />

      </div>
      <div className="todo-section">

        <TodoTemplate>
          <TodoInsert onInsert={onInsert} />
          <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
        </TodoTemplate>
      </div>
    </div>
  );
}

export default App;
