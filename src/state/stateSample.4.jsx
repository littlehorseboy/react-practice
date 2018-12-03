import React from 'react';
import ReactDOM from 'react-dom';

class NowTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    const upTime = () => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    };
    setInterval(upTime, 1000);
  }

  /* eslint class-methods-use-this: ["error", { "exceptMethods": ["componentDidUpdate"] }] */
  componentDidUpdate() {
    console.log('時間一分一秒在跑...');
  }

  render() {
    return <h1>現在時間是 {this.state.time}</h1>;
  }
}

ReactDOM.render(<NowTime content="TEST" />, document.querySelector('#app'));
