import React from 'react';

const ContactRow = props => {
  return (
    <tr onClick={() => props.selectContact(props.contact.id)}>
        <React.Fragment>
      <td>{props.contact.name}</td>
      <td>{props.contact.email}</td>
      <td>{props.contact.phone}</td>
        </React.Fragment>
    </tr>
  );
};

export default ContactRow;

/* Ran into an error on the (prop) smashed my head against the wall
until I just ran it through chatGPT. (I hate doing that) So... In function 
declaration of "ContactRow" you need curly braces instead of parentheses 
around the propparameter. And I needed to destructure the contact 
prop within the function's argument list. 

so instead of... 

const ContactRow = (prop) => {
    //yadayadayada code 
    );
}

it's... 

const ContactRow = {( contact ) => {
    //yadayadayada code
}

Also, I had a typo... When do I not not have a typo? lol

But so far, it's been smooth sailing.
*/
