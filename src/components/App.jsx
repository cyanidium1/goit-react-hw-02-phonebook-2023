import { Component } from 'react';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Searcher from './Searcher/Searcher';
import Kek from './SeniorCodingExamples/SeniorCodingExamples';

export class App extends Component {
  state = {
    contacts: [
      { name: 'Kek', tel: '+38077700632', id: 0 },
      { name: 'Ajax', tel: '+102', id: 1 },
      { name: 'Bob', tel: '+787898', id: 2 },
      { name: 'Johny', tel: '+373310203', id: 3 },
      { name: 'Kenny', tel: '+80765436621', id: 4 },
    ],
    filter: '',
  };

  deleteItem = id => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(el => el.id !== id),
      };
    });
  };

  addItem = (name, tel) => {
    const isExist = this.state.contacts.find(
      e => e.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
    if (isExist) {
      alert('Already exists');
      return;
    }

    this.setState(state => {
      const newSt = [
        ...state.contacts,
        {
          name: name,
          tel: tel,
          id: this.state.contacts[this.state.contacts.length - 1].id + 1,
          key: this.state.contacts[this.state.contacts.length - 1].id + 1,
        },
      ];
      return { contacts: newSt };
    });
  };

  result = [];
  searchItem = input => {
    this.setState({
      filter: input,
    });
    this.result =
      this.state.filter === ''
        ? this.state.contacts
        : this.state.contacts.filter(el =>
            el.name.toLowerCase().includes(this.state.filter.toLowerCase())
          );
    console.log(this.result);
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Searcher searchItem={this.searchItem} />
        <Contacts
          // contacts={this.result}
          telBook={this.searchedItems}
          deleteItem={this.deleteItem}
          search={this.state.filter}
        />
        <Form addItem={this.addItem} />
        <Kek />
      </div>
    );
  }
}
