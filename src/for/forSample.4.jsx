import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map(number => <li key={number}>{number}</li>);

ReactDOM.render(
  <ul>
    {listItems}
  </ul>,
  document.querySelector('#app'),
);
