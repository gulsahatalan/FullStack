import  React, { useReducer, useState } from "react";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
 }
export default function Form() {
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = (event) => {
    event.preventDefault();
    createPerson(event);
  
  };
  
  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }
  // post metodu ile person nesnesini yolluyoruz
  const createPerson = async (event) => {
    let response = await fetch("http://174.138.103.233/api/employees", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData)
      
      
    });
    let data = await response.json();
    return data;
  };
  return (
    <div className="leftPart">
      <h3 className="header">FORM</h3>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>First Name</p>
            <input required name="firstName" type="text"  onChange={handleChange}></input>
          </label>
          <label>
            <p>Last Name </p>
            <input required name="lastName" type="text"  onChange={handleChange}></input>
          </label>
          <label>
            <p>Gender </p>
            <span>
              <input type="radio" name="gender" value="male"  onChange={handleChange}></input>Male
            </span>
            <span>
              <input type="radio" name="gender" value="female"  onChange={handleChange}></input>Female
            </span>
          </label>
          <label>
            <p>Birtday </p>
            <input type="date" name="birthday"  onChange={handleChange}></input>
          </label>
          <label>
            <p>E-Mail </p>
            <input type="email" name="email"  onChange={handleChange}></input>
          </label>
          <label>
            <p>Password</p>
            <input type="password" name="password"  onChange={handleChange}></input>
          </label>
          <label>
            <p>About Me </p>
            <input required name="about"  onChange={handleChange}></input>
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
