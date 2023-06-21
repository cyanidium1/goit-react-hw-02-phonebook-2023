import css from './Contact.module.css';
import im from './1.png';
import del from './del.png';
import { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  state = {
    backgroundColor: '#b2faa2',
    fontWeight: 400,
  };

  render() {
    const { name, id, tel } = this.props.telBook;
    return (
      <li className={css.item}>
        <p className={css.name} style={this.state}>
          {name}
        </p>
        <p className={css.tel} style={this.state}>
          {tel}
        </p>
        <button
          onClick={e => {
            this.props.deleteItem(id);
          }}
          className={css.btn}
        >
          <img src={del} width="15px" alt="notadickpic" />
        </button>
        <button
          onClick={() => {
            if (this.state.fontWeight === 400) {
              this.setState({
                backgroundColor: 'red',
                fontWeight: 700,
                color: 'white',
              });
            } else {
              this.setState({
                backgroundColor: '#b2faa2',
                fontWeight: 400,
                color: 'black',
              });
            }
          }}
          className={css.btn}
        >
          <img src={im} width="15px" alt="notadickpic" />
        </button>
      </li>
    );
  }
}

Contact.propTypes = {
  telBook: PropTypes.shape({
    name: PropTypes.string,
    tel: PropTypes.string,
    id: PropTypes.number,
  }),
  deleteItem: PropTypes.func,
};

export default Contact;
