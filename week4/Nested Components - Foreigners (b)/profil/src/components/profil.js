import React from "react";
import Children from "./children";
import Friends from "./friends";
import "./profil.css";

export default function Person(props) {
  {
    /* propsla json dosyasindaki bilgilere ulasilir. */
  }
  return props.personList.map((person) => {
    return (
      <div className="profil">
        <div className="personal">
          <div>
            <img src={person.avatar} className="personAvatar" />
            <p>Children: {person.children.length}</p>
            <p>Friends: {person.friends.length}</p>
          </div>
          <h3>Personal</h3>
          <div>
            <p>Lastname: {person.last_name}</p>
            <p>Firstname: {person.first_name}</p>
          </div>
          <div>
            <p>Adress: {person.address}</p>
            <p>Salary: {person.salary} </p>
          </div>
          <div>
            <p>Gender: {person.gender} </p>
            <p>Email: {person.email}</p>
          </div>
        </div>
        <Children childrenInfo={person.children} />{" "}
        {/* sadece cocuklarin bilgileri children.js e gonderilir */}
        <Friends friendsInfo={person.friends} />
      </div>
    );
  });
}
