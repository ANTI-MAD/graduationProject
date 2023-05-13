import AuthService from "../services/auth.service";
import UserService from "../services/user.service"
import {Redirect} from "react-router-dom";
import {Component, useState} from "react";

export default class Catalog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: null,
            catalogReady: false,
            catalog: { name: "" }
        };
    }

    componentDidMount() {
        const catalog = UserService.getCatalogBoard();

        this.setState({ catalog: catalog, catalogReady: true })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        const { catalog } = this.state;

        return (
            <div className="container">
                {(this.state.catalogReady) ?
                    <div>
                        <p3>
                            <strong>Название   </strong>
                            <strong>     Цена        Количество на складе</strong>
                        </p3>

                        <div>
                            Редис 2.0 30
                            <button>Заказать</button>
                        </div>

                        <div>
                            Лук 6.5 80
                            <button>Заказать</button>
                        </div>

                        <div>
                            Укроп 6.5 120
                            <button>Заказать</button>
                        </div>

                        <div>
                            Петрушка 6.0 50
                            <button>Заказать</button>
                        </div>

                        <div>
                            Помидор 3.0 410
                            <button>Заказать</button>
                        </div>

                    </div>: null}
            </div>


        );
    }
}