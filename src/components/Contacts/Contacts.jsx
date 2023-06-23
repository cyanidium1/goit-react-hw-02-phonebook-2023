import Contact from 'components/Contact/Contact';
import css from './Contacts.module.css';
import PropTypes from 'prop-types';

const Contacts = ({ contacts, deleteItem }) => {
  console.log(contacts);
  return (
    <div className={css.list}>
      {contacts.map(el => (
        <Contact contacts={el} key={el.id} deleteItem={deleteItem} />
      ))}
    </div>
  );
};

Contacts.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
  search: PropTypes.string,
};

export default Contacts;
