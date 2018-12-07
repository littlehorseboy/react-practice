import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>水會燒開</p>;
  }
  return <p>水不會燒開</p>;
}

BoilingVerdict.propTypes = {
  celsius: PropTypes.number,
};

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      temperature: e.target.value,
    });
  }

  render() {
    const { temperature } = this.state;
    return (
      <fieldset>
        <legend>輸入一個攝氏溫度</legend>
        <input value={this.state.temperature} onChange={this.handleChange} />
        <BoilingVerdict celsius={temperature} />
      </fieldset>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.querySelector('#app'),
);
