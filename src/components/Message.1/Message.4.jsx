import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render", "MessageConsole"] }] */

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

class MessageContent extends React.Component {
  render() {
    return <p onClick={this.props.MessageConsole}>組件標籤內的內容會被傳到該組件的 props.children 中</p>;
  }
}

MessageContent.propTypes = {
  MessageConsole: PropTypes.func,
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

  MessageConsole(e) {
    console.log(e.target.textContent);
  }

  render() {
    return (
      <div style={this.state.style}>
        <Message children={"從 props 傳進內容, 有嵌套子項這邊就看不到了, 不過 children 是特殊用途, 不該這樣用的"}>
          <MessageContent MessageConsole={this.MessageConsole} />
        </Message>
      </div>
    );
  }
}

ReactDOM.render(<MessageBlock />, document.querySelector('#app'));
