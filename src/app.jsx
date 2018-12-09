import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styles from './app.scss';

const stocks = [
  {
    category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football',
  },
  {
    category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball',
  },
  {
    category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball',
  },
  {
    category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch',
  },
  {
    category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5',
  },
  {
    category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7',
  },
];

function SearchBar(props) {
  return (
    <div>
      <div>
        <input onChange={props.filterStocks} />
      </div>
      <div>
        <input type="checkbox" />
        <label>Only show products in stock</label>
      </div>
    </div>
  );
}

function ProductCategoryRow(props) {
  return (
    <div>
      {props.category}
    </div>
  );
}

function ProductRow(props) {
  return props.categoryStocks.map((stock) => {
    return <div key={stock.name}>{stock.name}</div>;
  });
}

function ProductTable(props) {
  const groups = _.groupBy(props.stocks, stock => stock.category);

  return (
    <div>
      {Object.keys(groups).map((key) => {
        return (
          <div key={key}>
            <ProductCategoryRow category={key} />
            <ProductRow categoryStocks={groups[key]} />
          </div>
        );
      })}
    </div>
  );
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks,
    };
    this.filterStocks = this.filterStocks.bind(this);
  }

  filterStocks(e) {
    if (e.target.value) {
      this.setState({
        stocks: this.state.stocks.filter(stock => stock.name.indexOf(e.target.value) !== -1),
      });
    } else {
      this.setState({ stocks });
    }
  }

  render() {
    return (
      <div>
        <SearchBar filterStocks={this.filterStocks} />
        <ProductTable stocks={this.state.stocks} />
      </div>
    );
  }
}

ReactDOM.render(<FilterableProductTable />, document.querySelector('#app'));
