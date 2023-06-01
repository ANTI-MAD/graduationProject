import React, { Component } from "react";

import UserService from "../services/user.service";
import OrderItem from "./OrderItem";

export default class OrdersBoard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: "",
            orders: { name: ""},
            ordersReady: false
        };
    }

    componentDidMount() {
        UserService.getOrders().then(
            response => {
                this.setState({
                    content: response.data,
                    orders: response.data,
                    ordersReady: true
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
            <div className="container orders">
            {(this.state.ordersReady) ?
                <div>
                    <div className="Orders">
                        {this.state.orders.map((order) =>
                            <OrderItem order={order}>
                            </OrderItem>
                        )}

                    </div>
                </div> : null}
            </div>
        );
    }
}
