// import React from "react";
// import "/Users/seojeong/Documents/GitHub/React_TodoList/microsoft-todo/src/Sidebar.scss";

// const Sidebar = () => {
//   return (
//     <div className="Sidebar">
//       <div className="logo">To Do</div>
//       <div className="menu">
//         <div className="menu-item">오늘 할 일</div>
//         <div className="menu-item">중요</div>
//         <div className="menu-item">계획된 일정</div>
//         <div className="menu-item">나에게 할당됨</div>
//         <div className="menu-item">작업</div>
//       </div>
//       <div className="new-list">새 목록</div>
//     </div>
//   );
// };

// export default Sidebar;
import React from "react";
import "../Sidebar.scss"; // 경로를 상대 경로로 수정

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">To Do</div>
      <ul className="menu">
        <li className="menu-item">오늘 할 일</li>
        <li className="menu-item">중요</li>
        <li className="menu-item">계획된 일정</li>
        <li className="menu-item">나에게 할당됨</li>
        <li className="menu-item">작업</li>
        <li className="menu-item">
        <div className="new-list">+ 새 목록</div></li>
      </ul>
    </div>
  );
};

export default Sidebar;
