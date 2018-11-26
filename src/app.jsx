import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

const data = [
  { id: 1, name: '神Q', message: '嗨! 大家好啊!' },
  { id: 2, name: '小馬', message: '早安啊! 昨天有沒有好好發文?' },
  { id: 3, name: '王子', message: '喔! 別說了, 那真的超級累!' },
  { id: 4, name: '神Q', message: '哈哈哈! 加油啦! 再一下就結束了' },
  { id: 5, name: '王子', message: '結束後我一定要爆睡一下' },
];

class Message extends React.Component {
  render() {
    const divStyle = { marginBottom: 20 };
    const messageStyle = { marginLeft: 20 };
    return (
      <div style={divStyle}>
        <div>{this.props.name} 對大家說: </div>
        <div style={messageStyle}>{this.props.message}</div>
      </div>
    );
  }
}

Message.propTypes = {
  name: PropTypes.string,
  message: PropTypes.string,
};

class MessageBlock extends React.Component {
  render() {
    const message = this.props.messageData.map((item) => {
      if (item.name.indexOf(this.props.searchName) !== -1) {
        return <Message key={item.id} name={item.name} message={item.message} />;
      }
      return null;
    });
    return (
      <div>
        {message}
      </div>
    );
  }
}

MessageBlock.propTypes = {
  messageData: PropTypes.array,
  searchName: PropTypes.string,
};

class SearchBlock extends React.Component {
  render() {
    return (
      <div>
        <span>搜尋留言人: </span>
        <input value={this.props.searchName} onChange={this.props.changeState} />
      </div>
    );
  }
}

SearchBlock.propTypes = {
  searchName: PropTypes.string,
  changeState: PropTypes.func,
};

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
    this.changeState = this.changeState.bind(this);
  }

  changeState(e) {
    this.setState({
      name: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <SearchBlock searchName={this.state.name} changeState={this.changeState} />
        <hr />
        <MessageBlock messageData={this.props.messageData} searchName={this.state.name} />
      </div>
    );
  }
}

MessageForm.propTypes = {
  messageData: PropTypes.array,
};

ReactDOM.render(<MessageForm messageData={data} />, document.querySelector('#app'));
