import React from "react";
import { useParams } from "react-router-dom";
export default function User() {
    const param = useParams()
    console.log(param);
  return (
    <div className="User" id="1">
      Тема подiк {param.id}
    </div>,
       <div className="User" id="2">
       Tapenabakan подiк {param.id}
     </div>,
        <div className="User" id="3">
        Jekas002 подiк id = {param.id}
      </div>
  );
}
