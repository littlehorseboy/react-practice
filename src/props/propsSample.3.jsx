import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

Welcome.propTypes = {
  name: PropTypes.string,
};

const element = <Welcome name="horse" />;

ReactDOM.render(element, document.querySelector('#app'));
