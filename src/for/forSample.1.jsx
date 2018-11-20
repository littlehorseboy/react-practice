import React from 'react';
import ReactDOM from 'react-dom';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
  render() {
    const lists = [
      <li key="0">打文章</li>,
      <li key="1">寫程式</li>,
      <li key="2">耍廢</li>,
    ];

    return (
      <ul>
        {lists}
      </ul>
    );
  }
}

ReactDOM.render(<TodoList />, document.querySelector('#app'));
