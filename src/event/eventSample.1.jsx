import React from 'react';
import ReactDOM from 'react-dom';

class ClickBtn extends React.Component {
  /* eslint class-methods-use-this: ["error", { "exceptMethods": ["writeConsole"] }] */
  writeConsole() {
    console.log('clickBtn event!');
  }

  render() {
    return <button onClick={this.writeConsole}>點我看 console</button>;
  }
}

ReactDOM.render(<ClickBtn />, document.querySelector('#app'));
