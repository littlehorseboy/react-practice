import React from 'react';
import ReactDOM from 'react-dom';

class NowTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date().toLocaleTimeString() };
  }

  render() {
    return <h1>現在時間是 {this.state.time}</h1>;
  }
}

ReactDOM.render(
  <NowTime />,
  document.querySelector('#app'),
);
