import css from './Form.module.css';
import PropTypes from 'prop-types';

const Form = ({ addItem }) => {
  return (
    <form
      className={css.form}
      onSubmit={e => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.name.value;
        const tel = form.tel.value;
        addItem(name, tel);
        form.reset();
      }}
    >
      <input className={css.item} type="text" name="name" placeholder="name" />
      <input
        className={css.item}
        type="tel"
        name="tel"
        placeholder="tel"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={css.btn} type="submit">
        Sumbit
      </button>
    </form>
  );
};

Form.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default Form;
