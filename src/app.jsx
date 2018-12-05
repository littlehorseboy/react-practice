import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>水會燒開</p>;
  }
  return <p>水不會燒開</p>;
}

BoilingVerdict.propTypes = {
  celsius: PropTypes.number,
}

ReactDOM.render(
  <BoilingVerdict />,
  document.querySelector('#app'),
);
