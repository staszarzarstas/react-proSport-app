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
                    key: 'cross',
                    name: 'Футбольные бутсы '
                },
                {
                    key: 'balls',
                    name: 'Футбольные мячи'
                },
                {
                    key: 'perch',
                    name: 'Футбольные перчатки'
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