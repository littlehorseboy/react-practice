import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Hello extends React.Component {
  render() {
    return <p style={this.props.style}>{this.props.content}</p>;
  }
}

Hello.propTypes = {
  style: PropTypes.object,
  content: PropTypes.string,
};

class HelloDiv extends React.Component {
  /* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
  render() {
    return (
      <div>
        <Hello content={'比較大的字'} style={{ fontSize: '1.8rem' }}></Hello>
        <Hello content={'比較小的字'} style={{ fontSize: 12 }}></Hello>
      </div>
    );
  }
}

ReactDOM.render(<HelloDiv></HelloDiv>, document.querySelector('#app'));
