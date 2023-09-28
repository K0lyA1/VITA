import React from "react";
export default function Menu() {
  return (
    <div classNameName="Menu">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="Users/1">Пользователь 1</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Users/2">Пользователь 2</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Users/3">Пользователь 3</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  );
}
