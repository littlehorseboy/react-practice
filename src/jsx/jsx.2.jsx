import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user) {
  if (user) {
    return `${user.firstName} ${user.lastName}`;
  }
  return 'Stranger';
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
};

const element = (
  <h1>Hello, {formatName(user)}</h1>
);

ReactDOM.render(element, document.querySelector('#app'));
