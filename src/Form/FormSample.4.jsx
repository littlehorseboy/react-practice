import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';

class EasyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '預設姓名',
      submitResult: '',
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
    this.setState(prevState => ({
      submitResult: prevState.name,
    }));
    console.log(this.state.name);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <label htmlFor="name">姓名：</label>
          <input id="name" name="name" value={this.state.name} onChange={this.changeState} />
          <input type="submit" value="送出表單" />
        </form>
        {this.state.submitResult.length > 0 && <div>{this.state.submitResult}</div>}
      </div>
    );
  }
}

ReactDOM.render(<EasyForm />, document.querySelector('#app'));
