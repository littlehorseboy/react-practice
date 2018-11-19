import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';

class EasyForm extends React.Component {
  /* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
  render() {
    return (
      <form>
        <label>姓名：</label>
        <input name="name" />
        <input type="submit" value="送出表單" />
      </form>
    );
  }
}

ReactDOM.render(<EasyForm />, document.querySelector('#app'));
