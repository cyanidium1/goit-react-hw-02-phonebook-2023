import css from './Searcher.module.css';
import PropTypes from 'prop-types';

const Searcher = ({ searchItem }) => {
  return (
    <>
      <h2 className={css.head}>Phone book</h2>
      <p className={css.disclaimer}>use it on your own risk</p>
      <input
        className={css.input}
        type="text"
        placeholder="search"
        onInput={e => searchItem(e.target.value)}
      />
    </>
  );
};

Searcher.propTypes = {
  searchItem: PropTypes.func,
};

export default Searcher;
