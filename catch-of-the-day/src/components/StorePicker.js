import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    constructor() {
        super();
        this.goToStore = this.goToStore.bind(this);
    }

    myInput = React.createRef();

    static propTypes = {
        history: PropTypes.object
    }

    // if you need to access this inside of a custom method, you must
    // use this syntax here or do the constructor binding
    goToStore = event => {
        // 1. Stop the form from submitting
        event.preventDefault();
        // 2. Get the text from the input
        // console.log('this:  ', this);
        // console.log('this.outerHTML:  ', this.myInput.current.outerHTML);
        // console.log('myInput:  ', this.myInput.current.value);

        // 3. Change the page to /store/whatever-they-entered
        const storeName = this.myInput.current.value;
        this.props.history.push(`/store/${storeName}`);
    }

    render() {
        return (
            <React.Fragment>
                <form className="store-selector" onSubmit={this.goToStore}>
                    { /* comment */ }
                    <h2>Please Enter a Store</h2>
                    <input
                        type="text"
                        ref={this.myInput}
                        required
                        placeholder="Store Name"
                        defaultValue={getFunName()}
                    />
                    <button type="submit">Visit Store -></button>
                </form>
            </React.Fragment>
        );
    }
}

export default StorePicker;
