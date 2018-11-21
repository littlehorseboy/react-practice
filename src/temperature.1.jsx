import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    return (
      <h1>{this.props.temperature >= 100 ? '達到沸點!!!' : '未達到沸點...'}</h1>
    );
  }
}

Title.propTypes = {
  temperature: PropTypes.number,
};

class Celsius extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 0,
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState(e) {
    const temperature = e.target.value;
    this.setState({
      [e.target.name]: temperature,
    });
  }

  render() {
    return (
      <div>
        <Title temperature={this.state.temperature} />
        <div>目前攝氏溫度為: {this.state.temperature}</div>
        <input type="number" name="temperature" value={this.state.temperature} onChange={this.changeState} />
      </div>
    );
  }
}

ReactDOM.render(<Celsius />, document.querySelector('#app'));
