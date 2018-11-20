import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';

class EasyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [
        { id: '01', listName: '寫文章', check: false },
        { id: '02', listName: '打程式', check: false },
        { id: '03', listName: '耍廢', check: true },
      ],
      submitResult: '',
    };
    this.changeState = this.changeState.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  changeState(index) {
    const arrayLists = this.state.lists;

    if (arrayLists[index].check) {
      arrayLists[index].check = false;
    } else {
      arrayLists[index].check = true;
    }

    this.setState({
      lists: arrayLists,
    });
  }

  submitForm(e) {
    e.preventDefault();

    let status = '';

    this.state.lists.forEach((list) => {
      status += (list.check ? `${list.listName},` : '');
    });

    this.setState({
      submitResult: status,
    });
    console.log(status);
  }

  render() {
    const lists = this.state.lists.map((list, index) => (
      <div key={list.id}>
        <input type="checkbox" id={`check_${list.id}`} checked={list.check} onChange={this.changeState.bind(this, index)} />
        <label htmlFor={`check_${list.id}`}>{list.listName}</label>
      </div>
    ));

    return (
      <form onSubmit={this.submitForm}>
        <div>
          {lists}
        </div>

        <input type="Submit" value="送出" />

        {this.state.submitResult && <div>{this.state.submitResult.slice(0, -1)}</div>}
      </form>
    );
  }
}

ReactDOM.render(<EasyForm />, document.querySelector('#app'));
