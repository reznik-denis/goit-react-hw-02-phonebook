import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
  }
  
  render() {
    const contacts = this.state.contacts;
      return (
    <div className="App">
      <h1>Phonebook</h1>
      <form className="formBlock">
        <label className="labelBlock">
          Name <input type="text" className="inputStyles"/>
        </label>
        <label className="labelBlock">
          Number <input type="text" className="inputStyles"/>
        </label>
        <button type="submit" className="button">Add contact</button>
      </form>
          <h2>Contacts</h2>
          <label className="labelBlock">
          Find contacts by name <input type="text" className="inputStyles"/>
        </label>
          <ul className="list">
            {contacts.map((contact) => (
              <li key={contact.id} className="listItem">{contact.name}: {contact.number}
              <button type="button" className="buttonDelete">Delete</button>
              </li>
              ))}
          </ul>
    </div>
  );
  }}

export default App;
