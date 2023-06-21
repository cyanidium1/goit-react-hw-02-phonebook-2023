import { Component } from 'react';
import Adder from './Adder/Adder';
import Contacts from './Contacts/Contacts';
import Searcher from './Searcher/Searcher';
import Kek from './SeniorCodingExamples/SeniorCodingExamples';

export class App extends Component {
  state = {
    book: [
      { name: 'Kek', tel: '+380777', id: 0 },
      { name: 'Ajax', tel: '+102', id: 1 },
      { name: 'Bob', tel: '787898', id: 2 },
      { name: 'Johny', tel: 'они на деревьях', id: 3 },
      { name: 'Kenny', tel: 'dead', id: 4 },
    ],
    filter: '',
  };

  deleteItem = id => {
    this.setState(({ book }) => {
      return {
        book: book.filter(el => el.id !== id),
      };
    });
    return this.state.book;
  };

  addItem = (name, tel) => {
    const names = [...this.state.book].map(el => el.name);
    if (names.includes(name)) {
      alert('Already exists');
      return;
    }
    if (name && tel) {
      const contact = {
        name: name,
        tel: tel,
        id:
          this.state.book.length === 0
            ? 0
            : this.state.book[this.state.book.length - 1].id + 1,
        key:
          this.state.book.length === 0
            ? 0
            : this.state.book[this.state.book.length - 1].id + 1,
      };
      this.setState(state => {
        const newSt = [...state.book, contact];
        return { book: newSt };
      });
    } else {
      alert('Input valid data');
    }
  };

  searchItem = input => {
    this.setState({
      filter: input,
    });
  };

  render() {
    return (
      <>
        <Searcher searchItem={this.searchItem} />
        <Contacts
          telBook={this.state.book}
          deleteItem={this.deleteItem}
          search={this.state.filter}
        />
        <Adder addItem={this.addItem} />
        <Kek />
      </>
    );
  }
}
