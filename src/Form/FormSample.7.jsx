import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';

class EasyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.filebox = React.createRef();
  }

  submitForm(e) {
    e.preventDefault();
    if (this.filebox.current.files.length > 0) {
      console.log(`選擇的檔案為: ${this.filebox.current.files[0].name}`);
    } else {
      console.log('沒有選擇任何檔案!');
    }
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div>
          <label htmlFor="filebox">上傳檔案:</label>
          <input type="file" ref={this.filebox} />
        </div>
        <input type="submit" value="送出" />
      </form>
    );
  }
}

ReactDOM.render(<EasyForm />, document.querySelector('#app'));
