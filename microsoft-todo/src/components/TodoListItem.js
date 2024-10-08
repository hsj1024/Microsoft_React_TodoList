// import React from "react";
// import {
//   MdCheckBoxOutlineBlank,
//   MdCheckBox,
//   MdRemoveCircleOutline,
// } from "react-icons/md";
// import classNames from "classnames";
// import "/Users/seojeong/Documents/GitHub/React_TodoList/microsoft-todo/src/TodoListItem.scss";

// const TodoListItem = ({ todo, onToggle, onRemove }) => {
//   const { id, text, checked } = todo;

//   return (
//     <div className="TodoListItem">
//       <div
//         className={classNames("checkbox", { checked })}
//         onClick={() => onToggle(id)}
//       >
//         {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
//         <div className="text">{text}</div>
//       </div>
//       <div className="remove" onClick={() => onRemove(id)}>
//         <MdRemoveCircleOutline />
//       </div>
//     </div>
//   );
// };

// export default TodoListItem;
import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import classNames from "classnames";
import "../TodoListItem.scss"; // 경로 수정

const TodoListItem = ({ todo, onToggle, onRemove }) => {
  const { id, text, checked } = todo;

  return (
    <div className="todo-list-item">
      <div
        className={classNames("checkbox", { checked })}
        onClick={() => onToggle(id)}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
