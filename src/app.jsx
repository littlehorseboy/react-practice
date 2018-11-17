import React from 'react';
import ReactDOM from 'react-dom';

const name = 'horse';

const el = (function () {
  if (name) {
    return <h1>Hellssso {name}</h1>;
  } else {
    return <h1>Hello world</h1>;
  }
}());

ReactDOM.render(
  el,
  document.querySelector('#app'),
);
