import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: [],
    };
  }

  componentDidMount() {
    this.setState({
      posts: [1, 2],
    });

    this.setState({
      comments: [4, 2],
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.posts}</h2>
        <h2>{this.state.comments}</h2>
      </div>
    );
  }
}

ReactDOM.render(<Posts />, document.querySelector('#app'));
