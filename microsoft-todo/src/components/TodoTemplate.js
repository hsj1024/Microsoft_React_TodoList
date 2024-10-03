// import React from "react";
// import "/Users/seojeong/Documents/GitHub/React_TodoList/microsoft-todo/src/TodoTemplate.scss";

// const TodoTemplate = ({ children }) => {
//   return (
//     <div className="TodoTemplate">
//       <div className="app-title">오늘 할 일</div>
//       <div className="content">{children}</div>
//     </div>
//   );
// };

// export default TodoTemplate;
import React from "react";
import "../TodoTemplate.scss"; // 경로 수정

const TodoTemplate = ({ children }) => {
  return (
    <div className="todo-template">
      <div className="app-title">오늘 할 일</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
