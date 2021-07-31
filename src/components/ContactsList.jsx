import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import Button from "./Button";
import { ContactContext } from "../ContactContext";
import ContactCard from "./ContactCard";

function ContactsList() {
  const { contacts } = useContext(ContactContext);

  const [search, setSearch] = useState("");

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  let filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().indexOf(search.toLowerCase()) != -1;
  });

  return (
    <>
      <div className="head-div">
        <Link to="/add-contact">
          <Button />
        </Link>
        <input
          value={search}
          onChange={updateSearch}
          className="search-input"
          type="search"
          placeholder="search contact"
        />
      </div>
      <div>
        {filteredContacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </>
  );
}

export default ContactsList;
