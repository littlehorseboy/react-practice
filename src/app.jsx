import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './app.scss';

const stocks = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
];

function SearchBar() {
  return (
    <div>
      <div>
        <input />
      </div>
      <div>
        <input type="checkbox" />
        <label>Only show products in stock</label>
      </div>
    </div>
  );
}

function ProductCategoryRow() {
  return 'category';
}

function ProductRow() {
  return 'row';
}

function ProductTable() {
  return (
    <div>
      <ProductCategoryRow />
      <ProductRow />
    </div>
  );
}

function FilyerableProductTable() {
  return (
    <div>
      <SearchBar />
      <ProductTable />
    </div>
  );
}

ReactDOM.render(<FilyerableProductTable />, document.querySelector('#app'));
