import AuthService from "../services/auth.service";
import UserService from "../services/user.service"
import {Redirect} from "react-router-dom";
import {Component, useState} from "react";
import Form from "react-validation/build/form";
import Item from "./Item";

export default class Catalog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: null,
            catalogReady: false,
            catalog: { name: "" },
            productId: null
        };
    }

    componentDidMount() {
        //const catalog = UserService.getCatalogBoard();
        UserService.getCatalogBoard().then(
            response => {
                this.setState({
                    content: response.data,
                    catalog: response.data,
                    catalogReady: true
                });
            })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        return (
            <div className="container catalog">
                <label>
                    Сортировка по:
                    <select>
                        <option value="byName">имени</option>
                        <option value="byPrice">цене</option>
                    </select>
                </label>
                {(this.state.catalogReady) ?
                    <div>


                        <Form onSubmit={this.pressButton}>
                        <div className={"product"}>
                            {this.state.catalog.map((product) =>
                                <Item product={product}>
                                </Item>
                                )}
                        </div>
                        </Form>

                    </div>: null}
            </div>


        );
    }
}