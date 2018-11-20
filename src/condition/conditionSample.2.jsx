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
    // console.log(e.target);
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
        {/* <Hello title='先生' /> */}
        {/* <Hello title='小姐' /> */}
        {/* {this.state.gender === 'W' && <Hello title='小姐' />} */}
        {this.state.gender === 'M' ? <Hello title='先生' /> : <Hello title='小姐' />}
      </div>
    );
  }
}

class Hello extends React.Component {
  componentDidUpdate() {
    console.log(this.props.title);
  }

  render() {
    if (this.props.title === '小姐') {
      return <h1>{this.props.title} 你好!</h1>;
    }

    return null;
  }
}

Hello.propTypes = {
  title: PropTypes.string,
};

ReactDOM.render(<SelectGender></SelectGender>, document.querySelector('#app'));
