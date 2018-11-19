import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const lists = this.props.objList.map(obj => <li key={obj.id} id={obj.id}>{obj.text}</li>);

    return (
      <ul>
        {lists}
      </ul>
    );
  }
}

TodoList.propTypes = {
  objList: PropTypes.array,
};

const objList = [
  { id: 'a', text: '打文章' },
  { id: 'b', text: '寫程式' },
  { id: 'c', text: '耍廢' },
];

ReactDOM.render(<TodoList objList={objList} />, document.querySelector('#app'));
