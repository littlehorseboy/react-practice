import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function ListItems(props) {
  return <li>{props.value}</li>;
}

ListItems.propTypes = {
  value: PropTypes.number,
};

function NumberList(props) {
  const { numbers } = props;
  const listItems = numbers.map(number => <ListItems key={number} value={number}></ListItems>);

  return (
    <ul>
      {listItems}
    </ul>
  );
}

NumberList.propTypes = {
  numbers: PropTypes.array,
};

const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.querySelector('#app'),
);
