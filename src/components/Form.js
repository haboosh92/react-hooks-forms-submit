import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submData, setSubmData] = useState([]);
  const [err,setErr] = useState([])

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleSubmit(event){
    event.preventDefault()
    if (firstName.length > 0) {
      const formData ={
        firstName:firstName,
        lastName:lastName,
      }
      const dataArray = [...submData, formData]
      setSubmData(dataArray);
      setFirstName("");
      setLastName("");
      setErr([""]);
    } else {
      setErr(["First name is required!"]);
    }
  }

  const listOfSubmissions = submData.map((data,index)=>{
    return (
      <div key={index}>
      {data.firstName} {data.lastName}
      </div>
    )
  })
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
        <h3>Submissions </h3>
        {listOfSubmissions}
      </form>
      {err.length > 0
        ? err.map((err, index) => (
            <p key={index} style={{ color: "red" }}>
              {err}
            </p>
          ))
        : null}
    </div>
  ); }
export default Form;