import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './app.scss';

function SplitPane(props) {
  return (
    <div className={styles.splitPane}>
      <div className={styles.splitPane__left}>
        {props.left}
      </div>
      <div className={styles.splitPane__right}>
        {props.right}
      </div>
    </div>
  );
}

SplitPane.propTypes = {
  left: PropTypes.object,
  right: PropTypes.object,
};

function Contacts() {
  return <div className={styles.contacts}>Contacts</div>;
}

function Chat() {
  return <div className={styles.chat}>Chat</div>;
}

function App() {
  return (
    <SplitPane left={<Contacts />} right={<Chat />} />
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
