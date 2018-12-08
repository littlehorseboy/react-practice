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
    </FancyBorder>
  );
}

Dialog.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
};

function WelcomeDialog() {
  return (
    <Dialog title="Welcome" message="Thank you for visiting our spacecraft!" />
  );
}

ReactDOM.render(<WelcomeDialog />, document.querySelector('#app'));
