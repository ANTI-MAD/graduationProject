import React, {Component} from 'react';
import { IconButton } from '@mui/material';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import UserService from "../services/user.service";

export class Item extends Component {
    constructor(props) {
        super(props);

        this.pressButton = this.pressButton.bind(this);
    }

    pressButton(event) {
        event.preventDefault();
        console.log(this.props.product);
        UserService.addToBucket(this.props.product.id).then(
            response => {
                this.setState({
                    content: response.data,
                    catalog: response.data,
                    catalogReady: true
                });
            })
    }

    render() {
        return (
            <div className='item'>
                <h2>Название: {this.props.product.name}</h2>
                <b>Цена: {this.props.product.price}</b>
                <p>Количество на складе: {this.props.product.stockBalance}</p>
                <p>Продавец: {this.props.product.account.username}</p>
                <IconButton color="primary" aria-label="add to shopping cart">
                    <ShoppingCartIcon />
                </IconButton>
                <button variant="contained" color="success" onClick={this.pressButton}>В корзину</button>
            </div>
        );
    }
}

export default Item;