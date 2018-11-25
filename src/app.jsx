import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const data = [
  { id: 1, mame: '神Q', message: '嗨! 大家好啊!' },
  { id: 2, mame: '小馬', message: '早安啊! 昨天有沒有好好發文?' },
  { id: 3, mame: '王子', message: '喔! 別說了, 那真的超級累!' },
  { id: 4, mame: '神Q', message: '哈哈哈! 加油啦! 再一下就結束了' },
  { id: 5, mame: '王子', message: '結束後我一定要爆睡一下' },
];

class Message extends React.Component {
  render() {
    const divStyle = { marginBottom: 20 };
    const messageStyle = { marginLeft: 20 };
    return (
      <div style={divStyle}>
      <div>{this.props.name}</div>
      <div style={messageStyle}>{this.props.message}</div>
      </div>
    );
  }
}

Message.propTypes = {
  name: PropTypes.string,
};

Message.propTypes = {
  message: PropTypes.string,
};

class MessageBlock extends React.Component {
  render() {
    const message = this.props.messageData.map((item) => {
      return <Message key={item.id} name={item.name} message={item.message} />;
    })
    return (
      <div>
        {message}
      </div>
    );
  }
}

MessageBlock.propTypes = {
  messageData: PropTypes.string,
};

class SearchBlock extends React.Component {

}

class MessageForm extends React.Component {
  render() {
    return (
      <div>
        <MessageBlock messageData={this.props.messageData} />
      </div>
    );
  }
}

MessageForm.propTypes = {
  messageData: PropTypes.arrayr,
};

ReactDOM.render(<MessageForm messageData={data} />, document.querySelector('#app'));
