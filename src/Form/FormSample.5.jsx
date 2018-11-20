import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';

class EasyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      introduction: '',
      gender: 'M',
    };
    this.changeState = this.changeState.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  changeState(e) {
    const changeName = e.target.name;
    this.setState({
      [changeName]: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    console.log(`name: ${this.state.name}`);
    console.log(`gender: ${this.state.gender === 'M' ? '男' : '女'}`);
    console.log(`introduction: ${this.state.introduction}`);
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div>
          <label htmlFor="name">姓名</label>
          <input id="name" name="name" value={this.state.name} onChange={this.changeState} />
        </div>

        <div>
          <label htmlFor="gender">性別</label>
          <select id="gender" name="gender" value={this.state.gender} onChange={this.changeState}>
            <option value="M">男</option>
            <option value="W">女</option>
          </select>
        </div>

        <div>
          <label htmlFor="introduction">自我介紹</label>
          <textarea id="introduction" name="introduction" value={this.state.introduction} onChange={this.changeState}></textarea>
        </div>

        <input type="Submit" value="送出" />
      </form>
    );
  }
}

ReactDOM.render(<EasyForm />, document.querySelector('#app'));
