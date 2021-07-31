import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { ContactContext } from "../ContactContext";

function AddContact() {
  const { contacts, setContacts } = useContext(ContactContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  let history = useHistory();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    if (name === "" || email === "") {
      alert("name or email can't be empty !");
      return;
    }

    if (contacts.filter((con) => con.email === email).length > 0) {
      alert("contract alreay exists !");
      return;
    }

    let newContact = {
      id: contacts.length + 1,
      name,
      email,
    };
    setContacts([newContact, ...contacts]);
    console.log(newContact);
    history.push("/");
  };

  return (
    <div>
      <Link to="/">
        <button className="app-btn"> Go back</button>
      </Link>
      <div className="inputs-div">
        <input
          name="name"
          onChange={handleNameChange}
          value={name}
          placeholder="Name"
          type="text"
        />
        <input
          name="email"
          onChange={handleEmailChange}
          value={email}
          placeholder="Email"
          type="text"
        />
      </div>

      <button onClick={handleSubmit} className="app-btn" type="submit">
        Add contact
      </button>
    </div>
  );
}

export default AddContact;
