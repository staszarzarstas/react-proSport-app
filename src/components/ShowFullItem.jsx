import React, { Component } from 'react';

class ShowFullItem extends Component {
    render() {
        return (
            <div className="full-item" onClick={(e) => {
                // Закрываем карточку при клике на фон
                if (e.target.classList.contains('full-item')) {
                    this.props.onShowItem(null);
                }
            }}>
                <div>
                    {/* Кнопка для закрытия карточки */}
                    <button className="close-btn" onClick={() => this.props.onShowItem(null)}>×</button>
                    <img src={`/react-proSport-app/${this.props.item.img}`} alt={this.props.item.title} />

                    <h2>{this.props.item.title}</h2>
                    <p>{this.props.item.description}</p>
                    <b>{this.props.item.price}₽</b>
                    <div className="add-to-cart" onClick={() => { this.props.onAdd(this.props.item) }}>+</div>
                </div>
            </div>
        );
    }
}

export default ShowFullItem;
