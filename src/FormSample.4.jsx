import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';

class EasyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '預設姓名',
    };
    this.changeState = this.changeState.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  changeState(e) {
    this.setState({
      name: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    console.log(this.state.name);
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <label>姓名：</label>
        <input name="name" value={this.state.name} onChange={this.changeState} />
        <input type="submit" value="送出表單" />
      </form>
    );
  }
}

ReactDOM.render(<EasyForm />, document.querySelector('#app'));
