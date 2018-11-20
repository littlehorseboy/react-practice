import React from 'react';
import ReactDOM from 'react-dom';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
  render() {
    const arrayList = ['打文章', '寫程式', '耍廢'];

    // const lists = [];

    // for (let i = 0; i < arrayList.length; i += 1) {
    //   lists.push(<li>{arrayList[i]}</li>);
    // }

    const lists = arrayList.map((item, index) => <li key={index}>{item}</li>);

    return (
      <ul>
        {lists}
      </ul>
    );
  }
}

ReactDOM.render(<TodoList />, document.querySelector('#app'));
