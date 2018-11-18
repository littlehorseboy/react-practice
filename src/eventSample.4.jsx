import React from 'react';
import ReactDOM from 'react-dom';

class AddBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
    };

    // this.addCount = this.addCount.bind(this);
  }

  addCount(count) {
    // console.log(this);
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
        <button onClick={this.addCount.bind(this, 2)}>點我 addCount</button>
        <div>{this.state.clickCount}</div>
      </div>
    );
  }
}

ReactDOM.render(<div><AddBtn /><AddBtn /></div>, document.querySelector('#app'));
