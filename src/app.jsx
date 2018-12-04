import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
  );

  const content = props.posts.map((post) => {
    return (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
  });

  return (
    <div>
      {sidebar}
      <hr />
      {content}
      <hr />
      {props.posts.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        );
      })}
    </div>
  );
}

Blog.propTypes = {
  posts: PropTypes.array,
};

const posts = [
  { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', content: 'You can install React from npm.' },
];

ReactDOM.render(
  <Blog posts={posts} />,
  document.querySelector('#app'),
);
