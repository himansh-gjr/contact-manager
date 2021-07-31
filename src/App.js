import "./App.css";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import { ContactContext } from "./ContactContext";

const contactArr = [
  { id: 1, name: "user1", email: "user1@gmail.com" },
  { id: 2, name: "user2", email: "user2@gmail.com" },
  { id: 3, name: "user3", email: "user3@gmail.com" },
  { id: 4, name: "user4", email: "user4@gmail.com" },
  { id: 5, name: "user5", email: "user5@gmail.com" },
  { id: 6, name: "user6", email: "user6@gmail.com" },
  { id: 7, name: "user7", email: "user7@gmail.com" },
];

function App() {
  const [contacts, setContacts] = useState(contactArr);

  return (
    <div className="App">
      <h1>Contacts Manager</h1>
      <Router>
        <Switch>
          <ContactContext.Provider value={{ contacts, setContacts }}>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/add-contact" component={() => <AddContact />} />
          </ContactContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
