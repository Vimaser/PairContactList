import React, { useState } from 'react';

const Main = () => {
  const [contacts, setContacts] = useState(dummyContacts);
 
  {
    contacts.map(contacts => {
      return contacts.name;
    })
  }

  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">{
      <table>
      <tbody>
        <tr key={contacts.id}>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
    
        {contacts.map(contacts => {
         
         return <tr key={contacts.info}>
          <td>{contacts.name}</td>
          <td>{contacts.phone}</td> 
          <td>{contacts.email}</td>
          </tr>;
        })
  }
    
      </tbody>
    </table>
      }</div>
    </div>
  );
    }
    

export default Main;
import dummyContacts from '../dummyData'
