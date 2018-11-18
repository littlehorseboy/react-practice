import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Hello extends React.Component {
  render() {
    const { name } = this.props;
    return <h1>Hello, {name}</h1>;
  }
}

Hello.propTypes = {
  name: PropTypes.string,
};

class HelloDiv extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <Hello name={name + 1}></Hello>
        <Hello name={name + 10}></Hello>
      </div>
    );
  }
}

HelloDiv.defaultProps = {
  name: 'Stranger',
};

HelloDiv.propTypes = { // 感覺像個雞肋 也可能是我沒有掌握正確的使用方式
  name: PropTypes.string.isRequired,
};

const titleDiv = (
  <div>
    <HelloDiv name={8}></HelloDiv>
    <HelloDiv name="8"></HelloDiv>
    <HelloDiv></HelloDiv>
  </div>
);

ReactDOM.render(titleDiv, document.querySelector('#app'));
