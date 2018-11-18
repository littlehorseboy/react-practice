import React from 'react';
import ReactDOM from 'react-dom';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { now: '' };
  }

  tick() {
    this.setState(() => ({
      now: new Date().toLocaleTimeString(),
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <span>{this.state.now}</span>
      </div>
    );
  }
}

ReactDOM.render(<Timer />, document.querySelector('#app'));
