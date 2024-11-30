import React from 'react';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import {render} from "react-dom";
import Items from "./components/Items.jsx";
import Categories from "./components/Categories.jsx";
import BrandSide from "./components/BrandSide.jsx";
import ShowFullItem from "./components/ShowFullItem.jsx";


class App
    extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            currentItems: [],
            items: [
                {
                    id: 1,
                    title: "Перчатки боксерские Protex2 GEL PU",
                    img: 'gloves.png',
                    description: 'Изготовлены из высокопрочной искусственной кожи',
                    category: 'gloves',
                    price: '9000',
                },
                {
                    id: 2,
                    title: "Перчатки боксерские Clinch Mist С143",
                    img: 'box2.png',
                    description: 'Из 100% полиуретана.внутренний наполнитель пена высокого давления, колодка по стандартам любительского бокса.',
                    category: 'gloves',
                    price: '1499',
                },
                {
                    id: 3,
                    title: "Перчатки бокс. PRO-GB кожзам 0066",
                    img: 'box3.png',
                    description: 'Изготовлены эластичного полиуретана Flex PU матового цвета.',
                    category: 'gloves',
                    price: '15000',
                },
                {
                    id: 4,
                    title: "Перчатки боксерские Speed Tilt 150 SPD150TG",
                    img: 'box4.png',
                    description: 'Материал: синтетика',
                    category: 'gloves',
                    price: '2000',
                },
                {
                    id: 5,
                    title: "Перчатки бокс. BoyBo B-Series BBG400 Флекс",
                    img: 'box5.png',
                    description: 'Изготовлены из высокопрочной искусственной кожи',
                    category: 'gloves',
                    price: '2500',
                },
                {
                    id: 6,
                    title: "Перчатки боксерские Ultima Competition BC02",
                    img: 'box6.png',
                    description: 'Изготовлены из  натуральной кожи буйвола',
                    category: 'gloves',
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
                {
                    id: 10,
                    title: "Ракетка для большого тенниса Head Ti. Instinct Comp (MM TRADE) 27",
                    img: 'raket-1.png',
                    description: 'Ракетка для большого тенниса Head Ti.Instinct Comp отлично подойдет мужчинам, которые хотят попробовать себя в данном виде спорта.',
                    category: 'rackets',
                    price: '5999',
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
    }

    render() {
        return (
            <div className='wrapper'>
                <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
                <Categories chooseCategory={this.chooseCategory}/>
                <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
                {this.state.showFullItems &&
                    <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
                <Footer/>
                {/*<BrandSide/>*/}
            </div>
        )
    }

    onShowItem(item) {
        this.setState({fullItem: item});
        this.setState({showFullItems: !this.state.showFullItems});
    }

    chooseCategory(category) {
        if (category === 'all') {
            this.setState({currentItems: this.state.items});
            return
        }
        this.setState({currentItems: this.state.items.filter(item => item.category === category)});
    }

    deleteOrder(id) {
        this.setState({orders: this.state.orders.filter(item => item.id !== id)});
    }

    addToOrder = (item) => {
        let isInArr = false;
        this.state.orders.forEach(el => {
            if (el.id === item.id)
                isInArr = true;
        });
        if (!isInArr)
            this.setState({orders: [...this.state.orders, item]})
    }
}

export default App
