import kek from '../../images/bike.gif';
import css from './SeniorCodingExamples.module.css';
import { Component } from 'react';

class Kek extends Component {
  state = {
    display: 'none',
    text: 'See scheme how this code works',
  };
  render() {
    return (
      <>
        <button
          className={css.btn}
          onClick={() => {
            if (this.state.display === 'block') {
              this.setState({
                display: 'none',
                text: 'See scheme how this code works',
              });
            } else {
              this.setState({
                display: 'block',
                text: 'Hide this masterpiece',
              });
            }
          }}
        >
          {this.state.text}
        </button>
        <img
          src={kek}
          alt="kek"
          style={this.state}
          width="420px"
          className={css.gif}
        />
      </>
    );
  }
}

export default Kek;
