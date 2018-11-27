import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["changeState"] }] */

class NumericInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState(e) {
    if ((e.which < 48 || e.which > 57)) {
      e.preventDefault();
    }

    // const value = e.target.value.replace(/[^0-9]/g, '');
    const value = e.target.value.replace(/[^0-9.]/g, '');

    this.setState({
      value,
    });
  }

  render() {
    return (
      <div>
        <input value={this.state.value} onChange={this.changeState} />
      </div>
    );
  }
}

ReactDOM.render(<NumericInput />, document.querySelector('#app'));
