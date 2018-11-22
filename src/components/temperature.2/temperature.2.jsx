import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './app.scss';

class Title extends React.Component {
  render() {
    return (
      <h1 className={styles['text--palevioletred']}>{this.props.temperature >= 100 ? '達到沸點!!!' : '未達到沸點...'}</h1>
    );
  }
}

Title.propTypes = {
  temperature: PropTypes.number,
};

class InputTemperature extends React.Component {
  render() {
    return (
      <div className={styles.inputDiv}>
        <span>目前輸入溫度是: {this.props.temperature} 度 {this.props.type}</span>
        <input type="number" name="temperature" className={styles.inputDiv__inputNumber} value={this.props.temperature} onChange={this.props.changeState} />
        度 {this.props.type}
      </div>
    );
  }
}

InputTemperature.propTypes = {
  temperature: PropTypes.number,
  type: PropTypes.string,
  changeState: PropTypes.func,
};

class EasyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 0,
      type: '',
    };
    this.changeState = this.changeState.bind(this);
  }

  /* eslint class-methods-use-this: ["error", { "exceptMethods": ["toConvert"] }] */
  toConvert(temperature, type) {
    if (type === 'C') {
      return (temperature - 32) * 5 / 9;
    }

    return temperature * 9 / 5 + 32;
  }

  changeState(type, e) {
    this.setState({
      temperature: e.target.value,
      type,
    });
  }

  render() {
    const temperatureC = this.state.type === 'F' ? this.toConvert(this.state.temperature, 'C') : this.state.temperature;
    const temperatureF = this.state.type === 'C' ? this.toConvert(this.state.temperature, 'F') : this.state.temperature;

    return (
      <div>
        <Title temperature={temperatureC} />
        <InputTemperature temperature={temperatureC} type="C" changeState={this.changeState.bind(this, 'C')} />
        <InputTemperature temperature={temperatureF} type="F" changeState={this.changeState.bind(this, 'F')} />
      </div>
    );
  }
}

ReactDOM.render(<EasyForm />, document.querySelector('#app'));
