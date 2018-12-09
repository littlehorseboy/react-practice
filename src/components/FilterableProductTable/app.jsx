import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styles from './app.scss';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <div>
          <input placeholder="Search..." onChange={this.props.filterStocks} />
        </div>
        <div>
          <input type="checkbox" onChange={this.props.filterStockOnly} />
          <label>Only show products in stock</label>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  filterStocks: PropTypes.func,
  filterStockOnly: PropTypes.func,
};

class ProductCategoryRow extends React.Component {
  render() {
    return <div>{this.props.category}</div>;
  }
}

ProductCategoryRow.propTypes = {
  category: PropTypes.string,
};

class ProductRow extends React.Component {
  render() {
    return this.props.categoryStocks.map((stock) => {
      const name = stock.stocked ? stock.name : <span style={{ color: '#ff0000' }}>{stock.name}</span>;
      return <div key={stock.name} className={styles.flex__row}>
        <div>{name}</div>
        <div>{stock.price}</div>
      </div>;
    });
  }
}

ProductRow.propTypes = {
  categoryStocks: PropTypes.array,
};

class ProductTable extends React.Component {
  render() {
    const groups = _.groupBy(this.props.stocks, stock => stock.category);

    return (
      <div style={{ marginTop: '1rem' }}>
        <div className={styles.flex__row}>
          <div>Name</div>
          <div>Price</div>
        </div>
        {Object.keys(groups).map(key => (
          <div key={key}>
            <ProductCategoryRow category={key} />
            <ProductRow categoryStocks={groups[key]} />
          </div>
        ))}
      </div>
    );
  }
}

ProductTable.propTypes = {
  stocks: PropTypes.array,
};

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

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks,
    };
    this.filterStocks = this.filterStocks.bind(this);
    this.filterStockOnly = this.filterStockOnly.bind(this);
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

  filterStockOnly(e) {
    if (e.target.checked) {
      this.setState({
        stocks: this.state.stocks.filter(stock => stock.stocked),
      });
    } else {
      this.setState({ stocks });
    }
  }

  render() {
    return (
      <div>
        <SearchBar filterStocks={this.filterStocks} filterStockOnly={this.filterStockOnly} />
        <ProductTable stocks={this.state.stocks} />
      </div>
    );
  }
}

ReactDOM.render(<FilterableProductTable />, document.querySelector('#app'));
