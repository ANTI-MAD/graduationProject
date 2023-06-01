import React, {Component} from 'react';
import UserService from "../services/user.service";

export class BucketItem extends Component {
    constructor(props) {
        super(props);

        this.pressButton = this.pressButton.bind(this);
    }

    pressButton(event) {
        event.preventDefault();
        UserService.deleteFromBucket(this.props.bucket.id).then(
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
                <h2>Название: {this.props.bucket.product.name}</h2>
                <b>Цена: {this.props.bucket.product.price}</b>
                <p>Продавец: {this.props.bucket.product.account.username}</p>
                <button onClick={this.pressButton}>Убрать из корзины</button>
            </div>
        );
    }
}

export default BucketItem;