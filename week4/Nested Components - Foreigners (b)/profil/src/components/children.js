import React from "react";
export default function Children(props) {
  return (
    <div className="children">
      <h3>Children</h3>
      {props.childrenInfo.map((child) => (
        <div>
          <img src={child.avatar} />
          <p>Firstname: {child.firstName}</p>
          <p>Gender: {child.gender}</p>
          <p>Birthday: {child.birthday}</p>
        </div>
      ))}
    </div>
  );
}
