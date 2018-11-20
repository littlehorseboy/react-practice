import React from 'react';
import ReactDOM from 'react-dom';

class SelectGender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: '',
    };
    this.changeGender = this.changeGender.bind(this);
  }

  changeGender(e) {
    console.log(e.target);
    this.setState({
      gender: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <select onChange={this.changeGender.bind(this)}>
          <option value="M">男</option>
          <option value="W">女</option>
        </select>
        <div>{this.state.gender}</div>
      </div>
    );
  }
}

ReactDOM.render(<SelectGender></SelectGender>, document.querySelector('#app'));
