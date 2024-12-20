import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <div className="item">
                <img src={`/react-proSport-app/${this.props.item.img}`} alt={this.props.item.title} onClick={() => this.props.onShowItem(this.props.item)} />

                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.description}</p>
                <b>{this.props.item.price}₽</b>
                <div className='add-to-cart' onClick={() => {
                    this.props.onAdd(this.props.item)
                }}>+
                </div>
            </div>
        );
    }
}

export default Item;
