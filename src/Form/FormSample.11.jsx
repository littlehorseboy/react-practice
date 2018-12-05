import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Please write an essay' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value.toUpperCase() });
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(`A essay was submitted: ${this.state.value}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>essay: </label>
        <textarea value={this.state.value} onChange={this.handleChange}></textarea>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <EssayForm />,
  document.querySelector('#app'),
);
