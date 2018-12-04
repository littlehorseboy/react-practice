import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function NumberList(props) {
  const { numbers } = props;
  const listItems = numbers.map(number => <li key={number}>{number}</li>);

  return (
    <ul>
      {listItems}
    </ul>
  );
}

NumberList.propTypes = {
  numbers: PropTypes.array,
};

const numbers = [1, 2, 3, 4, 5, 6];

ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.querySelector('#app'),
);
