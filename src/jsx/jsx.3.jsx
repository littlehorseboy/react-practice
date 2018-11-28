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

function getGreeting(u) {
  if (u) {
    return <h1>Hello, {formatName(u)}</h1>;
  }
  return <h1>Hello, Stranger</h1>;
}

ReactDOM.render(getGreeting(user), document.querySelector('#app'));
