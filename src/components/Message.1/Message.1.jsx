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
        height: 100,
      },
    };
  }

  render() {
    return <div style={this.state.style}>{this.props.children}</div>;
  }
}

Message.propTypes = {
  children: PropTypes.element,
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
        <Message>
          <p>組件標籤內的內容會被傳到該組件的 props.children 中</p>
        </Message>
      </div>
    );
  }
}

ReactDOM.render(<MessageBlock />, document.querySelector('#app'));
