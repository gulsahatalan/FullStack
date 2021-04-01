import React from "react";
export default function Friends(props) {
  return (
    <div className="friends">
      <h3>Friends</h3>
      {props.friendsInfo.map((friend) => (
        <div>
          <img src={friend.avatar} />
          <p>Firstname: {friend.firstName}</p>
          <p>Gender: {friend.gender}</p>
          <p>Birthday: {friend.birthday}</p>
        </div>
      ))}
    </div>
  );
}
