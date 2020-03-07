import React from 'react';
import {PropTypes } from 'prop-types';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
    // stop, drop and prop
    // anytime you write this.[something] you should write a propType
    static propTypes = {
        details: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            desc: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number
        }),
        addToOrder: PropTypes.func
    }
    handleClick = () => {
        this.props.addToOrder(this.props.index);
    }
    render() {
        // const image = this.props.details.image;
        // const name = this.props.details.name;
        // use destructuring for variable assigments
        const { image, name, price, desc, status } =  this.props.details;
        const isAvailable = status == 'available';
        return (
            <li className="menu-fish">
                <img src={image} alt={name} />
                <h3 className="fish-name">{name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                {/* this is another option for one-liners instead of a separate functino
                 onClick = {() => this.props.addToOrder(this.props.index)} */}
                <button disabled={!isAvailable} onClick={this.handleClick}>
                    {isAvailable ? 'Add To Cart' : 'Sold Out!'}
                </button>
            </li>
        );
    }
}

export default Fish;