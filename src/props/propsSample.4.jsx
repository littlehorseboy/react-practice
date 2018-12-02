import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

Welcome.propTypes = {
  name: PropTypes.string,
};

function App() {
  return (
    <div>
      <Welcome name="horse" />
      <Welcome name="Otis" />
      <Welcome name="Alice" />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
