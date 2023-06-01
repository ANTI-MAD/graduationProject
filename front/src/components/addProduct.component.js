import React, {Component} from "react";

import UserService from "../services/user.service";
import Input from "react-validation/build/input";
import Form from "react-validation/build/form";

const required = value => {
  if (!value) {
    return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
    );
  }
};

const numberRequired = number => {
    if (!Number.isInteger(number) || number < 0) {
        return(
            <div className="alert alert-danger" role="alert">
                This field must be a number and greater than zero!
            </div>
        )
    }
}

const kek = value => {
    if (value < 0) {
        return(
            <div className="alert alert-danger" role="alert">
                This field must be a number and greater than zero!
            </div>
        )
    }
}

export default class FarmerAddProduct extends Component {
  constructor(props) {
    super(props);
    this.onChangeProductName = this.onChangeProductName.bind(this);
    this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
    this.onChangeProductStockBalance = this.onChangeProductStockBalance.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      productName: "",
      productPrice: "",
      productStockBalance: ""
    };
  }

  /*componentDidMount() {
      const product = {
          productName: this.state.productName,
          productPrice: this.state.productPrice,
          productStockBalance: this.state.productStockBalance
      };
      console.log(product);
    UserService.addProduct(product).then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }*/

  onChangeProductName(e) {
    this.setState({
      productName: e.target.value
    });
  }

  onChangeProductPrice(e) {
    this.setState({
        productPrice: e.target.value
    });
  }

  onChangeProductStockBalance(e) {
    this.setState({
        productStockBalance: e.target.value
    });
  }

  handleSubmit(event) {
      event.preventDefault();
      console.log('form submitted and email value is', this.state.productName);
      const product = {
          name: this.state.productName,
          price: this.state.productPrice,
          stockBalance: this.state.productStockBalance
      };
      console.log(product);
      UserService.addProduct(product).then(
          response => {
              this.setState({
                  content: response.data
              });
          },
          error => {
              this.setState({
                  content:
                      (error.response &&
                          error.response.data &&
                          error.response.data.message) ||
                      error.message ||
                      error.toString()
              });
          }
      );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>Добавление товара</h3>
        </header>

        <Form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="productName">Название товара</label>
          <Input
              type="text"
              className="form-control"
              name="productName"
              value={this.state.productName}
              onChange={this.onChangeProductName}
              validations={[required]}
          />
        </div>

          <div className="form-group">
            <label htmlFor="productPrice">Цена товара</label>
            <Input
                type="text"
                className="form-control"
                name="productPrice"
                value={this.state.productPrice}
                onChange={this.onChangeProductPrice}
                validations={[required]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="productStockBalance">Количество товара на складе</label>
            <Input
                type="text"
                className="form-control"
                name="productStockBalance"
                value={this.state.productStockBalance}
                onChange={this.onChangeProductStockBalance}
                validations={[required]}
            />
          </div>

            <button>Добавить</button>
        </Form>
      </div>
    );
  }
}
