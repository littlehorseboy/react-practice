import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value.toUpperCase() });
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(`A name was submitted: ${this.state.value}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name: </label>
        <input value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.querySelector('#app'),
);
