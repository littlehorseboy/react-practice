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

function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

Avatar.propTypes = {
  user: PropTypes.object,
};

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar className="Avatar" user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

UserInfo.propTypes = {
  user: PropTypes.object,
};

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />

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
