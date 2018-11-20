import React from 'react';
import ReactDOM from 'react-dom';

class NowTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      test: 'test',
    };
  }

  componentDidMount() {
    const upTime = () => {
      this.setState((prevState, props) => ({
        time: new Date().toLocaleTimeString(),
        test: `${prevState.test} ${props.content} ${new Date().toLocaleTimeString()}`,
      }));
    };
    setInterval(upTime, 1000);
  }

  render() {
    return <h1>現在時間是 {this.state.time} {this.state.test}</h1>;
  }
}

ReactDOM.render(<NowTime content="TEST" />, document.querySelector('#app'));
