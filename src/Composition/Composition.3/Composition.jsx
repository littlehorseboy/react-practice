import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './app.scss';

function FancyBorder(props) {
  return (
    <div className={`${styles.FancyBorder} ${props.color}`}>
      {props.children}
    </div>
  );
}

FancyBorder.propTypes = {
  children: PropTypes.array,
  color: PropTypes.string,
};

function Dialog(props) {
  return (
    <FancyBorder color={styles['FancyBorder--blue']}>
      <h1 className={styles.Dialog__title}>
        {props.title}
      </h1>
      <p className={styles.Dialog__message}>
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

Dialog.propTypes = {
  children: PropTypes.array,
  title: PropTypes.string,
  message: PropTypes.string,
};

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSingUp = this.handleSingUp.bind(this);
  }

  handleChange(e) {
    this.setState({ login: e.target.value });
  }

  handleSingUp() {
    console.log(`Welcome aboard, ${this.state.login}!`);
  }

  render() {
    return (
      <Dialog title="Mars Exploration Program" message="How should we refer to you?">
        <input value={this.state.login} onChange={this.handleChange} />
        <button onClick={this.handleSingUp}>
          Sign Me Up!
        </button>
      </Dialog>
    );
  }
}

ReactDOM.render(<SignUpDialog />, document.querySelector('#app'));
