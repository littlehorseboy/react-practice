import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class AddBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
    };

    this.addCount = this.addCount.bind(this);
  }

  addCount() {
    const { count } = this.props;
    console.log(`每次加 ${count}`);

    this.setState(prevState => ({
      clickCount: prevState.clickCount + count,
    }), () => {
      console.log(`setState 執行後的 this.state.clickCount: ${this.state.clickCount}`);
    });
    console.log(`非同步 setState 執行前的 this.state.clickCount: ${this.state.clickCount}`);
  }

  render() {
    return (
      <div>
        <button onClick={this.addCount}>點我 addCount</button>
        <div>{this.state.clickCount}</div>
      </div>
    );
  }
}

AddBtn.propTypes = {
  count: PropTypes.number,
};

ReactDOM.render((
  <div>
    <AddBtn count={2} />
    <AddBtn count={3} />
  </div>),
  document.querySelector('#app'));
