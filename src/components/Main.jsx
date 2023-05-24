import React, { useState } from 'react';

const Main = () => {
  const [contacts, setContacts] = useState(dummyContacts);
 
  {
    contacts.map(contact => {
      return contact.name;
    })
  }

  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">{
      
      }</div>
    </div>
  );
};

export default Main;
import dummyContacts from '../dummyData'
