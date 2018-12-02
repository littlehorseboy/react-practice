import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function formatDate(date) {
  return date.toLocaleDateString();
}

const comment = {
  date: new Date(),
  text: 'enjoy learning React!',
  author: {
    name: 'Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64',
  },
};

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar" src={props.author.avatarUrl} alt={props.author.name} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>

      <div className="Comment-text">
        {props.text}
      </div>

      <div className="Comment-text">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

Comment.propTypes = {
  author: PropTypes.object,
  text: PropTypes.string,
  date: PropTypes.instanceOf(Date),
};

ReactDOM.render(
  <Comment date={comment.date} text={comment.text} author={comment.author} />,
  document.querySelector('#app'),
);
