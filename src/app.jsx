import React from 'react';
import ReactDOM from 'react-dom';

const name = 'horse';

const el = (() => {
  if (name) {
    return <h1>Hello {name}</h1>;
  }
  return <h1>Hello world</h1>;
})();

ReactDOM.render(
  el,
  document.querySelector('#app'),
);
