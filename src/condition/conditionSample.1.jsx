import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class SelectGender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: 'M',
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
    let Title = '';
    if (this.state.gender === 'M') {
      Title = <Hello title={'先生'}></Hello>;
    } else {
      Title = <Hello title={'小姐'}></Hello>;
    }

    return (
      <div>
        <select onChange={this.changeGender.bind(this)}>
          <option value="M">男</option>
          <option value="W">女</option>
        </select>
        {Title}
      </div>
    );
  }
}

class Hello extends React.Component {
  render() {
    return <h1>{this.props.title} 你好!</h1>;
  }
}

Hello.propTypes = {
  title: PropTypes.string,
};

ReactDOM.render(<SelectGender></SelectGender>, document.querySelector('#app'));
