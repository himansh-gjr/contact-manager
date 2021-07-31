import React, { useContext } from "react";
import { ContactContext } from "../ContactContext";

const ContactCard = ({ contact }) => {
  const { contacts, setContacts } = useContext(ContactContext);

  const handleContactDelete = () => {
    let newContacts = contacts.filter((con) => con.id != contact.id);
    setContacts(newContacts);
  };

  return (
    <div className="contact-card-div">
      <div>
        <h4 className="contact-name">{contact.name}</h4>
        <p className="contact-email">{contact.email}</p>
      </div>

      <div>
        <span onClick={handleContactDelete} className="card-btn">
          delete
        </span>
      </div>
    </div>
  );
};

export default ContactCard;
