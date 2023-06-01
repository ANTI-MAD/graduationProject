import React, {Component} from 'react';
import { IconButton } from '@mui/material';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import UserService from "../services/user.service";

export class OrderItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.order);
        return (
            <div className='orderItem'>
                {this.props.order.products.map((product) =>
                    <div>
                        <p>Название: {product.name}</p>
                        <p>Цена: {product.price}</p>
                    </div>
                )}
                <p>Покупатель: {this.props.order.seller.username}</p>
                <button>Подтвердить</button>
                <button>Отклонить</button>
            </div>
        );
    }
}

export default OrderItem;