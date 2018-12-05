import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const { target } = e;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Is goint: </label>
        <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />

        <br />

        <label>Number of Guests: </label>
        <input name="numberOfGuests" type="number" value={this.state.numberOfGuests} onChange={this.handleInputChange} />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <Reservation />,
  document.querySelector('#app'),
);
