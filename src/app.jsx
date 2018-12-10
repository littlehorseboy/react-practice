import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styles from './app.scss';

/* eslint max-len: ["error", { "code": 150 }] */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeCheck = this.handleChangeCheck.bind(this);
  }

  handleChange(e) {
    this.props.filterStocks(e.target.value);
  }

  handleChangeCheck(e) {
    this.props.filterStockOnly(e.target.checked);
  }

  render() {
    return (
      <div>
        <div>
          <input placeholder="Search..." onChange={this.handleChange} />
        </div>
        <div>
          <input type="checkbox" onChange={this.handleChangeCheck} />
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
      filterText: '',
      inStockOnly: false,
    };
    this.filterStocks = this.filterStocks.bind(this);
    this.filterStockOnly = this.filterStockOnly.bind(this);
  }

  filterStocks(value) {
    this.setState({
      filterText: value,
    }, () => {
      this.filterStocksMethod();
    });
  }

  filterStockOnly(value) {
    this.setState({
      inStockOnly: value,
    }, () => {
      this.filterStocksMethod();
    });
  }

  filterStocksMethod() {
    if (this.state.inStockOnly && this.state.filterText) {
      this.setState({
        stocks: stocks.filter(stock => stock.stocked && stock.name.indexOf(this.state.filterText) !== -1),
      });
    } else if (this.state.filterText) {
      this.setState({
        stocks: stocks.filter(stock => stock.name.indexOf(this.state.filterText) !== -1),
      });
    } else if (this.state.inStockOnly) {
      this.setState({
        stocks: stocks.filter(stock => stock.stocked),
      });
    } else {
      this.setState({
        stocks,
      });
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
