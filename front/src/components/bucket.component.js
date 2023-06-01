import React, { Component } from "react";

import UserService from "../services/user.service";
import Item from "./Item";
import {Redirect} from "react-router-dom";
import Form from "react-validation/build/form";
import BucketItem from "./BucketItem";

export default class Bucket extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: null,
            catalogReady: false,
            catalog: { name: "" }
        };

        this.pressButton = this.pressButton.bind(this);
    }

    componentDidMount() {
        UserService.getBucket().then(
            response => {
                this.setState({
                    content: response.data,
                    catalog: response.data,
                    catalogReady: true
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

    pressButton(event) {
        event.preventDefault();
        console.log(this.state.catalog);
        UserService.createOrder(this.state.catalog).then(
            response => {
                this.setState({
                    content: response.data,
                    catalog: "",
                    catalogReady: false
                });
            })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        console.log(this.state.catalog);

        return (
            <div className="container catalog">
                <label>
                    Сортировка по:
                    <select>
                        <option value="byName">По имени</option>
                        <option value="byPrice">По цене</option>
                    </select>
                </label>
                {(this.state.catalogReady) ?
                    <div>


                            <div className={"product"}>
                                {this.state.catalog.map((bucket) =>
                                    <BucketItem bucket={bucket}>
                                    </BucketItem>
                                )}
                            </div>
                        <button onClick={this.pressButton}>Оформить заказ</button>

                    </div>: null}
            </div>


        );
    }
}
