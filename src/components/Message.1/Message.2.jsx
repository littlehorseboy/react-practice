import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        backgroundColor: '#fff',
        width: '80%',
        height: 50,
      },
    };
  }

  render() {
    return (
      <div>
        <div style={this.state.style}>
          {this.props.userName}
        </div>
        <div style={this.state.style}>
          {this.props.message}
        </div>
      </div>
    );
  }
}

Message.propTypes = {
  userName: PropTypes.element,
  message: PropTypes.element,
};

class MessageBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        backgroundColor: '#ddd',
        width: '100%',
        height: 200,
      },
    };
  }

  render() {
    return (
      <div style={this.state.style}>
        <Message userName="horse" message="Hi! 大家好!" />
      </div>
    );
  }
}

ReactDOM.render(<MessageBlock />, document.querySelector('#app'));
