import React from "react";
import { render, screen } from "@testing-library/react";
export default function Friends(props) {
  return (
    <div className="friends">
      <h3 className="head">Friends</h3>
      {props.friends &&
        props.friendsInfo.map((friend, index) => (
          <div key={friend.index}>
            <img src={friend.avatar} />
            <p>Firstname: {friend.firstName}</p>
            <p>Gender: {friend.gender}</p>
            <p>Birthday: {friend.birthday}</p>
          </div>
        ))}
    </div>
  );
}

//testler

test("test head element in the document ", () => {
  render(<Friends />);
  const headElement = screen.getByRole("heading");
  expect(headElement).toBeInTheDocument();
});

test("test head element have a class", () => {
  render(<Friends />);
  const headElement = screen.getByRole("heading");
  expect(headElement).toHaveClass("head");
});

test('test "Friends" to be in the document', () => {
  render(<Friends />);
  screen.debug();
  expect(screen.getByText("Friends")).toBeInTheDocument();
});
