import { Component } from 'react';
import Adder from './Adder/Adder';
import Contacts from './Contacts/Contacts';
import Searcher from './Searcher/Searcher';
import Kek from './SeniorCodingExamples/SeniorCodingExamples';

export class App extends Component {
  state = {
    book: [
      { name: 'Kek', tel: '+38077700632', id: 0 },
      { name: 'Ajax', tel: '+102', id: 1 },
      { name: 'Bob', tel: '+787898', id: 2 },
      { name: 'Johny', tel: '+373310203', id: 3 },
      { name: 'Kenny', tel: '+80765436621', id: 4 },
    ],
    filter: '',
  };

  deleteItem = id => {
    this.setState(({ book }) => {
      return {
        book: book.filter(el => el.id !== id),
      };
    });
  };

  addItem = (name, tel) => {
    const isExist = this.state.book.find(
      e => e.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
    if (isExist) {
      alert('Already exists');
      return;
    }
    if (name && tel) {
      this.setState(state => {
        const newSt = [
          ...state.book,
          {
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
          },
        ];
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

    //idk why it doesn't workkk

    // let searchedItems = [];
    // if ((this.state.filter = '')) {
    //   searchedItems = this.state.book;
    // }
    // this.state.book.forEach(el => {
    //   if (el.name.toLowerCase().includes(this.state.filter.toLowerCase())) {
    //     searchedItems.push(el);
    //   }
    // });
    // console.log(searchedItems);
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
          telBook={this.state.book}
          // telBook={this.searchedItems}
          deleteItem={this.deleteItem}
          search={this.state.filter}
        />
        <Adder addItem={this.addItem} />
        <Kek />
      </div>
    );
  }
}
