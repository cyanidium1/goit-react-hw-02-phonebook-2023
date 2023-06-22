import Contact from 'components/Contact/Contact';
import css from './Contacts.module.css';
import PropTypes from 'prop-types';

const Contacts = ({ contacts, deleteItem, search }) => {
  if (search === '') {
    return (
      <div className={css.list}>
        {contacts.map(el => (
          <Contact contacts={el} key={el.id} deleteItem={deleteItem} />
        ))}
      </div>
    );
  }
  return (
    <div className={css.list}>
      {contacts.map(el =>
        el.name.toLowerCase().includes(search.toLowerCase()) ? (
          <Contact contacts={el} key={el.id} deleteItem={deleteItem} />
        ) : null
      )}
    </div>
  );
};

Contacts.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
  search: PropTypes.string,
};

export default Contacts;
