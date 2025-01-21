import React, { useEffect, useRef, useState } from "react";
import "../index.css";
import { FaShoppingBag } from "react-icons/fa";
import Order from "./Order.jsx";

const showOrders = (props) => {
    const summa = props.orders.reduce((acc, el) => acc + +el.price, 0);

    return (
        <div>
            {props.orders.map((el) => (
                <Order onDelete={props.onDelete} key={el.id} item={el} />
            ))}
            <p className="summa">Сумма: {new Intl.NumberFormat().format(summa)}₽</p>
        </div>
    );
};

const showNothing = () => {
    return (
        <div className="empty">
            <h2>Ваша корзина пуста</h2>
        </div>
    );
};

const Header = (props) => {
    const [cart, setCart] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const cartRef = useRef(null);

    const handleClickOutside = (event) => {
        if (cartRef.current && !cartRef.current.contains(event.target)) {
            setCart(false);
        }
    };

    useEffect(() => {
        if (cart) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [cart]);

    return (
        <header>
            <div className="header-container">
                <span className="logo">React-ProSport</span>
                <button
                    className={`burger-menu ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
                <ul className={`nav ${menuOpen ? "open" : ""}`}>
                    <li>Товары</li>
                    <li>Кабинет</li>
                    <li>Контакты</li>
                    <li
                        onClick={() => props.setCurrentPage('about')}  // При клике на "О нас" меняем страницу
                    >
                        О нас
                    </li>
                </ul>
                <FaShoppingBag
                    onClick={() => setCart(!cart)}
                    className={`shop-cart-button ${cart ? "active" : ""}`}
                />
                {cart && (
                    <div className="shop-cart" ref={cartRef}>
                        {props.orders.length > 0 ? showOrders(props) : showNothing()}
                    </div>
                )}
            </div>
            <div className="presentation"></div>
        </header>
    );
};

export default Header;
