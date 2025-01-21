import React from 'react';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { render } from "react-dom";
import Items from "./components/Items.jsx";
import Categories from "./components/Categories.jsx";
import ShowFullItem from "./components/ShowFullItem.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css';
import AuthModal from './components/AuthModal.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            currentItems: [],
            currentPage: 'home',  // Состояние для текущей страницы
            items: [
                {
                    id: 1,
                    title: "Бутсы мужские PUMA Ultra 5 Play TT",
                    img: 'cross1.png',
                    description: 'Бутсы PUMA Ultra 5 Play обеспечат тебе ультракомфорт и ультраскорость на поле. Предназначены для полей с жестким покрытием.',
                    category: 'cross',
                    price: '9000',
                },
                {
                    id: 2,
                    title: "Бутсы мужские PUMA King Match IT",
                    img: 'cross2.png',
                    description: 'Королевский подарок! PUMA King — культовые бутсы, в которых выходило на поле не одно поколение футболистов.',
                    category: 'cross',
                    price: '1499',
                },
                {
                    id: 3,
                    title: "Бутсы для мальчиков Demix Goal 2 Jr",
                    img: 'cross3.png',
                    description: 'Сороконожки Goal 2 JR TF подойдут для игры на любой позиции.',
                    category: 'cross',
                    price: '15000',
                },
                {
                    id: 4,
                    title: "Бутсы для мальчиков PUMA Ultra 5 Play TT Jr",
                    img: 'cross4.png',
                    description: 'Бутсы PUMA Ultra 5 Play разработаны специально для амбициозных юных футболистов. Модель подойдет для полей с жестким покрытием.',
                    category: 'cross',
                    price: '2000',
                },
                {
                    id: 5,
                    title: "Перчатки вратарские детские Demix",
                    img: 'perch1.png',
                    description: 'Перчатки вратарские Demix подходят детям и подросткам для тренировок как начального, так и продвинутого уровня.',
                    category: 'perch',
                    price: '2500',
                },
                {
                    id: 6,
                    title: "Перчатки вратарские детские Kappa Forza Grip 2",
                    img: 'perch2.png',
                    description: 'Вратарские перчатки Kappa Forza Grip2 — это надежные тренировочные перчатки для юных вратарей любого уровня.',
                    category: 'perch',
                    price: '2500',
                },
                {
                    id: 7,
                    title: "Мяч футзальный Nike Futsal Pro",
                    img: 'ball-1.png',
                    description: 'Футбольный мяч Nike Futsal PRO — отличный вариант для игр и тренировок в зале.',
                    category: 'balls',
                    price: '5999',
                },
                {
                    id: 8,
                    title: "Мяч футбольный Kappa",
                    img: 'ball-2.png',
                    description: 'Футбольный мяч с оптимальными показателями прочности и упругости подойдет для игры на газоне.',
                    category: 'balls',
                    price: '1799',
                },
                {
                    id: 9,
                    title: "Мяч футбольный PUMA Orbita 3 TB",
                    img: 'ball-3.png',
                    description: 'Мяч PUMA подходит для всех видов профессионального футбола.',
                    category: 'balls',
                    price: '7999',
                },

            ],
            showFullItems: false,
            fullItem: {},
        }
        this.state.currentItems = this.state.items;
        this.addToOrder = this.addToOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
        this.chooseCategory = this.chooseCategory.bind(this);
        this.onShowItem = this.onShowItem.bind(this);
        this.setCurrentPage = this.setCurrentPage.bind(this);  // Обработчик для изменения текущей страницы
    }

    setCurrentPage(page) {
        this.setState({ currentPage: page });
    }

    render() {
        let content;
        if (this.state.currentPage === 'home') {
            content = (
                <>
                    <Categories chooseCategory={this.chooseCategory} />
                    <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
                </>
            );
        } else if (this.state.currentPage === 'about') {
            content = <div>Страница "О нас"</div>;
        }

        return (
            <div className='wrapper'>
                <AuthModal />
                <Header orders={this.state.orders} onDelete={this.deleteOrder} setCurrentPage={this.setCurrentPage} />
                {content}
                <Footer />
            </div>
        );
    }

    onShowItem(item) {
        this.setState({ fullItem: item });
        this.setState({ showFullItems: !this.state.showFullItems });
    }

    chooseCategory(category) {
        if (category === 'all') {
            this.setState({ currentItems: this.state.items });
            return
        }
        this.setState({ currentItems: this.state.items.filter(item => item.category === category) });
    }

    deleteOrder(id) {
        this.setState({ orders: this.state.orders.filter(item => item.id !== id) });
    }

    addToOrder = (item) => {
        let isInArr = false;
        this.state.orders.forEach(el => {
            if (el.id === item.id)
                isInArr = true;
        });
        if (!isInArr)
            this.setState({ orders: [...this.state.orders, item] })
    }
}

export default App;
