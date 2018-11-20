import React from 'react';
import ReactDOM from 'react-dom';

class AddBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
    };

    this.addCount = this.addCount.bind(this);
  }

  addCount() {
    this.setState(prevState => ({
      clickCount: prevState.clickCount + 1,
    }), () => {
      console.log(`setState 執行後的 this.state.clickCount: ${this.state.clickCount}`);
    });
    console.log(`非同步 setState 執行前的 this.state.clickCount: ${this.state.clickCount}`);
  }

  componentDidUpdate() {
    console.log(`componentDidUpdate 觸發的 this.state.clickCount: ${this.state.clickCount}`)
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

ReactDOM.render(<AddBtn />, document.querySelector('#app'));
