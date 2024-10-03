// // TodoInsert.js
// import React, { useState, useCallback } from "react";
// import { MdAdd } from "react-icons/md";
// import "/Users/seojeong/Documents/GitHub/React_TodoList/microsoft-todo/src/TodoInsert.scss";

// const TodoInsert = ({ onInsert }) => {
//   const [value, setValue] = useState("");

//   const onChange = useCallback((e) => {
//     setValue(e.target.value);
//   }, []);

//   const onSubmit = useCallback(
//     (e) => {
//       onInsert(value);
//       setValue("");
//       e.preventDefault();
//     },
//     [onInsert, value]
//   );

//   return (
//     <form className="TodoInsert" onSubmit={onSubmit}>
//       <input placeholder="작업 추가" value={value} onChange={onChange} />
//       <button type="submit">
//         <MdAdd />
//       </button>
//     </form>
//   );
// };

// export default TodoInsert;
import React, { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";
import "../TodoInsert.scss"; // 경로 수정

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form className="todo-insert" onSubmit={onSubmit}>
      <input
        className="todo-input"
        placeholder="작업 추가"
        value={value}
        onChange={onChange}
      />
      <button type="submit" className="add-button">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
