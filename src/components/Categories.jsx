import React, {Component} from 'react';

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Всё'
                },
                {
                    key: 'gloves',
                    name: 'Боксерские перчатки '
                },
                {
                    key: 'balls',
                    name: 'Футбольные мячи'
                },
                {
                    key: 'rackets',
                    name: 'Теннисные ракетки'
                },

            ],
        }
    }

    render() {
        return (
            <div className='categories'>
                {this.state.categories.map((item, index) => (
                    <div key={item.key} onClick={() => {
                        this.props.chooseCategory(item.key)
                    }}>{item.name}</div>
                ))}
            </div>
        );
    }
}

export default Categories;