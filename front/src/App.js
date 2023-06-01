import React, {Component, useEffect} from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import FarmerAddProduct from "./components/addProduct.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import Catalog from "./components/catalog.component";
import Bucket from "./components/bucket.component";
import OrdersBoard from "./components/orders.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
      showCatalog: false,
      showOrders: false,
      bucket: false,
      orders: false
    };
  }

  componentDidMount() {
    const account = AuthService.getCurrentUser();

    if (account) {
      this.setState({
        currentUser: account,
        showModeratorBoard: account.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: account.roles.includes("ROLE_ADMIN"),
        showCatalog: account,
        showOrders: account.roles.includes("ROLE_MODERATOR"),
        addProduct: account.roles.includes("ROLE_MODERATOR"),
        bucket: account,
        orders: account.roles.includes("ROLE_MODERATOR")
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard, showCatalog, showOrders, addProduct, bucket } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            ANTIMAD
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Главная страница
              </Link>
            </li>

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {showCatalog && (
                <li className="nav-item">
                  <Link to={"/api/catalog"} className="nav-link">
                    Каталог
                  </Link>
                </li>
            )}

            {addProduct && (
              <li className="nav-item">
                <Link to={"/addProduct"} className="nav-link">
                  Добавить товар
                </Link>
              </li>
            )}

            {bucket && (
                <li className="nav-item">
                  <Link to={"/api/bucket"} className="nav-link">
                    Корзина
                  </Link>
                </li>
            )}

            {bucket && (
                <li className="nav-item">
                  <Link to={"/api/orders"} className="nav-link">
                    Заказы
                  </Link>
                </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  Выйти
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Войти
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Зарегистрироваться
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/api/catalog" component={Catalog} />
            <Route path="/api/bucket" component={Bucket} />
            <Route path="/api/orders" component={OrdersBoard} />
            <Route path="/addProduct" component={FarmerAddProduct} />
            <Route path="/admin" component={BoardAdmin} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
